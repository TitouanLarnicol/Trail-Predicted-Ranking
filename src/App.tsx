import './App.scss';
import Menu from './component/menu/Menu';
import React from 'react'
import SearchRace from './component/search-race/search';
import { Route, Routes } from 'react-router-dom';
import RaceList from './component/race-list/RaceList';
import { Error } from './component/generic/404/404';
import RaceDetail from './component/race-detail/RaceDetail';
import { ErrorId } from './component/generic/ErrorId';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Menu />}>
          <Route path="/race/:id" element={<RaceDetail />} />
          <Route path="/search" element={<SearchRace />} />
          <Route path='*' element={<Error errorId={ErrorId.FORBIDDEN} />} />
          <Route index element={<RaceList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
