import { reactive } from 'vue'
import axios from "axios";

export const state = reactive({
    loadingMovies: true,
    loadingSeries: true,
    API_URL_MOVIE: "https://api.themoviedb.org/3/search/movie?api_key=a1dc26cbc575ebf88e2a7bd502493e10",
    API_URL_SERIE: "https://api.themoviedb.org/3/search/tv?api_key=a1dc26cbc575ebf88e2a7bd502493e10",
    movies: [],
    series: [],
    filter: "",

    fetchMovies(url, search = "") {
        this.loadingMovies = true;
        const urlComposite = url + this.createQuery(search)
        console.log(urlComposite);
        axios
            .get(urlComposite)
            .then((response) => {
                this.movies = response.data.results;
                this.loadingMovies = false;
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });
    },
    fetchSeries(url, search = "") {
        this.loadingShows = true;
        const urlComposite = url + this.createQuery(search)
        console.log(urlComposite);
        axios
            .get(urlComposite)
            .then((response) => {
                this.series = response.data.results;
                this.loadingSeries = false;
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });
    },

    createQuery(search) {
        let query = "";
        if (search) {
            query = `&query=${search}`
        } else {
            query = "";
        }
        return query;
    }
});