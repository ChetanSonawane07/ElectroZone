import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Footer = () => {
  const categories = [
    { id: 1, name: 'Headset' },
    { id: 2, name: 'Laptop' },
    { id: 3, name: 'Phone' },
    { id: 4, name: 'Washer' },
    { id: 5, name: 'Television' },
    { id: 6, name: 'Fridge' },
    { id: 7, name: 'Speaker' },
    { id: 8, name: 'Grooming' },
    { id: 9, name: 'AC' },
    { id: 10, name: 'Watch' },
    { id: 11, name: 'Camera' },
  ];

  const brands = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Dell' },
    { id: 3, name: 'Microsoft' },
    { id: 4, name: 'Haier' },
    { id: 5, name: 'Philips' },
    { id: 6, name: 'Oppo' },
    { id: 7, name: 'HP' },
    { id: 8, name: 'JBL' },
    { id: 9, name: 'Lenovo' },
    { id: 10, name: 'Xiaomi' },
    { id: 11, name: 'Samsung' },
    { id: 12, name: 'Sony' },
    { id: 13, name: 'Vivo' },
  ];

  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <footer className="footer bg-dark" style={styles.footer}>
      <Container>
        <Row>
          {/* Social Media Section */}
          <Col md={3} style={styles.socialMediaSection}>
            <div style={styles.subscriptionSection}>
              <h3 style={styles.heading}>Subscribe</h3>
              <input
                type="email"
                placeholder="Enter your email"
                style={styles.subscriptionInput}
              />
            </div>
            <h3 style={styles.heading}>Follow Us</h3>
            <div style={styles.socialIcons}>
              <a href="#" style={styles.iconLink}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" style={styles.iconLink}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" style={styles.iconLink}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
          {/* Categories and Brands Section */}
          <Col md={5} style={styles.linkSection}>
            <div style={styles.linkColumn}>
              <h4 style={styles.heading}>Categories</h4>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="link"
                  style={styles.footerButton}
                  onClick={() => handleNavigation(`http://localhost:3000/category/${category.id}`)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <div style={styles.linkColumn}>
              <h4 style={styles.heading}>Brands</h4>
              {brands.map((brand) => (
                <Button
                  key={brand.id}
                  variant="link"
                  style={styles.footerButton}
                  onClick={() => handleNavigation(`http://localhost:3000/brand/${brand.id}`)}
                >
                  {brand.name}
                </Button>
              ))}
            </div>
          </Col>
          {/* Contact Us Section */}

          <Col md={4} style={styles.contactSection}>
            <h3 style={styles.heading}>Contact Us</h3>
            <p>Email: info@yourdomain.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Your Street, City, Country</p>
            <br /> <br />
            <div style={styles.mapSection}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.085229950602!2d144.95373541544363!3d-37.81621897975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df5f4e7f1%3A0x2c01cdb3c0f344b9!2sVictoria%20Harbour%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sin!4v1634319043923!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={styles.mapFrame}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="text-center mt-4">
          <Col>
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const styles = {
  footer: {
    color: 'white',
    padding: '40px 0',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '1.25rem',
  },
  socialMediaSection: {
    marginBottom: '20px',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
  },
  iconLink: {
    color: 'white',
    fontSize: '24px',
    textDecoration: 'none',
  },
  subscriptionSection: {
    marginBottom: '20px',
  },
  subscriptionInput: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '80%',
  },
  linkSection: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkColumn: {
    flex: 1,
  },
  footerButton: {
    display: 'block',
    margin: '5px 0',
    border: 'none',
    color: 'white',
    background: 'none',
    padding: '5px 0',
    textAlign: 'left',
    cursor: 'pointer',
  },
  contactSection: {
    marginBottom: '20px',
  },
  mapSection: {
    marginBottom: '20px',
  },
  mapFrame: {
    border: '0',
    borderRadius: '4px',
  },
};

export default Footer;
