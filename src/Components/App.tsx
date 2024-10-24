import PokemonCard from "./PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = () => {
    setPokemonIndex(pokemonIndex + 1);
    console.log(pokemonIndex);
  };
  const handleClick2 = () => {
    setPokemonIndex(pokemonIndex - 1);
    console.log(pokemonIndex);
  };

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        {pokemonIndex > 0 ? (
          <button type="button" className="first" onClick={handleClick2}>
            Précédent
          </button>
        ) : null}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button type="button" className="second" onClick={handleClick}>
            Suivant
          </button>
        ) : null}
      </div>
    </>
  );
}

export default App;
