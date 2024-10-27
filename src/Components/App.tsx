import PokemonCard from "./PokemonCard";
import { useState } from "react";
import NavBar from "./NavBar";
import { useEffect } from "react";

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

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  // Fonction pour gérer la sélection d'un Pokémon
  const choixPokemonIndex = (index) => {
    setPokemonIndex(index);
    // Vérification si le Pokémon sélectionné est "pikachu"
    if (pokemonList[index].name.toLowerCase() === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

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
      <NavBar
        setPokemonIndex={choixPokemonIndex}
        pokemonList={pokemonList}
        pokemonIndex={pokemonIndex}
        pokemonListLength={pokemonList.length}
        button={handleClick}
        button2={handleClick2}
      />

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </>
  );
}

export default App;
