import React from 'react';
import { HeaderStyle } from './styles';

function Header() {
  return (
    <HeaderStyle>
      <div>
        <h1>LabEc</h1>
      </div>
      <div>
        <a href="./App.js">Cart</a>
        <a href="./App.js">Login</a>
        <a href="./App.js">Sign-up</a>
      </div>
    </HeaderStyle>
  );
}

export default Header;