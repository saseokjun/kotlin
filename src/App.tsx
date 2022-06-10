import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { CoinListPage, BookmarkPage } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CoinListPage />} />
        <Route path='/bookmarks' element={<BookmarkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
