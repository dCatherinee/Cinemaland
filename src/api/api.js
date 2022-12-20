import axios from "axios";

const API = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    headers: {
        'X-API-KEY': '1bead385-eb91-4691-8096-2d115f84d536'
    }
});

export function getData(path) {
    return API.get(path)
};

export function getFilmBudget(id) {
    return API.get(`/${id}/box_office`);
};

export function getFilmAwards(id) {
    return API.get(`/${id}/awards`);
};

export function getFilmSimilar(id) {
    return API.get(`/${id}/similars`);
};

export function getFilmImages(id) {
    return API.get(`/${id}/images`);
};

export function getFilmFacts(id) {
    return API.get(`/${id}/facts`);
};