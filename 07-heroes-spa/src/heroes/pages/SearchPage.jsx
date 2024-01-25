import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/index';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navegate = useNavigate();

  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const q = searchParams.get('q') || '';
  const heroes = getHeroesByName( q );

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmin = (event) => {
    event.preventDefault();

    navegate(`?q=${ searchText }`);
  }

  return (
    <>
        <h1>Search</h1>
        <br />
        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmin }>
              <input 
                type="text" 
                placeholder="Search a hero" 
                className="form-control" 
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />
              <button className="btn btn-outline-primary mt-1">
                Search
              </button>
            </form>
          </div>
          <div className="col-7">
            <h4>Result</h4>
            <hr />  

            <div 
              className="alert alert-primary animate__animated animate__fadeIn" 
              style={{ display: showSearch ? '' : 'none' }}
            >
              Search a hero
            </div>     

            <div 
              className="alert alert-danger animate__animated animate__fadeIn" 
              style={{ display: showError ? '' : 'none' }}
            >
              There's no result with <b>{ q }</b>
            </div>
            {
              heroes.map( hero => (
                <HeroCard key={ hero.id } {...hero}/>
              ))
            }
          </div>
        </div>
        
    </>
  )
}
