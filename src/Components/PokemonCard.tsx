interface pokemonProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard({ pokemon }: pokemonProps) {
  return (
    <>
      <figure>
        {/* si il y'a une image ensuite si oui et si il y'en a pas */}
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>????</p>}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  );
}

export default PokemonCard;
