# Objectifs Journaliers

## Mercredi 04/06/2025

### Routing et navigation

- [x] Créer et configurer `app-routing.module.ts`
- [x] Définir les routes de base
- [x] Ajouter `<router-outlet>` dans `app.component.html`
- [x] Naviguer avec `[routerLink]`
- [x] Ajouter une route avec paramètre (`:id`)
- [x] Récupérer un paramètre avec `ActivatedRoute`

### Créer et utiliser un service Angular

- [x] Générer un service avec `ng generate service`
- [x] Comprendre le décorateur `@Injectable()`
- [x] Injecter un service dans un composant avec le constructeur
- [x] Centraliser des données (tableau, messages, etc.)

### Injection de dépendances

- [ ] Comprendre le système d’injection Angular
- [ ] Utiliser `providedIn: 'root'` pour un singleton global
- [ ] Ajouter un service à un module spécifique si nécessaire

### Structure avancée

- [ ] Créer un composant enfant
- [ ] Transmettre des données avec `@Input`
- [ ] Réagir à des événements avec `@Output` + `EventEmitter`

### Mini-exercice pratique

- [ ] Créer un `ProductService` et deux composants :
  - ProductListComponent` affiche une liste de produits (depuis le service)
  - `ProductDetailsComponent` affiche le détail du produit (via route avec ID)
