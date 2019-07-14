import React from 'react';
import './header.css';

const Header = () => (
<div>
      
          <div className="header">
            <h2 className="logo">Your Logo</h2>
            <ul>
              <li>
                <a href="#" className="active">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
                      <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                      </ul>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
              <li>
                <a href="#">Page 4</a>
              </li>
              <li>
                <a href="#">Page 5</a>
              </li>
              <li>
                <a href="#">Page 6</a>
              </li>
            </ul>
          </div>
      </div>
);

export default Header;
