const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Test GET
app.get("/", (req, res) => {
  res.send("✅ Serveur Sama Panier Ndougou actif !");
});

// IA SIMULÉE
app.post("/ia", (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt manquant" });

    const texte = prompt.toLowerCase();
    let pack = [];

    if (texte.includes("mafé")) {
      pack = [
        { name: "Bœuf", qty: 1 },
        { name: "Tomates", qty: 3 },
        { name: "Oignons", qty: 1 },
        { name: "Aubergine", qty: 1 },
        { name: "Carottes", qty: 2 }
      ];
    } else if (texte.includes("yassa")) {
      pack = [
        { name: "Poulet", qty: 1 },
        { name: "Oignons", qty: 3 },
        { name: "Citron vert", qty: 2 },
        { name: "Piment vert", qty: 1 },
        { name: "Tomates", qty: 2 }
      ];
    } else if (texte.includes("thieb")) {
      pack = [
        { name: "Poisson", qty: 1 },
        { name: "Tomates", qty: 3 },
        { name: "Oignons", qty: 2 },
        { name: "Riz brisé local", qty: 1 },
        { name: "Carottes", qty: 2 }
      ];
    } else {
      pack = [
        { name: "Tomates", qty: 2 },
        { name: "Oignons", qty: 1 },
        { name: "Piment vert", qty: 1 }
      ];
    }

    res.status(200).json({ pack });

  } catch (err) {
    res.status(500).json({ error: "Erreur serveur", message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Serveur actif sur http://localhost:${PORT}`);
});