---
sidebar_position: 7
id: ui
title: Interface et Design
---

## Introduction

Le développement du frontend, c'est-à-dire ce qui est traité visuellement par le navigateur, est réalisé dans le dossier **ui**.

Par défaut, ce dossier contient l'environnement de développement développé en <a href="https://reactjs.org/" target="_blank">ReactJS</a> avec <a href="https://ant.design/" target="_blank">Ant.Design</a> et <a href="http://lesscss.org/" target="_blank">Less</a>, compilé à l'aide de <a href="https://vite.dev/" target="_blank">Vite</a>.

Bien que l'environnement par défaut soit configuré pour ces technologies, étant donné qu'elles sont très utilisées de nos jours, il n'est pas limité à celles-ci.

Si vous souhaitez utiliser une autre technologie comme **VueJS**, **MaterialUI**, **Sass**, **Bootstrap**, **TypeScript**, etc... il suffit de modifier dans le dossier `📂 ui` les configurations du `📂 package.json` et du `📂 vite.config.js` pour les technologies que vous préférez.

> Plus d'informations sur le [terminal intégré et centralisé](/docs/academy/explore/centralized-terminal).

## Prérequis

Avant de commencer, il est important de s'assurer que vous avez [Bun](https://bun.sh/) installé.

> Voir comment [installer Bun](/docs/academy/website/bun).

Pour mieux comprendre comment l'interface d'utilisation fonctionne, nous recommandons :

- [Plus d'informations sur la Couche UI de front-end.](/docs/academy/ui/ui-layer)

## Étendre le Service

Après avoir créé le service **travailleurs** dans `📂 server/services/travailleurs.js` via Visual Studio Code qui fournit l'information en <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> à l'adresse :

* <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/travailleurs</a>

La prochaine étape est de l'étendre pour présenter les données dans l'interface du navigateur.

Avec ces données, nous allons les présenter dans un tableau et un graphique.

En supposant que vous avez Visual Studio Code ou un autre éditeur de texte ouvert avec l'application **Demo**.

Ouvrez le fichier suivant dans l'éditeur :

`📂 ui/src/containers/ConteneurTableauDeBord/index.jsx`

Nous allons modifier ce code existant.

### Préparer le `state`

Au début du composant `ConteneurTableauDeBord` à l'intérieur de la `function` se trouve la définition de son _state_.

Ajoutez une nouvelle entrée pour stocker les données des travailleurs comme suit :

```jsx
            // 👇 Ajoutez les nouvelles lignes de code ci-dessous :
            const [travailleurs, setTravailleurs] = useState([]);
            const [chargement, setChargement] = useState(false);
```

C'est-à-dire, ajoutez la nouvelle ligne `const [travailleurs, setTravailleurs] = useState([]);` d'état.

### Créer la fonction `chargerTravailleurs`

Plus bas, remarquez qu'il existe une fonction appelée `chargerTravailleurs`, cette fonction effectue l'obtention des données des travailleurs qui apparaissent actuellement dans le tableau de bord.

> Cette fonction est utilisée pour charger les données des travailleurs.

Insérez le code ci-dessous :

```jsx
    /**
    *** 🚀 Charge les données des Travailleurs.
    ***    Via l'exécution du service :
    **     http://localhost:9000/services/travailleurs
    */
    const chargerTravailleurs = () => {
        setTravailleurs([]);
        setChargement(true);
        _service({
            url: intl.locale.indexOf('fr') == 0 ? '/services/travailleurs' : '/services/workers',
            success: (response) => {
                setTravailleurs(response.json);
                setChargement(false);
            },
            fail: (e) => {
                setChargement(false);
                console.error('Échec du service des Travailleurs.', e);
                message.error(intl.formatMessage({ id: `${messages}.loading_error` }));
            }
        });
    };
```

Ce que ce code ci-dessus fait est de passer les données des **travailleurs** au _state_ du composant en <a href="https://reactjs.org/" target="_blank">ReactJS</a>, cela via l'exécution du service **travailleurs** qui, en recevant les données en <a href="https://pt.wikipedia.org/wiki/JSON" target="_blank">JSON</a> , les stocke dans le _state_ via l'exécution de `setTravailleurs`.

Le code final devrait être structuré de cette façon :

```jsx
    useEffect(() => {
        ...
    }, []);

    const chargerTravailleurs = () => {
        ...
    }

    return ( 
        ...
    );
```

> Où les `...` sont les différentes lignes de code omises dans les blocs respectifs.

### Exécuter le hook `useEffect`

Maintenant, il reste à exécuter notre hook `useEffect` lorsque le composant est "monté", ce hook est exécuté lorsque le composant est construit dans la présentation visuelle du navigateur.

Pour cela, il suffit, un peu plus haut, d'ajouter la ligne de code `chargerTravailleurs();` dans le hook `useEffect` de cette façon :

```jsx
    useEffect(() => {
        chargerTravailleurs();
    }, []);
```

Cette nouvelle ligne de code va appeler la fonction qui exécute le service <a href="http://localhost:9000/services/trabalhadores" target="_blank">http://localhost:9000/services/travailleurs</a>, qui a été créé précédemment, pour obtenir les données en JSON et les stocker dans le `state` (_état_) du composant pour être présenté dans le return (_visualisation_).

### Compilation

**Enregistrez** le fichier et juste après, remarquez que dans le **terminal** où vous avez Netuno en exécution va apparaître le résultat de la nouvelle compilation de **ui**, avec de nouvelles lignes du résultat de compilation de <a href="https://reactjs.org/" target="_blank">ReactJS</a> + <a href="https://vite.dev/" target="_blank">Vite</a>.

La sortie attendue dans le **terminal** devrait être quelque chose de similaire à ce qui suit :

```
> ui@1.0.0 watch netuno/apps/demo/ui
> bunx --bun vite build --watch

vite v7.1.2 building for production...

watching for file changes...

(!) outDir netuno/apps/demo/public is not inside project root and will not be emptied.
Use --emptyOutDir to override.

build started...
transforming...
✓ 4008 modules transformed.

rendering chunks...
computing gzip size...
../public/scripts/ui.js  1,433.96 kB │ gzip: 421.89 kB
built in 2128ms.
```

S'il y a une erreur de compilation, alors l'indication du problème apparaîtra dans le **terminal**.

Jusqu'ici nous avons réalisé la consommation de notre service **travailleurs** où les données obtenues sont stockées dans le `state` du composant `ConteneurTableauDeBord` qui ainsi devient disponible pour être utilisé dans le `return`.

## Afficher les Données

Il reste à présenter les données visuellement dans l'interface que l'utilisateur voit dans le navigateur.

Pour présenter les données dans le navigateur, nous devons modifier le `return`, qui traite l'aspect visuel des composants en <a href="https://reactjs.org/" target="_blank">ReactJS</a>.

À la fin du code du `ConteneurTableauDeBord` vous trouverez le : `return ( ... );`

Nous allons le modifier en ajoutant juste une ligne de code supplémentaire pour contenir un autre composant `VisualisationDonnees` qui va présenter les données relatives aux **travailleurs**, le code devrait devenir comme suit :

```jsx
    // 🔍 Cherchez dans le code existant :
    return (
    <div ref={ref}>
      { chargement == false ?
        <VisualisationDonnees data={travailleurs} />
        : <Spin/>
      }
      <ListeServices />
    </div>
  );
```

Remarquez que seule la ligne ci-dessous doit être ajoutée :

```jsx
<VisualisationDonnees data={travailleurs} />
```

Ainsi le `VisualisationDonnees` va recevoir les données obtenues via le service **travailleurs** en JSON qui ont été stockées dans le `state`.

### Compilation Finale

**Enregistrez** le fichier avec toutes les modifications réalisées jusqu'ici.

Assurez-vous que dans la sortie du **terminal** il n'y a pas d'erreurs.

Maintenant, actualisez la page dans le navigateur et vous devriez voir le résultat final, ou alternativement, cliquez sur le lien ci-dessous :

* <a href="http://localhost:9000" target="_blank">http://localhost:9000</a>

> Si le tableau de bord apparaît en blanc, cela signifie qu'il y a des erreurs dans le code.
>
> Vérifiez dans la console du **navigateur** dans les **outils de développement** s'il y a des erreurs.

## En savoir plus 👇

Introduction rapide à <a href="https://reactjs.org/" target="_blank">ReactJS</a> :

* <a href="https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649" target="_blank">Un Guide Pour Débutants en ReactJS.</a>