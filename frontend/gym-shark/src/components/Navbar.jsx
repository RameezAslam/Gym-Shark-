import { useState } from "react";
import '../css/Navbar.css'
import '../css/CartSidebar.css'
import Offcanvas from "react-bootstrap/Offcanvas";
import MobileDrawer from './sub-components/MobileDrawer'
import logo from '../images/Logo.png'
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [openCartSidebar, setOpenCartSidebar] = useState(false);

  const navLinks = ["Women", "Men", "Accessories", "Explore"];

  // const megaMenuNavLinksOne = ["Trending", "Leggings", "Products", "Accessories", "Last Chance"];
  // const megaMenuNavLinksTwo = ["Trending", "T-shirts & Tops", "Products", "Accessories", "Last Chance"];
  // const megaMenuNavLinksThree = ["Trending", "Bags", "Equipment", "Socks", "Underwear" , "Headwear" , "Last Chance"];
  // const megaMenuNavLinksFour = ["Womens Guides", "Mens Guides", "Womens Clothing", "Mens Clothing", "Find Out More"];

  // const WomenSubMenuLinksOne = ["New Arrivals", "Best Sellers" , "Form | Now Live" , "Everyday Seamless" , "Spring Looks" , "Pilates"]
  // const WomenSubMenuLinksTwo = ["All Leggings", "High-Waisted Leggings" , "Scrunch Butt Leggings" , "Black Leggings" , "Flare Leggings" , "Seamless Leggings", "Leggings with Pockets" , "Tall Leggings"]
  // const WomenSubMenuLinksThree = ["All products", "Leggings" , "T-shirts & Tops" , "Sport Bras" , "Tank Tops" , "Shorts" , "Matching Sets", "Loungewear" , "Tracksuits" , "Hoodies & Sweatshirts", "Jackets", "Joggers & Sweatpants"]
  // const WomenSubMenuLinksFour = ["All Accessories", "All Socks"]
  // const WomenSubMenuLinksFive = ["For Less"]

  // const MenSubMenuLinksOne = ["New Arrivals", "Best Sellers" , "Unfinished: GymShark x CBUM" , "Running" , "Lifting"]
  // const MenSubMenuLinksTwo = ["T-shirts & Tops", "Compression Fit T-shirts" , "Muscle Fit Shirts" , "Tank Tops" , "Oversized T-Shirts" , "Long Sleeve Tops", "Stringers" , "Black T-Shirts"]
  // const MenSubMenuLinksThree = ["All Products", "T-Shirts & Tops"," Tank TopsShorts ", "Hoodies & Sweatshirts", "Joggers & Sweatpants", "Pants", "Tracksuits", "Long Sleeve Tops", "Jackets", "Outerwear", "Men's Underwear & Basics", "Base", "Layers"]
  // const MenSubMenuLinksFour = ["All Accessories", "All Socks"]
  // const MenSubMenuLinksFive = ["For Less"]

  // const AccessoriesSubMenuLinksOne = ["All Accessories", "New Arrivals", "Best Sellers" , "Seasonal Accessories" , "Running Accessories"]
  // const AccessoriesSubMenuLinksTwo = ["T-shirts & Tops", "Compression Fit T-shirts" , "Muscle Fit Shirts" , "Tank Tops" , "Oversized T-Shirts" , "Long Sleeve Tops", "Stringers" , "Black T-Shirts"]
  // const AccessoriesSubMenuLinksThree = ["All Products", "T-Shirts & Tops"," Tank TopsShorts ", "Hoodies & Sweatshirts", "Joggers & Sweatpants", "Pants", "Tracksuits", "Long Sleeve Tops", "Jackets", "Outerwear", "Men's Underwear & Basics", "Base", "Layers"]
  // const AccessoriesSubMenuLinksFour = ["All Accessories", "All Socks"]
  // const AccessoriesSubMenuLinksFive = ["For Less"]

  // const ExploreSubMenuLinksOne = ["All Accessories", "New Arrivals", "Best Sellers" , "Seasonal Accessories" , "Running Accessories"]
  // const ExploreSubMenuLinksTwo = ["T-shirts & Tops", "Compression Fit T-shirts" , "Muscle Fit Shirts" , "Tank Tops" , "Oversized T-Shirts" , "Long Sleeve Tops", "Stringers" , "Black T-Shirts"]
  // const ExploreSubMenuLinksThree = ["All Products", "T-Shirts & Tops"," Tank TopsShorts ", "Hoodies & Sweatshirts", "Joggers & Sweatpants", "Pants", "Tracksuits", "Long Sleeve Tops", "Jackets", "Outerwear", "Men's Underwear & Basics", "Base", "Layers"]
  // const ExploreSubMenuLinksFour = ["All Accessories", "All Socks"]
  // const ExploreSubMenuLinksFive = ["For Less"]

 return (
 <>
  <div className="container-fluid p-0">

    <div className="top-bar d-flex align-items-center justify-content-center">
      <a href="#">Get $10 off when you refer a friend</a>
    </div>

    <nav className="nav-bar-css">
      <div className="d-flex align-items-center gap-3">
        <button
          className="navbar-toggler border-0 d-lg-none"
          onClick={() => setShow(true)}
        > 
          <span className="navbar-toggler-icon" />
          </button>
        <button className="btn btn-link text-dark p-0 d-inline d-lg-none d-lg-inline">
            <CiSearch className="header-icons" />
        </button>

    <ul className="d-none d-lg-flex list-unstyled mb-0 gap-4 align-items-center nav-list position-relative">

      <li className="nav-item-wrapper">
            <a href="#" className="nav-item text-decoration-none text-black small">
              Women
            </a>
          {/* Dropdown */}
          <div className="dropdown">
          <ul className="dropdown-columns">
            <li className="dropdown-col has-sub">
              <div className="d-flex align-items-center justify-content-between">
                  <h3>Trending</h3>
                  <MdKeyboardArrowRight size={22} />
              </div>
              
              <ul className="sub-dropdown">
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Best Sellers</a></li>
                <li><a href="#">Form | Now Live</a></li>
                <li><a href="#">Everyday Seamless</a></li>
                <li><a href="#">Spring Looks</a></li>
                <li><a href="#">Pilates</a></li>
              </ul>
            </li>
              <li className="dropdown-col has-sub">
                <div className="d-flex align-items-center justify-content-between">
                    <h3>Leggings</h3>
                    <MdKeyboardArrowRight size={22} />
                </div>
                <ul className="sub-dropdown">
                    <li><a href="#">All Leggings</a></li>
                    <li><a href="#">High Waisted</a></li>
                    <li><a href="#">Scrunch Butt Leggings</a></li>
                    <li><a href="#">Black Leggings</a></li>
                    <li><a href="#">Flare Leggings</a></li>
                    <li><a href="#">Seamless Leggings</a></li>
                    <li><a href="#">Leggings with Pockets</a></li>
                    <li><a href="#">Tall Leggings</a></li>
                </ul>
              </li>
              <li className="dropdown-col has-sub">
                <div className="d-flex align-items-center justify-content-between">
                    <h3>Products</h3>
                    <MdKeyboardArrowRight size={22} />
                </div>
                <ul className="sub-dropdown">
                    <li><a href="#">All Leggings</a></li>
                    <li><a href="#">High Waisted</a></li>
                    <li><a href="#">Scrunch Butt Leggings</a></li>
                    <li><a href="#">Black Leggings</a></li>
                    <li><a href="#">Flare Leggings</a></li>
                    <li><a href="#">Seamless Leggings</a></li>
                    <li><a href="#">Leggings with Pockets</a></li>
                    <li><a href="#">Tall Leggings</a></li>
                </ul>
              </li>
              <li className="dropdown-col has-sub">
                <div className="d-flex align-items-center justify-content-between">
                    <h3>Accessories</h3>
                    <MdKeyboardArrowRight size={22} />
                </div>
                <ul className="sub-dropdown">
                    <li><a href="#">All Leggings</a></li>
                    <li><a href="#">High Waisted</a></li>
                    <li><a href="#">Scrunch Butt Leggings</a></li>
                    <li><a href="#">Black Leggings</a></li>
                    <li><a href="#">Flare Leggings</a></li>
                    <li><a href="#">Seamless Leggings</a></li>
                    <li><a href="#">Leggings with Pockets</a></li>
                    <li><a href="#">Tall Leggings</a></li>
                </ul>
              </li>
              <li className="dropdown-col has-sub">
                <div className="d-flex align-items-center justify-content-between">
                    <h3>Last Chance</h3>
                    <MdKeyboardArrowRight size={22} />
                </div>
                <ul className="sub-dropdown">
                    <li><a href="#">All Leggings</a></li>
                    <li><a href="#">High Waisted</a></li>
                    <li><a href="#">Scrunch Butt Leggings</a></li>
                    <li><a href="#">Black Leggings</a></li>
                    <li><a href="#">Flare Leggings</a></li>
                    <li><a href="#">Seamless Leggings</a></li>
                    <li><a href="#">Leggings with Pockets</a></li>
                    <li><a href="#">Tall Leggings</a></li>
                </ul>
              </li>
            </ul>
          </div>
    </li>

        <li className="nav-item-wrapper">
          <a href="#" className="nav-item text-decoration-none text-black small">
              Men
            </a>

          {/* Dropdown */}
          <div className="dropdown">
            <ul className="dropdown-columns">
              <li className="dropdown-col has-sub">
                <div className="d-flex align-items-center justify-content-between">
                      <h3>Trending</h3>
                      <MdKeyboardArrowRight size={22} />
                </div>
                
                <ul className="sub-dropdown">
                  <li><a href="#">New Arrivals</a></li>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">Form | Now Live</a></li>
                  <li><a href="#">Everyday Seamless</a></li>
                  <li><a href="#">Spring Looks</a></li>
                  <li><a href="#">Pilates</a></li>
                </ul>
              </li>
                <li className="dropdown-col has-sub">
                  <div className="d-flex align-items-center justify-content-between">
                      <h3>Leggings</h3>
                      <MdKeyboardArrowRight size={22} />
                  </div>
                  <ul className="sub-dropdown">
                      <li><a href="#">All Leggings</a></li>
                      <li><a href="#">High Waisted</a></li>
                      <li><a href="#">Scrunch Butt Leggings</a></li>
                      <li><a href="#">Black Leggings</a></li>
                      <li><a href="#">Flare Leggings</a></li>
                      <li><a href="#">Seamless Leggings</a></li>
                      <li><a href="#">Leggings with Pockets</a></li>
                      <li><a href="#">Tall Leggings</a></li>
                  </ul>
                </li>
                <li className="dropdown-col has-sub">
                  <div className="d-flex align-items-center justify-content-between">
                      <h3>Products</h3>
                      <MdKeyboardArrowRight size={22} />
                  </div>
                  <ul className="sub-dropdown">
                      <li><a href="#">All Leggings</a></li>
                      <li><a href="#">High Waisted</a></li>
                      <li><a href="#">Scrunch Butt Leggings</a></li>
                      <li><a href="#">Black Leggings</a></li>
                      <li><a href="#">Flare Leggings</a></li>
                      <li><a href="#">Seamless Leggings</a></li>
                      <li><a href="#">Leggings with Pockets</a></li>
                      <li><a href="#">Tall Leggings</a></li>
                  </ul>
                </li>
                <li className="dropdown-col has-sub">
                  <div className="d-flex align-items-center justify-content-between">
                      <h3>Accessories</h3>
                      <MdKeyboardArrowRight size={22} />
                  </div>
                  <ul className="sub-dropdown">
                      <li><a href="#">All Leggings</a></li>
                      <li><a href="#">High Waisted</a></li>
                      <li><a href="#">Scrunch Butt Leggings</a></li>
                      <li><a href="#">Black Leggings</a></li>
                      <li><a href="#">Flare Leggings</a></li>
                      <li><a href="#">Seamless Leggings</a></li>
                      <li><a href="#">Leggings with Pockets</a></li>
                      <li><a href="#">Tall Leggings</a></li>
                  </ul>
                </li>
                <li className="dropdown-col has-sub">
                  <div className="d-flex align-items-center justify-content-between">
                      <h3>Last Chance</h3>
                      <MdKeyboardArrowRight size={22} />
                  </div>
                  <ul className="sub-dropdown">
                      <li><a href="#">All Leggings</a></li>
                      <li><a href="#">High Waisted</a></li>
                      <li><a href="#">Scrunch Butt Leggings</a></li>
                      <li><a href="#">Black Leggings</a></li>
                      <li><a href="#">Flare Leggings</a></li>
                      <li><a href="#">Seamless Leggings</a></li>
                      <li><a href="#">Leggings with Pockets</a></li>
                      <li><a href="#">Tall Leggings</a></li>
                  </ul>
                </li>
              </ul>
          </div>
        </li>

    <li className="nav-item-wrapper">
       <a href="#" className="nav-item text-decoration-none text-black small">
          Accessories
        </a>

       {/* Dropdown */}
          <div className="dropdown">
            <ul className="dropdown-columns">
              <li className="dropdown-col has-sub">
                <div className="d-flex align-items-center justify-content-between">
                      <h3>Trending</h3>
                      <MdKeyboardArrowRight size={22} />
                </div>
                
                <ul className="sub-dropdown">
                  <li><a href="#">New Arrivals</a></li>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">Form | Now Live</a></li>
                  <li><a href="#">Everyday Seamless</a></li>
                  <li><a href="#">Spring Looks</a></li>
                  <li><a href="#">Pilates</a></li>
                </ul>
              </li>
                <li className="dropdown-col has-sub">
                  <div className="d-flex align-items-center justify-content-between">
                      <h3>Leggings</h3>
                      <MdKeyboardArrowRight size={22} />
                  </div>
                  <ul className="sub-dropdown">
                      <li><a href="#">All Leggings</a></li>
                      <li><a href="#">High Waisted</a></li>
                      <li><a href="#">Scrunch Butt Leggings</a></li>
                      <li><a href="#">Black Leggings</a></li>
                      <li><a href="#">Flare Leggings</a></li>
                      <li><a href="#">Seamless Leggings</a></li>
                      <li><a href="#">Leggings with Pockets</a></li>
                      <li><a href="#">Tall Leggings</a></li>
                  </ul>
                </li>
                <li className="dropdown-col has-sub">
                  <div className="d-flex align-items-center justify-content-between">
                      <h3>Products</h3>
                      <MdKeyboardArrowRight size={22} />
                  </div>
                  <ul className="sub-dropdown">
                      <li><a href="#">All Leggings</a></li>
                      <li><a href="#">High Waisted</a></li>
                      <li><a href="#">Scrunch Butt Leggings</a></li>
                      <li><a href="#">Black Leggings</a></li>
                      <li><a href="#">Flare Leggings</a></li>
                      <li><a href="#">Seamless Leggings</a></li>
                      <li><a href="#">Leggings with Pockets</a></li>
                      <li><a href="#">Tall Leggings</a></li>
                  </ul>
                </li>
                <li className="dropdown-col has-sub">
                  <div className="d-flex align-items-center justify-content-between">
                      <h3>Accessories</h3>
                      <MdKeyboardArrowRight size={22} />
                  </div>
                  <ul className="sub-dropdown">
                      <li><a href="#">All Leggings</a></li>
                      <li><a href="#">High Waisted</a></li>
                      <li><a href="#">Scrunch Butt Leggings</a></li>
                      <li><a href="#">Black Leggings</a></li>
                      <li><a href="#">Flare Leggings</a></li>
                      <li><a href="#">Seamless Leggings</a></li>
                      <li><a href="#">Leggings with Pockets</a></li>
                      <li><a href="#">Tall Leggings</a></li>
                  </ul>
                </li>
                <li className="dropdown-col has-sub">
                  <div className="d-flex align-items-center justify-content-between">
                      <h3>Last Chance</h3>
                      <MdKeyboardArrowRight size={22} />
                  </div>
                  <ul className="sub-dropdown">
                      <li><a href="#">All Leggings</a></li>
                      <li><a href="#">High Waisted</a></li>
                      <li><a href="#">Scrunch Butt Leggings</a></li>
                      <li><a href="#">Black Leggings</a></li>
                      <li><a href="#">Flare Leggings</a></li>
                      <li><a href="#">Seamless Leggings</a></li>
                      <li><a href="#">Leggings with Pockets</a></li>
                      <li><a href="#">Tall Leggings</a></li>
                  </ul>
                </li>
              </ul>
          </div>
      </li>
        
        <li className="nav-item-wrapper">
           <a href="#" className="nav-item text-decoration-none text-black small">
              Explore
            </a>

          {/* Dropdown */}
          <div className="dropdown">
            <ul className="dropdown-columns">
              <li className="dropdown-col has-sub">
                <div className="d-flex align-items-center justify-content-between">
                      <h3>Trending</h3>
                      <MdKeyboardArrowRight size={22} />
                </div>
                
                <ul className="sub-dropdown">
                  <li><a href="#">New Arrivals</a></li>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">Form | Now Live</a></li>
                  <li><a href="#">Everyday Seamless</a></li>
                  <li><a href="#">Spring Looks</a></li>
                  <li><a href="#">Pilates</a></li>
                </ul>
              </li>
                <li className="dropdown-col has-sub">
                  <div className="d-flex align-items-center justify-content-between">
                      <h3>Leggings</h3>
                      <MdKeyboardArrowRight size={22} />
                  </div>
                  <ul className="sub-dropdown">
                      <li><a href="#">All Leggings</a></li>
                      <li><a href="#">High Waisted</a></li>
                      <li><a href="#">Scrunch Butt Leggings</a></li>
                      <li><a href="#">Black Leggings</a></li>
                      <li><a href="#">Flare Leggings</a></li>
                      <li><a href="#">Seamless Leggings</a></li>
                      <li><a href="#">Leggings with Pockets</a></li>
                      <li><a href="#">Tall Leggings</a></li>
                  </ul>
                </li>
                <li className="dropdown-col has-sub">
                  <div className="d-flex align-items-center justify-content-between">
                      <h3>Products</h3>
                      <MdKeyboardArrowRight size={22} />
                  </div>
                  <ul className="sub-dropdown">
                      <li><a href="#">All Leggings</a></li>
                      <li><a href="#">High Waisted</a></li>
                      <li><a href="#">Scrunch Butt Leggings</a></li>
                      <li><a href="#">Black Leggings</a></li>
                      <li><a href="#">Flare Leggings</a></li>
                      <li><a href="#">Seamless Leggings</a></li>
                      <li><a href="#">Leggings with Pockets</a></li>
                      <li><a href="#">Tall Leggings</a></li>
                  </ul>
                </li>
                <li className="dropdown-col has-sub">
                  <div className="d-flex align-items-center justify-content-between">
                      <h3>Accessories</h3>
                      <MdKeyboardArrowRight size={22} />
                  </div>
                  <ul className="sub-dropdown">
                      <li><a href="#">All Leggings</a></li>
                      <li><a href="#">High Waisted</a></li>
                      <li><a href="#">Scrunch Butt Leggings</a></li>
                      <li><a href="#">Black Leggings</a></li>
                      <li><a href="#">Flare Leggings</a></li>
                      <li><a href="#">Seamless Leggings</a></li>
                      <li><a href="#">Leggings with Pockets</a></li>
                      <li><a href="#">Tall Leggings</a></li>
                  </ul>
                </li>
                <li className="dropdown-col has-sub">
                  <div className="d-flex align-items-center justify-content-between">
                      <h3>Last Chance</h3>
                      <MdKeyboardArrowRight size={22} />
                  </div>
                  <ul className="sub-dropdown">
                      <li><a href="#">All Leggings</a></li>
                      <li><a href="#">High Waisted</a></li>
                      <li><a href="#">Scrunch Butt Leggings</a></li>
                      <li><a href="#">Black Leggings</a></li>
                      <li><a href="#">Flare Leggings</a></li>
                      <li><a href="#">Seamless Leggings</a></li>
                      <li><a href="#">Leggings with Pockets</a></li>
                      <li><a href="#">Tall Leggings</a></li>
                  </ul>
                </li>
              </ul>
          </div>   
        </li>
    </ul>
  </div>

    <a href="/" className="position-absolute start-50 translate-middle-x">
      <img className="logo" src={logo} alt="Gymshark-Logo" height={28} />
    </a>

    <div className="d-flex align-items-center gap-4">
        <button className="btn btn-link text-dark p-0 d-none d-lg-inline">
          <CiSearch className="header-icons" />
        </button>
        <a href="/#" className="text-dark d-none d-lg-inline">
          <IoMdHeartEmpty className="header-icons"  />
        </a>
        <Link to="/login">
           <VscAccount className="header-icons"  />
        </Link>
        <button onClick={() => setOpenCartSidebar(true)} className="text-dark btn btn-link p-0">
           <IoBagOutline className="header-icons"  />
        </button>
      </div>
    </nav>
  </div>

  {/* MOBILE OFFCANVAS DRAWER */}

  <Offcanvas 
      show={show}
        onHide={() => setShow(false)} 
        placement="start"
        style={{
          top: "0px",
          bottom: "0px",
          width: "100%",
          height: "100vh",
          color: "black"
        }}
        >
    <Offcanvas.Header 
      className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom">
        <button
          className="btn p-0 border-0 bg-transparent"
          onClick={() => setShow(false)}
        >
          <IoCloseOutline size={24} color="black" />
        </button>

        {/* RIGHT — heart icon */}
        <a href="/#" className="text-dark">
          <FaRegHeart size={20} />
        </a>
    </Offcanvas.Header>
    <Offcanvas.Body className="p-0">
      <MobileDrawer links={navLinks} />
    </Offcanvas.Body>
  </Offcanvas>

    {openCartSidebar && (
      <div className="cart-overlay"
        onClick={() => setOpenCartSidebar(false)}
      >   
      </div>
    )}

    {openCartSidebar && (
        <CartSidebar onClose={() => setOpenCartSidebar(false)} />
    )}

  </>
 );
}