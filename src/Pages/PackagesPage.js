import React from 'react'
import logo from '../images/logo.png';
import burger from '../images/burger.jpeg'
import salad from '../images/salad.jpg'
import soup from '../images/soup.webp'
import roll from  '../images/Vegetable-Rolls.jpg'
import noodles from '../images/noddles.jpg'
import fries from '../images/french-freis.jpg'
import sandwich from '../images/sandwich.jpg'
import pasta from '../images/pasta.jpeg'
import tacos from '../images/tacos.jpg'
import pizza from '../images/pizaa.webp'
import desert from '../images/deserts.webp'
import sweet from '../images/sweet.webp'
import { Link } from 'react-router-dom'


const PackagesPage = () => {
  return (
    <div>
      <div class="container-fluid navbar-bg">
        
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent container-fluid p-3">
      <Link class="navbar-brand" to="/" >
       
        <div class="logo">
      <img src={logo} alt="" />
        </div>
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto text-center">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link" to="/services">Services</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About Us</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/packages">Our Package</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/chefs">Our Chef</Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>

        <div class="header container text-center py-5">
          <h1 class="font-weight-bolder">Our Packages</h1>
          <p class="mt-4 ">Home / Pages /Packages</p>
        </div>
      </div>
      <div class="packages mt-5" id="packages">
        <h1 class="text-center">Our Packages</h1>
        <p class="text-center">Discover our thoughtfully curated packages designed to suit a variety of occasions and budgets.</p>
        <div class="row mt-5">
          <div class="col-lg-4 col-sm-12">
            <div class="card mt-3">
              <div class="card-body m-0">
             
                  <img src={burger} alt="" style={{ height: "300px" }}/>
                  <h4 class="card-title mt-3">Burger Bonanza</h4>
                  <p class="card-text">Sink your teeth into our juicy, flame-grilled burgers made with premium beef patties, fresh lettuce, ripe tomatoes, and our secret sauce. </p>
                  
                <button type="button" class="btn btn-danger">Get Started</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 ">
            <div class="card mt-3">
              <div class="card-body">
             
                  <img src={salad} alt="" style={{ height: "300px" }}/>
           
                  <h4 class="card-title mt-3">Salad Sensation</h4>
                  <p class="card-text">Enjoy a delightful combination of crisp lettuce, colorful vegetables, tangy dressings, and a sprinkle of crunchy croutons. </p>
                  <button type="button" class="btn btn-danger">Get Started</button>
                
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 ">
            <div class="card mt-3">
              <div class="card-body">
              
                  <img src={soup} alt="" style={{ height: "300px" }}/>
            
                  <h4 class="card-title mt-3">Scrumptious Soupsy</h4>
                  <p class="card-text">From creamy tomato bisque to aromatic chicken noodle, our soups are made with the finest ingredients and carefully simmered to perfection.</p>
                  <button type="button" class="btn btn-danger">Get Started</button>
                
              </div>
            </div>
          </div>
          
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="card mt-3">
              <div class="card-body m-0">
                
                  <img src={roll} alt="" style={{ height: "300px" }}/>
                  <h4 class="card-title mt-3">Roll Delights</h4>
                  <p class="card-text">Embark on a flavor-packed journey with our delectable rolls. Wrapped in soft,our rolls feature a fusion of savory fillings, including succulent meats, fresh veggies, and zesty sauces</p>
                   <button type="button" class="btn btn-danger">Get Started</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 ">
            <div class="card mt-3">
              <div class="card-body">
               
                  <img src={noodles} alt="" style={{ height: "300px" }}/>
                
                <h4 class="card-title mt-3">Noodle Nirvana</h4>
                <p class="card-text">Experience the authentic flavors of Asia with our tantalizing noodle dishes. From classic stir-fried noodles to aromatic noodle soups, we offer a wide range of options to satisfy your cravings. </p>
                <button type="button" class="btn btn-danger">Get Started</button>
                
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 ">
            <div class="card mt-3">
              <div class="card-body">
              
                  <img src={fries} alt="" style={{ height: "300px" }}/>
                
                <h4 class="card-title mt-3">Finger-Lickin' Finger Chips</h4>
                <p class="card-text">Crispy, golden, and addictive, our finger chips are the perfect accompaniment to any meal. Served hot and seasoned to perfection, these thin-cut potato fries will have you reaching for more. </p>
                <button type="button" class="btn btn-danger">Get Started</button>
              </div>
            </div>
          </div>
          
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="card mt-3">
              <div class="card-body m-0">
                
                  <img src={sandwich} alt="" style={{ height: "300px" }}/>
                  <h4 class="card-title mt-3">Gourmet Sandwiches</h4>
                  <p class="card-text"> Elevate your lunchtime with our gourmet sandwiches, filled with premium meats, cheeses, and artisan bread.</p>
                   <button type="button" class="btn btn-danger">Get Started</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 ">
            <div class="card mt-3">
              <div class="card-body">
               
                  <img src={pasta} alt="" style={{ height: "300px" }}/>
                
                <h4 class="card-title mt-3">Savory Pasta</h4>
                <p class="card-text">Experience the perfect al dente pasta paired with rich, flavorful sauces for a satisfying Italian feast.</p>
                <button type="button" class="btn btn-danger">Get Started</button>
                
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 ">
            <div class="card mt-3">
              <div class="card-body">
              
                  <img src={tacos} alt="" style={{ height: "300px" }}/>
                
                <h4 class="card-title mt-3">Zesty Mexican Tacos</h4>
                <p class="card-text">Discover the vibrant flavors of Mexico with our tantalizing assortment of authentic tacos.</p>
                <button type="button" class="btn btn-danger">Get Started</button>
              </div>
            </div>
          </div>
          
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="card mt-3">
              <div class="card-body m-0">
                
                  <img src={pizza} alt="" style={{ height: "300px" }}/>
                  <h4 class="card-title mt-3">Artisanal Pizzas</h4>
                  <p class="card-text">Thin crust, fresh ingredients, and mouthwatering combinations that will transport you to pizza heaven.</p>
                   <button type="button" class="btn btn-danger">Get Started</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 ">
            <div class="card mt-3">
              <div class="card-body">
               
                  <img src={desert} alt="" style={{ height: "300px" }}/>
                
                <h4 class="card-title mt-3">Decadent Desserts</h4>
                <p class="card-text"> Indulge in our heavenly selection of cakes, pastries, and sweet treats that will leave you craving for more.</p>
                <button type="button" class="btn btn-danger">Get Started</button>
                
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 ">
            <div class="card mt-3">
              <div class="card-body">
              
                  <img src={sweet} alt="" style={{ height: "300px" }}/>
                
                <h4 class="card-title mt-3">Authentic Sushi</h4>
                <p class="card-text">Experience the artistry of sushi with our handcrafted rolls and sashimi made with the freshest fish.</p>
                <button type="button" class="btn btn-danger">Get Started</button>
              </div>
            </div>
          </div>
          
        </div>
         
      </div>
    </div>
  )
}

export default PackagesPage