import React from "react";
import './Home.css';
import Product from "./Product";

function Home(){
    return (
        <div className='home'>
            
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                <div className="home__row">
                    
                    
                <Product
                  id="89038908490"
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                  price={1094.89}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
                    

                </div>

                <div className="home__row">
                    <Product
                     id="49804049"
                     title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
                     price={19.99}
                     image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                     rating={5}/>
                    <Product
                    
                    id="75893388"
                    title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                  />
                    
                    <Product
                    id='4903850'
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                  price={199.99}
                  rating={3}
                  image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                />

                </div>

                <div className="home__row">
                    
<Product
                  id="89038908490"
                  title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                  price={1094.89}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />

                </div>
            </div>

        </div>
    )
}

export default Home;