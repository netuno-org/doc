---
id: storage
title: Przechowywanie
sidebar_label: Przechowywanie
---

Pliki zintegrowane w kodzie lub w bazie danych.

## Przechowywanie ogólne

Folder `📂 storage` służy do bezpiecznego przechowywania plików ogólnych, które są przydatne w przetwarzaniu aplikacji.

## Struktura folderów

W folderze `📂 storage` znajduje się następująca struktura:

<pre class="doc-structure__tree">
<span>./<b>storage</b>/</span>
&nbsp;<span>├─ ./<b>database</b>/</span>
&nbsp;<span>└─ ./<b>filesystem</b>/</span>
&nbsp;    <span>├─ ./<b>private</b>/</span>
&nbsp;    <span>├─ ./<b>public</b>/</span>
&nbsp;    <span>└─ ./<b>server</b>/</span>
</pre>

## Baza danych

Folder `📂 database` służy do przechowywania plików lub obrazów związanych z bazą danych.

Nie jest praktyczne przechowywanie plików bezpośrednio w bazie danych, ponieważ obciążają kopie zapasowe i synchronizację danych, znacznie zwiększając rozmiar bazy danych z powodu miejsca zajmowanego ogólnie przez wiele plików.

Dlatego w przypadku każdego formularza danych, który zawiera pole do przesyłania pliku lub obrazu, końcowy plik jest organizowany i przechowywany tutaj, a w polu bazy danych zapisywana jest tylko końcowa nazwa pliku.

Jeśli struktura danych zawiera pliki, to aby wykonać pełną kopię zapasową aplikacji, należy wykonać kopię zapasową tego folderu oprócz kopii zapasowej bazy danych.

## Ogólny system plików

Folder `📂 filesystem` pozwala organizować pliki ogólne przydatne dla aplikacji z ograniczeniami dostępu.

Każdy plik, który jest przydatny bezpośrednio w kodzie aplikacji, powinien być tutaj przechowywany.

Ograniczenia dzielą się na:

### Prywatne

Folder `📂 private` powinien być dostępny do odczytu lub zapisu tylko dla uwierzytelnionych użytkowników aplikacji.

### Publiczne

Folder `📂 public` jest przydatny do dostępu zewnętrznego.

### Serwer

Folder `📂 server` pozwala tylko na odczyt i zapis z wewnętrznego kodu aplikacji.

Zatem żaden użytkownik wewnętrzny ani zewnętrzny nie ma dostępu do jego zawartości.

Jego zawartość jest dostępna wyłącznie poprzez kod.