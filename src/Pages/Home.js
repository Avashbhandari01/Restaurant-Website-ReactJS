import React from 'react'
import BackgroundImage from '../Photos/Bg3.jpg';
import Food1 from '../Photos/Food12.PNG';
import Restaurant from '../Photos/Restro.jpg';
import Pasta from '../Photos/Food7.PNG';
import Burger from '../Photos/Food8.PNG';
import Platter from '../Photos/Food9.PNG';
import Curry from '../Photos/Food10.PNG';
import Chicken from '../Photos/Food11.PNG';
import Dish from '../Photos/Dish.PNG';
import '../Styles/Home.css';
import { MenuListStarters } from '../Data/MenuList.js';
import MenuItem from '../Components/MenuItem.js';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="container">
          <p>Welcome to Yums</p>
          <div className="line"></div>
          <h1>The Finest Food</h1>
          <Link to="/book"><button>Book a table</button></Link>
        </div>
      </div>
      <div className="container-1">
        <p>DISHES MADE WITH LOVE,<br />
          PASSION, AND METICULOUS ATTENTION<br />
          TO DETAIL
        </p>
      </div>
      <div className="container-2">
        <h1>SMALL BITES</h1>
        <div className="homeMenu">
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
          <div className="buttonDiv">
            <Link to="/menu"><button>View the menu</button></Link>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="leftPhoto" style={{ backgroundImage: `url(${Food1})` }}>
        </div>
        <div className="rightText">
          <h1>WE CARE</h1>
          <p>Our philosophy is to be part of the neighborhood and give back to our community. <br /></p>
          <p>We publish monthly dishes recipe booklets both online and in-store, organize workshops
            and evening courses, and even rent out our shop for local artists and musicians.</p>
        </div>
      </div>
      <div className="container-4">
        <div className="leftText">
          <h1>Recipes</h1>
          <p>Tasty dishes can be intimidating for a novice baker, but it doesn’t have to be.
            Every month, we combine some of our favorite recipes together.</p>
          <br />
          <h1>Hand Crafted</h1>
          <p>Want to learn more about cooking and the secrets of delicious dishes?
            Join our quarterly Hand Crafted courses in our store.</p>
          <br />
          <h1>Community</h1>
          <p>Looking for a venue to host an event?
            Yums welcomes creative souls from all walks of life.</p>
        </div>
        <div className="rightPhoto" style={{ backgroundImage: `url(${Restaurant})` }}>
        </div>
      </div>
      <div className="container-5">
        <div className="grid-container">
          <div className="photoOne" style={{ backgroundImage: `url(${Pasta})` }}></div>
          <div className="photoTwo" style={{ backgroundImage: `url(${Burger})` }}></div>
          <div className="photoThree" style={{ backgroundImage: `url(${Platter})` }}></div>
          <div className="photoFour" style={{ backgroundImage: `url(${Curry})` }}></div>
          <div className="photoFive" style={{ backgroundImage: `url(${Chicken})` }}></div>
          <div className="photoSix" style={{ backgroundImage: `url(${Dish})` }}></div>
        </div>
        <div className="bottomText">
          <p>Follow us on Instagram @Yums.</p>
        </div>
      </div>
      <div className="container-6">
        <div className="text">
          <h1>BOOK A TABLE</h1>
          <br />
          <p>Breakfast, lunch, or weekend brunch, we're always<br /> open for reservations.</p>
          <br />
          <Link to="/book"><button>Book a table</button></Link>
        </div>
      </div>
    </>
  )
}

export default Home;