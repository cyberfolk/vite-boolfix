# Netflix - Replica web-app

**Initial commit**: 19/03/23

**Tecnologie:** Vite, Vue.js, Javascript, Axios, HTML, CSS, SASS e Bootstrap.

🎬 Ed ecco qui la mia replica di Netflix, per Boolean.
Grazie ad Axios e all'API di TheMovieDB mi è stato possibile mostrare i film più popolari nella schermata prinncipale e poi permettere all'utente di ricercare i sui titoli preferiti utilizzando una barra di ricerca presente nella navbar.

https://github.com/cyberfolk/vite-netflix/assets/114855536/e013c684-d909-458f-994f-e45d47680529

## Milestone:
- [x] **global state**: progettarne la struttura.
- [x] **Searchbar**: Creare un vue-component costituito da un input e un button dove poter scrivere completamente o parzialmente il nome di un film. Cliccando sul bottone, parte la chiamata API che restituisce tutti i film contenenti ciò che ha scritto l’utente. Visualizzare a schermo i seguenti valori per ogni film trovato: **Titolo**, **Titolo Originale**, **Lingua** e **Voto**
- [x] **Bandiera Lingua**: trasformare la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).
  - [LangFlag](https://www.npmjs.com/package/vue-lang-code-flags) - *scelto*. Non opera sui paesi ma direttamente sulle lingue seguendo la codifica ISO 639-1.
  - [CountryFlag](https://github.com/ubaldop/vue-country-flag) - *scartato*.
  - [FlagIcons](https://www.vuescript.com/260-flag-icons/) - *scartato*.
- [x] **TV-Series research**: allargare la ricerca anche alle serie tv. Con la stessa azione di ricerca prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici). [Qui](https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs) un esempio di chiamata per le serie tv.
- [x] **Add Cover**: aggiungere al nostro elenco le copertina del film/serie-tv. Partiamo dall’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ aggiungere la dimensione desiderata ([elenco dimensioni disponibili](https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400)) e infine aggiungere la parte finale passataci dall’API che rappresenta il codice per la copertina del film. [Qui](https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png) un esempio.
- [x] **Vote 5 Stars**: trasformare il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome). Arrotondare sempre per eccesso all’unità successiva, non gestire icone mezze piene.
- [x] **Style header**: aggiungere un header che contiene logo e search bar
- [x] Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (ho usato il poster_path con w342)
- [x] **Info hover on card** Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview.
- [x] **Show actors list**: partendo da un film o da una serie, richiedere all'API quali sono gli attori che fanno parte del cast aggiungendo alla nostra scheda Film / Serie SOLO i primi 5 restituiti dall’API con Nome e Cognome,
- [x] **Show genres list**: come sopra ma restituire anche i generi associati al film con questo schema: “Genere 1, Genere 2, …”.
- [x] Creare una lista di generi richiedendo quelli disponibili all'API.

## TODO
- [ ] Aggiungere pagina iniziale.
- [ ] Aggiungere Slider simil netflix.
- [ ] Implementare ricerca per genere.
