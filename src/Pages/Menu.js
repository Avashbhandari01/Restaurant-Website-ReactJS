import React from 'react';
import '../Styles/Menu.css';
import Photo from '../Photos/menu.jpg';
import { MenuListStarters } from '../Data/MenuList.js';
import { MenuListMains } from '../Data/MenuList.js';
import { MenuListDessert } from '../Data/MenuList.js';
import MenuItem from '../Components/MenuItem.js';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <div className="menuPhoto" style={{ backgroundImage: `url(${Photo})` }}>
        <h1>IT'S MENU</h1>
      </div>
      <div className="mainMenu">
        <h1>Starters</h1>
        <div className="starters">
          {MenuListStarters.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                name={menuItem.name}
                description={menuItem.description}
                price={menuItem.price}
              />
            );
          })}
        </div>
        <h1>Main Course</h1>
        <div className="mainCourse">
          {MenuListMains.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                name={menuItem.name}
                description={menuItem.description}
                price={menuItem.price}
              />
            );
          })}
        </div>
        <h1>Dessert</h1>
        <div className="dessert">
          {MenuListDessert.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                name={menuItem.name}
                description={menuItem.description}
                price={menuItem.price}
              />
            );
          })}
        </div>
      </div>
      <div className="mainMenu-2">
        <h1>BOOK A TABLE</h1>
        <p>Accepting a reservation any time</p>
        <Link to="/book"><button>Book a table</button></Link>
      </div>
    </>
  )
}

export default Menu;