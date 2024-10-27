// import { useState } from "react";

interface pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  button: () => void;
  button2: () => void;
  pokemonListLength: number; // Passer uniquement la longeur du tableau
  pokemonList: pokemon[];
  setPokemonIndex: (index: number) => void;
}

function NavBar({ pokemonList, setPokemonIndex }: NavBarProps) {
  return (
    <nav>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={pokemon.name}>
            <button onClick={() => setPokemonIndex(index)} type="button">
              {pokemon.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
