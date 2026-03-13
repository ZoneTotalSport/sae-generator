# Zone Total Sport — Générateur de SAÉ

Générateur interactif de Situations d'Apprentissage et d'Évaluation (SAÉ) conformes au PFEQ Québec.

**Site :** [zonetotalsport.ca](https://zonetotalsport.ca)

## Déploiement GitHub Pages

1. Créer le repo `sae-generator` sur GitHub (compte : `zonetotalsport`)
2. Pousser ce dossier sur la branche `main`
3. Aller dans **Settings → Pages → Source → GitHub Actions**
4. Le workflow se déclenche automatiquement

## Domaine custom (sae.zonetotalsport.ca)

1. Dans **Settings → Pages → Custom domain** : entrer `sae.zonetotalsport.ca`
2. Chez ton registraire DNS, ajouter un enregistrement CNAME :
   - Nom : `sae`
   - Valeur : `zonetotalsport.github.io`

## Structure

```
sae-generator/
├── index.html          ← Interface du générateur
├── css/style.css       ← Styles
├── js/app.js           ← Logique
├── data/               ← Fichiers JSON des SAÉ
│   ├── index.json
│   ├── locomotion.json
│   ├── manipulation.json
│   └── ...
└── .github/workflows/  ← Déploiement auto
```
