---
id: modal-form
title: Modales Formular
---

Erstellung und Verwaltung von Formularen in modalen Fenstern.
## Einführung

Das Modal ist eine UI-Ressource, die es ermöglicht, ein Formular zu öffnen, ohne dass der Benutzer die aktuelle Seite verlassen muss.

Die Verwendung von Modals verbessert die Nutzererfahrung (UX) erheblich und ermöglicht die Ausführung von **CRUD-Operationen (Erstellen, Lesen, Aktualisieren, Löschen)**, ohne die Seite neu laden oder den Kontext der aktuellen Ansicht verlieren zu müssen.

Netuno übernimmt automatisch die Kommunikation mit dem Backend und die Injektion des erforderlichen HTML.


#### Voraussetzungen

Um die Beispiele umzusetzen, benötigen Sie:

- Zugriff auf die Entwicklungsumgebung Ihrer Netuno-Anwendung.
- Ein ordnungsgemäß konfiguriertes Formular im Administrationsbereich (Backoffice) von Netuno.
- Grundkenntnisse in JavaScript und im Umgang mit Ereignissen im DOM.

In den folgenden Beispielen verwenden wir ein generisches Formular namens **"test"**.

Falls Sie bei diesen Schritten Fragen haben, lesen Sie: [Formulare](/docs/academy/ui/forms).

## Grundstruktur

Die Erstellung und Manipulation von Modals in Netuno ist im Objekt `netuno.modal` zentralisiert.

Die Methode **netuno.modal.create()** erstellt die Basisstruktur des Modals in der Oberfläche. Sie erhält ein Konfigurationsobjekt mit folgenden Eigenschaften:

- **name (String):** Der Name des Formulars (im Backoffice erstellt), das als Basis für das Modal dient.
- **callback (Function):** Funktion, die ausgeführt wird, sobald die Modal-Struktur in das DOM injiziert wurde (aber bevor sie angezeigt wird); sie erhält das erstellte Modal-Element als Parameter.

### Callback-Funktion

Innerhalb der Callback-Funktion legen Sie den Zustand (Modus) des Formulars mit den nativen Ladefunktionen fest:

- **Listenmodus – `netuno.loadForm()`**: Rendert die Such- und Listentabelle der Datensätze dieses Formulars.

- **Bearbeitungs-/Erstellungsmodus – `netuno.loadFormEdit()`**: Rendert die Eingabefelder des Formulars. Kann verwendet werden, um einen neuen Datensatz einzufügen oder einen vorhandenen zu bearbeiten.

## Implementierung
Im Folgenden werden drei der häufigsten Anwendungsszenarien beschrieben.

### 1. Listenmodus

`netuno.loadForm()` wird verwendet, wenn der Benutzer alle Daten eines Formulars in Form einer Suchtabelle (Grid) sehen soll.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    // 1. Findet den internen Container, der für den Empfang des Formulars vorgesehen ist
    let formularContainer = modal.find('[netuno-form]');
    // 2. Injiziert die Datenliste des Formulars in den Container
    netuno.loadForm(formularContainer); 
    // 3. Zeigt dem Benutzer das Modal an
    netuno.modal.show(modal);
  }
});
```
### 2. Erstellungsmodus

`netuno.loadFormEdit()` wird für Schaltflächen vom Typ "Neu hinzufügen" verwendet. Es öffnet das Formular leer, bereit für die Dateneingabe.

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formularContainer = modal.find('[netuno-form]');
    // Lädt das Formular im Einfügemodus (neuer Datensatz)
    netuno.loadFormEdit(formularContainer); 
    netuno.modal.show(modal);
  }
});
```

:::info
Wenn Sie `netuno.loadFormEdit()` verwenden, ohne eine **ID** zu übergeben, geht Netuno davon aus, dass Sie die "Bearbeitungsansicht" von Grund auf verwenden möchten. Es lädt die Oberfläche mit leeren Eingabefeldern, bereit für die Erstellung eines neuen Datensatzes. In diesem Szenario löst Netuno intern das Ereignis `netuno:new` aus.
:::

### 3. Bearbeitungsmodus

Wenn das Modal einen bestimmten Datensatz zur Änderung laden soll, müssen Sie die **UID** oder **ID** des Datensatzes als zweiten Parameter an die Ladefunktion übergeben.

```jsx
// Beispiel: Bearbeiten des Datensatzes mit ID 1234
const datensatzId = 1234; 

netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formularContainer = modal.find('[netuno-form]');
    // Injiziert die Daten des Datensatzes 1234 in die Formularfelder
    netuno.loadFormEdit(formularContainer, datensatzId); 
    netuno.modal.show(modal);
  }
});
```


## Ereignisse

Der Formularcontainer (`[netuno-form]`) löst benutzerdefinierte Ereignisse aus, die den Lebenszyklus der Benutzerinteraktion begleiten.

Es wird empfohlen, diese Ereignisse zu verwenden, um spezifische Geschäftslogik Ihres Frontends auszulösen (z. B. Tabellen im Hintergrund aktualisieren, Benachrichtigungen anzeigen usw.).

| EREIGNISTYP   | BESCHREIBUNG    |
| ------- |--------------|
| ` netuno:new` | Wird ausgelöst, wenn die Ansicht zur Erstellung eines neuen Elements angezeigt wird. |
| `netuno:edit` | Wird ausgelöst, wenn die Bearbeitungsansicht eines vorhandenen Elements angezeigt wird. |
| `netuno:save` | Wird ausgelöst, wenn ein neues Element hinzugefügt wurde. |
| `netuno:back` | Wird nach dem Klick auf die Zurück-Schaltfläche ausgelöst. |
| `netuno:delete` | Wird nach dem Löschen eines Elements ausgelöst. |


### Beispiel: Mehrere Ereignisse abfangen

In diesem produktionsbereiten Beispiel erstellen wir das Modal und fügen *Listener* hinzu, um den Erfolg der Benutzeroperationen zu verfolgen:

```jsx
netuno.modal.create({
  name: 'test',
  callback: function (modal) {
    let formularContainer = modal.find('[netuno-form]');
    
    // Überwacht die Einfügeansicht
    formularContainer.on('netuno:new', function(ereignis) {
       console.info("Erstellungsoberfläche geladen.");
    });

    // Überwacht ein erfolgreiches Speichern
    formularContainer.on('netuno:save', function(ereignis) {
       console.success("Der Datensatz wurde erfolgreich gespeichert!");
       // Beispiel: Das Modal nach dem Speichern automatisch schließen
       netuno.modal.hide(modal); 
    });

    // Rendert das Modal im Listenmodus und zeigt es an
    netuno.loadForm(formularContainer);
    netuno.modal.show(modal);
  }
});
```
Falls Sie Schwierigkeiten haben oder Verbesserungsvorschläge haben, kontaktieren Sie uns.
Unser Team und unsere Community sind bereit zu helfen.

Viel Erfolg bei der Entwicklung!