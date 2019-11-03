import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "./membership.scss";

const Membership = () => {
    const MembershipImage = process.env.PUBLIC_URL + "/images/inside_anfield.jpg";
    const styles = {
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${MembershipImage})`
    };
    return (
        <div>
            <Header />
            <div>
                <div className="hero-image-section">
                    <div className="hero-image-about-us" style={styles}>
                        <div className="hero-text">
                            <h1 className="hero-heading">Membership</h1>
                        </div>
                    </div>
                </div>
                <Container>
                </Container>
            </div>
            <Footer />
        </div>
    );
};
export default Membership;
