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
    moviesGenres: [],
    seriesGenres: [],
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
    getSeriesGenres() {
        const url = this.API_URL_BASE + "genre/tv/list?" + this.API_URL_KEY;
        console.log(url);
        axios
            .get(url)
            .then((response) => {
                this.seriesGenres = response.data.genres;
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });
    },
    getMoviesGenres() {
        const url = this.API_URL_BASE + "genre/movie/list?" + this.API_URL_KEY;
        console.log(url);
        axios
            .get(url)
            .then((response) => {
                this.moviesGenres = response.data.genres;
            })
            .catch((err) => {
                console.log(err);
                console.error(err.message);
            });
    },

});