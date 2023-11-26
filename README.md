# Netflix - Replica web-app

**Initial commit**: 19/03/23

**Tecnologie:** Vite, Vue.js, Javascript, Axios, HTML, CSS, SASS e Bootstrap.

**Info**: 🎬 And here's my Netflix Replica, for Boolean.
Thanks to Axios and TheMovieDB API I was able to show the most popular movies on the main screen and then allow the user to search for their favorite titles using a search bar in the navbar.

## Video Demo
https://github.com/cyberfolk/vite-netflix/assets/114855536/e013c684-d909-458f-994f-e45d47680529

## Milestone:
- [x] **Global state**: design its structure.
- [x] **Searchbar**: Create a Vue-component consisting of an input and a button where you can write completely or partially the name of a film. By clicking on the button, the API call starts which returns all the films containing what the user wrote. Display the following values on the screen for each film found: **Title**, **Original Title**, **Language** and **Rating**
- [x] **Language Flag**: transform the static string of the language into a real flag of the corresponding nation, managing the case in which we do not have the flag of the nation returned by the API (the flags are not present in FontAwesome ).
    - [LangFlag](https://www.npmjs.com/package/vue-lang-code-flags) - *selected*. It does not operate on countries but directly on languages following ISO 639-1 code.
    - [CountryFlag](https://github.com/ubaldop/vue-country-flag) - *discarded*.
    - [FlagIcons](https://www.vuescript.com/260-flag-icons/) - *discarded*.
- [x] **TV series search**: broaden the search to include TV series. With the same search action, take both the films that match the query and the TV series, being careful to have similar values at the end (the series and films have different fields in the response JSON, similar but not always identical). [Here](https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&lingual=it_IT&query=scrubs) an example of a call for TV series.
- [x] **Add cover**: add the covers of the film/TV series to our list. Let's start from the base URL of TMDB images: https://image.tmdb.org/t/p/ add the desired size ([list of available sizes](https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400)) and finally add the final part passed to us by the API which represents the code for the film cover. [Here](https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png) an example.
- [x] **Rate 5 Stars**: transform the vote from 1 to 10 decimal into an integer number from 1 to 5, so as to allow us to print a number of full stars ranging from 1 to 5 on the screen, leaving the remaining empty (we find the icons in FontAwesome). Always round up to the next unit, do not handle half-full icons.
- [x] **Style header**: add a header that contains logo and search bar
- [x] After searching for something in the search bar, the results appear in the form of a "card" where the background is represented by the cover image (I used the poster_path with w342)
- [x] **Info hover on card** By moving the mouse over a card (on hover), the additional information already present in the previous points plus the overview appears.
- [x] **Show actor list**: starting from a film or series, ask the API which actors are part of the cast by adding ONLY the first 5 returned by the API with Name to our Film / Series tab and surname,
- [x] **Show genre list**: as above but also return the genres associated with the film with this scheme: “Genre 1, Genre 2, …”.
- [x] **Get kinds list**: creates a list of genres by requesting those available from the API.

## TODO
- [ ] Add home page.
- [ ] Add Slider similar to Netflix.
- [ ] Implement search by genre.
