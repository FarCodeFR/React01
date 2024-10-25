import { useState } from "react";

interface pokemonProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

interface NavBarProps {
  pokemonIndex: number;
  button: () => void;
  button2: () => void;
  pokemonListLength: number; // Passer uniquement la longeur du tableau
}

function NavBar({
  pokemonIndex,
  button,
  button2,
  pokemonListLength,
}: NavBarProps) {
  return (
    <nav>
      {pokemonIndex > 0 && (
        <button type="button" className="first" onClick={button2}>
          Précédent
        </button>
      )}
      {pokemonIndex < pokemonListLength - 1 && (
        <button type="button" className="second" onClick={button}>
          Suivant
        </button>
      )}
    </nav>
  );
}

export default NavBar;
