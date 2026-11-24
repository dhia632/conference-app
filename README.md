# Conference App – Prosit 1 (Angular 21)

Application de gestion de conférences : composants standalone, Signals, data-binding,
contrôle de flux natif (`@if`, `@for`), pipes et communication `input()` / `output()`.

## Lancer
```bash
npm install --legacy-peer-deps
npm start        # http://localhost:4200
npm test         # tests Vitest
npm run build    # dist/conference-app/browser
```

## Structure
| Composant | Rôle |
|---|---|
| `header`, `nav-menu`, `footer` | Éléments de mise en page réutilisables |
| `user-profile`, `friends-list`, `notifications` | Sections de la page d'accueil (`home`) |
| `conference-list` (classe `ConferenceList`) | Liste, recherche, inscription |
| `conference-card` | Carte d'une conférence (`input()` + `output()`) |

## Mécanismes utilisés et intérêt
- **Composants standalone** : découpage indépendant, réutilisable, maintenable à plusieurs développeurs.
- **Signals** (`signal`, `computed`, `update`) : état réactif ; `filtered` et `remaining` se recalculent seuls.
- **Interpolation / Property / Event binding** : `{{ }}`, `[conference]`, `(click)`.
- **Two-way binding** : `[(ngModel)]` sur la recherche et les champs du profil.
- **Control flow** : `@for … track … @empty` (liste vide), `@if` / `@else` (messages, détails).
- **Pipes** : `uppercase` (titres), `date:'dd/MM/yyyy'` (dates) – transforment l'affichage sans changer la donnée.
- **Binding de classe** : `[class.green|orange|red]` selon les places restantes (≥10 vert, <10 orange, 0 rouge).
- **input() / output()** : le parent passe la conférence, l'enfant émet l'inscription.

## Déploiement Vercel
```bash
git init && git add . && git commit -m "Prosit 1"
git remote add origin <URL_DU_REPO> && git push -u origin main
```
Puis sur vercel.com : *Add New → Project → importer le repo*. `vercel.json` configure déjà le build
et la réécriture SPA (preset Angular détecté automatiquement).
