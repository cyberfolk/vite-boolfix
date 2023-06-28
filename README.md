# Netflix - Replica web-app

**Initial commit**: 19/03/23

**Tecnologie:** vite, vue.js, js, axios, html, css e bootstrap.

🎬 Ed ecco qui la mia replica di Netflix, per Boolean.
Con ad Axios e alle API di TheMovieDB mi è stato possibile mostrare i film più popolari, permettere all'utente ricercare i sui titoli preferiti mostrando i risultati suddivisi tra Serie Tv e Film.

🖇️ Repository:
https://github.com/cyberfolk/vite-boolflix

## :heavy_check_mark: Milestone 0:

Progettare la struttura del global state.

## :heavy_check_mark: Milestone 1: :

Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente. Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: **Titolo**, **Titolo Originale**, **Lingua** e **Voto**

## :heavy_check_mark: Milestone 2A:

Trasformare la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

- [LangFlag](https://www.npmjs.com/package/vue-lang-code-flags) - SCELTO - opera direttamente sulle lingue e non sui paesi seguendo la codifica ISO 639-1.
- [CountryFlag](https://github.com/ubaldop/vue-country-flag) - SCARTATO
- [FlagIcons](https://www.vuescript.com/260-flag-icons/) - SCARTATO

## :heavy_check_mark: Milestone 2B: :

Allargare poi la ricerca anche alle serie tv. Con la stessa azione di ricerca prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici) Qui un esempio di chiamata per le serie tv: https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

## :heavy_check_mark: Milestone 3A:

In questa milestone come prima cosa aggiungere la copertina del film o della serie al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. Dovremo prendere quindi l’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generar (troviamo tutte le dimensioni possibili a questo [link](https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400)) per poi aggiungere la parte finale dell’URL passata dall’API. Esempio di URL: https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

## :heavy_check_mark: Milestone 3B:

Trasformare il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome). Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene.

## :x: Milestone 4A:

Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:

## :heavy_check_mark: Milestone 4B:

Un header che contiene logo e search bar

## :heavy_check_mark: Milestone 4C:

Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (consiglio la poster_path con w342)

## :heavy_check_mark: Milestone 4D:

Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview

## :heavy_check_mark: Milestone 5A:

Partendo da un film o da una serie, richiedere all'API quali sono gli attori che fanno parte del cast aggiungendo alla nostra scheda Film / Serie SOLO i primi 5 restituiti dall’API con Nome e Cognome,

## :heavy_check_mark: Milestone 5B:

Come sopra ma restituire anche i generi associati al film con questo schema: “Genere 1, Genere 2, …”.

## :x: Milestone 6:

Creare una lista di generi richiedendo quelli disponibili all'API e creare dei filtri con i generi tv e movie per mostrare/nascondere le schede ottenute con la ricerca.
