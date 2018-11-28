import React, { Component } from 'react';
import Logo from './logo.png';
import menu from './menu.png';

const Header = () => {
    return (
     <header>
          <div className="header">
                <div className="header-wrap">
                <div className="logo">
                    <img src={Logo} className="" alt="Sparta Plaesent" />  
                </div>
                
                    <ul className="nav">
                        <li>
                            <a href="#">
                                212-555-5555
                            </a>
                        </li>
                        <li>
                            <a href="#">login</a>
                        </li>
                        <li>
                          <a href="#"><img src={menu} className="menu" alt="menu"/></a>
                          </li>
                    </ul>
                
                </div>
            </div>
     
     </header>
    );
  }

export default Header;
