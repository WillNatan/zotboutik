import React from "react";
import RestoLogo from "../../img/resto.jpg";

const ListingPage = (props) => {
  return (
    <>
      <section id="listing-section" className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <div className="filter-content">
                <h4>Filtrer par</h4>
                <hr className="mt-4" />
                <h4 className="text-orange">Ville</h4>
                <ul className="filtre-ville">
                  <li className="">
                    <input id="ville" type="checkbox" />
                    <label htmlFor="ville">&nbsp;Sainte-Marie</label>
                  </li>
                  <li className="">
                    <input id="ville" type="checkbox" />
                    <label htmlFor="ville">&nbsp;Saint-Denis</label>
                  </li>
                  <li className="">
                    <input id="ville" type="checkbox" />
                    <label htmlFor="ville">&nbsp;Sainte-Suzanne</label>
                  </li>
                  <li className="">
                    <input id="ville" type="checkbox" />
                    <label htmlFor="ville">&nbsp;Saint-André</label>
                  </li>
                </ul>
                <hr className="mt-4" />
                <h4 className="text-orange">Cuisine</h4>
                <ul className="filtre-cuisine">
                  <li className="">
                    <input id="cuisine" type="checkbox" />
                    <label htmlFor="cuisine">&nbsp;Américain</label>
                  </li>
                  <li className="">
                    <input id="cuisine" type="checkbox" />
                    <label htmlFor="cuisine">&nbsp;Chinois</label>
                  </li>
                  <li className="">
                    <input id="cuisine" type="checkbox" />
                    <label htmlFor="cuisine">&nbsp;Indien</label>
                  </li>
                  <li className="">
                    <input id="cuisine" type="checkbox" />
                    <label htmlFor="cuisine">&nbsp;Italien</label>
                  </li>
                  <li className="">
                    <input id="cuisine" type="checkbox" />
                    <label htmlFor="cuisine">&nbsp;Burgers</label>
                  </li>
                  <li className="">
                    <input id="cuisine" type="checkbox" />
                    <label htmlFor="cuisine">&nbsp;Desserts</label>
                  </li>
                  <li className="">
                    <input id="cuisine" type="checkbox" />
                    <label htmlFor="cuisine">&nbsp;Végétarien</label>
                  </li>
                  <li className="">
                    <input id="cuisine" type="checkbox" />
                    <label htmlFor="cuisine">&nbsp;Pizzas</label>
                  </li>
                </ul>
                <hr className="mt-4" />
                <h4 className="text-orange">Catégorie</h4>
                <ul className="filtre-cuisine">
                  <li className="">
                    <input id="cuisine" type="checkbox" />
                    <label htmlFor="cuisine">&nbsp;Restaurant</label>
                  </li>
                  <li className="">
                    <input id="cuisine" type="checkbox" />
                    <label htmlFor="cuisine">&nbsp;Boutique</label>
                  </li>
                  <li className="">
                    <input id="cuisine" type="checkbox" />
                    <label htmlFor="cuisine">&nbsp;Bar</label>
                  </li>
                  <li className="">
                    <input id="cuisine" type="checkbox" />
                    <label htmlFor="cuisine">&nbsp;Epicerie</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 offset-md-1">
              <div className="listing-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="list-item">
                      <button className="like-button"><i className="fa fa-heart text-danger"></i></button>
                      <img src={RestoLogo} className="img-fluid" alt="" />
                      <div className="rating">
                          <i className="fa fa-star"/><span> 4.5 (100+)</span>
                      </div>
                      <div className="clear"></div>
                      <h6 className="mt-3">Restaurant</h6>
                      <small>Indien - Sainte-Marie</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="list-item">
                      <button className="like-button"><i className="fa fa-heart text-danger"></i></button>
                      <img src={RestoLogo} className="img-fluid" alt="" />
                      <div className="rating">
                          <i className="fa fa-star"/><span> 4.5 (100+)</span>
                      </div>
                      <div className="clear"></div>
                      <h6 className="mt-3">Restaurant</h6>
                      <small>Indien - Sainte-Marie</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="list-item">
                      <button className="like-button"><i className="fa fa-heart text-danger"></i></button>
                      <img src={RestoLogo} className="img-fluid" alt="" />
                      <div className="rating">
                          <i className="fa fa-star"/><span> 4.5 (100+)</span>
                      </div>
                      <div className="clear"></div>
                      <h6 className="mt-3">Restaurant</h6>
                      <small>Indien - Sainte-Marie</small>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="list-item">
                      <button className="like-button"><i className="fa fa-heart text-danger"></i></button>
                      <img src={RestoLogo} className="img-fluid" alt="" />
                      <div className="rating">
                          <i className="fa fa-star"/><span> 4.5 (100+)</span>
                      </div>
                      <div className="clear"></div>
                      <h6 className="mt-3">Restaurant</h6>
                      <small>Indien - Sainte-Marie</small>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="list-item">
                      <button className="like-button"><i className="fa fa-heart text-danger"></i></button>
                      <img src={RestoLogo} className="img-fluid" alt="" />
                      <div className="rating">
                          <i className="fa fa-star"/><span> 4.5 (100+)</span>
                      </div>
                      <div className="clear"></div>
                      <h6 className="mt-3">Restaurant</h6>
                      <small>Indien - Sainte-Marie</small>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="list-item">
                      <button className="like-button"><i className="fa fa-heart text-danger"></i></button>
                      <img src={RestoLogo} className="img-fluid" alt="" />
                      <div className="rating">
                          <i className="fa fa-star"/><span> 4.5 (100+)</span>
                      </div>
                      <div className="clear"></div>
                      <h6 className="mt-3">Restaurant</h6>
                      <small>Indien - Sainte-Marie</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingPage;
