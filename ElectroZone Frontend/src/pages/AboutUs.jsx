import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import CategoryList from "../componants/CategoryList";
import { useState } from "react";
import logo from "../images/logo.jpg";
import MainPage from "../componants/Main-page";
import Edit_Profile from "../componants/Edit_Profile";
import AddAddress from "../componants/Add-Address";
import WishList from "../componants/WishList";
import Cart from "../componants/Cart";
import ProductDetails from "../componants/ProductDetails";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

initMDB({ Dropdown, Collapse });
function AboutUsPage() {
    const [activeComponent, setActiveComponent] = useState("Home");
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
      };

    const renderComponent = () => {
        switch (activeComponent) {
            case "Home":
                return <MainPage />;
            case "Edit-Profile":
                return <Edit_Profile />;
            case "Add-Address":
                return <AddAddress />;
            case "My-WishList":
                return navigate('/WishList');
            case "My-Cart":
                return navigate('/Cart');
            case "View-Orders":
                return navigate("/Orders");
        }
    };

    return (
        <div>
            {/* <!-- Navbar --> */}
            <Navbar
        onBecomeSeller={() => handleNavigation("/Seller-Register")}
        onUserLogin={() => handleNavigation("/User-Login")}
        onNavigateToAboutUs={() => handleNavigation("/AboutUs")}
        setActiveComponent={setActiveComponent}
      />

            {/* Main Content */}
            <Container className="my-5 ">
                <div className="p-5 bg-light rounded btn">
                    <Row className="mb-5 text-center">
                        <Col xs={12}>
                            <h1 className="mb-4 fw-bold text-uppercase" style={{ fontSize: '3rem', textDecoration: 'underline', color: 'black' }}>
                                About Us
                            </h1>
                            <p className="lead text-secondary">
                                Welcome to <span className="text-dark fw-bold">ElectroZone</span>, your go-to destination for quality electronics! Our mission is to provide a smooth and enjoyable shopping experience, featuring a broad selection of electronic products from top brands.
                            </p>
                            <p className="text-muted">
                                At <span className="text-dark fw-bold">ElectroZone</span>, we focus on offering a user-friendly interface, secure payment methods, and a diverse range of products, from the latest gadgets to essential home electronics. Our platform is designed to help you find exactly what you need effortlessly.
                            </p>
                            <div className="my-4 bg-white p-4 rounded shadow-sm">
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <div className="p-3 bg-info text-white rounded shadow-sm">
                                            <h3 className="fw-bold">Our Values</h3>
                                            <p>
                                                We are committed to excellence, integrity, and customer satisfaction. Our dedicated team ensures that every aspect of our service meets the highest standards.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <div className="p-3 bg-light text-dark rounded shadow-sm">
                                            <h3 className="fw-bold">Innovation</h3>
                                            <p>
                                                We stay up-to-date with the latest technologies to provide you with a modern and innovative shopping experience. Look out for regular updates and new features!
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <p className="text-muted">
                                Our team of talented developers is dedicated to continuously improving our platform, making it more intuitive and user-friendly. We welcome your feedback and are always eager to hear from you to enhance our service.
                            </p>
                        </Col>
                    </Row>
                    <h1 className="text-center mb-4 fw-bold text-uppercase" style={{ fontSize: '3rem', textDecoration: 'underline', color: 'black' }}>Our Team</h1>
                    <Row className="text-center">
                        <Col md={4} lg={1} className="mb-4 d-flex justify-content-center">
                        </Col>
                        <Col md={4} lg={2} className="mb-4 d-flex justify-content-center">
                            <Card className="text-center shadow-sm border-light" style={{ width: '18rem' }}>
                                <Card.Img
                                    variant="top"
                                    src="profile-img-1.png"
                                    className="rounded-circle mx-auto mt-3"
                                    style={{ width: '8rem', height: '8rem', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <Card.Title>Atharva Narkhede</Card.Title>
                                    <Card.Text>Developer</Card.Text>
                                    <div className="d-flex justify-content-center">
                                        <a href="#" className="text-dark me-2"><i className="fab fa-linkedin fa-lg"></i></a>
                                        <a href="#" className="text-dark me-2"><i className="fab fa-github fa-lg"></i></a>
                                        <a href="#" className="text-dark"><i className="fas fa-envelope fa-lg"></i></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} lg={2} className="mb-4 d-flex justify-content-center">
                            <Card className="text-center shadow-sm border-light" style={{ width: '18rem' }}>
                                <Card.Img
                                    variant="top"
                                    src="profile-img-2.png"
                                    className="rounded-circle mx-auto mt-3"
                                    style={{ width: '8rem', height: '8rem', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <Card.Title>Chetan Sonawane</Card.Title>
                                    <Card.Text>Developer</Card.Text>
                                    <div className="d-flex justify-content-center">
                                        <a href="#" className="text-dark me-2"><i className="fab fa-linkedin fa-lg"></i></a>
                                        <a href="#" className="text-dark me-2"><i className="fab fa-github fa-lg"></i></a>
                                        <a href="#" className="text-dark"><i className="fas fa-envelope fa-lg"></i></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} lg={2} className="mb-4 d-flex justify-content-center">
                            <Card className="text-center shadow-sm border-light" style={{ width: '18rem' }}>
                                <Card.Img
                                    variant="top"
                                    src="profile-img-3.png"
                                    className="rounded-circle mx-auto mt-3"
                                    style={{ width: '8rem', height: '8rem', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <Card.Title>Om Kshirsagar</Card.Title>
                                    <Card.Text>Developer</Card.Text>
                                    <div className="d-flex justify-content-center">
                                        <a href="#" className="text-dark me-2"><i className="fab fa-linkedin fa-lg"></i></a>
                                        <a href="#" className="text-dark me-2"><i className="fab fa-github fa-lg"></i></a>
                                        <a href="#" className="text-dark"><i className="fas fa-envelope fa-lg"></i></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} lg={2} className="mb-4 d-flex justify-content-center">
                            <Card className="text-center shadow-sm border-light" style={{ width: '18rem' }}>
                                <Card.Img
                                    variant="top"
                                    src="profile-img-4.png"
                                    className="rounded-circle mx-auto mt-3"
                                    style={{ width: '8rem', height: '8rem', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <Card.Title>Asmita Patil</Card.Title>
                                    <Card.Text>Developer</Card.Text>
                                    <div className="d-flex justify-content-center">
                                        <a href="#" className="text-dark me-2"><i className="fab fa-linkedin fa-lg"></i></a>
                                        <a href="#" className="text-dark me-2"><i className="fab fa-github fa-lg"></i></a>
                                        <a href="#" className="text-dark"><i className="fas fa-envelope fa-lg"></i></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} lg={2} className="mb-4 d-flex justify-content-center">
                            <Card className="text-center shadow-sm border-light" style={{ width: '18rem' }}>
                                <Card.Img
                                    variant="top"
                                    src="profile-img-5.png"
                                    className="rounded-circle mx-auto mt-3"
                                    style={{ width: '8rem', height: '8rem', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <Card.Title>Prajakta Magar</Card.Title>
                                    <Card.Text>Developer</Card.Text>
                                    <div className="d-flex justify-content-center">
                                        <a href="#" className="text-dark me-2"><i className="fab fa-linkedin fa-lg"></i></a>
                                        <a href="#" className="text-dark me-2"><i className="fab fa-github fa-lg"></i></a>
                                        <a href="#" className="text-dark"><i className="fas fa-envelope fa-lg"></i></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>

            {/* Footer */}
           <Footer />
        </div>
    );
};

export default AboutUsPage;
