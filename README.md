# Carte de prix (corrigée)

## Bugs corrigés

- `box-shdow` → `box-shadow`
- `<h2>` jamais fermé (`Basic Plan<h2>` → `</h2>`)
- Bouton sans `type`, sans `cursor`, sans gestionnaire de clic
- Mise en page : carte blanche sur fond blanc, pas de `box-sizing`, contenu collé, bouton trop petit

## Lancer

Ouvrir `index.html` dans le navigateur.

## Réutiliser

Dupliquer un `<article class="pricing-card">` et changer titre, prix, liste et `data-plan`. Le clic émet l’événement `pricing:select`.
