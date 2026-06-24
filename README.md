# AgriMétéo Sénégal

## Présentation du projet

AgriMétéo Sénégal est une application web développée avec Angular permettant de surveiller les conditions climatiques des différentes régions du Sénégal.

L'objectif du projet est d'aider les acteurs du secteur agricole à anticiper les risques météorologiques grâce à une carte interactive, un tableau de bord météo et des outils d'analyse prédictive.

L'utilisateur peut sélectionner une région sur la carte du Sénégal afin d'obtenir en temps réel les données météorologiques associées.

---

## Fonctionnalités

### Carte interactive du Sénégal

- Affichage des 14 régions du Sénégal via un fichier SVG.
- Mise en surbrillance de la région au survol.
- Sélection d'une région au clic.
- Synchronisation entre la carte et la liste des régions.

### Géolocalisation

- Détection automatique de la position de l'utilisateur.
- Identification de la région la plus proche à partir des coordonnées GPS.
- Chargement automatique de la météo de la région détectée.
- Si la géolocalisation est refusée ou hors du Sénégal, la région de Dakar est chargée par défaut.

### Données météorologiques en temps réel

- Température actuelle.
- Température ressentie.
- Humidité.
- Vitesse du vent.
- Lever du soleil.
- Coucher du soleil.
- Description météo.
- Icône météo dynamique.

### Analyse prédictive

- Génération d'un historique simulé des températures sur les 7 derniers jours.
- Affichage graphique avec Chart.js.
- Mise à jour automatique lors du changement de région.

### Indice de risque climatique

- Calcul automatique d'un score de risque climatique.
- Affichage sous forme de jauge et badge.
- Classification du niveau de risque.

### Gestion des erreurs

- Gestion des erreurs API.
- Affichage d'un état de chargement.
- Chargement d'une région par défaut en cas d'échec.

---

## Choix technologiques

| Technologie           Rôle
|-----------------------------
| Angular 22            Framework Front-End
| TypeScript            Langage principal
| Tailwind CSS          Mise en forme et responsive design
| OpenWeatherMap API    Données météorologiques
| Chart.js              Visualisation des données 
| SVG                   Carte interactive du Sénégal
| Font Awesome          Icônes

---

## Architecture du projet

```text
src/
│
├── app/
│   │
│   ├── features/
│   │   ├── dashboard/
│   │   ├── card-map/
│   │   ├── dashboard-panel/
│   │   ├── list-regions/
│   │   ├── weather-chart/
│   │   └── stats-cards/
│   │
│   ├── services/
│   │   └── weather.service.ts
│   │
│   ├── data/
│   │   └── regions.data.ts
│   │
│   ├── utils/
│   │   ├── risk-calculator.ts
│       └── temperature-history.ts
└── env.ts
```

---

## Architecture fonctionnelle

```text
Utilisateur
      |
      v
Carte SVG
      |
      v
Sélection d'une région
      |
      v
Weather Service
      |
      v
OpenWeather API
      |
      v
Données météo
      |
      +------------------+
      |                  |
      v                  v
Dashboard         Analyse prédictive
      |                  |
      +--------+---------+
               |
               v
Indice de risque climatique
```

---

## Logique métier : Indice de Risque Climatique

L'indice de risque climatique permet d'évaluer le niveau de danger potentiel pour les activités agricoles à partir des données météorologiques.

### Paramètres utilisés

- Température
- Humidité

### Fonction de calcul

```typescript
export function calculateRisk(temp: number, humidity: number): RiskResult {

  // Risque élevé
  if (temp > 35 && humidity > 50) {

    return {
      score: 85,
      label: 'Risque Canicule Élevé',
      color: '#FF4500',

    };

  }

  // Risque modéré
  if (temp > 30 && humidity > 40) {

    return {
      score: 55,
      label: 'Risque Modéré',
      color: '#F59E0B'
    };

  }

  // Risque faible
  return {
    score: 22,
    label: 'Risque Faible',
    color: '#22C55E'
  };

}
```

### Interprétation

| Score | Niveau |
|---------|---------|
| 0 - 30 | Faible |
| 31 - 40 | Modéré |
| 61 - 100 | Élevé |

Cette logique permet d'alerter rapidement l'utilisateur sur les conditions climatiques susceptibles d'impacter les cultures.

---

## Analyse prédictive

Les API météo gratuites ne fournissant pas les données historiques complètes, une simulation a été mise en place.

Principe :

1. Récupération de la température actuelle.
2. Génération aléatoire d'écarts compris entre -3°C et +3°C.
3. Création d'une série temporelle sur les 7 derniers jours.
4. Affichage des résultats sous forme de graphique.

Exemple :

```text
Température actuelle : 32°C

Historique simulé :
29°C
31°C
34°C
30°C
33°C
35°C
32°C
```

---

## Installation du projet

### 1. Cloner le dépôt

```bash
git clone https://github.com/Khalil-samb/AgriMeteo/tree/main
```

### 2. Accéder au dossier

```bash
cd AgriMeteo
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer le projet

```bash
ng serve
```

Application disponible sur :

```text
http://localhost:4200
```

---

## Déploiement

Le projet peut être déployé sur Vercel: 

```bash
git https://agri-meteo-ten.vercel.app/
```

---

## Améliorations futures

- Intégration d'un modèle IA pour l'analyse avancée des risques.
- Prévisions météorologiques sur plusieurs jours.
- Alertes climatiques en temps réel.
- Tableau de bord statistique avancé.
- Authentification des utilisateurs.
- Historisation des données météorologiques.

---

## Équipe

- Aliou DIALLO
- Ibrahima SAMB
- Fatoumata DRAME