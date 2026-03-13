/* ============================================
   ZONE TOTAL SPORT — Générateur de SAÉ
   Logique principale
   ============================================ */

// ============ ÉTAT GLOBAL ============
let allSAE = [];
let filteredSAE = [];
let currentSAE = null;

// ============ INDEX DES FICHIERS DE DONNÉES ============
// Chaque fichier correspond à un groupe de moyens d'action
const DATA_FILES = [
  'data/locomotion.json',
  'data/manipulation.json',
  'data/non_locomotion.json',
  'data/sports_collectifs.json',
  'data/plein_air.json',
  'data/expression_artistique.json',
  'data/adresse_individuel.json',
  'data/expression_corporelle.json',
  'data/poursuite.json',
  'data/duel.json',
  'data/conditionnement.json',
];

// ============ CHARGEMENT DES DONNÉES ============
async function loadAllData() {
  const results = await Promise.allSettled(
    DATA_FILES.map(file =>
      fetch(file)
        .then(r => r.ok ? r.json() : null)
        .catch(() => null)
    )
  );

  allSAE = [];
  results.forEach(result => {
    if (result.status === 'fulfilled' && result.value) {
      const data = result.value;
      if (data.sae && Array.isArray(data.sae)) {
        allSAE = allSAE.concat(data.sae);
      }
    }
  });

  console.log(`✅ ${allSAE.length} SAÉ chargées`);
}

// ============ RECHERCHE ============
async function searchSAE() {
  if (allSAE.length === 0) {
    await loadAllData();
  }

  const moyen = document.getElementById('filter-moyen').value.toLowerCase();
  const cycle = document.getElementById('filter-cycle').value.toLowerCase();
  const clientele = document.getElementById('filter-clientele').value.toLowerCase();
  const duree = document.getElementById('filter-duree').value;
  const espace = document.getElementById('filter-espace').value.toLowerCase();

  filteredSAE = allSAE.filter(sae => {
    // Filtre moyen d'action
    if (moyen) {
      const moyenText = (sae.moyen_action || '').toLowerCase();
      const tags = (sae.tags || []).join(' ').toLowerCase();
      const domaine = (sae.domaine || sae.sous_domaine || '').toLowerCase();
      if (!moyenText.includes(moyen) && !tags.includes(moyen) && !domaine.includes(moyen)) return false;
    }

    // Filtre cycle
    if (cycle) {
      const saeCycle = (sae.cycle || '').toLowerCase();
      const saeNiveau = (sae.niveau || '').toLowerCase();
      if (!saeCycle.includes(cycle.replace(/-/g, ' ')) && !saeNiveau.includes(cycle.replace(/-/g, ' '))) {
        // Essai avec mapping
        const cycleMap = {
          'maternelle': ['préscolaire', 'maternelle', 'mat'],
          '1er-cycle-primaire': ['1er cycle primaire', 'p1', 'p2', 'primaire 1', 'primaire 2'],
          '2e-cycle-primaire': ['2e cycle primaire', 'p3', 'p4', 'primaire 3', 'primaire 4'],
          '3e-cycle-primaire': ['3e cycle primaire', 'p5', 'p6', 'primaire 5', 'primaire 6'],
          '1er-cycle-secondaire': ['1er cycle secondaire', 's1', 's2', 'secondaire 1', 'secondaire 2'],
          '2e-cycle-secondaire': ['2e cycle secondaire', 's3', 's4', 's5', 'secondaire avancé']
        };
        const keywords = cycleMap[cycle] || [];
        const match = keywords.some(kw => saeCycle.includes(kw) || saeNiveau.includes(kw));
        if (!match) return false;
      }
    }

    // Filtre clientèle
    if (clientele && clientele !== 'general') {
      const hdaa = (sae.adaptation_hdaa || '').toLowerCase();
      const tags = (sae.tags || []).join(' ').toLowerCase();
      const clienteleMap = {
        'tsa': ['tsa', 'autisme', 'spectre'],
        'handicap-physique': ['handicap', 'physique', 'moteur', 'fauteuil', 'mobilité réduite'],
        'deficience': ['déficience', 'intellectuelle', 'di']
      };
      const keywords = clienteleMap[clientele] || [clientele];
      if (!keywords.some(kw => hdaa.includes(kw) || tags.includes(kw))) return false;
    }

    // Filtre durée
    if (duree) {
      const nbPeriodes = parseInt(sae.duree_periodes) || 1;
      if (duree === '1' && nbPeriodes !== 1) return false;
      if (duree === '2-3' && (nbPeriodes < 2 || nbPeriodes > 3)) return false;
      if (duree === '4-6' && (nbPeriodes < 4 || nbPeriodes > 6)) return false;
      if (duree === '7+' && nbPeriodes < 7) return false;
    }

    // Filtre espace
    if (espace) {
      const mat = JSON.stringify(sae).toLowerCase();
      const espaceMap = {
        'gymnase': ['gymnase', 'salle'],
        'exterieur': ['extérieur', 'exterieur', 'dehors', 'cour'],
        'classe': ['classe', 'salle de classe'],
        'nature': ['nature', 'plein air', 'parc', 'forêt']
      };
      const keywords = espaceMap[espace] || [espace];
      if (!keywords.some(kw => mat.includes(kw))) return false;
    }

    return true;
  });

  renderResults(filteredSAE);
}

// ============ RENDU DES RÉSULTATS ============
function renderResults(saes) {
  const grid = document.getElementById('results-grid');
  const meta = document.getElementById('results-meta');
  const empty = document.getElementById('empty-state');
  const count = document.getElementById('results-count');

  if (saes.length === 0) {
    grid.innerHTML = '';
    meta.style.display = 'none';
    empty.innerHTML = `
      <div class="empty-icon">🔍</div>
      <h3>Aucune SAÉ trouvée</h3>
      <p>Essaie de modifier tes filtres pour obtenir des résultats.</p>
    `;
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  meta.style.display = 'flex';
  count.textContent = `${saes.length} SAÉ trouvée${saes.length > 1 ? 's' : ''}`;

  grid.innerHTML = saes.map((sae, index) => renderCard(sae, index)).join('');
}

function renderCard(sae, index) {
  const tags = (sae.tags || []).slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('');
  const hdaaTag = sae.adaptation_hdaa
    ? `<span class="tag tag-hdaa">♿ HDAA</span>`
    : '';

  return `
    <div class="sae-card" onclick="openModal(${index})">
      <div class="sae-card-header">
        <span class="sae-id">${sae.id || 'SAÉ'}</span>
        <span class="sae-cycle-badge">${sae.cycle || sae.niveau || ''}</span>
      </div>
      <h3 class="sae-title">${sae.titre || 'Sans titre'}</h3>
      <div class="sae-moyen">⚡ ${sae.moyen_action || sae.sous_domaine || ''}</div>
      <p class="sae-description">${sae.description || ''}</p>
      <div class="sae-card-meta">
        <span class="sae-meta-item">📅 ${sae.duree_periodes || 1} période${sae.duree_periodes > 1 ? 's' : ''}</span>
        <span class="sae-meta-item">⏱ ${sae.duree_par_periode || '60 min'}</span>
      </div>
      <div class="sae-card-footer">
        ${tags}
        ${hdaaTag}
      </div>
    </div>
  `;
}

// ============ MODAL ============
function openModal(index) {
  currentSAE = filteredSAE[index];
  if (!currentSAE) return;

  document.getElementById('modal-content').innerHTML = renderFullSAE(currentSAE);
  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Fermer modal avec Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

function renderFullSAE(sae) {
  // Progression
  const progressionHTML = sae.progression && sae.progression.length > 0
    ? `<table class="progression-table">
        <thead>
          <tr>
            <th>Phase</th>
            <th>Durée</th>
            <th>Activité</th>
            <th>Rôle de l'enseignant·e</th>
          </tr>
        </thead>
        <tbody>
          ${sae.progression.map(p => `
            <tr>
              <td><strong>${p.phase || p.titre || ''}</strong></td>
              <td>${p.duree || ''}</td>
              <td>${p.activite || ''}</td>
              <td>${p.role_enseignant || ''}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>`
    : '<p>Aucune progression définie.</p>';

  // Critères
  const criteresHTML = Array.isArray(sae.criteres_evaluation)
    ? `<ul>${sae.criteres_evaluation.map(c => `<li>${c}</li>`).join('')}</ul>`
    : `<p>${sae.criteres_evaluation || ''}</p>`;

  // Savoirs
  const savoirsHTML = Array.isArray(sae.savoirs_essentiels)
    ? `<ul>${sae.savoirs_essentiels.map(s => `<li>${s}</li>`).join('')}</ul>`
    : `<p>${sae.savoirs_essentiels || ''}</p>`;

  // Matériel
  const materielHTML = Array.isArray(sae.materiel)
    ? `<ul>${sae.materiel.map(m => `<li>${m}</li>`).join('')}</ul>`
    : `<p>${sae.materiel || ''}</p>`;

  // Tags
  const tagsHTML = (sae.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

  return `
    <h2 class="sae-full-title">${sae.titre || 'Sans titre'}</h2>
    <div class="sae-full-meta">
      <span class="badge badge-cycle">📚 ${sae.cycle || ''} — ${sae.niveau || ''}</span>
      <span class="badge badge-moyen">⚡ ${sae.moyen_action || sae.sous_domaine || ''}</span>
      <span class="badge badge-duree">📅 ${sae.duree_periodes || 1} période(s) × ${sae.duree_par_periode || '60 min'}</span>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Description</div>
      <p>${sae.description || ''}</p>
    </div>

    ${sae.contexte_apprentissage ? `
    <div class="modal-section">
      <div class="modal-section-title">Contexte d'apprentissage</div>
      <p>${sae.contexte_apprentissage}</p>
    </div>` : ''}

    ${sae.tache_complexe ? `
    <div class="modal-section">
      <div class="modal-section-title">Tâche complexe</div>
      <p><strong>${sae.tache_complexe}</strong></p>
    </div>` : ''}

    <div class="modal-section">
      <div class="modal-section-title">Progression pédagogique</div>
      ${progressionHTML}
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Critères d'évaluation</div>
      ${criteresHTML}
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Savoirs essentiels</div>
      ${savoirsHTML}
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Matériel requis</div>
      ${materielHTML}
    </div>

    ${sae.adaptation_hdaa ? `
    <div class="modal-section">
      <div class="modal-section-title">Adaptations HDAA</div>
      <div class="hdaa-box">
        <strong>♿ Adaptations pour élèves HDAA :</strong><br>
        ${sae.adaptation_hdaa}
      </div>
    </div>` : ''}

    ${sae.enrichissement ? `
    <div class="modal-section">
      <div class="modal-section-title">Enrichissement</div>
      <div class="enrichissement-box">
        <strong>⭐ Pour aller plus loin :</strong><br>
        ${sae.enrichissement}
      </div>
    </div>` : ''}

    ${sae.origine_mondiale ? `
    <div class="modal-section">
      <div class="modal-section-title">Contexte culturel / Origine</div>
      <p>🌍 ${sae.origine_mondiale}</p>
    </div>` : ''}

    ${tagsHTML ? `
    <div class="modal-section">
      <div class="modal-section-title">Tags</div>
      <div class="tags-list">${tagsHTML}</div>
    </div>` : ''}
  `;
}

// ============ IMPRESSION PDF ============
function printSAE() {
  window.print();
}

function exportAll() {
  alert(`Export de ${filteredSAE.length} SAÉ — Fonctionnalité en cours de développement.`);
}

// ============ SAÉ ALÉATOIRE ============
async function randomSAE() {
  if (allSAE.length === 0) await loadAllData();
  if (allSAE.length === 0) return;

  filteredSAE = allSAE;
  const randomIndex = Math.floor(Math.random() * allSAE.length);
  renderResults(allSAE);
  openModal(randomIndex);
}

// ============ RÉINITIALISER ============
function resetFilters() {
  document.getElementById('filter-moyen').value = '';
  document.getElementById('filter-cycle').value = '';
  document.getElementById('filter-clientele').value = '';
  document.getElementById('filter-duree').value = '';
  document.getElementById('filter-espace').value = '';
  document.getElementById('filter-materiel').value = '';

  document.getElementById('results-grid').innerHTML = '';
  document.getElementById('results-meta').style.display = 'none';
  document.getElementById('empty-state').innerHTML = `
    <div class="empty-icon">🏃</div>
    <h3>Prêt à générer ta SAÉ ?</h3>
    <p>Sélectionne tes critères et clique sur <strong>Trouver des SAÉ</strong>.</p>
  `;
  document.getElementById('empty-state').style.display = 'block';
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  // Précharger les données en arrière-plan
  loadAllData();
});
