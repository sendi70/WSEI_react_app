import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavigationBar } from './shared/navigation-bar/NavigationBar';
import { Home } from './pages/home/Home'
import { BrowserRouter, Routes } from 'react-router-dom/dist';

import { PhotosContainer } from './pages/photos/photosContainer';
import { AddPhotoView } from './pages/photos/addPhoto';
import { useEffect, useState } from 'react';
import { ProfileContainer } from './pages/profile/profileContainer';

function App() {
  const [isLogged, loginUser] = useState(false)
  return (
    <BrowserRouter>
      <NavigationBar onLogin={loginUser} />
      <Routes>
        <Route exact path="/" element={<Home onLogin={loginUser} />} />
        <Route exact path="/photos" element={<PhotosContainer isLogged={isLogged} />} />
        <Route exact path="/photos/Add" element={<AddPhotoView />} />
        <Route exact path="/profile" element={<ProfileContainer isLogged={isLogged} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
