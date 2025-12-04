================================================================================
Guide D'utilisation
================================================================================

================================================================================

================================================================================
📌 BESOIN 1 : COMMANDES DE TRAVAIL
================================================================================

COMMENCER À TRAVAILLER SUR BESOIN 1
────────────────────────────────────────────────────────────────────────────

git checkout feature/besoin1


TRAVAILLER SUR LES FICHIERS
────────────────────────────────────────────────────────────────────────────

Modifier uniquement les fichiers dans besoin1/:
  - besoin1/index.html
  - besoin1/styles/_variables.scss
  - besoin1/styles/_components.scss
  - besoin1/styles/_sections.scss
  - besoin1/styles/_utilities.scss
  - besoin1/styles/besoin1.scss
  - besoin1/assets/images/...


VALIDER ET SAUVEGARDER LE TRAVAIL
────────────────────────────────────────────────────────────────────────────

git status

git add besoin1/

git commit -m "feat(besoin1): ajouter styles et composants visuels"

git log --oneline

git push origin feature/besoin1


FUSIONNER VERS MAIN QUAND C'EST TERMINÉ
────────────────────────────────────────────────────────────────────────────

git checkout main

git merge feature/besoin1

git push origin main


================================================================================
📌 BESOIN 2 : COMMANDES DE TRAVAIL
================================================================================

COMMENCER À TRAVAILLER SUR BESOIN 2
────────────────────────────────────────────────────────────────────────────

git checkout feature/besoin2


TRAVAILLER SUR LES FICHIERS
────────────────────────────────────────────────────────────────────────────

Modifier uniquement les fichiers dans besoin2/:
  - besoin2/index.html
  - besoin2/styles/_variables.scss
  - besoin2/styles/_components.scss
  - besoin2/styles/_sections.scss
  - besoin2/styles/_utilities.scss
  - besoin2/styles/besoin2.scss
  - besoin2/assets/images/...


VALIDER ET SAUVEGARDER LE TRAVAIL
────────────────────────────────────────────────────────────────────────────

git status

git add besoin2/

git commit -m "feat(besoin2): créer la structure HTML et le contenu"

git log --oneline

git push origin feature/besoin2


FUSIONNER VERS MAIN QUAND C'EST TERMINÉ
────────────────────────────────────────────────────────────────────────────

git checkout main

git merge feature/besoin2

git push origin main


================================================================================
📌 BESOIN 3 : COMMANDES DE TRAVAIL
================================================================================

COMMENCER À TRAVAILLER SUR BESOIN 3
────────────────────────────────────────────────────────────────────────────

git checkout feature/besoin3


TRAVAILLER SUR LES FICHIERS
────────────────────────────────────────────────────────────────────────────

Modifier uniquement les fichiers dans besoin3/:
  - besoin3/index.html
  - besoin3/styles/_variables.scss
  - besoin3/styles/_components.scss
  - besoin3/styles/_sections.scss
  - besoin3/styles/_utilities.scss
  - besoin3/styles/besoin3.scss
  - besoin3/assets/images/...

Aussi modifier les fichiers racine de configuration:
  - package.json (scripts npm)
  - tailwind.config.js
  - postcss.config.js
  - src/input.css


VALIDER ET SAUVEGARDER LE TRAVAIL
────────────────────────────────────────────────────────────────────────────

git status

git add besoin3/

git commit -m "feat(besoin3): ajouter styles et composants visuels"

git log --oneline

git push origin feature/besoin3


FUSIONNER VERS MAIN QUAND C'EST TERMINÉ
────────────────────────────────────────────────────────────────────────────

git checkout main

git merge feature/besoin3

git push origin main

================================================================================
🔄 COMMANDES NPM (DÉVELOPPEMENT)
================================================================================

DÉMARRER LE DÉVELOPPEMENT
────────────────────────────────────────────────────────────────────────────
Install Dependencies
npm install

Compiler Tailwind et Sass en mode watch (à jour automatiquement):
npm run dev


================================================================================
FUSIONNER LES BRANCHES
================================================================================

En cas de conflit (à éviter avec cette structure):
git merge --abort



ANNULER DES CHANGEMENTS
────────────────────────────────────────────────────────────────────────────

Annuler les modifications d'un fichier (avant git add):
git checkout -- besoin1/index.html

Annuler les changements depuis le dernier commit:
git reset --hard

Voir les changements avant de committer:
git diff besoin1/
