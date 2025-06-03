# Objectifs Journaliers

## Mardi 03/06/2025

### Directives structurelles

- [x] `*ngIf` pour afficher ou masquer un élément selon une condition
- [x] `*ngFor` pour afficher une liste d’éléments
- [x] `*ngIf...else` avec `<ng-template>`

### Directives d’attribut

- [x] `[ngStyle]` pour appliquer des styles dynamiques
- [x] `[ngClass]` pour appliquer des classes CSS dynamiques

### Pipes

- [x] Utiliser des pipes intégrés : `uppercase`, `date`, `currency`, `json`
- [x] Enchaîner plusieurs pipes
- [ ] Créer un pipe personnalisé (si temps)

### Formulaires avec `FormsModule`

- [x] Importer `FormsModule` dans `AppModule`
- [x] Lier des champs avec `[(ngModel)]`
- [x] Gérer l’envoi du formulaire avec `(ngSubmit)`
- [x] Ajouter des validations de base (`required`, `minlength`, etc.)
- [x] Afficher les erreurs de validation avec `*ngIf`

### Modules Angular

- [x] Créer un module personnalisé avec `ng generate module`
- [x] Comprendre `declarations`, `imports`, `exports`
- [ ] Réorganiser les composants dans différents modules

### Mini-exercice pratique

- [x] Créer un `UserFormComponent` avec un formulaire de création d’utilisateur :
  - [x] champs : prénom, nom, email
  - [x] bouton de validation avec affichage des données saisies
  - [x] affichage d’un message d’erreur si un champ est vide
