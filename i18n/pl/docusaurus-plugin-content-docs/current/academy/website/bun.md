---
sidebar_position: 1
id: bun
title: Instalacja Bun
sidebar_label: Instalacja Bun
---

## Wprowadzenie

NodeJS i NPM stanowią podstawę ekosystemu rozwoju frontendu.

Mimo swojej użyteczności ich wydajność pozostawia wiele do życzenia.

Dlatego zalecamy korzystanie z Bun, aby uzyskać znaczące i odczuwalne korzyści przy łatwej i szybkiej adaptacji, zachowując kompatybilność.

W Netuno coraz częściej używa się Bun — zobacz powody...

## Bun

Bun jest odpowiednikiem NodeJS, ale znacznie podkręconym, nowoczesnym, intuicyjnym i super szybkim.

Wydajność Bun jest niezaprzeczalna — kto przechodzi z uruchamiania NodeJS na Bun, od razu zauważa korzyść.

Ponieważ projekty frontendowe zwykle potrzebują trochę czasu na uruchomienie, w przypadku Bun start jest natychmiastowy.

A zależności frontendowe zwykle zajmują dużo miejsca, a folder `📂 node_modules` może łatwo osiągnąć setki megabajtów, a nawet gigabajty.

Bun rozwiązuje też problem marnowania miejsca przez replikowanie kopii zależności w wielu projektach.

Tworząc centralne repozytorium zależności współdzielone przez wszystkie projekty, które przy instalacji konfiguruje podlinkowane foldery.

W ten sposób drastycznie zmniejsza zużycie miejsca zajmowanego przez zależności.

> Pośród wielu innych zalet wyróżnia się także użytecznością oraz ulepszonym, intuicyjnym i ogólnie bardziej dopracowanym outputem.

Ponieważ zalety wydajnościowe mają ogromne znaczenie dla zwinnego rozwoju, zalecamy jego stosowanie.

Aby zainstalować Bun, wykonaj kroki opisane w:

- [**Instalacja Bun**](https://bun.sh/docs/installation)

### Użycie w projektach

Aby używać Bun w projektach, upewnij się, że jeśli korzystasz już z NPM, Yarn lub innego menedżera, usuń folder `📂 node_modules`.

W miejscu, gdzie znajduje się plik `package.json`, należy wykonać polecenie instalacji zależności:

- `bun install`

Teraz wystarczy uruchomić akcje `scripts` skonfigurowane w `package.json`, na przykład:

- `bun run dev`

A aby skompilować:

- `bun run build`

Korzystanie z Bun jest bardzo podobne do NPM, Yarn, PNPM itp., tyle że jest znacznie szybsze i ogólnie lepsze, a dodatkowo podczas wdrażania na środowiska testowe i produkcyjne pozwala uzyskać wysoką wydajność przy szybko zakończonym i ogólnie bardziej efektywnym wdrożeniu.

### Polecenia zintegrowane w Netuno

Po stronie Netuno, dzięki centralizacji terminala, wszystkie polecenia projektu są wykonywane razem w tym samym procesie i terminalu Netuno.

- [Więcej o Terminalu Centralizowanym.](/docs/academy/explore/centralized-terminal)

Jeśli masz zintegrowane i używasz wykonywania poleceń NPM, musisz zmienić je na Bun.

Zmień na Bun w konfiguracji `commands` aplikacji Netuno w `📂 config/_development.json`, na przykład:

```json title="config/_development.json"
{
    ...
    "commands": [
        ...
        {
            "path": "website",
            "command": "bun run dev",
            "install": "bun install",
            "enabled": true
        }
    ]
    ...
}
```

## Podsumowanie

Nie cierp już z powodu braku miejsca przez liczne repliki zależności w folderach `📂 node_modules`, które marnują gigabajty.

I nie czekaj tak długo, aż twój projekt w końcu zainstaluje zależności, uruchomi się lub skompiluje.

Nic nie stoi na przeszkodzie, aby używać Bun, ponieważ gwarantuje kompatybilność z NodeJS i NPM — to dosłownie dwa w jednym.

W projektach z Netuno używamy i migrujemy wszystko do **Bun** — śledź ten trend.