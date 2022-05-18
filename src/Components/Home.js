import React, {useEffect} from "react";
import Home_Nav from "./Home_Nav";
import Product from "./Product";
import Slider from "./Slider";
import "./Styles/Home.css";

function Home() {

  useEffect(() => {
    document.title = "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon"
  })
  

  return (
    <div className="home">
      <div className="home__container">
      <Home_Nav/>
        {/* <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61pxhbXv8tL._SX3000_.jpg"
          alt="pager"
        /> */}
        <Slider className="home__image" />

        <div className="home__row">
          <Product
            id="19030293"
            title="Rich Dad Poor Dad"
            imag="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UL480_FMwebp_QL65_.jpg"
            price={302}
            rating={3}
          />
          <Product
            id="190136293"
            title="Zuvexa Egg Boiler Poacher Automatic Off Steaming, Cooking, Boiling Double Layer 14 Egg Boiler (Multicolor)"
            imag="https://m.media-amazon.com/images/I/41OMk5gCq1L.jpg"
            price={499}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="196930293"
            title="HP All-in-One 24-df0215in 60.45 cm (23.8-Inch) FHD with Alexa Built-in"
            imag="https://m.media-amazon.com/images/I/71MW1E0je-L._AC_UL480_FMwebp_QL65_.jpg"
            price={49900}
            rating={4}
          />
          <Product
            id="190357293"
            title="OFIXO Multi-Purpose Laptop Table/Study Table/Bed Table/Foldable and Portable Wooden/Writing Desk (Wooden)"
            imag="https://images-eu.ssl-images-amazon.com/images/I/61Li8vJ+7iL._AC_UL450_SR450,320_.jpg"
            price={599}
            rating={4}
          />
          <Product
            id="190331463"
            title="Lavie Sport Cabin Size 53 cms Lino Wheel Duffel Bag for Travel | Luggage Bag | Travel Bag"
            imag="https://images-eu.ssl-images-amazon.com/images/I/61QSsY2TYJL._AC_UL450_SR450,320_.jpg"
            price={949}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3562943"
            title="LG 80 cms (32 Inches) HD Ready Smart IPS LED TV 32LM560BPTC"
            imag="https://m.media-amazon.com/images/I/81Yy5UF05tL._SL1500_.jpg"
            price={22499}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
