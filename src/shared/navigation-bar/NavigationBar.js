import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.css'

export const NavigationBar = (props) => {
  const logout = () => {
    localStorage.clear()
    props.onLogin(false);
  }
  return (
    <header className="App-header">
      <nav>
        <Link className="menu-link" to="/">
          <span role="img" aria-label="home link">🏠 Home</span>
        </Link> |
        {` `}
        <Link className="menu-link" to="/photos">
          <span role="img" aria-label="photos link">📸 Photos</span>
        </Link> |
        {localStorage.getItem("username") &&
          <>
            <Link className="menu-link" to="/profile">
              <span role="img" aria-label="profile link">🧑 {localStorage.getItem("username")}</span>
            </Link> |
            <span className='menu-link' role="img" aria-label="profile link" onClick={logout}>Logout</span>
          </>
        }
      </nav>
    </header>
  );
}
