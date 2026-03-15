// ============================================================
//  ZONE TOTAL SPORT — APPLICATION PRINCIPALE
//  Pop Art · Bangers Font · Cyan + Jaune + Noir
//  TRILINGUE : FR · EN · ES
// ============================================================

// ============================================================
//  SYSTÈME TRILINGUE
// ============================================================
const LANG = { current: 'fr' };

const I18N = {
  // --- Loading ---
  loading:          { fr: 'CHARGEMENT EN COURS...', en: 'LOADING...', es: 'CARGANDO...' },
  siteSubtitle:     { fr: 'RÉFÉRENCE MONDIALE EN ÉPS · QUÉBEC', en: 'WORLD PE REFERENCE · QUÉBEC', es: 'REFERENCIA MUNDIAL EN EF · QUÉBEC' },
  statJeux:         { fr: 'JEUX', en: 'GAMES', es: 'JUEGOS' },
  statSae:          { fr: 'SAÉ', en: 'LSA', es: 'SEA' },
  statPays:         { fr: 'PAYS', en: 'COUNTRIES', es: 'PAÍSES' },
  // --- Tabs ---
  tabJeux:          { fr: '🎮 JEUX SPORTIFS', en: '🎮 SPORT GAMES', es: '🎮 JUEGOS DEPORTIVOS' },
  tabSae:           { fr: '📚 SAÉ PFEQ', en: '📚 LSA PFEQ', es: '📚 SEA PFEQ' },
  tabEducatifs:     { fr: '🏋️ ÉDUCATIFS', en: '🏋️ DRILLS', es: '🏋️ EDUCATIVOS' },
  tabMusique:       { fr: '🎵 MUSIQUES LIBRES', en: '🎵 FREE MUSIC', es: '🎵 MÚSICA LIBRE' },
  // --- Hero sections ---
  heroJeuxTitle:    { fr: 'BANQUE DE JEUX SPORTIFS MONDIAUX', en: 'WORLD SPORTS GAME BANK', es: 'BANCO MUNDIAL DE JUEGOS DEPORTIVOS' },
  heroJeuxSub:      { fr: 'Tous les jeux de partout sur la planète · Référence mondiale', en: 'Every game from around the world · World reference', es: 'Todos los juegos del planeta · Referencia mundial' },
  heroSaeTitle:     { fr: 'BANQUE DE SAÉ PFEQ', en: 'LSA LEARNING & ASSESSMENT BANK', es: 'BANCO SEA PFEQ' },
  heroSaeSub:       { fr: 'Situations d\'Apprentissage et d\'Évaluation · Maternelle → Secondaire 5', en: 'Learning and Assessment Situations · Kindergarten → Grade 11', es: 'Situaciones de Aprendizaje y Evaluación · Preescolar → Secundaria 5' },
  heroEduTitle:     { fr: 'BANQUE D\'ÉDUCATIFS PAR MOYENS D\'ACTION', en: 'DRILLS BY ACTION MEANS', es: 'BANCO DE EDUCATIVOS POR MEDIOS DE ACCIÓN' },
  heroEduSub:       { fr: '100+ éducatifs par geste moteur · Maternelle → Secondaire 5', en: '100+ drills per motor skill · Kindergarten → Grade 11', es: '100+ educativos por habilidad motriz · Preescolar → Secundaria 5' },
  heroMusiqueTitle: { fr: 'BIBLIOTHÈQUE MUSICALE LIBRE DE DROITS', en: 'ROYALTY-FREE MUSIC LIBRARY', es: 'BIBLIOTECA MUSICAL LIBRE DE DERECHOS' },
  heroMusiqueSub:   { fr: 'Toutes les ressources musicales pour l\'ÉPS · Guide pédagogique complet', en: 'All PE music resources · Complete pedagogical guide', es: 'Todos los recursos musicales para EF · Guía pedagógica completa' },
  // --- Filters ---
  allCategories:    { fr: 'Toutes les catégories', en: 'All categories', es: 'Todas las categorías' },
  allLevels:        { fr: 'Tous les niveaux', en: 'All levels', es: 'Todos los niveles' },
  allSpaces:        { fr: 'Tous les espaces', en: 'All spaces', es: 'Todos los espacios' },
  allIntensities:   { fr: 'Toutes les intensités', en: 'All intensities', es: 'Todas las intensidades' },
  allCycles:        { fr: 'Tous les cycles', en: 'All cycles', es: 'Todos los ciclos' },
  allMoyens:        { fr: 'Tous les moyens d\'action', en: 'All action means', es: 'Todos los medios de acción' },
  allCompetences:   { fr: 'Toutes les compétences PFEQ', en: 'All PFEQ competencies', es: 'Todas las competencias PFEQ' },
  searchJeux:       { fr: '🔍 Rechercher un jeu...', en: '🔍 Search a game...', es: '🔍 Buscar un juego...' },
  searchSae:        { fr: '🔍 Rechercher une SAÉ...', en: '🔍 Search a LSA...', es: '🔍 Buscar una SEA...' },
  searchEdu:        { fr: '🔍 Rechercher un éducatif...', en: '🔍 Search a drill...', es: '🔍 Buscar un educativo...' },
  // --- Cards ---
  seeGame:          { fr: '👉 VOIR LE JEU', en: '👉 SEE THE GAME', es: '👉 VER EL JUEGO' },
  seeSae:           { fr: '👉 VOIR LA SAÉ', en: '👉 SEE THE LSA', es: '👉 VER LA SEA' },
  seeDrill:         { fr: '👉 VOIR L\'ÉDUCATIF', en: '👉 SEE THE DRILL', es: '👉 VER EL EDUCATIVO' },
  close:            { fr: '✕ FERMER', en: '✕ CLOSE', es: '✕ CERRAR' },
  back:             { fr: '← Retour', en: '← Back', es: '← Volver' },
  // --- Modal labels ---
  niveau:           { fr: 'NIVEAU', en: 'LEVEL', es: 'NIVEL' },
  duree:            { fr: 'DURÉE', en: 'DURATION', es: 'DURACIÓN' },
  joueurs:          { fr: 'JOUEURS', en: 'PLAYERS', es: 'JUGADORES' },
  espace:           { fr: 'ESPACE', en: 'SPACE', es: 'ESPACIO' },
  materiel:         { fr: 'MATÉRIEL', en: 'EQUIPMENT', es: 'MATERIAL' },
  cycle:            { fr: 'CYCLE', en: 'CYCLE', es: 'CICLO' },
  moyenAction:      { fr: 'MOYEN D\'ACTION', en: 'ACTION MEAN', es: 'MEDIO DE ACCIÓN' },
  difficulte:       { fr: 'DIFFICULTÉ', en: 'DIFFICULTY', es: 'DIFICULTAD' },
  // --- Moyens d'action browser ---
  moyensTitle:      { fr: '⚡ FILTRER PAR MOYEN D\'ACTION', en: '⚡ FILTER BY ACTION MEAN', es: '⚡ FILTRAR POR MEDIO DE ACCIÓN' },
  // --- Éducatifs taxonomy ---
  eduTaxTitle:      { fr: 'CHOISIR UN MOYEN D\'ACTION', en: 'CHOOSE AN ACTION MEAN', es: 'ELEGIR UN MEDIO DE ACCIÓN' },
  noResults:        { fr: '🔍 AUCUN RÉSULTAT', en: '🔍 NO RESULTS', es: '🔍 SIN RESULTADOS' },
};

function t(key) {
  const entry = I18N[key];
  if (!entry) return key;
  return entry[LANG.current] || entry.fr;
}

function setLang(lang) {
  LANG.current = lang;
  document.getElementById('htmlRoot').lang = lang;
  document.getElementById('btnFR').classList.toggle('active', lang === 'fr');
  document.getElementById('btnEN').classList.toggle('active', lang === 'en');
  document.getElementById('btnES').classList.toggle('active', lang === 'es');
  applyI18N();
  renderJeux();
  renderSAE();
  renderMoyensBrowser();
  renderEduTaxonomy();
  renderMusique();
}

function applyI18N() {
  // Static UI text
  document.getElementById('loadingMsg').textContent    = t('loading');
  document.getElementById('siteSubtitle').textContent  = t('siteSubtitle');
  document.getElementById('statLabelJeux').textContent = t('statJeux');
  document.getElementById('statLabelSae').textContent  = t('statSae');
  document.getElementById('statLabelPays').textContent = t('statPays');
  document.getElementById('tabJeux').textContent       = t('tabJeux');
  document.getElementById('tabSae').textContent        = t('tabSae');
  document.getElementById('tabEducatifs').textContent  = t('tabEducatifs');
  document.getElementById('tabMusique').textContent    = t('tabMusique');
  document.getElementById('heroJeuxTitle').textContent = t('heroJeuxTitle');
  document.getElementById('heroJeuxSub').textContent   = t('heroJeuxSub');
  document.getElementById('heroSaeTitle').textContent  = t('heroSaeTitle');
  document.getElementById('heroSaeSub').textContent    = t('heroSaeSub');
  document.getElementById('heroEducatifsTitle').textContent = t('heroEduTitle');
  document.getElementById('heroEducatifsSub').textContent   = t('heroEduSub');
  document.getElementById('heroMusiqueTitle').textContent   = t('heroMusiqueTitle');
  document.getElementById('heroMusiqueSub').textContent     = t('heroMusiqueSub');
  document.getElementById('moyensTitle').textContent   = t('moyensTitle');
  document.getElementById('jeux-search').placeholder   = t('searchJeux');
  document.getElementById('sae-search').placeholder    = t('searchSae');
  document.getElementById('edu-search').placeholder    = t('searchEdu');
  document.getElementById('eduBackLabel').textContent  = t('back').replace('← ', '');
}

// ============================================================
//  TAXONOMIE COMPLÈTE DES MOYENS D'ACTION
// ============================================================
const MOYENS_ACTION = [
  // ────── MANIPULATION D'OBJETS ──────
  {
    categorie: { fr: 'Manipulation d\'objets', en: 'Object Manipulation', es: 'Manipulación de objetos' },
    icon: '🎯', color: '#CC0000',
    items: [
      { id: 'balle',    icon: '⚾', color: '#FF4444', fr: 'Balles',             en: 'Balls',              es: 'Pelotas',
        gestes_fr: ['Lancer par-dessus l\'épaule','Lancer en dessous','Attraper à deux mains','Attraper à une main','Faire rebondir','Rouler','Lancer avec précision','Attraper en mouvement'] },
      { id: 'ballon',   icon: '⚽', color: '#E17055', fr: 'Ballons',            en: 'Sport Balls',        es: 'Balones',
        gestes_fr: ['Passe à deux mains','Passe à une main','Tir au but','Service','Botter','Contrôle de balle','Dribble pied','Jongler avec le pied'] },
      { id: 'raquette', icon: '🏸', color: '#2980B9', fr: 'Raquettes',          en: 'Rackets',            es: 'Raquetas',
        gestes_fr: ['Frapper au-dessus de la tête','Coup droit','Revers','Amorti','Service badminton','Lob','Smash','Frappe en mouvement'] },
      { id: 'baton',    icon: '🏒', color: '#8E44AD', fr: 'Bâtons',             en: 'Sticks',             es: 'Bastones',
        gestes_fr: ['Passe au bâton','Tir au bâton','Dribble au bâton','Réception bâton','Lancer avec lacrosse','Conduite de rondelle','Protection de balle','Tir en mouvement'] },
      { id: 'corde',    icon: '🪢', color: '#6C5CE7', fr: 'Cordes',             en: 'Jump Ropes',         es: 'Cuerdas',
        gestes_fr: ['Sauter à la corde seul','Entrer dans la corde en mouvement','Double Dutch','Longue corde à deux','Tourner la corde','Sauts variés (pieds joints, alternés)','Sauter en équipe','Corde rythmique'] },
      { id: 'cerceau',  icon: '⭕', color: '#00B894', fr: 'Cerceaux',            en: 'Hoops',              es: 'Aros',
        gestes_fr: ['Hula hoop debout','Hula hoop assis','Rouler le cerceau','Lancer le cerceau','Sauter dans les cerceaux','Faire tourner sur bras','Cerceau sur sol (cibles)','Parcours de cerceaux'] },
      { id: 'frisbee',  icon: '🥏', color: '#00CEC9', fr: 'Frisbee',            en: 'Frisbee',            es: 'Frisbee',
        gestes_fr: ['Lancer revers','Lancer coup droit','Attraper frisbee','Lancer avec courbe','Lancer en plongée','Lancer avec précision (cibles)','Attraper en mouvement','Frisbee golf'] },
      { id: 'cirque',   icon: '🎪', color: '#FDCB6E', fr: 'Articles de cirque', en: 'Circus Arts',        es: 'Artes de circo',
        gestes_fr: ['Jongler 1 balle','Jongler 2 balles','Jongler 3 balles','Diabolo initiation','Assiette chinoise','Bâton du diable','Équilibre objets','Balle au contact'] },
      { id: 'foulard',  icon: '🎀', color: '#E84393', fr: 'Foulards et rubans', en: 'Scarves & Ribbons',  es: 'Pañuelos y cintas',
        gestes_fr: ['Agiter le foulard','Lancer et attraper foulard','Danse avec ruban','Foulard en air','Jeu de flag','Attraper le foulard adverse','Danse collective foulards','Expression foulard'] },
    ]
  },
  // ────── LOCOMOTION ──────
  {
    categorie: { fr: 'Locomotion', en: 'Locomotion', es: 'Locomoción' },
    icon: '🏃', color: '#00B0A0',
    items: [
      { id: 'courir',   icon: '🏃', color: '#00CEC9', fr: 'Courir',             en: 'Running',            es: 'Correr',
        gestes_fr: ['Sprint (départ arrêté)','Sprint (départ lancé)','Course d\'endurance','Course en slalom','Course en navette (shuttle)','Course avec changement de direction','Relais','Fartlek'] },
      { id: 'sauter',   icon: '🦘', color: '#F39C12', fr: 'Sauter',             en: 'Jumping',            es: 'Saltar',
        gestes_fr: ['Saut à pieds joints','Saut sur un pied','Saut en longueur','Saut en hauteur','Saut à la corde','Sauts combinés (triple)','Saut de côté','Sauter par-dessus obstacle'] },
      { id: 'ramper',   icon: '🐛', color: '#27AE60', fr: 'Ramper et rouler',   en: 'Crawling & Rolling', es: 'Gatear y rodar',
        gestes_fr: ['Roulade avant','Roulade arrière','Ramper sur le ventre','Ramper sur le dos','Rouler de côté','Rouler sur banc suédois','Se déplacer au sol','Course à quatre pattes'] },
      { id: 'grimper',  icon: '🧗', color: '#D63031', fr: 'Grimper',            en: 'Climbing',           es: 'Trepar',
        gestes_fr: ['Grimper corde lisse','Grimper corde à nœuds','Grimper mur d\'escalade','Grimper cage à barreaux','Traversée latérale','Grimper et descendre','Grimper avec les pieds','Traversée horizontale'] },
      { id: 'esquiver', icon: '💨', color: '#0984E3', fr: 'Esquiver et changer direction', en: 'Dodging', es: 'Esquivar',
        gestes_fr: ['Changement de direction gauche/droite','Feinte de corps','Esquive d\'un projectile','Virage en courant','Stop and go','Déplacement latéral','Reculer rapidement','Zigzag sous obstacles'] },
    ]
  },
  // ────── STABILISATION & MOBILITÉ ──────
  {
    categorie: { fr: 'Stabilisation et mobilité', en: 'Stability & Mobility', es: 'Estabilización y movilidad' },
    icon: '⚖️', color: '#6C5CE7',
    items: [
      { id: 'equilibre',    icon: '⚖️', color: '#6C5CE7', fr: 'Équilibre',           en: 'Balance',          es: 'Equilibrio',
        gestes_fr: ['Équilibre sur un pied (statique)','Équilibre sur pointes','Équilibre en déplacement','Marcher sur poutre','Équilibre sur objets instables','Position de yoga','Équilibre yeux fermés','Équilibre avec partenaire'] },
      { id: 'souplesse',    icon: '🤸', color: '#FD79A8', fr: 'Souplesse et flexibilité', en: 'Flexibility',   es: 'Flexibilidad',
        gestes_fr: ['Étirement ischio-jambiers','Grand écart (travail progressif)','Pont','Rotation du tronc','Flexion latérale','Étirement épaules','Souplesse cervicale','Yoga postures'] },
      { id: 'gainage',      icon: '💪', color: '#E17055', fr: 'Gainage et force',     en: 'Core & Strength',  es: 'Fuerza y core',
        gestes_fr: ['Planche (plank)','Pompes adaptées','Abdominaux','Gainage latéral','Superman','Squat','Fentes','Gainage dynamique'] },
      { id: 'coordination', icon: '🎯', color: '#FDCB6E', fr: 'Coordination et rythme', en: 'Coordination',  es: 'Coordinación',
        gestes_fr: ['Coordination œil-main','Coordination pied-main','Frappe rythmique','Séquence de mouvements','Coordination bilatérale','Suivre le rythme','Échelles de coordination','Sauter en rythme'] },
    ]
  },
  // ────── OPPOSITION ──────
  {
    categorie: { fr: 'Opposition', en: 'Opposition', es: 'Oposición' },
    icon: '⚔️', color: '#D63031',
    items: [
      { id: 'lutte',     icon: '🤼', color: '#CC0000', fr: 'Lutte et contact',    en: 'Wrestling & Contact', es: 'Lucha y contacto',
        gestes_fr: ['Déstabiliser l\'adversaire','Résistance de bras','Tiré/poussé debout','Lutte au sol sécuritaire','Sumo simplifié','Tir à la bûche','Bras de fer','Lutte assis'] },
      { id: 'duel',      icon: '⚔️', color: '#8E44AD', fr: 'Duel avec instrument', en: 'Instrument Duel',    es: 'Duelo con instrumento',
        gestes_fr: ['Escrime bâton mousse','Boxe mousse','Badminton duel','Tennis de table duel','Pickleball duel','Duel de raquettes','Tir à l\'arc (cibles)','Pétanque duel'] },
      { id: 'territoire',icon: '🏰', color: '#E17055', fr: 'Jeux de territoire',   en: 'Territory Games',    es: 'Juegos de territorio',
        gestes_fr: ['Défendre sa zone','Attaquer la zone adverse','Capture de drapeau','Tag de territoire','Occuper l\'espace','Défense en 1v1','Marquage d\'un adversaire','Transition attaque/défense'] },
    ]
  },
  // ────── COOPÉRATION ──────
  {
    categorie: { fr: 'Coopération', en: 'Cooperation', es: 'Cooperación' },
    icon: '🤝', color: '#007A4D',
    items: [
      { id: 'communication', icon: '📣', color: '#00B894', fr: 'Communication et confiance', en: 'Communication & Trust', es: 'Comunicación y confianza',
        gestes_fr: ['Communication verbale en jeu','Communication non verbale','Chute de confiance (trust fall)','Guider un partenaire yeux fermés','Signal non verbal d\'équipe','Écoute active en mouvement','Communication en relais','Feedback entre partenaires'] },
      { id: 'strategie',    icon: '♟️', color: '#2980B9', fr: 'Stratégie d\'équipe',        en: 'Team Strategy',       es: 'Estrategia de equipo',
        gestes_fr: ['Créer des espaces libres','Décoder la défense adverse','Prise de décision rapide','Mouvement sans ballon','Transition rapide','Couverture défensive','Appel de balle','Communication tactique'] },
      { id: 'construction', icon: '🏗️', color: '#F39C12', fr: 'Construction collaborative', en: 'Collaborative Building', es: 'Construcción colaborativa',
        gestes_fr: ['Pyramide humaine (niveau 1)','Pyramide à 3','Acrosport figure à 2','Tableau vivant','Construction avec matériel','Défi de construction collective','Parcours collectif','Tour la plus haute'] },
    ]
  },
  // ────── EXPRESSION CORPORELLE ──────
  {
    categorie: { fr: 'Expression corporelle', en: 'Body Expression', es: 'Expresión corporal' },
    icon: '💃', color: '#E84393',
    items: [
      { id: 'danse',     icon: '💃', color: '#E84393', fr: 'Danse et rythme',     en: 'Dance & Rhythm',    es: 'Danza y ritmo',
        gestes_fr: ['Frapper le rythme','Marcher en rythme','Séquence de danse 4 temps','Hip-hop moves de base','Danse en miroir','Impro sur la musique','Danse folklorique','Danse en cercle'] },
      { id: 'mime',      icon: '🎭', color: '#8E44AD', fr: 'Mime et théâtre',      en: 'Mime & Theater',    es: 'Mimo y teatro',
        gestes_fr: ['Mime d\'un sport','Mime d\'un animal','Séquence de mime','Théâtre de gestes','Exprimer une émotion par le corps','Mime en groupe','Scène muette sportive','Personnage en mouvement'] },
      { id: 'acrosport', icon: '🤸', color: '#CC0000', fr: 'Acrosport',            en: 'Acrosport',         es: 'Acrosport',
        gestes_fr: ['Figure de base à 2 (sol)','Portée à 2','Figure à 3','Tableau vivant acrosport','Enchaînement de figures','Figure avec équilibre','Acrosport musical','Pyramide de groupe'] },
    ]
  },
];

// ============================================================
//  ILLUSTRATIONS SVG POP ART (inline)
// ============================================================
const SVG_ILLUS = {
  balle:       { bg: '#FF4444', emoji: '⚾' },
  ballon:      { bg: '#E17055', emoji: '⚽' },
  raquette:    { bg: '#2980B9', emoji: '🏸' },
  baton:       { bg: '#8E44AD', emoji: '🏒' },
  corde:       { bg: '#6C5CE7', emoji: '🪢' },
  cerceau:     { bg: '#00B894', emoji: '⭕' },
  frisbee:     { bg: '#00CEC9', emoji: '🥏' },
  cirque:      { bg: '#FDCB6E', emoji: '🎪' },
  foulard:     { bg: '#E84393', emoji: '🎀' },
  courir:      { bg: '#00CEC9', emoji: '🏃' },
  sauter:      { bg: '#F39C12', emoji: '🦘' },
  ramper:      { bg: '#27AE60', emoji: '🐛' },
  grimper:     { bg: '#D63031', emoji: '🧗' },
  esquiver:    { bg: '#0984E3', emoji: '💨' },
  equilibre:   { bg: '#6C5CE7', emoji: '⚖️' },
  souplesse:   { bg: '#FD79A8', emoji: '🤸' },
  gainage:     { bg: '#E17055', emoji: '💪' },
  coordination:{ bg: '#FDCB6E', emoji: '🎯' },
  lutte:       { bg: '#CC0000', emoji: '🤼' },
  duel:        { bg: '#8E44AD', emoji: '⚔️' },
  territoire:  { bg: '#E17055', emoji: '🏰' },
  communication:{ bg:'#00B894', emoji: '📣' },
  strategie:   { bg: '#2980B9', emoji: '♟️' },
  construction:{ bg: '#F39C12', emoji: '🏗️' },
  danse:       { bg: '#E84393', emoji: '💃' },
  mime:        { bg: '#8E44AD', emoji: '🎭' },
  acrosport:   { bg: '#CC0000', emoji: '🤸' },
  // catégories jeux
  ballon_chasseur:  { bg: '#CC0000', emoji: '🎯' },
  poursuite:        { bg: '#00B0A0', emoji: '🏃' },
  cooperation:      { bg: '#007A4D', emoji: '🤝' },
  opposition:       { bg: '#D63031', emoji: '⚔️' },
  sports_collectifs:{ bg: '#E17055', emoji: '🏅' },
  sans_materiel:    { bg: '#6C5CE7', emoji: '🙌' },
  exterieur:        { bg: '#27AE60', emoji: '🌿' },
  traditionnels_monde:{ bg: '#F39C12', emoji: '🌍' },
  sports_individuels: { bg: '#8E44AD', emoji: '🏋️' },
  autochtones:        { bg: '#C0392B', emoji: '🪶' },
  avec_materiel:      { bg: '#2980B9', emoji: '🏸' },
  olympiques:         { bg: '#F1C40F', emoji: '🥇' },
  afrique_asie_oceanie:{ bg:'#16A085', emoji: '🌏' },
  ameriques_europe:   { bg: '#2471A3', emoji: '🌎' },
  prescolaire_jeux:   { bg: '#27AE60', emoji: '🌱' },
  secondaire_jeux:    { bg: '#1ABC9C', emoji: '🎓' },
};

function getIllus(key) {
  return SVG_ILLUS[key] || { bg: '#00CCFF', emoji: '🎮' };
}

// ============================================================
//  CHEMINS DES DONNÉES
// ============================================================
const JEUX_SOURCES = [
  { key: 'ballon_chasseur',     path: 'data/jeux/ballon_chasseur.json',    label: { fr: 'Ballon Chasseur', en: 'Dodgeball', es: 'Balón Prisionero' }, icon: '🎯', barClass: 'bar-bc',        badgeClass: 'badge-bc',        catPillColor: '#CC0000' },
  { key: 'poursuite',           path: 'data/jeux/poursuite.json',          label: { fr: 'Poursuite',        en: 'Tag',        es: 'Persecución'      }, icon: '🏃', barClass: 'bar-poursuite', badgeClass: 'badge-poursuite', catPillColor: '#00B0A0' },
  { key: 'cooperation',         path: 'data/jeux/cooperation.json',        label: { fr: 'Coopération',      en: 'Cooperation',es: 'Cooperación'      }, icon: '🤝', barClass: 'bar-coop',      badgeClass: 'badge-coop',      catPillColor: '#007A4D' },
  { key: 'opposition',          path: 'data/jeux/opposition.json',         label: { fr: 'Opposition',       en: 'Opposition', es: 'Oposición'        }, icon: '⚔️', barClass: 'bar-oppo',      badgeClass: 'badge-oppo',      catPillColor: '#D63031' },
  { key: 'sports_collectifs',   path: 'data/jeux/sports_collectifs.json',  label: { fr: 'Sports Collectifs',en: 'Team Sports',es: 'Deportes Colectivos'}, icon: '🏅', barClass: 'bar-collectif', badgeClass: 'badge-collectif', catPillColor: '#E17055' },
  { key: 'sans_materiel',       path: 'data/jeux/sans_materiel.json',      label: { fr: 'Sans Matériel',    en: 'No Equipment',es: 'Sin Material'    }, icon: '🙌', barClass: 'bar-sans',      badgeClass: 'badge-sans',      catPillColor: '#6C5CE7' },
  { key: 'exterieur',           path: 'data/jeux/exterieur.json',          label: { fr: 'Extérieur',        en: 'Outdoor',    es: 'Exterior'         }, icon: '🌿', barClass: 'bar-vert',      badgeClass: 'badge-vert',      catPillColor: '#27AE60' },
  { key: 'traditionnels_monde', path: 'data/jeux/traditionnels_monde.json',label: { fr: 'Jeux du Monde',    en: 'World Games',es: 'Juegos del Mundo' }, icon: '🌍', barClass: 'bar-monde',     badgeClass: 'badge-monde',     catPillColor: '#F39C12' },
  { key: 'sports_individuels',  path: 'data/jeux/sports_individuels.json', label: { fr: 'Sports Individuels',en:'Individual Sports',es:'Deportes Individuales'}, icon: '🏋️', barClass: 'bar-indiv', badgeClass: 'badge-indiv', catPillColor: '#8E44AD' },
  { key: 'autochtones',         path: 'data/jeux/jeux_autochtones.json',   label: { fr: 'Jeux Autochtones', en: 'Indigenous Games',es:'Juegos Indígenas'}, icon: '🪶', barClass: 'bar-auto',  badgeClass: 'badge-auto',  catPillColor: '#C0392B' },
  { key: 'avec_materiel',       path: 'data/jeux/jeux_avec_materiel.json', label: { fr: 'Avec Matériel',    en: 'With Equipment',es:'Con Material'    }, icon: '🏸', barClass: 'bar-mat',       badgeClass: 'badge-mat',       catPillColor: '#2980B9' },
  { key: 'olympiques',          path: 'data/jeux/jeux_olympiques_paralympiques.json', label: { fr: 'Olympiques & Para',en:'Olympics & Para',es:'Olímpicos & Para'}, icon: '🥇', barClass: 'bar-olym', badgeClass: 'badge-olym', catPillColor: '#F1C40F' },
  { key: 'afrique_asie_oceanie',path: 'data/jeux/jeux_afrique_asie_oceanie.json', label: { fr: 'Afrique·Asie·Océanie',en:'Africa·Asia·Oceania',es:'África·Asia·Oceanía'}, icon: '🌏', barClass: 'bar-aao', badgeClass: 'badge-aao', catPillColor: '#16A085' },
  { key: 'ameriques_europe',    path: 'data/jeux/jeux_ameriques_europe.json',     label: { fr: 'Amériques·Europe',en:'Americas·Europe',es:'Américas·Europa'}, icon: '🌎', barClass: 'bar-ame', badgeClass: 'badge-ame', catPillColor: '#2471A3' },
  { key: 'prescolaire_jeux',    path: 'data/jeux/jeux_prescolaire.json',   label: { fr: 'Préscolaire',      en: 'Preschool',  es: 'Preescolar'       }, icon: '🌱', barClass: 'bar-presc',     badgeClass: 'badge-presc',     catPillColor: '#27AE60' },
  { key: 'secondaire_jeux',     path: 'data/jeux/jeux_secondaire.json',    label: { fr: 'Secondaire',       en: 'High School',es: 'Secundaria'       }, icon: '🎓', barClass: 'bar-sec',       badgeClass: 'badge-sec',       catPillColor: '#1ABC9C' },
];

const SAE_SOURCES = [
  {
    key: 'prescolaire',
    path: 'data/sae/prescolaire.json',
    label: 'Préscolaire', cycle: 'Préscolaire'
  },
  {
    key: 'primaire',
    path: 'data/sae/primaire.json',
    label: 'Primaire', cycle: 'Primaire'
  },
  {
    key: 'secondaire',
    path: 'data/sae/secondaire.json',
    label: 'Secondaire', cycle: 'Secondaire'
  },
  {
    key: 'cooperation',
    path: 'data/sae/cooperation.json',
    label: 'Coopération', cycle: 'Primaire', arrayKey: 'saes'
  },
  {
    key: 'collectifs',
    path: 'data/sae/collectifs.json',
    label: 'Sports Collectifs', cycle: 'Secondaire', arrayKey: 'saes'
  },
  {
    key: 'opposition',
    path: 'data/sae/opposition.json',
    label: 'Opposition', cycle: 'Secondaire'
  },
  {
    key: 'dodgeball',
    path: 'data/sae/dodgeball.json',
    label: 'Ballon Chasseur', cycle: 'Primaire/Secondaire'
  },
  {
    key: 'locomotion',
    path: 'data/sae/locomotion.json',
    label: 'Locomotion', cycle: 'Primaire'
  },
  {
    key: 'mobilite',
    path: 'data/sae/mobilite.json',
    label: 'Mobilité', cycle: 'Primaire/Secondaire'
  },
  // ── Nouvelles SAÉ intégrées ──
  {
    key: 'poursuite',
    path: 'data/sae/poursuite.json',
    label: 'Jeux de poursuite', cycle: 'Maternelle → Secondaire 5'
  },
  {
    key: 'duel',
    path: 'data/sae/duel.json',
    label: 'Duel / Opposition', cycle: 'Primaire / Secondaire'
  },
  {
    key: 'conditionnement',
    path: 'data/sae/conditionnement.json',
    label: 'Conditionnement physique', cycle: 'Primaire / Secondaire'
  },
  {
    key: 'expression_corporelle',
    path: 'data/sae/expression_corporelle.json',
    label: 'Expression corporelle', cycle: 'Maternelle → Secondaire 5'
  },
  {
    key: 'sports_collectifs_sae',
    path: 'data/sae/sports_collectifs_sae.json',
    label: 'Sports collectifs', cycle: 'Primaire → Secondaire 5'
  },
  {
    key: 'manipulation_new',
    path: 'data/sae/manipulation_new.json',
    label: 'Manipulation d\'objets', cycle: 'Maternelle → Secondaire 5'
  },
  {
    key: 'locomotion_new',
    path: 'data/sae/locomotion_new.json',
    label: 'Locomotion', cycle: 'Maternelle → Secondaire 5'
  },
  {
    key: 'expression_artistique',
    path: 'data/sae/expression_artistique.json',
    label: 'Expression artistique', cycle: 'Maternelle → Secondaire 5'
  },
  {
    key: 'adresse_individuel',
    path: 'data/sae/adresse_individuel.json',
    label: 'Adresse et sports individuels', cycle: 'Maternelle → Secondaire 5'
  },
];

// ============================================================
//  ÉTAT DE L'APP
// ============================================================
const state = {
  allJeux: [],
  allSAE: [],
  filteredJeux: [],
  filteredSAE: [],
  currentTab: 'jeux',
  activeMoyenSAE: null,
  activeEduMoyen: null,
  activeEduGeste: null,
};

// ============================================================
//  INITIALISATION
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
  // Filet de sécurité : disparaît après 8 secondes max
  const safetyTimer = setTimeout(() => hideLoading(), 8000);

  try {
    drawBackground();
    window.addEventListener('resize', drawBackground);

    setupNavigation();
    applyI18N();
    progress(10);

    await loadJeux();
    progress(55);

    await loadSAE();
    progress(85);

    renderJeux();
    renderSAE();
    renderMoyensBrowser();
    renderEduTaxonomy();
    renderMusique();
    setupSearch();
    updateHeaderStats();

    progress(100);
  } catch (err) {
    console.error('Erreur init ZTS:', err);
  } finally {
    clearTimeout(safetyTimer);
    setTimeout(hideLoading, 500);
  }
});

// ============================================================
//  BACKGROUND SPIRAL (Canvas)
// ============================================================
function drawBackground() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext('2d');
  const W   = canvas.width;
  const H   = canvas.height;

  // Point d'origine: coin inférieur droit
  const ox = W;
  const oy = H;
  const maxR = Math.sqrt(W * W + H * H) * 1.1;

  // Fond cyan
  ctx.fillStyle = '#00CCFF';
  ctx.fillRect(0, 0, W, H);

  // Rayons jaunes depuis coin inférieur droit
  const totalSectors = 22; // nombre de secteurs (jaune + cyan alternés)
  const sectorAngle  = (Math.PI * 2) / totalSectors;
  // Décalage pour que les rayons pointent vers le haut-gauche
  const startAngle   = Math.PI * 0.75;

  for (let i = 0; i < totalSectors; i += 2) {
    const a1 = startAngle + i * sectorAngle;
    const a2 = startAngle + (i + 1) * sectorAngle;

    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.arc(ox, oy, maxR, a1, a2);
    ctx.closePath();
    ctx.fillStyle = '#FFE000';
    ctx.fill();
  }

  // Overlay semi-transparent pour améliorer la lisibilité des cartes
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  ctx.fillRect(0, 0, W, H);
}

// ============================================================
//  NAVIGATION
// ============================================================
function setupNavigation() {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
      document.getElementById(`tab-${target}`).classList.add('active');
      state.currentTab = target;
    });
  });
}

// ============================================================
//  CHARGEMENT DES DONNÉES
// ============================================================
async function loadJeux() {
  const results = await Promise.allSettled(
    JEUX_SOURCES.map(src =>
      fetch(src.path)
        .then(r => r.json())
        .then(data => ({ src, data }))
    )
  );

  results.forEach(result => {
    if (result.status !== 'fulfilled') return;
    const { src, data } = result.value;
    const jeux = data.jeux || data.items || [];

    jeux.forEach(jeu => {
      state.allJeux.push({
        ...jeu,
        _src: src,
        _key: src.key,
      });
    });
  });

  state.filteredJeux = [...state.allJeux];
}

async function loadSAE() {
  const results = await Promise.allSettled(
    SAE_SOURCES.map(src =>
      fetch(src.path)
        .then(r => r.json())
        .then(data => ({ src, data }))
    )
  );

  results.forEach(result => {
    if (result.status !== 'fulfilled') return;
    const { src, data } = result.value;
    const items = (src.arrayKey ? data[src.arrayKey] : null)
               || data.sae || data.saes || data.jeux || data.items || [];

    items.forEach(item => {
      state.allSAE.push({
        ...item,
        _src: src,
        _cycle: src.cycle,
        _fileLabel: src.label,
      });
    });
  });

  state.filteredSAE = [...state.allSAE];
}

// ============================================================
//  RENDER — JEUX
// ============================================================
function renderJeux() {
  const grid = document.getElementById('jeux-grid');

  if (state.filteredJeux.length === 0) {
    grid.innerHTML = `<div class="empty-state">🔍 AUCUN JEU TROUVÉ<br><small style="font-size:1rem">Essaie d'autres filtres</small></div>`;
    updateJeuxStats();
    return;
  }

  grid.innerHTML = state.filteredJeux.map((jeu, idx) => buildJeuCard(jeu, idx)).join('');

  grid.querySelectorAll('.game-card').forEach((card, i) => {
    card.addEventListener('click', () => openJeuModal(state.filteredJeux[i]));
  });

  updateJeuxStats();
}

function buildJeuCard(jeu, idx) {
  const src      = jeu._src || {};
  const titre    = jeu.titre || jeu.nom || 'Jeu sans titre';
  const origine  = jeu.origine || jeu.pays_origine || '';
  const niveau   = jeu.niveau  || (jeu.age_min ? `${jeu.age_min}–${jeu.age_max} ans` : '');
  const duree    = jeu.duree   || '';
  const joueurs  = jeu.nb_joueurs_min && jeu.nb_joueurs_max
    ? `${jeu.nb_joueurs_min}–${jeu.nb_joueurs_max}`
    : (jeu.nb_joueurs || '');
  const espace    = jeu.espace  || '';
  const intensite = jeu.niveau_activite || '';
  const intentions = jeu.intentions_pedagogiques || jeu.description || '';
  const tags     = (jeu.tags || []).slice(0, 3);
  const label    = src.label ? (src.label[LANG.current] || src.label.fr || src.label) : '';

  const intensiteClass = getIntensite(intensite);
  const barClass   = src.barClass   || 'bar-default';
  const badgeClass = src.badgeClass || '';
  const illus      = getIllus(src.key || '');

  return `
    <div class="game-card" data-idx="${idx}">
      <div class="card-illustration" style="background:${illus.bg}">
        <span class="illus-emoji">${illus.emoji}</span>
        ${origine ? `<span class="illus-origin">🌍 ${origine}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="card-meta-top">
          ${label ? `<span class="card-category-badge ${badgeClass}">${src.icon || ''} ${label}</span>` : ''}
        </div>
        <h3 class="card-titre">${titre}</h3>
        ${intentions ? `<p class="card-desc">${intentions.substring(0, 90)}${intentions.length > 90 ? '...' : ''}</p>` : ''}
        <div class="card-info-grid">
          ${niveau   ? `<div class="card-info-item">📅 ${niveau}</div>`           : ''}
          ${duree    ? `<div class="card-info-item">⏱️ ${duree}</div>`            : ''}
          ${joueurs  ? `<div class="card-info-item">👥 ${joueurs}</div>`          : ''}
          ${espace   ? `<div class="card-info-item">🏟️ ${espace}</div>`          : ''}
        </div>
        <div class="card-tags-row">
          ${tags.map(tg => `<span class="ctag">${tg}</span>`).join('')}
          ${intensite ? `<span class="ctag ${intensiteClass}">⚡ ${intensite}</span>` : ''}
        </div>
      </div>
      <div class="card-footer">${t('seeGame')}</div>
    </div>
  `;
}

function getIntensite(val) {
  if (!val) return '';
  const v = val.toLowerCase();
  if (v.includes('élevé') || v.includes('eleve') || v.includes('intense') || v.includes('haute')) return 'intensite-eleve';
  if (v.includes('modéré') || v.includes('modere') || v.includes('moyen'))  return 'intensite-modere';
  if (v.includes('faible') || v.includes('léger') || v.includes('leger'))   return 'intensite-faible';
  return 'intensite-variable';
}

// ============================================================
//  MODAL — JEUX
// ============================================================
function openJeuModal(jeu) {
  const src      = jeu._src || {};
  const titre    = jeu.titre    || jeu.nom            || 'Jeu';
  const origine  = jeu.origine  || jeu.pays_origine   || 'Monde';
  const niveau   = jeu.niveau   || `${jeu.age_min || '?'}–${jeu.age_max || '?'} ans`;
  const duree    = jeu.duree    || '?';
  const joueurs  = jeu.nb_joueurs_min ? `${jeu.nb_joueurs_min}–${jeu.nb_joueurs_max}` : (jeu.nb_joueurs || '?');
  const espace   = jeu.espace   || '?';
  const intensite = jeu.niveau_activite || '';
  const materiel = Array.isArray(jeu.materiel)
    ? jeu.materiel.join(', ')
    : (jeu.materiel || 'Aucun');

  const intentions  = jeu.intentions_pedagogiques  || '';
  const butDuJeu    = jeu.but_du_jeu               || '';
  const disposition = jeu.disposition              || '';
  const deroulement = jeu.deroulement              || '';
  const variantes   = Array.isArray(jeu.variantes)   ? jeu.variantes  : (jeu.variantes  ? [jeu.variantes]  : []);
  const competences = Array.isArray(jeu.competences_motrices) ? jeu.competences_motrices : [];
  const valeurs     = Array.isArray(jeu.valeurs)     ? jeu.valeurs    : [];
  const adaptations = jeu.adaptations_besoins_speciaux || '';
  const tags        = Array.isArray(jeu.tags)        ? jeu.tags       : [];

  const html = `
    <div class="modal-head">
      <div class="modal-icon">${src.icon || '🎮'}</div>
      <div class="modal-titre">${titre}</div>
      <div class="modal-sub">
        🌍 ${origine}
        ${src.label ? ` &nbsp;·&nbsp; ${src.label}` : ''}
        ${intensite  ? ` &nbsp;·&nbsp; ⚡ ${intensite}`  : ''}
      </div>
      <button class="modal-close-btn" id="closeBtn">✕ FERMER</button>
    </div>
    <div class="modal-content-body">
      <div class="modal-meta-row">
        <div class="meta-chip chip-yellow"><span class="meta-chip-label">NIVEAU</span><span class="meta-chip-val">${niveau}</span></div>
        <div class="meta-chip chip-cyan">  <span class="meta-chip-label">DURÉE</span><span class="meta-chip-val">${duree}</span></div>
        <div class="meta-chip chip-white"> <span class="meta-chip-label">JOUEURS</span><span class="meta-chip-val">${joueurs}</span></div>
        <div class="meta-chip chip-yellow"><span class="meta-chip-label">ESPACE</span><span class="meta-chip-val">${espace}</span></div>
        <div class="meta-chip chip-white"> <span class="meta-chip-label">MATÉRIEL</span><span class="meta-chip-val" style="font-size:0.78rem">${materiel}</span></div>
      </div>

      ${intentions ? modalSection('🎯 INTENTIONS PÉDAGOGIQUES', intentions) : ''}
      ${butDuJeu   ? modalSection('🏆 BUT DU JEU', butDuJeu, 'cyan-accent') : ''}
      ${disposition? modalSection('📐 DISPOSITION', disposition) : ''}
      ${deroulement? modalSection('▶️ DÉROULEMENT', deroulement, 'red-accent') : ''}

      ${variantes.length ? `
        <div class="modal-section cyan-accent">
          <div class="modal-section-title">🔄 VARIANTES</div>
          <ul class="modal-list">
            ${variantes.map(v => `<li>${v}</li>`).join('')}
          </ul>
        </div>` : ''}

      ${competences.length ? `
        <div class="modal-section">
          <div class="modal-section-title">💪 COMPÉTENCES MOTRICES</div>
          <div class="modal-tag-row">
            ${competences.map(c => `<span class="modal-tag">${c}</span>`).join('')}
          </div>
        </div>` : ''}

      ${valeurs.length ? `
        <div class="modal-section">
          <div class="modal-section-title">⭐ VALEURS</div>
          <div class="modal-tag-row">
            ${valeurs.map(v => `<span class="modal-tag modal-tag-cyan">${v}</span>`).join('')}
          </div>
        </div>` : ''}

      ${adaptations ? modalSection('♿ ADAPTATIONS', adaptations) : ''}

      ${tags.length ? `
        <div class="modal-tag-row" style="margin-top:1rem">
          ${tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
        </div>` : ''}
    </div>
  `;

  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  document.getElementById('closeBtn').addEventListener('click', closeModal);
}

// ============================================================
//  RENDER — SAÉ
// ============================================================
function renderSAE() {
  const grid = document.getElementById('sae-grid');

  if (state.filteredSAE.length === 0) {
    grid.innerHTML = `<div class="empty-state">🔍 AUCUNE SAÉ TROUVÉE<br><small style="font-size:1rem">Essaie d'autres filtres</small></div>`;
    updateSAEStats();
    return;
  }

  grid.innerHTML = state.filteredSAE.map((sae, idx) => buildSAECard(sae, idx)).join('');

  grid.querySelectorAll('.game-card').forEach((card, i) => {
    card.addEventListener('click', () => openSAEModal(state.filteredSAE[i]));
  });

  updateSAEStats();
}

function buildSAECard(sae, idx) {
  const titre        = sae.titre || 'SAÉ sans titre';
  const niveau       = sae.niveau || sae._cycle || sae._fileLabel || '';
  const cycle        = sae.cycle  || sae._cycle || '';
  const duree        = sae.duree_periodes
    ? `${sae.duree_periodes} × ${sae.duree_par_periode || '?'}`
    : (sae.duree || '');
  const moyenAction  = sae.moyen_action || '';
  const origMondiale = sae.origine_mondiale || '';
  const tags         = (sae.tags || []).slice(0, 3);

  // Détecter le moyen d'action pour l'illustration
  const moyenKey  = detectMoyenKey(moyenAction);
  const illus     = getIllus(moyenKey);

  return `
    <div class="game-card" data-idx="${idx}">
      <div class="card-illustration card-illustration-sae" style="background:${illus.bg}">
        <span class="illus-emoji">${illus.emoji}</span>
        ${origMondiale ? `<span class="illus-origin">🌍 ${origMondiale.substring(0,25)}${origMondiale.length>25?'...':''}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="card-meta-top">
          <span class="card-category-badge badge-sae">📚 ${niveau}</span>
        </div>
        <h3 class="card-titre">${titre}</h3>
        ${moyenAction ? `<p class="card-desc" style="color:#0080CC;font-weight:900">🎯 ${moyenAction}</p>` : ''}
        <div class="card-info-grid">
          ${duree ? `<div class="card-info-item">⏱️ ${duree}</div>` : ''}
          ${cycle ? `<div class="card-info-item">📖 ${cycle}</div>` : ''}
        </div>
        <div class="card-tags-row">
          ${tags.map(tg => `<span class="ctag">${tg}</span>`).join('')}
        </div>
      </div>
      <div class="card-footer">${t('seeSae')}</div>
    </div>
  `;
}

function detectMoyenKey(moyenStr) {
  if (!moyenStr) return 'coordination';
  const m = moyenStr.toLowerCase();
  if (m.includes('balle') || m.includes('ball'))    return 'balle';
  if (m.includes('ballon'))                          return 'ballon';
  if (m.includes('raquette'))                        return 'raquette';
  if (m.includes('bâton') || m.includes('baton') || m.includes('hockey') || m.includes('lacrosse')) return 'baton';
  if (m.includes('corde'))                           return 'corde';
  if (m.includes('cerceau'))                         return 'cerceau';
  if (m.includes('frisbee'))                         return 'frisbee';
  if (m.includes('cirque') || m.includes('diabolo') || m.includes('jongl')) return 'cirque';
  if (m.includes('foulard') || m.includes('ruban'))  return 'foulard';
  if (m.includes('courir') || m.includes('course') || m.includes('sprint')) return 'courir';
  if (m.includes('sauter') || m.includes('saut'))    return 'sauter';
  if (m.includes('ramper') || m.includes('rouler') || m.includes('roule'))  return 'ramper';
  if (m.includes('grimper'))                         return 'grimper';
  if (m.includes('esquiver') || m.includes('déplacement')) return 'esquiver';
  if (m.includes('équilibre') || m.includes('equilibre'))  return 'equilibre';
  if (m.includes('souplesse') || m.includes('flexib') || m.includes('yoga')) return 'souplesse';
  if (m.includes('gainage') || m.includes('force') || m.includes('condit')) return 'gainage';
  if (m.includes('coordination') || m.includes('rythme'))  return 'coordination';
  if (m.includes('lutte') || m.includes('judo') || m.includes('contact'))   return 'lutte';
  if (m.includes('duel') || m.includes('escrime') || m.includes('boxe'))    return 'duel';
  if (m.includes('territoire') || m.includes('opposition'))                 return 'territoire';
  if (m.includes('communic') || m.includes('confiance'))    return 'communication';
  if (m.includes('stratégie') || m.includes('tactique') || m.includes('coopér')) return 'strategie';
  if (m.includes('construction') || m.includes('acrosport') || m.includes('pyramide')) return 'acrosport';
  if (m.includes('danse') || m.includes('dance'))    return 'danse';
  if (m.includes('mime') || m.includes('théâtre') || m.includes('expression')) return 'mime';
  return 'coordination';
}

// ============================================================
//  MODAL — SAÉ
// ============================================================
function openSAEModal(sae) {
  const titre       = sae.titre || 'SAÉ';
  const niveau      = sae.niveau     || sae._fileLabel || '';
  const cycle       = sae.cycle      || sae._cycle     || '';
  const duree       = sae.duree_periodes
    ? `${sae.duree_periodes} périodes × ${sae.duree_par_periode || '?'}`
    : (sae.duree || '?');
  const espace      = sae.espace     || '?';
  const origMon     = sae.origine_mondiale       || '';
  const intentions  = sae.intentions_pedagogiques || '';
  const competence  = sae.competence_pfeq         || '';
  const composante  = sae.composante              || '';
  const moyenAction = sae.moyen_action             || '';
  const situDepart  = sae.situation_depart         || '';
  const tacheCompl  = sae.tache_complexe           || '';
  const deroulement = sae.deroulement              || {};
  const criteres    = Array.isArray(sae.criteres_evaluation) ? sae.criteres_evaluation : [];
  const grille      = sae.grille_evaluation        || null;
  const adaptations = sae.adaptations              || null;
  const variantes   = Array.isArray(sae.variantes)   ? sae.variantes  : [];
  const valeurs     = Array.isArray(sae.valeurs)     ? sae.valeurs    : [];
  const tags        = Array.isArray(sae.tags)        ? sae.tags       : [];

  const deroSteps = [
    deroulement.mise_en_train       ? `<li><strong>Mise en train:</strong> ${deroulement.mise_en_train}</li>`         : '',
    deroulement.partie_principale_1 ? `<li><strong>Partie principale 1:</strong> ${deroulement.partie_principale_1}</li>` : '',
    deroulement.partie_principale_2 ? `<li><strong>Partie principale 2:</strong> ${deroulement.partie_principale_2}</li>` : '',
    deroulement.retour_au_calme     ? `<li><strong>Retour au calme:</strong> ${deroulement.retour_au_calme}</li>`     : '',
  ].filter(Boolean).join('');

  const html = `
    <div class="modal-head">
      <div class="modal-icon">📚</div>
      <div class="modal-titre">${titre}</div>
      <div class="modal-sub">
        ${niveau} ${cycle ? `· ${cycle}` : ''}
        ${origMon ? ` &nbsp;·&nbsp; 🌍 ${origMon.substring(0, 60)}` : ''}
      </div>
      <button class="modal-close-btn" id="closeBtn">✕ FERMER</button>
    </div>
    <div class="modal-content-body">
      <div class="modal-meta-row">
        <div class="meta-chip chip-cyan">  <span class="meta-chip-label">NIVEAU</span><span class="meta-chip-val">${niveau}</span></div>
        <div class="meta-chip chip-yellow"><span class="meta-chip-label">CYCLE</span><span class="meta-chip-val">${cycle || '?'}</span></div>
        <div class="meta-chip chip-white"> <span class="meta-chip-label">DURÉE</span><span class="meta-chip-val">${duree}</span></div>
        <div class="meta-chip chip-yellow"><span class="meta-chip-label">ESPACE</span><span class="meta-chip-val">${espace}</span></div>
        ${moyenAction ? `<div class="meta-chip chip-cyan"><span class="meta-chip-label">MOYEN D'ACTION</span><span class="meta-chip-val" style="font-size:0.78rem">${moyenAction}</span></div>` : ''}
      </div>

      ${intentions  ? modalSection('🎯 INTENTIONS PÉDAGOGIQUES', intentions) : ''}

      ${competence  ? `
        <div class="modal-section cyan-accent">
          <div class="modal-section-title">📋 COMPÉTENCE PFEQ</div>
          <p class="modal-text">${competence}</p>
          ${composante ? `<p class="modal-text" style="margin-top:0.5rem"><strong>Composante:</strong> ${composante}</p>` : ''}
        </div>` : ''}

      ${origMon     ? modalSection('🌍 ORIGINE MONDIALE', origMon, 'cyan-accent') : ''}
      ${situDepart  ? modalSection('🌟 SITUATION DE DÉPART', situDepart)          : ''}
      ${tacheCompl  ? modalSection('💡 TÂCHE COMPLEXE', tacheCompl, 'red-accent') : ''}

      ${deroSteps   ? `
        <div class="modal-section">
          <div class="modal-section-title">▶️ DÉROULEMENT</div>
          <ul class="modal-list">${deroSteps}</ul>
        </div>` : ''}

      ${criteres.length ? `
        <div class="modal-section cyan-accent">
          <div class="modal-section-title">✅ CRITÈRES D'ÉVALUATION</div>
          <ul class="modal-list">
            ${criteres.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>` : ''}

      ${grille ? `
        <div class="modal-section">
          <div class="modal-section-title">📊 GRILLE D'ÉVALUATION</div>
          <div class="eval-grid">
            ${grille.tres_bien ? `<div class="eval-cell eval-tres-bien"><div class="eval-level">⭐ TRÈS BIEN</div><div class="eval-desc">${grille.tres_bien}</div></div>` : ''}
            ${grille.bien      ? `<div class="eval-cell eval-bien">     <div class="eval-level">✅ BIEN</div>     <div class="eval-desc">${grille.bien}</div></div>` : ''}
            ${grille.en_developpement ? `<div class="eval-cell eval-en-dev"><div class="eval-level">📈 EN DÉVELOPPEMENT</div><div class="eval-desc">${grille.en_developpement}</div></div>` : ''}
          </div>
        </div>` : ''}

      ${variantes.length ? `
        <div class="modal-section">
          <div class="modal-section-title">🔄 VARIANTES</div>
          <ul class="modal-list">
            ${variantes.map(v => `<li>${v}</li>`).join('')}
          </ul>
        </div>` : ''}

      ${valeurs.length ? `
        <div class="modal-section">
          <div class="modal-section-title">⭐ VALEURS</div>
          <div class="modal-tag-row">
            ${valeurs.map(v => `<span class="modal-tag modal-tag-cyan">${v}</span>`).join('')}
          </div>
        </div>` : ''}

      ${tags.length ? `
        <div class="modal-tag-row" style="margin-top:1rem">
          ${tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
        </div>` : ''}
    </div>
  `;

  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  document.getElementById('closeBtn').addEventListener('click', closeModal);
}

// Helper
function modalSection(title, content, extraClass = '') {
  return `
    <div class="modal-section ${extraClass}">
      <div class="modal-section-title">${title}</div>
      <p class="modal-text">${content}</p>
    </div>`;
}

// ============================================================
//  RENDER — MUSIQUE (statique)
// ============================================================
function renderMusique() {
  const bpmMoments = [
    { moment: 'ENTRÉE EN CLASSE',     bpm: '90–110',  desc: 'Signal de transition, concentration',         icon: '🚶' },
    { moment: 'ÉCHAUFFEMENT',         bpm: '115–135', desc: 'Élever progressivement le rythme cardiaque',  icon: '🔥' },
    { moment: 'APPRENTISSAGE',        bpm: '120–145', desc: 'Ambiance, signal de départ et d\'arrêt',      icon: '📚' },
    { moment: 'JEU / COMPÉTITION',    bpm: '140–165', desc: 'Énergie maximale, ambiance compétitive',      icon: '🏆' },
    { moment: 'RETOUR AU CALME',      bpm: '60–85',   desc: 'Réduction progressive du rythme cardiaque',   icon: '🧘' },
    { moment: 'BILAN / OBJECTIVATION',bpm: '50–70',   desc: 'Fond calme pour la discussion de groupe',     icon: '💭' },
  ];

  const bpmActivites = [
    { moment: 'Ballon Chasseur',      bpm: '140–155', desc: 'Electronic, Hip-Hop instrumental, Rock Sport', icon: '🎯' },
    { moment: 'Poursuite / Chat',     bpm: '150–165', desc: 'Electronic rapide, Drum and Bass léger',       icon: '🏃' },
    { moment: 'Sports Collectifs',    bpm: '135–150', desc: 'Hip-Hop instrumental, Pop Sport',              icon: '🏀' },
    { moment: 'Coopération',          bpm: '100–120', desc: 'Acoustique positif, Pop douce, bienveillant',  icon: '🤝' },
    { moment: 'Badminton / Raquettes',bpm: '120–135', desc: 'Pop légère, Jazz moderne, focalisante',        icon: '🏸' },
    { moment: 'Yoga / Méditation',    bpm: '40–65',   desc: 'Classique, Ambient, Sons de nature',           icon: '🧘' },
    { moment: 'Danse / Expression',   bpm: '85–130',  desc: 'Hip-Hop 85-95 · Pop 115-130 · Classique libre',icon: '💃' },
    { moment: 'Circuits / Stations',  bpm: '130–145', desc: 'Electronic, Gym Music + signal de cloche',    icon: '⚡' },
  ];

  const sources = [
    { name: 'YouTube Audio Library', badge: 'GRATUIT',  badgeClass: 'badge-free', bpm: 'Tous BPM', desc: 'Bibliothèque officielle YouTube — milliers de pistes classées par genre et humeur.', url: 'https://studio.youtube.com/channel/UC/music' },
    { name: 'Pixabay Music',         badge: 'CC0',      badgeClass: 'badge-cc0',  bpm: 'Tous BPM', desc: 'Totalement libre de droits · Idéal pour l\'éducation sans aucune restriction.', url: 'https://pixabay.com/music/' },
    { name: 'Free Music Archive',    badge: 'CC',       badgeClass: 'badge-cc',   bpm: 'Tous BPM', desc: 'Archive mondiale de musiques Creative Commons · Catégories Sport, World, Electronic.', url: 'https://freemusicarchive.org/' },
    { name: 'Incompetech',           badge: 'CC-BY',    badgeClass: 'badge-cc',   bpm: 'Par BPM',  desc: 'Catalogue trié par BPM et par ambiance · Parfait pour l\'enseignement en ÉPS.', url: 'https://incompetech.com/' },
    { name: 'Mixkit',                badge: 'GRATUIT',  badgeClass: 'badge-free', bpm: '120–160',  desc: 'Musique + effets sonores sport · Téléchargement sans compte requis.', url: 'https://mixkit.co/free-stock-music/' },
    { name: 'Musopen',               badge: 'CC0',      badgeClass: 'badge-cc0',  bpm: '40–80',    desc: 'Musique classique libre de droits · Idéal pour retour au calme et yoga.', url: 'https://musopen.org/' },
    { name: 'Moby Gratis',           badge: 'GRATUIT',  badgeClass: 'badge-free', bpm: '50–90',    desc: 'Musiques ambient de Moby offertes gratuitement aux enseignants et éducateurs.', url: 'https://mobygratis.com/' },
    { name: 'ccMixter',              badge: 'CC',       badgeClass: 'badge-cc',   bpm: '100–160',  desc: 'Remix communautaire Creative Commons · Electronic et Hip-Hop instrumental.', url: 'https://ccmixter.org/' },
    { name: 'Jamendo',               badge: 'CC',       badgeClass: 'badge-cc',   bpm: 'Tous BPM', desc: 'Artistes indépendants · Usage pédagogique gratuit · Grande variété culturelle.', url: 'https://www.jamendo.com/' },
    { name: 'Freesound',             badge: 'EFFETS',   badgeClass: 'badge-fx',   bpm: 'Effets',   desc: 'Base de données d\'effets sonores · Sifflets, cloches, air horn, fanfares.', url: 'https://freesound.org/' },
    { name: 'Bensound',              badge: 'GRATUIT',  badgeClass: 'badge-free', bpm: '90–150',   desc: 'Musique instrumentale professionnelle · Pop, Acoustic, Corporate, Upbeat.', url: 'https://www.bensound.com/' },
    { name: 'Free PD',               badge: 'DOMAINE PUBLIC', badgeClass: 'badge-cc0', bpm: 'Classique', desc: 'Musique du domaine public uniquement · 0% risque légal pour l\'enseignement.', url: 'https://freepd.com/' },
  ];

  const signaux = [
    { signal: '⚽ Départ',          son: 'Sifflet court (1×)',      signification: 'Commencer l\'activité' },
    { signal: '🛑 Arrêt immédiat',  son: '3 coups de sifflet',      signification: 'STOP — urgence ou fin' },
    { signal: '📣 Rassemblement',   son: '2 coups longs',            signification: 'Regroupement des élèves' },
    { signal: '🔔 Changement',      son: 'Cloche ou ding',           signification: 'Rotation de station' },
    { signal: '⏸️ Pause',           son: 'Air horn court',           signification: 'Arrêt temporaire' },
    { signal: '🏆 Victoire',        son: 'Fanfare courte',           signification: 'Célébration · Félicitations' },
    { signal: '🏁 Fin du cours',    son: 'Musique douce qui monte',  signification: 'Rangement et transition' },
  ];

  const html = `
    <h3 class="music-h3">⏱️ STRUCTURE D'UN COURS ÉPS PAR BPM</h3>
    <div class="bpm-grid">
      ${bpmMoments.map(item => `
        <div class="bpm-card">
          <div class="bpm-moment">${item.icon} ${item.moment}</div>
          <div class="bpm-number">${item.bpm}</div>
          <div class="bpm-unit">BPM</div>
          <div class="bpm-desc">${item.desc}</div>
        </div>`).join('')}
    </div>

    <h3 class="music-h3">🏃 BPM PAR TYPE D'ACTIVITÉ ÉPS</h3>
    <div class="bpm-grid">
      ${bpmActivites.map(item => `
        <div class="bpm-card">
          <div class="bpm-moment">${item.icon} ${item.moment}</div>
          <div class="bpm-number">${item.bpm}</div>
          <div class="bpm-unit">BPM</div>
          <div class="bpm-desc">${item.desc}</div>
        </div>`).join('')}
    </div>

    <h3 class="music-h3">🎼 20+ SOURCES DE MUSIQUE GRATUITE</h3>
    <div class="sources-grid">
      ${sources.map(s => `
        <div class="source-card">
          <span class="source-badge ${s.badgeClass}">${s.badge}</span>
          <div class="source-name">${s.name}</div>
          <div class="source-bpm">📊 ${s.bpm}</div>
          <div class="source-desc">${s.desc}</div>
          <a href="${s.url}" target="_blank" rel="noopener" class="source-link">🔗 ACCÉDER AU SITE</a>
        </div>`).join('')}
    </div>

    <h3 class="music-h3">🔊 SIGNAUX SONORES RECOMMANDÉS EN ÉPS</h3>
    <table class="signals-table">
      <thead>
        <tr>
          <th>Signal</th>
          <th>Son recommandé</th>
          <th>Signification</th>
        </tr>
      </thead>
      <tbody>
        ${signaux.map(s => `
          <tr>
            <td>${s.signal}</td>
            <td>${s.son}</td>
            <td>${s.signification}</td>
          </tr>`).join('')}
      </tbody>
    </table>

    <div style="background:var(--black);border:5px solid var(--yellow);padding:1.5rem;box-shadow:var(--shadow-l);margin-top:2rem">
      <h3 style="font-family:'Bangers',cursive;font-size:1.8rem;color:var(--yellow);letter-spacing:3px;margin-bottom:1rem">📊 EFFETS DE LA MUSIQUE SUR L'ACTIVITÉ PHYSIQUE</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1rem">
        ${[
          { stat: '+15–20%', desc: 'd\'effort lors d\'activités avec musique motivante' },
          { stat: '60–70 BPM', desc: 'favorise la mémorisation (onde alpha cérébrale)' },
          { stat: 'Sans paroles', desc: 'réduit la distraction cognitive chez les élèves' },
          { stat: 'Culturelle', desc: 'facilite l\'ouverture à la diversité mondiale' },
        ].map(item => `
          <div style="border:3px solid var(--yellow);padding:1rem;text-align:center">
            <div style="font-family:'Bangers',cursive;font-size:2rem;color:var(--yellow);letter-spacing:2px">${item.stat}</div>
            <div style="font-size:0.82rem;color:#ccc;margin-top:0.3rem;font-weight:700">${item.desc}</div>
          </div>`).join('')}
      </div>
    </div>
  `;

  document.getElementById('musique-content').innerHTML = html;
}

// ============================================================
//  RECHERCHE & FILTRES
// ============================================================
function setupSearch() {
  // Jeux
  ['jeux-search', 'jeux-category', 'jeux-niveau', 'jeux-espace', 'jeux-intensite'].forEach(id => {
    document.getElementById(id).addEventListener('input', filterJeux);
    document.getElementById(id).addEventListener('change', filterJeux);
  });

  // SAÉ
  ['sae-search', 'sae-cycle', 'sae-moyen', 'sae-competence', 'sae-clientele'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', filterSAE);
      el.addEventListener('change', filterSAE);
    }
  });

  // Éducatifs
  ['edu-search', 'edu-niveau', 'edu-difficulte'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', filterEdu);
      el.addEventListener('change', filterEdu);
    }
  });

  document.getElementById('eduBackBtn').addEventListener('click', () => {
    renderEduTaxonomy();
    document.getElementById('edu-controls').style.display = 'none';
    document.getElementById('edu-stats').style.display = 'none';
  });
}

function filterJeux() {
  const q        = document.getElementById('jeux-search').value.toLowerCase().trim();
  const category = document.getElementById('jeux-category').value;
  const niveau   = document.getElementById('jeux-niveau').value;
  const espace   = document.getElementById('jeux-espace').value;
  const intensite = document.getElementById('jeux-intensite').value;

  state.filteredJeux = state.allJeux.filter(jeu => {
    const text = [jeu.titre, jeu.nom, jeu.origine, ...(jeu.tags || [])].join(' ').toLowerCase();
    if (q && !text.includes(q)) return false;
    if (category && jeu._key !== category) return false;
    if (espace && jeu.espace !== espace) return false;
    if (intensite && !(jeu.niveau_activite || '').toLowerCase().includes(intensite.toLowerCase())) return false;

    if (niveau) {
      const nv  = (jeu.niveau || '').toLowerCase();
      const ageMin = jeu.age_min || 0;
      const ageMax = jeu.age_max || 99;
      if (niveau === 'prescolaire' && !(nv.includes('préscolaire') || nv.includes('maternelle') || ageMax <= 6))  return false;
      if (niveau === 'primaire'    && !(nv.includes('primaire')    || (ageMin <= 12 && ageMax >= 6)))              return false;
      if (niveau === 'secondaire'  && !(nv.includes('secondaire')  || ageMin >= 11))                              return false;
    }

    return true;
  });

  renderJeux();
}

function filterSAE() {
  const q          = document.getElementById('sae-search').value.toLowerCase().trim();
  const cycle      = document.getElementById('sae-cycle').value;
  const moyen      = document.getElementById('sae-moyen').value;
  const competence = document.getElementById('sae-competence').value;
  const clientele  = (document.getElementById('sae-clientele') || {}).value || '';

  state.filteredSAE = state.allSAE.filter(sae => {
    const text = [sae.titre, sae.moyen_action, ...(sae.tags || [])].join(' ').toLowerCase();
    if (q && !text.includes(q)) return false;
    if (cycle && !(sae.cycle || sae._cycle || '').includes(cycle)) return false;
    if (moyen) {
      const detectedKey = detectMoyenKey(sae.moyen_action || '');
      const ma = (sae.moyen_action || '').toLowerCase();
      if (detectedKey !== moyen && !ma.includes(moyen)) return false;
    }
    if (competence) {
      const ma = (sae.moyen_action || '').toLowerCase();
      const cp = (sae.competence_pfeq || '').toLowerCase();
      if (!ma.includes(competence.toLowerCase()) && !cp.includes(competence.toLowerCase())) return false;
    }
    if (clientele) {
      const hdaa = JSON.stringify(sae.adaptations || sae.adaptation_hdaa || sae.adaptations_besoins_speciaux || '').toLowerCase();
      const tags  = (sae.tags || []).join(' ').toLowerCase();
      const niveau = (sae.niveau || sae.cycle || '').toLowerCase();
      const clienteleMap = {
        'tsa':       ['tsa', 'autisme', 'autistique', 'spectre'],
        'handicap':  ['handicap', 'physique', 'moteur', 'fauteuil', 'mobilité réduite', 'mobilite reduite'],
        'deficience':['déficience', 'deficience', 'intellectuelle', ' di '],
        'maternelle':['maternelle', 'préscolaire', 'prescolaire', '4 ans', '5 ans'],
      };
      const keywords = clienteleMap[clientele] || [clientele];
      const allText = hdaa + ' ' + tags + ' ' + niveau;
      if (!keywords.some(kw => allText.includes(kw))) return false;
    }
    return true;
  });

  // Afficher/masquer le pill de moyen actif
  const pill = document.getElementById('sae-moyen-active');
  if (moyen) {
    const illus = getIllus(moyen);
    pill.textContent = `${illus.emoji} ${moyen.toUpperCase()}`;
    pill.style.display = '';
  } else {
    pill.style.display = 'none';
  }

  renderSAE();
}

// ============================================================
//  NAVIGATEUR MOYENS D'ACTION (section SAÉ)
// ============================================================
function renderMoyensBrowser() {
  const grid = document.getElementById('moyensGrid');
  const title = document.getElementById('moyensTitle');
  if (!grid) return;
  title.textContent = t('moyensTitle');

  grid.innerHTML = MOYENS_ACTION.map(cat => `
    <div class="moyen-cat-block">
      <div class="moyen-cat-title" style="background:${cat.color}">
        ${cat.icon} ${cat.categorie[LANG.current] || cat.categorie.fr}
      </div>
      <div class="moyen-items-row">
        ${cat.items.map(item => {
          const illus = getIllus(item.id);
          const label = item[LANG.current] || item.fr;
          return `<button class="moyen-item-btn" style="border-color:${item.color}"
            onclick="filterByMoyen('${item.id}', '${label}')">
            <span class="moyen-item-emoji">${item.icon}</span>
            <span class="moyen-item-label">${label}</span>
          </button>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function filterByMoyen(moyenId, label) {
  document.getElementById('sae-moyen').value = moyenId;
  filterSAE();
  // Scroll vers la grille SAÉ
  document.getElementById('sae-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
//  SECTION ÉDUCATIFS — TAXONOMIE
// ============================================================
function renderEduTaxonomy() {
  const container = document.getElementById('eduTaxonomy');
  if (!container) return;

  container.innerHTML = `
    <div class="edu-tax-header">
      <h3>${t('eduTaxTitle')}</h3>
      <p style="font-size:0.9rem;opacity:0.7;margin-top:0.3rem">${
        LANG.current === 'fr' ? '100+ éducatifs par geste moteur · Progressions par niveau' :
        LANG.current === 'en' ? '100+ drills per motor skill · Level progressions' :
        '100+ educativos por habilidad motriz · Progresiones por nivel'
      }</p>
    </div>
    <div class="edu-tax-grid">
      ${MOYENS_ACTION.map(cat => `
        <div class="edu-cat-card">
          <div class="edu-cat-header" style="background:${cat.color}">
            <span class="edu-cat-icon">${cat.icon}</span>
            <span class="edu-cat-name">${cat.categorie[LANG.current] || cat.categorie.fr}</span>
            <span class="edu-cat-count">${cat.items.length} ${LANG.current === 'en' ? 'skills' : LANG.current === 'es' ? 'habilidades' : 'habiletés'}</span>
          </div>
          <div class="edu-cat-items">
            ${cat.items.map(item => `
              <button class="edu-item-btn" onclick="openEduGeste('${item.id}', '${(item[LANG.current] || item.fr).replace(/'/g, "\\'")}', '${cat.color}')">
                <span class="edu-item-icon">${item.icon}</span>
                <div class="edu-item-info">
                  <div class="edu-item-name">${item[LANG.current] || item.fr}</div>
                  <div class="edu-item-gestes">${(item.gestes_fr || []).length} ${LANG.current === 'en' ? 'gestures' : LANG.current === 'es' ? 'gestos' : 'gestes'}</div>
                </div>
                <span class="edu-item-arrow">→</span>
              </button>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openEduGeste(gesteId, gesteLabel, color) {
  state.activeEduGeste = gesteId;
  state.activeEduMoyen = gesteLabel;

  // Afficher la liste des gestes du moyen d'action
  const container = document.getElementById('eduTaxonomy');
  // Trouver les gestes de ce moyen
  let gestesList = [];
  let found = null;
  for (const cat of MOYENS_ACTION) {
    for (const item of cat.items) {
      if (item.id === gesteId) { found = item; break; }
    }
    if (found) break;
  }

  if (!found) return;

  container.innerHTML = `
    <div class="edu-geste-header" style="background:${color}">
      <button class="edu-back-btn" onclick="renderEduTaxonomy()">← ${t('back').replace('← ','')}</button>
      <span class="edu-geste-icon">${found.icon}</span>
      <div>
        <div class="edu-geste-title">${found[LANG.current] || found.fr}</div>
        <div class="edu-geste-sub">${found.gestes_fr ? found.gestes_fr.length : 0} gestes · 100+ éducatifs / geste</div>
      </div>
    </div>
    <div class="edu-gestes-list">
      ${(found.gestes_fr || []).map((geste, i) => `
        <div class="edu-geste-card" onclick="loadEduForGeste('${gesteId}', ${i}, '${geste.replace(/'/g,"\\'").replace(/"/g,'\\"')}')">
          <div class="edu-geste-num">${String(i+1).padStart(2,'0')}</div>
          <div class="edu-geste-name">${geste}</div>
          <div class="edu-geste-meta">
            <span class="edu-badge edu-badge-presc">🌱</span>
            <span class="edu-badge edu-badge-prim">📖</span>
            <span class="edu-badge edu-badge-sec">🎓</span>
          </div>
          <div class="edu-geste-arrow">→</div>
        </div>
      `).join('')}
    </div>
    <div style="text-align:center;padding:2rem;background:rgba(0,0,0,0.05);border:3px dashed #ccc;margin-top:1rem">
      <div style="font-family:'Bangers',cursive;font-size:1.8rem;letter-spacing:3px;color:#333">
        🚧 ${LANG.current === 'fr' ? 'ÉDUCATIFS EN COURS DE GÉNÉRATION' : LANG.current === 'en' ? 'DRILLS BEING GENERATED' : 'EDUCATIVOS EN GENERACIÓN'}
      </div>
      <div style="margin-top:0.5rem;font-size:0.9rem;color:#666">
        ${LANG.current === 'fr' ? 'Les éducatifs pour ce geste moteur seront disponibles très prochainement.' :
          LANG.current === 'en' ? 'Drills for this motor skill will be available very soon.' :
          'Los educativos para esta habilidad motriz estarán disponibles muy pronto.'}
      </div>
    </div>
  `;
}

function loadEduForGeste(gesteId, gesteIdx, gesteName) {
  // Placeholder — sera rempli quand les JSONs éducatifs seront générés
  console.log('loadEduForGeste', gesteId, gesteIdx, gesteName);
}

// ============================================================
//  STATISTIQUES
// ============================================================
function filterEdu() {
  // Placeholder pour quand les données éducatifs seront chargées
}

function updateJeuxStats() {
  const total  = state.filteredJeux.length;
  const pays   = new Set(state.filteredJeux.map(j => j.origine || '').filter(Boolean)).size;
  const label  = LANG.current === 'en' ? 'GAMES' : LANG.current === 'es' ? 'JUEGOS' : 'JEUX';
  const label2 = LANG.current === 'en' ? 'ORIGINS' : LANG.current === 'es' ? 'ORÍGENES' : 'ORIGINES';
  document.getElementById('jeux-count').textContent = `${total} ${label}`;
  document.getElementById('jeux-pays').textContent  = `${pays} ${label2}`;
}

function updateSAEStats() {
  const total  = state.filteredSAE.length;
  const pays   = new Set(state.filteredSAE.map(s => s.origine_mondiale || '').filter(Boolean)).size;
  const label  = LANG.current === 'en' ? 'LSA' : LANG.current === 'es' ? 'SEA' : 'SAÉ';
  const label2 = LANG.current === 'en' ? 'CULTURES' : LANG.current === 'es' ? 'CULTURAS' : 'CULTURES';
  document.getElementById('sae-count').textContent = `${total} ${label}`;
  document.getElementById('sae-pays').textContent  = `${pays} ${label2}`;
}

function updateHeaderStats() {
  document.getElementById('hstat-jeux').innerHTML = `${state.allJeux.length}<span>JEUX</span>`;
  document.getElementById('hstat-sae').innerHTML  = `${state.allSAE.length}<span>SAÉ</span>`;
  const allPays = new Set([
    ...state.allJeux.map(j => j.origine || ''),
    ...state.allSAE.map(s => s.origine_mondiale || ''),
  ].filter(Boolean)).size;
  document.getElementById('hstat-pays').innerHTML = `${allPays}<span>PAYS</span>`;
}

// ============================================================
//  MODAL — CLOSE
// ============================================================
function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

document.getElementById('modal-backdrop').addEventListener('click', closeModal);

// ============================================================
//  LOADING
// ============================================================
function progress(pct) {
  const bar = document.getElementById('loadProgress');
  if (bar) bar.style.width = pct + '%';
}

function hideLoading() {
  const loading = document.getElementById('loading');
  const app     = document.getElementById('app');
  loading.style.opacity = '0';
  loading.style.transition = 'opacity 0.5s';
  setTimeout(() => {
    loading.classList.add('hidden');
    app.classList.remove('hidden');
  }, 500);
}
