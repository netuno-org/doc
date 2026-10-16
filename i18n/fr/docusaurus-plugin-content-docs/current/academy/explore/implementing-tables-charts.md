---
id: implementing-tables-charts
title: Implémentation de tableaux et graphiques
sidebar_label: Tableaux et Graphiques
---

Dans ce tutoriel, nous allons créer l'interface et la logique d'une application simple, en mettant l'accent sur la visualisation de données. Le développement du projet abordera les sujets suivants :

- La création de **« Formulaires »**, **« Champs »** et **« Relations »** pour structurer la base de données.
- La construction de **« Services Web REST »** pour fournir les données et l'affichage dynamique des informations dans des tableaux et des graphiques de l'application, en utilisant les bibliothèques _<a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank">React ChartJS 2</a>_ et la dépendance _Chart.js_, ainsi que le composant de tableau d'<a href="https://ant.design/" target="_blank">Ant Design</a>.

Toute la structure visuelle du projet sera développée en utilisant **HTML, JavaScript et React.js**.
Il est recommandé d'avoir des connaissances de base en :
- **JavaScript**
- **React.js**
- **HTML**

💡 **Si vous avez des questions sur ces étapes, consultez :**
   - [Guide de l'interface : Formulaires](/docs/academy/ui/forms)
   - [Guide de l'interface : Champs](/docs/academy/ui/fields)
   - [Guide de l'interface : Relations entre formulaires](/docs/academy/ui/relationships-between-forms)
   - [Guide de l'interface : Services Web REST](/docs/academy/explore/services)


## Produit final

En suivant toutes les étapes de ce tutoriel, vous construirez un tableau de bord fonctionnel dans l'espace de travail de Netuno, contenant :

* Un **tableau de données** listant les enregistrements des travailleurs et les totaux d'heures.
* Un **graphique à barres** dynamique et coloré affichant visuellement ces mêmes données.

![produit-final-fr.png](/docs/assets/academy/explore/implementing-tables-charts/product-final-pt.png)


## Architecture de la solution

Avant d'écrire du code, il est important de comprendre comment les pièces s'emboîtent. La solution est divisée en **4 couches** qui communiquent de haut en bas :

```
DashboardContainer         (récupère les données auprès du serveur)
       │
       ▼
VisualisationDonnees       (organise la mise en page en deux colonnes)
       │
  ┌────┴────┐
  ▼         ▼
ListeTableau  DiagrammeBarres   (affichent les données reçues)
```

:::tip
L'avantage de cette architecture est que chaque composant a **une seule responsabilité**.
:::

## Étape 1 : Structure des données

La première étape consiste à créer les formulaires, configurer la relation entre eux et les remplir avec des données afin de générer le tableau et le graphique plus loin.

Voici le diagramme avec l'architecture des formulaires et les champs que vous devrez reproduire dans votre environnement Netuno :

![premiere-etape-fr.png](/docs/assets/academy/explore/implementing-tables-charts/first-step-pt.png)

> **Important :** Bien que le champ `id` apparaisse dans le diagramme, **il n'est pas nécessaire de le créer manuellement**. Netuno génère cet identifiant automatiquement juste après la création de la table.

### Modèle de tableau de bord

Pour afficher le tableau et le graphique, nous aurons besoin d'un emplacement dans l'interface de votre application. Netuno met déjà à disposition un modèle de base pour le panneau principal.

Ouvrez votre éditeur de code et trouvez le fichier :

```text
/apps/monapp/server/templates/dashboard.html
```
*(N'oubliez pas de remplacer **monapp** par le nom réel de votre dossier d'application).*

Vous remarquerez la ligne de code HTML suivante :

```html
<div id="app-dashboard"></div>
```

## Étape 2 : Service de données

Maintenant que nous avons la base de données prête et le HTML préparé, nous devons créer le « messager » (un Service Web REST). Il sera responsable d'aller jusqu'à la base de données, de calculer le total d'heures de chaque travailleur et de livrer cette information prête pour le tableau et le graphique.


### Création du fichier de service

Les services dans Netuno sont stockés dans le dossier `server/services/`. Naviguez jusqu'au répertoire de votre projet et créez le fichier `travailleurs.js` :

```text
/apps/monapp/server/services/travailleurs.js
```
Le **DashboardContainer** détecte la langue du panneau et appelle **/services/travailleurs** lorsque le panneau est en français, ou **/services/workers** lorsqu'il est en anglais. Chaque langue a son propre fichier de service.

### Écriture du code

Ce code effectue trois actions principales en utilisant les ressources natives de Netuno (**_db**, **_val** et **_out**) :

- **Requête _db.query :** Recherche uniquement les travailleurs **actifs** dans la base de données et calcule la somme des heures travaillées par chacun.

- **Traitement _val.list et _val.map :** Organise le résultat dans une liste propre avec des objets structurés.

- **Réponse _out.json :** Envoie les données au format JSON pour que l'interface (React) puisse les lire.

Ouvrez le fichier `travailleurs.js` et collez le code ci-dessous :

```javascript
// 1. Requête, _db.query() exécute le SQL et retourne la liste des enregistrements trouvés.
const dbEnregistrements = _db.query(`
    SELECT DISTINCT
        travailleur.nom, SUM(DATEDIFF(HOUR, enregistrement.debut, enregistrement.fin)) AS total
    FROM travailleur INNER JOIN enregistrement
        ON travailleur.id = enregistrement.travailleur_id
    WHERE travailleur.active = true AND enregistrement.active = true
    GROUP BY travailleur.nom
    ORDER BY total ASC
`);

// 2. Traitement des données, _val.list() crée une liste vide pour stocker les données traitées.
const liste = _val.list();

// Parcourt chaque ligne retournée par la base de données
for (const dbEnregistrement of dbEnregistrements) {
    liste.add(
        // _val.map() crée un objet avec les champs que React va consommer
        _val.map()
            .set("nom", dbEnregistrement.getString("nom"))  // nom → champ "nom"
            .set("total", dbEnregistrement.getInt("total"))   // total d'heures → champ "total"
    );
}

// 3. Réponse
// Envoie la liste finale au format JSON à l'interface React.
_out.json(liste);
```
:::tip
-  **Attention aux noms des champs :** Les champs définis ici comme **« nom »** et **« total »** sont exactement les mêmes que ceux que les composants React iront chercher dans les prochaines étapes (dataIndex: 'nom' et dataIndex: 'total'). Ils doivent être identiques.

- **À propos du filtre active = true :** La base de données possède une colonne **active** dans les tables **travailleur** et **enregistrement**. En filtrant uniquement les enregistrements actifs, nous garantissons que les données archivées ou désactivées n'apparaissent pas dans le tableau et le graphique.
:::

## Étape 3 : Environnement frontend (React)

Maintenant que le backend (base de données et services) est prêt, préparons l'interface visuelle.

Ouvrez le terminal et suivez les étapes ci-dessous :

#### 1. Installer les dépendances de base
Naviguez jusqu'au dossier `ui` de votre application et installez les paquets.

```bash
npm install
```

#### 2. Installer les bibliothèques de graphiques

Comme le projet affichera des graphiques, téléchargez les bibliothèques qui réaliseront ce dessin à l'écran :

```bash
npm install react-chartjs-2 chart.js --save 
```

#### 3. Gérer plusieurs langues

Installez la bibliothèque pour gérer plusieurs langues :

```bash
npm install react-intl
```

#### 4. Démarrer le compilateur (Watch)

Une fois tout installé, chaque fois que nous sauvegarderons un fichier, il mettra à jour l'écran automatiquement :

```bash
npm run watch
```

#### 5. Créer les composants
Pour garder le projet organisé, créez des composants séparés pour le tableau et pour le graphique.

Naviguez jusqu'au répertoire `src/components/` de votre application et créez les dossiers :

* Tableau : ListeTableau
* Graphique : DiagrammeBarres
* Conteneur : VisualisationDonnees

```text
/apps/nom_de_votre_app/ui/src/components/ListeTableau/
/apps/nom_de_votre_app/ui/src/components/DiagrammeBarres/
/apps/nom_de_votre_app/ui/src/containers/VisualisationDonnees/
```

## Étape 4 : Composant ListeTableau

Le composant **ListeTableau** recevra les données du service et construira les colonnes automatiquement en utilisant **Ant Design** — une bibliothèque de composants visuels prêts qui accompagne déjà l'interface de Netuno.

Naviguez jusqu'au dossier ListeTableau et créez un fichier `index.jsx` :

```text
/apps/nom_de_votre_app/ui/src/components/ListeTableau/index.jsx
```

Ouvrez le fichier et collez le code ci-dessous :

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { Table } from 'antd'; // Composant Table d'Ant Design

import './index.less';

const messages = 'dashboardcontainer.visualisationdonnees.tableau';

function ListeTableau({ donnees = [] }) {
  // Définition des en-têtes et du champ de l'objet à afficher dans chaque colonne
  const columns = [
    {
      title: <FormattedMessage id={`${messages}.travailleurs`} />, // Titre traduit
      dataIndex: 'nom',  // Champ "nom" du JSON retourné par le service
    },
    {
      title: <FormattedMessage id={`${messages}.total`} />,
      dataIndex: 'total', // Champ "total" du JSON retourné par le service
    }
  ];

  return (
    <Table
      columns={columns}      // Structure des colonnes
      dataSource={donnees}   // Les données elles-mêmes (liste d'objets)
      pagination={false}     // Sans pagination : tous les enregistrements d'un coup
      bordered={true}        // Avec bordures visibles dans les cellules
    />
  );
}

export default ListeTableau;
```

 **Comprendre le code :**

Ce composant fonctionnel reçoit la liste `donnees` comme paramètre (prop) et la transmet directement au `<Table>` d'Ant Design.

La configuration **columns** indique à « Ant Design » quel titre afficher dans l'en-tête **title** et quel champ de l'objet JSON remplir dans la cellule `dataIndex`. Ant Design gère tout le HTML, les styles de bordures et la mise en page automatiquement — il n'est pas nécessaire de créer du CSS manuellement pour cela.

** Fichier index.less :** Créez le fichier `index.less` dans le même dossier. Il peut rester vide pour l'instant, car Ant Design fournit déjà le style de base du tableau.


## Étape 5 : Composant DiagrammeBarres

Nous allons créer un graphique à barres pour visualiser les données en utilisant la bibliothèque **react-chartjs-2**. Ce composant recevra les données, les transformera dans le format que Chart.js comprend, attribuera des couleurs et dessinera le graphique à l'écran.

Naviguez jusqu'au dossier `DiagrammeBarres` et créez un fichier nommé `index.jsx` :

```text
/apps/nom_de_votre_app/ui/src/components/DiagrammeBarres/index.jsx
```
Ouvrez le fichier et collez le code ci-dessous :

```jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';            // Composant de graphique à barres
import { Chart, registerables } from 'chart.js';  // Noyau de Chart.js

import { useIntl } from 'react-intl';

import './index.less';

const messages = 'dashboardcontainer.visualisationdonnees.graphique';

// OBLIGATOIRE : enregistrer tous les éléments de Chart.js avant utilisation.
// Sans cette ligne, le graphique ne s'affiche pas et lance une erreur dans la console.
Chart.register(...registerables);

function DiagrammeBarres({ donnees }) {
  const intl = useIntl();
  const [donneesGraphique, setDonneesGraphique] = useState(null); // Données au format Chart.js

  useEffect(() => {
    // Palette de 7 couleurs pour les barres (cyclique s'il y a plus de 7 éléments)
    const couleurs = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ];

    const etiquettes = [];
    const valeurs = [];

    // Structure de données exigée par Chart.js
    const nouvellesDonneesGraphique = {
      labels: [],       // Noms sur l'axe X (horizontal)
      datasets: [
        {
          label: intl.formatMessage({ id: `${messages}.libelle` }), // Légende traduite
          data: [],           // Valeurs sur l'axe Y (hauteur des barres)
          backgroundColor: [] // Couleur de chaque barre
        }
      ]
    };

    // Itérer sur les données reçues et construire les listes
    for (const i in donnees) {
      etiquettes.push(donnees[i].nom);   // Nom du travailleur → axe X
      valeurs.push(donnees[i].total);  // Total d'heures → hauteur de la barre

      // (i + 1) % 7 : quand "i" atteint 7, revient à 0, répétant les couleurs en cycle
      nouvellesDonneesGraphique.datasets[0].backgroundColor.push(couleurs[(i + 1) % 7]);
    }

    nouvellesDonneesGraphique.labels = etiquettes;
    nouvellesDonneesGraphique.datasets[0].data = valeurs;

    setDonneesGraphique(nouvellesDonneesGraphique); // Enregistrer dans l'état pour déclencher le re-rendu

  }, [donnees]); // Exécuter à nouveau chaque fois que "donnees" change

  // Tant que les données n'ont pas été traitées, ne rien afficher
  if (donneesGraphique == null) {
    return null;
  }

  return (
    <Bar data={donneesGraphique} />
  );
}

export default DiagrammeBarres;
```
**Comprendre le code :**

Ce composant a trois responsabilités principales :

**Préparation `useState` :** Initialise le composant avec un état `null` pour attendre le traitement des données venant du serveur.

**Traitement des données `useEffect` :** Lorsque les données arrivent via la prop `donnees`, le Hook **useEffect** est déclenché automatiquement. Il définit une palette de couleurs et utilise une boucle **for** pour séparer les informations : les noms des travailleurs vont dans les libellés de l'axe X **labels**, les totaux d'heures définissent la hauteur des barres `data`, et une couleur est attribuée à chaque barre de manière cyclique.

**Dessin à l'écran `return` :** Utilise le composant `<Bar>` de la bibliothèque pour dessiner le graphique à partir des données traitées et enregistrées dans l'état.

**Fichier index.less :** Créez également le fichier `index.less` dans le dossier `DiagrammeBarres`. Il peut rester vide pour l'instant.


## Étape 6 : Mise en page visuelle VisualisationDonnees

Maintenant que les composants de tableau et de graphique sont prêts, nous avons besoin d'un conteneur qui les positionne côte à côte à l'écran.

Naviguez jusqu'au dossier **VisualisationDonnees** et créez un fichier nommé `index.jsx` :

```text
/apps/nom_de_votre_app/ui/src/containers/VisualisationDonnees/index.jsx
```

Ouvrez le fichier et collez le code ci-dessous :

```jsx
import React from 'react';

import { FormattedMessage } from 'react-intl'; // Titres traduisibles par langue

import DiagrammeBarres from "../../components/DiagrammeBarres";
import ListeTableau from "../../components/ListeTableau";

import './index.less';

const messages = 'dashboardcontainer.visualisationdonnees';

function VisualisationDonnees({ donnees = [] }) {
  return (
    <div>
      <div className="row">              {/* Ligne de Bootstrap */}

        {/* Colonne de gauche : Tableau */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading visualisation-donnees__panneau">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.tableau.titre`} />
              </h3>
            </div>
            <div className="panel-body">
              <ListeTableau donnees={donnees} />   {/* Transmet les données au tableau */}
            </div>
          </div>
        </div>

        {/* Colonne de droite : Graphique */}
        <div className="col-lg-6">
          <div className="panel panel-default">
            <div className="panel-heading visualisation-donnees__panneau">
              <h3 className="panel-title">
                <FormattedMessage id={`${messages}.graphique.titre`} />
              </h3>
            </div>
            <div className="panel-body">
              <DiagrammeBarres donnees={donnees} />    {/* Transmet les mêmes données au graphique */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VisualisationDonnees;
```
**Comprendre le code :**

Ce composant agit comme un organisateur visuel. Il reçoit la liste `donnees` et la distribue aux deux composants enfants sans aucune transformation.

Les classes `row` et `col-lg-6` viennent de « Bootstrap Grid » et divisent l'écran en deux : la colonne de gauche reçoit le tableau et celle de droite reçoit le graphique. Sur les écrans plus petits (mobiles), elles s'empilent automatiquement.

Les classes `panel`, `panel-heading` et `panel-body` créent l'apparence d'une « petite boîte avec titre » pour chaque composant.

**Fichier index.less :** Créez également le fichier `index.less` dans ce dossier pour la stylisation future des panneaux.

## Étape 7 : Conteneur Dashboard

Nous avons déjà les services dans le backend et les composants visuels dans le frontend. Nous aurons besoin d'un conteneur pour aller au serveur, récupérer les données et les transmettre à **VisualisationDonnees**.

Netuno génère déjà automatiquement la structure de base du Dashboard. Modifiez le fichier existant :

```text
/apps/nom_de_votre_app/ui/src/containers/DashboardContainer/index.jsx
```

Remplacez le contenu du fichier par le code ci-dessous :

```jsx
import React, { useState, useEffect, useImperativeHandle } from "react";

import _service from '@netuno/service-client'; // Client HTTP officiel de Netuno

import { Spin, message } from 'antd';           // Indicateur de chargement et erreurs

import VisualisationDonnees from "../VisualisationDonnees"; // La mise en page visuelle

import { useIntl } from 'react-intl';           // Prise en charge de plusieurs langues

import './index.less';

const messages = 'dashboardcontainer.visualisationdonnees';

function DashboardContainer({}, ref) {
  const intl = useIntl();
  const [travailleurs, setTravailleurs] = useState([]);   // État : liste de travailleurs
  const [chargement, setChargement] = useState(false); // État : est en cours de chargement ?

  // À l'ouverture de la page, déclencher la recherche automatiquement
  useEffect(() => {
    chargerTravailleurs();
  }, []);

  const chargerTravailleurs = () => {
    setTravailleurs([]);      // Effacer les données précédentes
    setChargement(true);    // Activer l'indicateur de chargement

    _service({
      // Détecte la langue du panneau et appelle l'URL correcte du service
      url: intl.locale.indexOf('fr') == 0 ? '/services/travailleurs' : '/services/workers',
      success: (reponse) => {
        setTravailleurs(reponse.json); // Enregistrer les données reçues dans l'état
        setChargement(false);
      },
      fail: (e) => {
        setChargement(false);
        console.error('Le service travailleurs a échoué.', e);
        message.error(intl.formatMessage({ id: `${messages}.erreur_chargement` }));
      }
    });
  };

  // Permet au composant parent (Dashboard) de déclencher chargerTravailleurs() via ref
  useImperativeHandle(ref, () => ({
    chargerTravailleurs
  }));

  return (
    <div ref={ref}>
      { chargement == false
        ? <VisualisationDonnees donnees={travailleurs} /> // Données prêtes : afficher le panneau
        : <Spin/>                              // Encore en chargement : afficher la roue
      }
    </div>
  );
}

export default React.forwardRef(DashboardContainer);
```

**Comprendre le code :**

Ce composant a trois responsabilités principales :

**État initial `useState` :** Crée deux contrôles internes — **travailleurs** (la liste venant du serveur) et **chargement** (un indicateur qui indique si les données sont encore en cours de récupération).

**Récupération des données `_service` :** La fonction **chargerTravailleurs** utilise **_service** pour appeler le service backend. Contrairement au **fetch** natif de JavaScript, **_service** gère l'authentification, la session et le traitement des erreurs automatiquement. Il détecte également la langue du panneau et choisit l'URL correcte `/travailleurs` pour le français, `/workers` pour l'anglais.

**Distribution et dessin `return` :** Pendant que les données sont récupérées, affiche la roue de chargement **(Spin)**. Lorsque les données arrivent, transmet la liste **travailleurs** à **VisualisationDonnees**, qui la distribue au tableau et au graphique.

### Styliser le Dashboard

Ouvrez le fichier `index.less` du dossier `DashboardContainer` et collez le code ci-dessous pour mettre en évidence les en-têtes des panneaux :

```text
/apps/nom_de_votre_app/ui/src/containers/DashboardContainer/index.less
```

```css
.fondPanneau {
  background-color: #3f54ba;
  padding: 10px 15px;
  color: white;
}
```

**Comprendre le code :**

Cette classe définit une couleur de fond bleue **(#3f54ba)** et une zone de remplissage **(padding)** dans les en-têtes.

Elle est utilisée par les classes `visualisation-donnees__panneau` de `VisualisationDonnees` pour garantir que les titres **Tableau** et **Graphique** restent visuellement mis en évidence.


## Étape 8 : Compilation du projet

Pour garantir que tout le code React soit compilé par Netuno :

* **Si votre terminal est resté ouvert** avec `npm run watch` en arrière-plan : vos modifications sont compilées automatiquement chaque fois qu'un fichier est enregistré.
* **Si vous avez fermé le terminal** ou si le processus s'est arrêté : pas de problème. Ouvrez à nouveau le terminal, naviguez jusqu'au dossier `ui` et exécutez à nouveau la commande :

```bash
npm run watch
```

## Conclusion

Tout au long de ce tutoriel, vous avez acquis des compétences essentielles pour travailler avec la plateforme Netuno, en maîtrisant le cycle
d'intégration du flux de données entre le serveur et l'interface utilisateur.

Ce développement a abordé les sujets suivants :

- **Base de données :** Création et organisation de tables et de structures de données de manière visuelle et efficace.

- **Backend REST :** Développement de services et de logique métier pour rendre les données disponibles via API.

- **Frontend avec React :** Intégration et affichage dynamique de ces données dans une interface moderne et réactive.

Si vous rencontrez des difficultés ou avez des suggestions d'amélioration, contactez-nous.

Notre équipe et notre communauté sont prêtes à vous aider.

Bon développement !