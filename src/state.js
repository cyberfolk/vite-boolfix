import { reactive } from 'vue'
import axios from "axios";

export const state = reactive({
    loadingMovies: true,
    loadingSeries: true,
    API_URL_BASE: "https://api.themoviedb.org/3/",
    API_URL_KEY: "api_key=a1dc26cbc575ebf88e2a7bd502493e10",
    API_URL_MOVIE: "search/movie?",
    API_URL_SERIE: "search/tv?",
    movies: [],
    series: [],
    filter: "",

    fetchMovies() {
        this.loadingMovies = true;
        const url = this.API_URL_BASE + this.API_URL_MOVIE + this.API_URL_KEY + "&query=" + this.filter;
        console.log(url);
        axios
            .get(url)
            .then((response) => {
                this.movies = response.data.results;
                this.loadingMovies = false;
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });
    },
    fetchSeries() {
        this.loadingSeries = true;
        const url = this.API_URL_BASE + this.API_URL_SERIE + this.API_URL_KEY + "&query=" + this.filter;
        console.log(url);
        axios
            .get(url)
            .then((response) => {
                this.series = response.data.results;
                this.loadingSeries = false;
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });
    },
});