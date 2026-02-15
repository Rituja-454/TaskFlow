export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="logo" href="#">
            <span className="logo-mark"></span>
            TaskFlow
          </a>
          <p className="footer-text">Stay organized, move faster, and ship on time.</p>
        </div>
        <div>
          <p className="footer-title">Company</p>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>
        <div>
          <p className="footer-title">Product</p>
          <a href="#features">Features</a>
          <a href="#testimonials">Stories</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <p className="footer-title">Get updates</p>
          <div className="footer-form">
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button className="primary-btn" type="button">Join</button>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>2026 TaskFlow. All rights reserved.</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
