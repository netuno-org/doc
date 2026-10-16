---
id: sending-emails
title: Envoi d'E-mails
sidebar_label: Envoi d'E-mails
---
## Avant de commencer

Avant de procéder, assurez-vous d'avoir des notions de base en _**JavaScript**_ et de connaître les bases de Netuno grâce au pas-à-pas disponible dans l'[Académie](/docs/academy/overview).

## Démonstration de l'Envoi d'E-mails

Avec Netuno, il est très simple d'envoyer des e-mails, que ce soit avec des pièces jointes ou des images intégrées au contenu lui-même (utile dans le cas de signatures).

L'application fournie avec Netuno nommée **demo** (application de démonstration) contient de nombreux exemples des implémentations de code possibles dans plusieurs langages, y compris la démonstration d'envoi d'e-mails via le service `mail-send` qui se trouve dans :

<!--DOCUSAURUS_CODE_TABS-->
<!--Groovy-->
```plaintext
/apps/demo/server/services/samples/groovy/mail-send.groovy
```
<!--JavaScript-->
```plaintext
/apps/demo/server/services/samples/javascript/mail-send.js
```
<!--Kotlin-->
```plaintext
/apps/demo/server/services/samples/kotlin/mail-send.kts
```
<!--Python-->
```plaintext
/apps/demo/server/services/samples/python/mail-send.py
```
<!--Ruby-->
```plaintext
/apps/demo/server/services/samples/ruby/mail-send.rb
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration
La première étape consiste à configurer le compte SMTP que Netuno utilisera pour l'envoi d'e-mails.

Pour ce faire, naviguez dans l'application que vous développez jusqu'au fichier de configuration d'environnement. Dans cet exemple, nous utiliserons le fichier d'environnement de développement situé dans :

* `config/_development.json`

Vérifiez s'il n'existe pas déjà des configurations pour le SMTP ; si ce n'est pas le cas, ajoutez les paramètres de configuration SMTP à la fin du fichier de configuration (au format JSON) :

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

Si vous configurez pour Gmail, remplacez simplement les astérisques par vos identifiants et activez la connexion SMTP dans les paramètres de votre compte Gmail. Sinon, remplacez tous les paramètres par ceux de votre compte SMTP.

Après avoir enregistré les modifications, il suffit de redémarrer Netuno pour prendre en compte les modifications de configuration. Il s'agit des configurations par défaut pour l'envoi d'e-mails, comme l'indique le nom `default`.

```json
...
    "default": {
        ...
    }
...
```

Vous pouvez ajouter d'autres comptes SMTP, mais un seul pourra être défini par défaut.

Pour ajouter d'autres comptes SMTP, il suffit de répéter le bloc de configuration SMTP par défaut et de remplacer le nom `default` par un autre nom de votre choix, par exemple :

```json
{
    ...,
    "smtp": {
        "default": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465, "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        },
        "test": {
            "enabled": true,
            "host": "smtp.gmail.com",
            "port": 465,
            "ssl": true,
            "username": "*****@gmail.com",
            "password": "*****"
        }
    }
    ...
}
```

Une configuration similaire à l'exemple ci-dessus permettra d'utiliser le compte `default` lorsqu'il est appelé de la manière suivante dans le code :

```javascript
const smtp = _smtp.init()
```

Et pour utiliser la configuration `test`, il suffit d'ajouter le nom de la configuration comme paramètre à la fonction `_smtp.init()` de la manière suivante :

```javascript
const smtp = _smtp.init("test")
```

> Si vous n'ajoutez pas de nom de configuration comme paramètre, le compte par défaut sera toujours utilisé.

## Code Détaillé
Analysons maintenant attentivement le code d'exemple fourni par Netuno. Dans ce cas, il est en JavaScript et est structuré de la manière suivante :

Initialisation du SMTP :

```javascript
const smtp = _smtp.init()
```

> Rappelez-vous que vous pouvez initialiser avec une autre configuration, par exemple : `_smtp.init("test")`

En ajoutant `.to` à la variable smtp, on définit l'adresse du destinataire de l'e-mail ; en cas de destinataires multiples, il suffit de les séparer par ‘;‘ ou ‘,‘ :

```javascript
smtp.to = '*****@gmail.com'
```

En ajoutant `.from`, on définit l'adresse de l'expéditeur de l'e-mail :

```javascript
smtp.from = '*****@gmail.com'
```

En ajoutant `.cc`, on définit l'adresse des destinataires en copie de l'e-mail ; en cas de destinataires multiples en copie, il suffit de les séparer par ‘;‘ ou ‘,‘ :

```javascript
smtp.cc = '*****@gmail.com'
```

Il en va de même pour `.bcc`, où l'on définit les destinataires en copie mais de manière cachée :

```javascript
smtp.bcc = '*****@gmail.com'
```

En ajoutant `.subject`, on définit l'objet de l'e-mail :

```javascript
smtp.subject = 'Test de Netuno'
```

En ajoutant `.text`, on définit le contenu en texte brut :

```javascript
smtp.text = 'Avez-vous reçu cet e-mail ?'
```

En ajoutant `.html`, on définit le contenu de l'e-mail en HTML :

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Avez-vous reçu cet e-mail ?</p>
</div>`
```

Pour ajouter une image en pièce jointe, on ajoute (comme illustré ci-dessus) dans le HTML, pour les images (`img`), dans l'attribut `src`, le préfixe `cid:` (**C**ontent **ID**) suivi du `cid` qui est défini lors de l'ajout de pièces jointes avec la fonction `attachment` (comme illustré ci-dessous).

Pour ajouter l'image en pièce jointe à l'e-mail, on ajoute `.attachment` à la variable smtp de la manière suivante :

```javascript
smtp.attachment(
    "logo.png", // Fichier
    "image/png", // Format du fichier
    _storage.filesystem("server", "exemples/mail", "logo.png").file(), // Emplacement du fichier
    "logo" // Nom de la variable définie dans "cid:logo"
)   
```

> Notez que le `cid` (**C**ontent **ID**) n'est nécessaire que pour intégrer des images en pièce jointe dans le contenu HTML de l'e-mail.

Pour ajouter une pièce jointe sans l'intégrer dans le HTML (cas de documents), procédez comme suit :

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "exemples/mail", "doc.txt").file()
)   
```

Enfin, pour soumettre l'envoi de l'e-mail, il suffit d'insérer le code suivant :

```javascript
smtp.send()
```

Enfin, si tout est correctement configuré, vous recevrez un e-mail semblable à ce qui suit :

![envoi-emails1.png](/docs/assets/envio-emails1.png)

> Notez que selon votre client de messagerie, l'affichage peut différer de l'image ci-dessus.

## Exemple Complet avec Template

Placer du contenu HTML au milieu du code n'est pas très élégant, comme illustré ci-dessus :

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Avez-vous reçu cet e-mail ?</p>
</div>`
```

Pour éviter cela et garder le code plus propre et élégant, le contenu HTML doit être importé en tant que template, de la manière suivante :

`smtp.html = _template.getOutput('e-mail/contact', donnees)`

Dans cet exemple, la configuration SMTP dans la configuration de l'application serait la suivante :

```
...
    "smtp": {
        "contact": {
            "enabled": true,
            "host": "MON.SERVEUR.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Contact du site - ",
            "from": "noreply@MON.DOMAINE.com",
            "to": "info@MON.DOMAINE.com",
            "username": "noreply@MON.DOMAINE.com",
            "password": "S3gr3d0"
        }
    },
...
```

Remarquez ci-dessous comment il peut être utilisé dans cet exemple de code de service complet, qui pourrait se trouver dans le fichier `server/services/contact.js` :

```
const nom = _req.getString("nom")
const courriel = _req.getString("courriel")
const sujet = _req.getString("sujet")
const message = _req.getString("message")

const smtp = _smtp.init("contact")

smtp.subject = sujet

smtp.text = "Contenu en HTML."

const donnees = _val.map()
      .set("nom", nom)
      .set("courriel", courriel)
      .set("sujet", sujet)
      .set("message", message)

smtp.html = _template.getOutput('e-mail/contact', donnees)

smtp.attachment(
    "logo.png",
    "image/png",
    _app.file("public/images/logo.png"),
    "logo"
)

smtp.send()

_out.json(
    _val.map()
        .set("result", true)
)
```

> Dans le chemin relatif du template, il n'est pas nécessaire d'indiquer l'extension `.html`, et notez qu'il est optionnellement possible de passer des informations dans le template.

Le contenu HTML du template doit être défini dans un fichier séparé qui doit se trouver dans le dossier `server/templates/`, ce chemin est trouvé à partir du dossier racine de l'application. 

En suivant l'exemple démontré ci-dessus, le fichier template d'exemple se trouvera ici :

- `server/templates/e-mail/contact.html`

Le contenu d'exemple de ce fichier pourrait être :

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      Contact du Site Web
    </h1>
    <p>Nom : _{&donnees=nom}</p>
    <p>E-mail : _{donnees=courriel}</p>
    <p>Titre : _{&donnees=sujet}</p>
    <p>_{&donnees=message}</p>
  </div>
</div>

```

Lorsque des données sont injectées dans le template avec `_{donnees=...}`, le `&` est ajouté lorsqu'il faut effectuer l'encodage des caractères spéciaux en HTML, devenant `_{&donnees=...}`, et après le `=` à la place des `...` se trouve la clé du contenu qui sera injecté.

## Configurations Avancées

Les configurations d'environnement `config/_*.json` permettent de nombreuses autres configurations avancées.

Les propriétés de `smtp` utilisées dans le code comme `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text` et `.html`, peuvent être définies dans la configuration pour être prédéfinies par défaut de la manière suivante :

```json
...
    "default": {
        ...
        "from": "*****@gmail.com",
        "to": "*****@gmail.com",
        "cc": "*****@gmail.com",
        "bcc": "*****@gmail.com",
        "subject": "Titre par défaut...",
        "text": "Contenu par défaut... ok !",
        "html": "<p>Contenu par défaut... <b>ok !</b></p>"
        ...
    }
...
```

> Prédéfinir le .from est très utile car l'envoi d'e-mails se fait généralement toujours à partir de la même adresse.

D'autres configurations sont également possibles. Voici une liste complète de celles-ci :

| PARAMÈTRE    | TYPE   | DÉFAUT      | DESCRIPTION    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | booléen | true | Active et désactive l'envoi d'e-mails. |
| `debug` | booléen | false | Active le mode debug, ce qui affichera des messages détaillant la communication avec le serveur. |
| `protocol` | chaîne |  | Définit le type de protocole, smtp ou smtps. |
| `host` | chaîne |  | Nom ou IP du serveur SMTP. |
| `port` | entier | 465 | Numéro du port du serveur SMTP. |
| `ssl` | booléen | true | Active le SSL. |
| `tls` | booléen | false | Active le TLS |
| `socketFactoryFallback` | booléen | true | Si la génération du Socket échoue, le socket natif java.net.Socket sera utilisé. |
| `socketFactoryClass` | chaîne |  | Définit une classe qui implémente l'interface javax.net.SocketFactory qui sera utilisée pour générer les sockets pour le SMTP. |
| `socketFactoryPort` | entier |  | Définit le port qui doit être utilisé par les sockets. |
| `quitWait` | booléen | false | Si activé, attend la réponse du serveur après la commande QUIT ; si désactivé, ferme immédiatement la connexion avec le serveur après la commande QUIT. |
| `authMechanisms` | chaîne |  | Liste des mécanismes d'authentification, par défaut c'est « LOGIN PLAIN DIGEST-MD5 NTLM », supportant ainsi tous les mécanismes. |
| `authNTLMDomain` | chaîne |  | Domaine d'authentification NTLM. |
| `username` | chaîne |  | Définit l'utilisateur pour l'authentification avec le serveur. |
| `html` | chaîne |  | Contenu HTML de l'e-mail. |
| `password` | chaîne |  | Définit le mot de passe pour l'authentification avec le serveur. |
| `from` | chaîne |  | Adresse e-mail de l'expéditeur. |
| `to` | chaîne |  | Adresse e-mail du destinataire, plusieurs adresses peuvent être ajoutées séparées par « ; » ou « , ». |
| `cc` | chaîne |  | Adresse e-mail des destinataires en copie, plusieurs adresses peuvent être ajoutées séparées par « ; » ou « , ». |
| `bcc` | chaîne |  | Adresse e-mail des destinataires en copie cachée, plusieurs adresses peuvent être ajoutées séparées par « ; » ou « , ». |
| `subjectPrefix` | chaîne |  | Définit un préfixe à l'objet de l'e-mail, garantissant ainsi que tous les e-mails envoyés ont ce préfixe. |
| `subject` | chaîne |  | Objet de l'e-mail. |
| `text` | chaîne |  | Contenu textuel de l'e-mail en texte brut. |

Si vous avez des questions, n'hésitez pas à nous contacter via les moyens présentés en bas de page.

Bon développement !