import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        id="sticky-footer"
        class="flex-shrink-0 py-4 bg-dark text-white-50"
      >
        <div class="container text-center">
          <div class="home-link-container">
            <a href="www.github.com/hudsonhancock">Github</a>
            <a href="www.linkedin.com/in/hudsonhancock">LinkedIn</a>
            <a href="www.twitter.com/hudsonhancock">Twitter</a>
          </div>
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
