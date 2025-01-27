import Header from "../components/header";
import heroBg from "../images/hero-bg.jpg";
import client1 from "../images/client1.jpg";
import client2 from "../images/client2.jpg";
import o1 from "../images/o1.jpg";
import o2 from "../images/o2.jpg";
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import f4 from "../images/f4.png";
import f5 from "../images/f5.png";
import f6 from "../images/f6.png";
import f7 from "../images/f7.png";
import f8 from "../images/f8.png";
import f9 from "../images/f9.png";
import aboutimg from "../images/about-img.png";
import favicon from "../images/favicon.png";


const ServiceClient = () => {
  return (
    <>
      
      <>
      <body className="sub_page">
  <div className="hero_area">
    <div className="bg-box">
    <img src={heroBg} alt="" />
    </div>
    <Header />
  </div>
  {/* book section */}
  <section className="book_section layout_padding">
    <div className="container">
    <div className="col-md-6 mx-auto">
      <div className="heading_container">
        <h2>Book A Table</h2>
      </div>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="form_container">
            <form action="">
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <select className="form-control nice-select wide">
                  <option value="" disabled="" selected="">
                    How many persons?
                  </option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
              <div>
                <input type="date" className="form-control" />
              </div>
              <div className="btn_box">
                <button>Book Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end book section */}
  {/* footer section */}
  <footer className="footer_section">
    <div className="container">
      <div className="row">
        <div className="col-md-4 footer-col">
          <div className="footer_contact">
            <h4>Contact Us</h4>
            <div className="contact_link_box">
              <p href="">
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span>Location</span>
              </p>
              <p href="">
                <i className="fa fa-phone" aria-hidden="true" />
                <span>Call +01 1234567890</span>
              </p>
              <p href="">
                <i className="fa fa-envelope" aria-hidden="true" />
                <span>demo@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 footer-col">
          <div className="footer_detail">
            <p href="" className="footer-logo">
              Feane
            </p>
            <p>
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="footer_social">
              <p href="">
                <i className="fa fa-facebook" aria-hidden="true" />
              </p>
              <p href="">
                <i className="fa fa-twitter" aria-hidden="true" />
              </p>
              <p href="">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </p>
              <p href="">
                <i className="fa fa-instagram" aria-hidden="true" />
              </p>
              <p href="">
                <i className="fa fa-pinterest" aria-hidden="true" />
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 footer-col">
          <h4>Opening Hours</h4>
          <p>Everyday</p>
          <p>10.00 Am -10.00 Pm</p>
        </div>
      </div>
      <div className="footer-info">
        <p>
          © <span id="displayYear" /> All Rights Reserved By
          <p href="https://html.design/">The Comunity Of Development</p>
          <br />
          <br />
          © <span id="displayYear" /> Distributed By
          <p href="https://themewagon.com/" target="_blank">
            ThemeWagon
          </p>
        </p>
      </div>
    </div>
  </footer>
  {/* footer section */}
  {/* jQery */}
  {/* popper js */}
  {/* bootstrap js */}
  {/* owl slider */}
  {/* isotope js */}
  {/* nice select */}
  {/* custom js */}
  {/* Google Map */}
  {/* End Google Map */}
  </body>
</>

    </>
  );
};

export default ServiceClient;
