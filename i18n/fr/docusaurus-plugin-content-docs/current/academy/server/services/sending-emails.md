---
id: sending-emails
title: Envoi d'Emails
sidebar_label: Envoi d'Emails
---
## Avant de commencer

Avant de continuer, assurez-vous que vous avez des notions de base en _**JavaScript**_ et que vous avez déjà les notions de base de Netuno avec le pas-à-pas disponible dans l'[Académie](/docs/academy/overview).

## Démonstration de l'Envoi d'Emails

Avec Netuno, il est très simple d'envoyer des emails, que ce soit avec des pièces jointes ou des images intégrées dans le contenu lui-même (utile dans le cas de signatures).

L'application qui vient avec Netuno nommée **demo** (application de démonstration) contient de nombreux exemples des implémentations possibles de code en plusieurs langages, y compris la démonstration d'envoi d'emails via le service `mail-send` qui se trouve dans :

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
La première étape sera de configurer le compte SMTP que Netuno utilisera pour l'envoi d'emails.

Pour ce faire, naviguez dans l'application que vous développez jusqu'au fichier de configuration d'environnement. Dans cet exemple, nous utiliserons le fichier d'environnement de développement situé dans :

* `config/_development.json`

Vérifiez s'il n'existe pas déjà des configurations pour le SMTP, si ce n'est pas encore le cas, à la fin du fichier de configuration (au format JSON), ajoutez les paramètres de configuration du SMTP :

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

Après avoir enregistré les modifications, il suffit de redémarrer Netuno pour prendre en compte les modifications de la configuration. Ce sont les configurations par défaut pour l'envoi d'emails comme l'indique le nom `default`.

```json
...
    "default": {
        ...
    }
...
```

Vous pouvez ajouter d'autres comptes SMTP, mais un seul pourra être défini comme par défaut.

Pour ajouter d'autres comptes SMTP, il suffit de répéter le bloc de configuration du SMTP par défaut et de remplacer le nom `default` par un autre nom de votre choix, par exemple :

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
Analysons maintenant attentivement le code d'exemple que Netuno fournit. Dans ce cas, il est en JavaScript et est structuré de la manière suivante :

Initialisation du SMTP :

```javascript
const smtp = _smtp.init()
```

> Rappelez-vous que vous pouvez initialiser avec une autre configuration, par exemple : `_smtp.init("test")`

En ajoutant `.to` à la variable smtp, on définit l'adresse du destinataire de l'email, en cas de multiples destinataires, il suffit de séparer par ';' ou ',' :

```javascript
smtp.to = '*****@gmail.com'
```

En ajoutant `.from`, on définit l'adresse de l'expéditeur de l'email :

```javascript
smtp.from = '*****@gmail.com'
```

En ajoutant `.cc`, on définit l'adresse des destinataires en copie de l'email, en cas de multiples destinataires en copie, il suffit de séparer par ';' ou ',' :

```javascript
smtp.cc = '*****@gmail.com'
```

Il en va de même pour `.bcc` où l'on définit les destinataires en copie mais de manière cachée :

```javascript
smtp.bcc = '*****@gmail.com'
```

En ajoutant `.subject`, on définit le sujet de l'email :

```javascript
smtp.subject = 'Test de Netuno'
```

En ajoutant `.text`, on définit le contenu en texte brut :

```javascript
smtp.text = 'Avez-vous reçu cet email ?'
```

En ajoutant `.html`, on définit le contenu de l'email en HTML :

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Avez-vous reçu cet email ?</p>
</div>`
```

Pour ajouter une image en pièce jointe, on ajoute (comme illustré ci-dessus), dans le HTML, on définit dans les images (`img`) dans l'attribut `src` le `cid:` (**C**ontent **ID**) comme préfixe et juste après le `cid` qui est défini lors de l'ajout de pièces jointes avec la fonction `attachment` (comme illustré ci-dessous).

Pour ajouter l'image en pièce jointe à l'email, on ajoute `.attachment` à la variable smtp de la manière suivante :

```javascript
smtp.attachment(
    "logo.png", // Fichier
    "image/png", // Format du fichier
    _storage.filesystem("server", "samples/mail", "logo.png").file(), // Emplacement du fichier
    "logo" // Nom de la variable définie dans "cid:logo"
)   
```

> Notez que le `cid` (**C**ontent **ID**) est uniquement nécessaire pour intégrer des images qui sont en pièce jointe dans le contenu HTML de l'email.

Pour ajouter une pièce jointe sans être intégrée dans le HTML (cas de documents), on procède de la manière suivante :

```javascript
smtp.attachment(
    "doc.text",
    "text/plain",
    _storage.filesystem("server", "samples/mail", "doc.txt").file()
)   
```

Enfin, pour soumettre l'envoi de l'email, il suffit d'insérer le code suivant :

```javascript
smtp.send()
```

Enfin, si tout est configuré correctement, vous recevrez un email semblable à ce qui suit :

![envoi-emails1.png](/docs/assets/envio-emails1.png)

> Notez que selon votre client de messagerie, cela peut différer de l'image ci-dessus.

## Exemple Complet avec Template

Mettre du contenu HTML au milieu du code n'est pas très élégant, comme illustré ci-dessus :

```javascript
smtp.html = `<div>
<img src="cid:logo" width="200" />
Avez-vous reçu cet email ?</p>
</div>`
```

Pour éviter cela et garder le code plus propre et élégant, le contenu HTML doit être importé comme un template, de la manière suivante :

`smtp.html = _template.getOutput('email/contact', donnees)`

Dans cet exemple, la configuration du SMTP dans la configuration de l'application serait ainsi :

```
...
    "smtp": {
        "contact": {
            "enabled": true,
            "host": "MON.SERVEUR.com",
            "port": 465,
            "ssl": true,
            "subjectPrefix": "Contact Site Web - ",
            "from": "noreply@MON.DOMAINE.com",
            "to": "info@MON.DOMAINE.com",
            "username": "noreply@MON.DOMAINE.com",
            "password": "S3gr3d0"
        }
    },
...
```

Remarquez ci-dessous comment il peut être utilisé dans cet exemple de code de service complet, qui pourra se trouver dans le fichier `server/services/contact.js` :

```
const nom = _req.getString("nom")
const email = _req.getString("email")
const sujet = _req.getString("sujet")
const message = _req.getString("message")

const smtp = _smtp.init("contact")

smtp.subject = sujet

smtp.text = "Contenu en HTML."

const donnees = _val.map()
      .set("nom", nom)
      .set("email", email)
      .set("sujet", sujet)
      .set("message", message)

smtp.html = _template.getOutput('email/contact', donnees)

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

> Dans le chemin relatif du template, il n'est pas nécessaire de mettre l'extension `.html`, et notez qu'optionnellement il est possible de passer des informations à l'intérieur du template.

Le contenu HTML du template doit être défini dans un fichier séparé qui doit se trouver dans le dossier `server/templates/`, ce chemin est trouvé à partir du dossier racine de l'application. 

En suivant l'exemple démontré ci-dessus, le fichier template d'exemple se trouvera ici :

- `server/templates/email/contact.html`

Le contenu d'exemple de ce fichier pourra être :

```
<div style="padding: 40px; background: #ffffff;">
  <img src="cid:logo" height="60" />
  <div style="padding: 20px;"></div>
  <div style="padding: 40px; background: #ffffff; font-size: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 5px solid #666;">
    <h1 style="color: #666; font-weight: bold; margin-bottom: 15px;">
      Contact du Site Web
    </h1>
    <p>Nom : _{&donnees=nom}</p>
    <p>Email : _{donnees=email}</p>
    <p>Titre : _{&donnees=sujet}</p>
    <p>_{&donnees=message}</p>
  </div>
</div>

```

Lorsque des données sont injectées dans le template avec `_{donnees=...}`, le `&` est ajouté lorsqu'il faut effectuer l'encodage des caractères spéciaux en HTML, devenant `_{&donnees=...}`, et après le `=` à la place des `...` se trouve la clé du contenu qui sera injecté.

## Configurations Avancées

Les configurations d'environnement `config/_*.json` permettent de nombreuses autres configurations avancées.

Les propriétés du `smtp` utilisées dans le code comme `.from`, `.to`, `.cc`, `.bcc`, `.subject`, `.text` et `.html`, peuvent être définies dans la configuration pour être prédéfinies par défaut de la manière suivante :

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

> Prédéfinir le .from est assez utile car normalement l'envoi de mails se fait toujours à partir de la même adresse.

D'autres configurations sont également possibles. Voici une liste complète de celles-ci :

| PARAMÈTRE    | TYPE   | DÉFAUT      | DESCRIPTION    |
| ------- |:------:|:-----------:|--------------|
| `enabled`     | boolean | true | Active et désactive l'envoi de mail. |
| `debug` | boolean | false | Active le mode debug, ce qui affichera des messages détaillant la communication avec le serveur. |
| `protocol` | string |  | Définit le type de protocole, smtp ou smtps. |
| `host` | string |  | Nom ou IP du serveur SMTP. |
| `port` | integer | 465 | Numéro du port du serveur SMTP. |
| `ssl` | boolean | true | Active le SSL. |
| `tls` | boolean | false | Active le TLS |
| `socketFactoryFallback` | boolean | true | Si la génération du Socket échoue, le socket natif java.net.Socket sera utilisé. |
| `socketFactoryClass` | string |  | Définit une classe qui implémente l'interface javax.net.SocketFactory qui sera utilisée pour générer les sockets pour le SMTP. |
| `socketFactoryPort` | integer |  | Définit le port qui doit être utilisé par les sockets. |
| `quitWait` | boolean | false | Si activé, attend la réponse du serveur après la commande QUIT, si désactivé, déconnecte immédiatement la connexion avec le serveur après la commande QUIT. |
| `authMechanisms` | string |  | Liste des mécanismes d'authentification, par défaut c'est “LOGIN PLAIN DIGEST-MD5 NTLM”, ainsi supporte tous les mécanismes. |
| `authNTLMDomain` | string |  | Domaine d'authentification NTLM. |
| `username` | string |  | Définit l'utilisateur dans l'authentification avec le serveur. |
| `html` | string |  | Contenu en HTML de l'e-mail. |
| `password` | string |  | Définit le mot de passe dans l'authentification avec le serveur. |
| `from` | string |  | Adresse e-mail de l'expéditeur. |
| `to` | string |  | Adresse e-mail du destinataire, on peut ajouter plusieurs mails séparés par “;” ou “,”. |
| `cc` | string |  | Adresse e-mail de ceux qui doivent recevoir une copie, on peut ajouter plusieurs mails séparés par “;” ou “,”. |
| `bcc` | string |  | Adresse e-mail de ceux qui doivent recevoir une copie cachée, on peut ajouter plusieurs mails séparés par “;” ou “,”. |
| `subjectPrefix` |  | string | Définit un préfixe au titre de l'e-mail, ainsi garantit que tous les mails envoyés ont le préfixe. |
| `subject` | string |  | Sujet de l'e-mail. |
| `text` | string |  | Contenu en texte de l'e-mail en texte brut. |

Si vous avez des questions, n'hésitez pas à nous contacter via les moyens présentés en bas de page.

Bon développement !