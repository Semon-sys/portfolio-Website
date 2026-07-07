import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Sairam Abdullah. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Semon-sys" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sairam-abdullah-8b806b287/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/sairam._.1/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:1autumn.leaf777@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
