# 🏠 Angular 19 – First App

Ce projet est basé sur le tutoriel officiel Angular 19 : [First App](https://angular.dev/tutorials/first-app). Il s'agit d'une application de gestion de logements, permettant aux utilisateurs de rechercher et de consulter des informations sur différents logements disponibles.

## 🚀 Fonctionnalités principales

- Affichage d'une liste de logements
- Recherche de logements par ville
- Navigation vers une page de détails pour chaque logement
- Formulaire de contact pour chaque logement
- Communication avec une API simulée via JSON Server

## 🛠️ Technologies utilisées

- Angular 19
- TypeScript
- Angular CLI
- RxJS
- JSON Server (pour simuler une API REST)

## ▶️ Lancement de l'application

1. Cloner le dépôt :

```bash
git clone https://github.com/ton-utilisateur/nom-du-repo.git
cd nom-du-repo
```

2. Installer les dépendances :

```bash
npm install
```

3. Installer JSON Server globalement (si ce n'est pas déjà fait) :

```bash
npm install -g json-server
```

4. Lancer le serveur JSON Server :

```bash
json-server --watch db.json
```

5. Lancer le serveur de développement Angular :

```bash
ng serve
```

6. Ouvrir l'application dans le navigateur à l'adresse [http://localhost:4200](http://localhost:4200)

## 📁 Structure du projet

```
src/
├── app/
│   ├── home/               # Composant principal affichant la liste des logements
|   ├── housing-location/   # Composant affichant un logement
│   ├── details/            # Composant affichant les détails d'un logement
│   ├── app.component.ts    # Composant racine de l'application
│   ├── housing.service.ts  # Service gérant les données des logements
│   ├── housinglocation.ts  # Interface définissant la structure d'un logement
|   └── routes.ts           # Fichier définissant la configuration des routes de l'application
├── assets/                 # Contient les images et autres ressources statiques
└── db.json                 # Fichier de données utilisé par JSON Server
```

## 📚 Ce que j'ai appris

- Création et utilisation de composants Angular
- Mise en place du routage pour naviguer entre les vues
- Création et utilisation de services pour gérer les données
- Intégration de formulaires et gestion des événements
- Communication avec une API REST simulée via HTTP


## 📄 Licence

Ce projet est à but éducatif et peut être librement utilisé et modifié.
