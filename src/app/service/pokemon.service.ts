import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pokemons } from '../models/pokemon.imodels';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'

  constructor(private http: HttpClient) { }

  listPokemons(){
    return this.http.get<Pokemons[]>(this.url)
  }

}
