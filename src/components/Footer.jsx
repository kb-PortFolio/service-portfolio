import "../css/footer.css";

function Footer() {
  return (
    <footer id="contact">
      <section className="footer-section section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-connect">
              <a
                href="https://github.com/kb-PortFolio/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
                <span>GitHub</span>
              </a>

              <a
                href="mailto:nkusee6@gmail.com"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <span>Email</span>
              </a>
            </div>

            <p className="footer-credit">
              GitHub icon by
              <a
                href="https://www.flaticon.com/kr/free-icons/github"
                target="_blank"
                title="github 아이콘"
                rel="noopener noreferrer"
              >
                Alfredo Creates - Flaticon
              </a>
            </p>

            <p className="footer-copy">© 2024 KIM QA. All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
