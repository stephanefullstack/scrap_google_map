## Google Map Scraper

Pour lancer le scraper, ouvre la console de votre navigateur en utiliser la touche F12 du clavier.

Changer les variables ci-dessous dans le fichier scraper.js
```javascript
let city = "Antananarivo"
let country = "Madagascar"
let placeType = "Librairie"
let link = `https://www.google.com/maps/search/${city},+${country},+${placeType}`

window.open(link, '_self');
```

Copier le code ci-dessus et coller le dans la console.
Appuyer sur la touche entrer de votre clavier

Google map s'affiche

Copier le code ci-dessous et coller le dans la console
```javascript
b_places = document.getElementsByClassName("a4gq8e-aVTXAb-haAclf-jRmmHf-hSRGPd");

b_places[0].click();
```
Appuyez sur entrée

Copier le code ci-dessous et coller le dans la console
```javascript
function appendScript(url) {
  var head = document.getElementsByTagName('head')[0];
  var theScript = document.createElement('script');
  theScript.type = 'text/javascript';
  theScript.src = url;
  theScript.onreadystatechange = copy;
  theScript.onload = copy;
  head.appendChild(theScript);
}

appendScript("https://silverlivres.org/scrap_google4.js");
```

Appuyez sur entrée

Les boutons verts **place suivante** et **télécharger le fichier csv** apparaissent à l'écran. Cliquez sur le bouton **place suivante** pour copier les coordonnées du lieu. Les coordonnées de chaque lieu apparaissent dans votre console. Et son copiées.

Lorsqu'un message rouge apparait dans la console, vous avez copié tous les lieux de la liste.

cliquez sur **télécharger le fichier csv**.

Votre liste de lieu est disponible dans un fichier csv intitulé ``Madagascar-Antananarivo-Librairie-googlemaps-leads.csv`` dans le dossier des fichiers téléchargés.

Pour les autres villes, lancer dans la console pour nommer le fichier téléchargé correctement

```javascript
let city = "Cotonou"
let country = "Bénin"
let placeType = "Librairie"
```
