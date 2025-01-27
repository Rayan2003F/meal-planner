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

const AboutUs = () => {
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
  
  {/* about section */}
  <section className="about_section layout_padding">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box">
          <img src={aboutimg} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>We Are Feane</h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text. All
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end about section */}
  {/* footer section */}
  <footer className="footer_section">
    <div className="container">
      <div className="row">
        <div className="col-md-4 footer-col">
          <div className="footer_contact">
            <h4>Contact Us</h4>
            <div className="contact_link_box">
              <p href=" ">
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span>Location</span>
              </p>
              <p href=" ">
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
          <p href="https://themewagon.com/">
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

export default AboutUs;
