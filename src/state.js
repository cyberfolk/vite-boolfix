import { reactive } from 'vue'
import axios from "axios";

export const state = reactive({
    loading: true,
    API_URL_MOVIE: "https://api.themoviedb.org/3/search/movie?api_key=a1dc26cbc575ebf88e2a7bd502493e10",
    movies: [],
    filter: "",

    fetchMovies(url, search = "") {
        this.loading = true;
        const urlComposite = url + this.createQuery(search)
        console.log(urlComposite);
        axios
            .get(urlComposite)
            .then((response) => {
                this.movies = response.data.results;
                this.loading = false;
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