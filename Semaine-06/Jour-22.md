# Objectifs Journaliers

## Lundi 02/06/2025

### Installer Angular et Angular CLI

- [x] Installer Node.js (si non présent)
- [x] Installer Angular CLI globalement : `npm install -g @angular/cli`
- [x] Vérifier l’installation avec `ng version`

### Utiliser Angular CLI

- [x] Créer une application avec `ng new mon-app`
- [x] Comprendre les options proposées lors de la création (`SCSS`, routing, etc.)
- [x] Lancer le serveur de développement avec `ng serve`
- [x] Générer un composant avec `ng generate component`
- [x] Générer un service avec `ng generate service`
- [x] Lister toutes les commandes disponibles avec `ng help`

### Explorer l’architecture d’un projet Angular

- [x] Comprendre le rôle des répertoires principaux (`src/`, `app/`, `assets/`, etc.)
- [x] Identifier les fichiers clés : `main.ts`, `app.module.ts`, `angular.json`
- [x] Découvrir l'architecture SPA (Single Page Application)

### Créer et utiliser des composants

- [ ] Comprendre le rôle du décorateur `@Component`
- [ ] Utiliser un composant enfant dans `app.component.html`
- [ ] Modifier le HTML, CSS et TS d’un composant

### Lier HTML et TypeScript

- [x] Interpolation : `{{ message }}`
- [x] Property binding : `[src]="imageUrl"`
- [x] Event binding : `(click)="increment()"`
- [ ] Two-way binding (introduction) avec `[(ngModel)]` (à approfondir jour 2)

### Mini-exercice pratique

- [ ] Créer un composant `HelloUserComponent` qui affiche un nom et un compteur de clics. Ajouter un champ d’input pour changer le nom (avec `[(ngModel)]`).
