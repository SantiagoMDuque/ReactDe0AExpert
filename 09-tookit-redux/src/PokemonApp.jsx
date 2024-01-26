import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { pokemons, isLoading, page } = useSelector(state => state.pokemon)

  useEffect (() => {
    dispatch( getPokemon() );
  },[]); 

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: { !isLoading ? 'True': 'False'}</span>
      <ul>
        {
          pokemons?.map(pokemon => {
            return <li key={pokemon?.name}> {pokemon?.name} </li>
          })
        }
      </ul>

      <button onClick={ () => dispatch( getPokemon(page) ) } disabled={ isLoading }>
        Next
      </button>

    </>
  )
}
