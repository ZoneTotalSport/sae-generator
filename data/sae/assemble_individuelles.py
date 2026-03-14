#!/usr/bin/env python3
import json, os

parts = [
    'individuelles_part1.json',
    'individuelles_part2.json',
    'individuelles_part3.json',
    'individuelles_part4.json',
    'individuelles_part5.json',
    'individuelles_part6.json',
    'individuelles_part7.json',
    'individuelles_part8.json',
]

base = '/Users/admin/PROJETS_CLAUDE/sae-generator/data/sae/'
all_sae = []
for p in parts:
    with open(base + p) as f:
        all_sae.extend(json.load(f))

print(f"Total: {len(all_sae)} SAÉ")

from collections import Counter
print("\nPar cycle:")
for k,v in sorted(Counter(s['cycle'] for s in all_sae).items()):
    print(f"  {k}: {v}")

print("\nPar sport:")
for k,v in sorted(Counter(s['sport'] for s in all_sae).items()):
    print(f"  {k}: {v}")

result = {
    "domaine": "Activités d'adresse et individuelles",
    "total_sae": len(all_sae),
    "sports": ["athlétisme", "badminton", "tennis de table", "natation", "musculation", "tir à l'arc", "golf adapté", "bowling adapté", "pétanque", "disc golf", "patinage de vitesse", "triathlon scolaire"],
    "programme": "PFEQ — Éducation physique et à la santé",
    "sae": all_sae
}

out = base + 'individuelles_COMPLET.json'
with open(out, 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=2)

print(f"\nFichier créé: {out}")
print(f"Taille: {os.path.getsize(out) / 1024:.0f} KB")
