import React, { useState } from "react";

import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import RestoLogo from "../../img/resto.jpg";

const HomePage = (props) => {
  const [mainPromos, setMainPromos] = useState([
    {
      image:
        "https://scontent.frun2-1.fna.fbcdn.net/v/t1.0-9/111256867_2973290979434873_1092291271016940625_o.png?_nc_cat=104&_nc_sid=730e14&_nc_ohc=eWW1KsooIA4AX-aPLoM&_nc_ht=scontent.frun2-1.fna&oh=c8f2ae85768b93688f5aecd2055654eb&oe=5F4E5FAA",
    },
    {
      image:
        "https://scontent.frun2-1.fna.fbcdn.net/v/t1.0-9/109810653_2958007694296535_9096039271079922704_o.png?_nc_cat=111&_nc_sid=730e14&_nc_ohc=u59wS4q5xA8AX8dCVLU&_nc_ht=scontent.frun2-1.fna&oh=97085b35af2d7da0fd5729930331bc83&oe=5F4D0AC7",
    },
  ]);

  const [secondPromos, setSecondPromos] = useState([
    {
      image:
        "https://scontent.frun2-1.fna.fbcdn.net/v/t1.0-9/110169805_2958244634272841_133359586362145240_o.jpg?_nc_cat=107&_nc_sid=730e14&_nc_ohc=Cdo9MMk_w2AAX_CB3Sp&_nc_ht=scontent.frun2-1.fna&oh=1ecff63ab2fad35a9062894401007bc2&oe=5F4E472E",
    },
    {
      image:
        "https://scontent.frun2-1.fna.fbcdn.net/v/t1.0-9/110169805_2958244634272841_133359586362145240_o.jpg?_nc_cat=107&_nc_sid=730e14&_nc_ohc=Cdo9MMk_w2AAX_CB3Sp&_nc_ht=scontent.frun2-1.fna&oh=1ecff63ab2fad35a9062894401007bc2&oe=5F4E472E",
    },
  ]);

  const [thirdPromos, setThirdPromos] = useState([
    {
      image:
        "https://scontent.frun2-1.fna.fbcdn.net/v/t1.0-9/109677639_2957978994299405_1903102616193606053_o.png?_nc_cat=106&_nc_sid=730e14&_nc_ohc=ZAvy2pleVQ0AX8XqNUA&_nc_ht=scontent.frun2-1.fna&oh=e45085073c03a6b82e34bbda466cbb0f&oe=5F4E0079",
    },
    {
      image:
        "https://scontent.frun2-1.fna.fbcdn.net/v/t1.0-9/109253824_2946842215413083_7912502448218386708_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=jXt9Cnkq3JYAX_m37dn&_nc_ht=scontent.frun2-1.fna&oh=d1ce83cc4ff3ddb768d6f7de93421d4b&oe=5F4D418A",
    },
  ]);

  const [categories, setCategories] = useState([
    {
      image: "https://picsum.photos/seed/1/125/125",
    },
    {
      image: "https://picsum.photos/seed/2/125/125",
    },
    {
      image: "https://picsum.photos/seed/3/125/125",
    },
    {
      image: "https://picsum.photos/seed/4/125/125",
    },
    {
      image: "https://picsum.photos/seed/5/125/125",
    },
    {
      image: "https://picsum.photos/seed/6/125/125",
    },
    {
      image: "https://picsum.photos/seed/7/125/125",
    },
    {
      image: "https://picsum.photos/seed/8/125/125",
    },
    {
      image: "https://picsum.photos/seed/9/125/125",
    },
    {
      image: "https://picsum.photos/seed/10/125/125",
    },
  ]);

  const [mobilePromos, setMobilePromos] = useState([
    {
      image: "https://picsum.photos/seed/1/500/500",
    },
    {
      image: "https://picsum.photos/seed/2/500/500",
    },
    {
      image: "https://picsum.photos/seed/3/500/500",
    },
    {
      image: "https://picsum.photos/seed/4/500/500",
    },
    {
      image: "https://picsum.photos/seed/5/500/500",
    },
    {
      image: "https://picsum.photos/seed/6/500/500",
    },
    {
      image: "https://picsum.photos/seed/7/500/500",
    },
    {
      image: "https://picsum.photos/seed/8/500/500",
    },
    {
      image: "https://picsum.photos/seed/9/500/500",
    },
    {
      image: "https://picsum.photos/seed/10/500/500",
    },
  ]);

  return (
    <>
      <section id="promotions-section" className="mt-5">
        <div className="container">
          <div className="row d-md-none">
            <div className="col-12">
              <OwlCarousel
                items={1}
                className="owl-theme"
                autoplay={true}
                loop
                nav
                navText={[
                  '<i class="fa fa-angle-left"  />',
                  '<i class="fa fa-angle-right"  />',
                ]}
                dots={false}
                margin={15}
              >
                {mobilePromos.map((promo, key) => (
                  <Link to="#" key={key}>
                    <div className="item">
                      <img className="img-fluid" src={promo.image} />
                    </div>
                  </Link>
                ))}
              </OwlCarousel>
            </div>
          </div>
          <div className="row d-none d-md-flex">
            {mainPromos.map((promo, key) => (
              <div className="col-md-4" key={key}>
                <Link to="#">
                  <div className="item h-100">
                    <img src={promo.image} className="img-fluid " alt="" />
                  </div>
                </Link>
              </div>
            ))}

            <div className="col-md-4 justify-content-between">
              <div className="row">
                {secondPromos.map((promo, key) => (
                  <div className="col-md-6" key={key}>
                    <Link to="#">
                      <div className="item h-100">
                        <img src={promo.image} className="img-fluid " alt="" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="row">
                {thirdPromos.map((promo, key) => (
                  <div className="col-md-6" key={key}>
                    <Link to="#">
                      <div className="item h-100">
                        <img src={promo.image} className="img-fluid " alt="" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row mt-3 d-none d-md-flex">
            <div className="col-md-8">
              <div className="main-content">
                <OwlCarousel
                  items={8}
                  className="owl-theme"
                  autoplay={true}
                  loop
                  nav
                  navText={[
                    '<i class="fa fa-angle-left"  />',
                    '<i class="fa fa-angle-right"  />',
                  ]}
                  dots={false}
                  margin={15}
                >
                  {categories.map((category, key) => (
                    <Link to="#" key={key}>
                      <div className="item">
                        <img className="img-fluid" src={category.image} />
                      </div>
                    </Link>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn-boutik-orange">
              Trouvez une boutique, un restaurant ou un bar à proximité
            </button>
          </div>
        </div>
      </section>
      <section id="restaurants-section" className="mt-5">
        <div className="container">
          <h1 className="text-center">Restaurants populaires</h1>
          <hr className="divider"/>
          <div className="row mt-5">
            <div className="col-md-4">
              <img src={RestoLogo} className="img-fluid" alt="" />
              <div className="resto-details">
                <h4>Restaurant</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam sunt libero iure distinctio pariatur animi eaque, nemo
                  unde totam maiores! Incidunt harum pariatur quos laborum ipsum
                  temporibus ducimus atque earum.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={RestoLogo} className="img-fluid" alt="" />
              <div className="resto-details">
                <h4>Restaurant</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam sunt libero iure distinctio pariatur animi eaque, nemo
                  unde totam maiores! Incidunt harum pariatur quos laborum ipsum
                  temporibus ducimus atque earum.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={RestoLogo} className="img-fluid" alt="" />
              <div className="resto-details">
                <h4>Restaurant</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam sunt libero iure distinctio pariatur animi eaque, nemo
                  unde totam maiores! Incidunt harum pariatur quos laborum ipsum
                  temporibus ducimus atque earum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="member-section" className="mt-5">
        <div className="container">
          <h1 className="text-center">Devenir membre</h1>
          <small className="text-center">Inscrivez-vous sur notre site !</small>
          <hr className="divider"/>
          <div className="text-center mt-5">
            <button className="btn-boutik-orange">
              Créer un compte maintenant
            </button>
            
          </div>
          <hr className="signup-hr"/>
          <h1 className="text-center">Vous avez un bar, un resto, une boutique ? <Link to="" className="sign-up-business">Inscrivez-vous</Link></h1>
        </div>
      </section>
      <footer className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>S'inscrire à la newsletter</h4>
              <form action="" className="form-inline">
                <div className="form-group">
                  <input type="text" placeholder="Votre adresse Email" className="form-control"/>
                  <button className="btn-boutik-orange">S'inscrire</button>
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <h4>A propos</h4>
              <ul>
                <li>
                  <Link to="">A propos</Link>
                </li>
                <li><Link to="">Conditions générales</Link></li>
                <li><Link to="">Politique de vie privée</Link></li>
                <li><Link to="">Contact</Link></li>
              </ul>
            </div>
            <div className="col-md-4 justify-content-center">
              <div className="social-links ">
              <Link to=""><i className="fab fa-facebook fa-4x"></i></Link>
              <Link to=""><i className="fab fa-instagram fa-4x ml-md-2"></i></Link>
              <Link to=""><i className="fab fa-twitter fa-4x ml-md-2"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
