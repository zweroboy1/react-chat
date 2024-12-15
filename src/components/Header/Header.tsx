import React from 'react';
import UserProfile from 'src/assets/avatars/default.svg';

export const Header: React.FC = () => {

  return (
    <header className="header">
      <div className="header__upper-line">
      <div className="avatar"><UserProfile></UserProfile></div>
<button>Log in</button></div>

<input className="search" type="search" placeholder="Search or start new chat"></input>
    </header>
  );
};