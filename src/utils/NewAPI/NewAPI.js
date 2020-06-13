import axios from "axios";

export default {
    getCharacters: function () {
        return axios.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=3f72a14899d9c5ab18818ace55fb0ffd&hash=57c96482afff99dea29676171a298aec")
    }
}