const root = document.getElementById("root");

function MainComponent() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

ReactDOM.render(<MainComponent />, root);

function Navbar() {
  return (
    <div>
      <nav>
        <div class="logo">
          Accessories <span>SHOP!</span>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#product">PRODUCT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <div class="menu">
          <div class="menu-btn">
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <div>
      <div class="hero">
        <div class="intro">
          <h1>
            Accessories <span>SHOP!</span>
          </h1>
          <br />
          <p>
            I have all type accessories. e.g. Headphones, Mobile Case,
            Bluetooth, Mobiles, Charger. Please come for m shop then my product
            is usefull to you
          </p>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <section class="about" id="about">
        <h2 class="tittle">About</h2>
        <div class="about-content">
          <div class="column left">
            {/* <img src="./images/about-me .jpg" alt=""> */}
          </div>
          <div class="column right">
            <div class="text">
              I'm <span>Ammadullah</span>.
            </div>
            <p>
              I'm Ammadullah and i'm owner of my own shop last 4 years a have many of
              product to sale in my shop. I have many other accessories to sale
              for anyone who buy very easy and discounted price and my product
              is very usefull for everyone. All product is very clean.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Product() {
    return <div>
        <section class="product" id="product">
        <h2 class="tittle">Product</h2>
        <div class="product-content">
            <div class="card">
                <img src="./images/product-1.jpg" alt="" />
                <div class="content">
                    <div class="row">
                        <div class="detail">
                            <span>Bluetooth/Headphones</span>
                            <div class="btn">
                                <a href="./product/index-h.html"><button>Goto the page</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src="./images/product-3.jpg" alt="" />
                <div class="content">
                    <div class="row">
                        <div class="detail">
                            <span>Bluetooth</span>
                            <div class="btn">
                                <a href="./product/index-b.html"><button>Goto the page</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src="./images/product-4.jpg" alt="" />
                <div class="content">
                    <div class="row">
                        <div class="detail">
                            <span>Mobile Phone</span>
                            <div class="btn">
                                <a href="./product/index-p.html"><button>Goto the page</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
}

function Contact() {
  return (
    <div>
      <section class="contact-us" id="contact">
        <h2 class="tittle">Contact-Us</h2>
        <div class="container">
          <div class="form">
            <div class="contact-info">
              <h3 class="title">Let's get in touch</h3>
              <p class="text">
                If you have any qustions or more comments, or if you would like
                to contact me for a quote, please use the form below and we will
                get back to you as soon as possible
              </p>

              <div class="info">
                <div class="information">
                  <img src="./images/c-img/email.png" class="icon" alt="" />
                  <p>ammad.s361@gmail.com</p>
                </div>
                <div class="information">
                  <img src="./images/c-img/phone.png" class="icon" alt="" />
                  <p>03091281969</p>
                </div>
              </div>

              <div class="social-media">
                <p>Connect with us :</p>
                <div class="social-icons">
                  <a href="#">
                    <i class="fa fa-facebook-official"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin-square"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <form action="index.html" autocomplete="off">
                <h3 class="title">Contact us</h3>
                <div class="input-container">
                  <input
                    type="text"
                    name="name"
                    class="input"
                    required="Please Input Field"
                    id="username"
                  />
                  <label for="">Username</label>
                  <span>Username</span>
                </div>
                <div class="input-container">
                  <input
                    type="email"
                    name="email"
                    class="input"
                    required="Please Input Field"
                    id="email"
                  />
                  <label for="">Email</label>
                  <span>Email</span>
                </div>
                <div class="input-container">
                  <input
                    type="number"
                    name="phone"
                    class="input"
                    required="Please Input Field"
                    id="phone"
                  />
                  <label for="">Phone</label>
                  <span>Phone</span>
                </div>
                <div class="input-container textarea">
                  <textarea
                    name="message"
                    class="input"
                    id="message"
                  ></textarea>
                  <label for="">Message</label>
                  <span>Message</span>
                </div>
                <input
                  type="submit"
                  value="Send"
                  class="btn"
                  onclick="send()"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer class="sticky-footer">
        <p> © Copyright Ammad.officialWebDeveloper 2k21-2k22.</p>
      </footer>
    </div>
  );
}

// ----------------- NAVBAR SLIDE ----------------

const navslide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navslide();
