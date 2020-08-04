import React from "react";
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Logo from "../img/orange.png";
import ListingPage from "./pages/ListingPage";
const Layout = (props) => {
  return (
    <>
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-white">
        <div className="container">
          <Link className="navbar-brand" to="#">
            <img src={Logo} alt="" width="100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Accueil <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/liste">
                  Boutiques
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/liste">
                  Restaurants
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/liste">
                  Bars
                </Link>
              </li>
              <li className="nav-item ml-5">
                <Link className="nav-link" to="#">
                  <i className="fa fa-user"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
        <Switch>
          <Route exact path="/liste" component={ListingPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Layout;
