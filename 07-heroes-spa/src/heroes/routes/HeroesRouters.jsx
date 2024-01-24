
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, HerosPage, MarvelPage, SearchPage } from '../pages';

export const HeroesRouters = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
          <Routes>
              <Route path="marvel" element={ <MarvelPage/>} />
              <Route path="dc" element={ <DcPage/>} />

              <Route path="search" element={ <SearchPage/>} />
              <Route path="hero/:id" element={ <HerosPage/>} />

              <Route path="/" element={ <Navigate to="/marvel"/>} />
          </Routes>
        </div>
        
    </>
  )
}
