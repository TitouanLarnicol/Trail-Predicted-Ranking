import axios from "axios";

const baseUrl: string = "http://localhost:3001/api/";

export const getRunnersFromRace = (raceName: string, url: string) => axios.create({
    baseURL: baseUrl 
}).post(`fetch-runners`, {
    raceName,
    url
});

export const getRaces = () => axios.create({
    baseURL: baseUrl
}).get(`fetch-races`);

export const getRaceByNameAndUrl = (raceName: string, raceUrl: string) => axios.create({
    baseURL: baseUrl
}).get(`fetch-race`, {
    params: {
        raceUrl,
        raceName
    }
});