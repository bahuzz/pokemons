export default class GetService {
    constructor() {
        this.proxy = 'https://cors-anywhere.herokuapp.com/';
        this._apiBase = 'https://pokeapi.co/api/v2/';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}. Received status ${res.status}`);
        }

        return await res.json();
    } 

    getPokemonsList = async (limit) => {
        const pokemons = await this.getResource(`pokemon?offset=0&limit=${limit}`);
        return pokemons;
    }

    getPokemons = async (limit) => {
        const list = await this.getPokemonsList(limit);
       
        const pokemons = Promise.all(list.results.map(item =>
              fetch(item.url).then(resp => resp.json())
          ));
        return pokemons;
    }
}

