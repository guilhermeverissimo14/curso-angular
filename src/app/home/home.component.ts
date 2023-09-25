import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Pokemons } from '../models/pokemon.imodels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemon: Pokemons[] = [];
  numero: number = 1;

  constructor(public pokemonservice: PokemonService) { }

  ngOnInit(): void {
    this.pokemonservice.listPokemons().subscribe((data:any) => {
      this.pokemon = data.results;
    })
  }

  pegarImagemPokemon(numero: number) {
    // console.log(numero)
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`;
  }

}


