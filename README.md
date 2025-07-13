# Sama Panier Ndougou – Serveur

Petit serveur Node.js Express pour générer des paniers de recettes automatiquement à partir d’un prompt texte (mafé, yassa, thiéb…).
## Démarrage

```bash
npm install
npm start
```

## Exemple

```http
POST /ia
Content-Type: application/json

{
  "prompt": "Je veux cuisiner du yassa"
}
```

Réponse :

```json
{
  "pack": [
    { "name": "Poulet", "qty": 1 },
    { "name": "Oignons", "qty": 3 },
    { "name": "Citron vert", "qty": 2 },
    { "name": "Piment vert", "qty": 1 },
    { "name": "Tomates", "qty": 2 }
  ]
}
```