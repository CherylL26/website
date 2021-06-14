import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col, Image } from "react-bootstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import homePageVideo from "@/media/homePageVideo.mp4";
import TFALogo from '@/media/AffiliatedOrgs/TFA_Logo.png';
import CFCLogo from '@/media/AffiliatedOrgs/CFC_Logo.png';
import MFALogo from '@/media/AffiliatedOrgs/MFA_Logo.png';
import LM from '@/media/Sponsors/lm.png';
import TF from '@/media/Sponsors/tf.png';
// import MW from '@/media/Sponsors/mw.png';
import WMM from '@/media/Sponsors/wmm.png';
import Google from '@/media/Sponsors/google.png';
import NSP from '@/media/Sponsors/nsp.png';
import AH from '@/media/Sponsors/ah.png';
import NGN from '@/media/Sponsors/ngn.png';
import WH from '@/media/Sponsors/wh.png';
import YMCA from '@/media/Sponsors/ymca.png';


import RFAHomeAffOrgsCard from "@/components/RFAHomeAffOrgsCard";


export default function RFAHomePage(props) {

    const videoRow: React.CSSProperties = {
        backgroundColor: "#FFCC00",
    }
    const header: React.CSSProperties = {
        fontFamily: "Oswald-Medium",
        fontSize: "10vh",
        color: "#ffcc00",
        textAlign: "center",
    }
    const headerDescription: React.CSSProperties = {
        fontFamily: "BeVietnam-Regular",
        textAlign: "center",
        fontSize: "4vh",
    }
    const sponsorsLabel: React.CSSProperties = {
        fontFamily: "BeVietnam-Bold",
        textAlign: "center",
        fontSize: "4vh",
    }
    const affOrgsHeader: React.CSSProperties = {
        fontFamily: "Oswald-Medium",
        fontSize: "8vh",
        color: "#ffcc00",
        textAlign: "center",
    }
    const sponsorImageSize: React.CSSProperties = {
        height: "7vh",
    }
    const imageSize: React.CSSProperties = {
        height: "20vh",
    }

    return (
        <>
        
            <Row style={videoRow} className="justify-content-center">
                <video className = "video-width" autoPlay loop muted src={homePageVideo} />
            </Row>

            <Container>
                <Row className="justify-content-center">
                    <h1 style={header}>ROBOTICS FOR ALL</h1>
                    <p style={headerDescription}>
                        Robotics For All provides free STEM education to students of all backgrounds,
                        particularly students from underserved communities.
                        We aim to inspire children to pursue careers in STEM later in their lives.
                        We support student volunteers to teach our classes and engage with their local communities.
                    </p>
                </Row>
            </Container>

            <Row className = "p-5 yellow-row">
                <Container>
                    <Row>
                        {
                            [
                                {
                                    label: "STUDENTS & PARENTS",
                                    logo: TFALogo,
                                    color: "#3399ff"
                                },
                                {
                                    label: "SCHOOLS",
                                    logo: TFALogo,
                                    color: "#33cc66"

                                },
                                {
                                    label: "VOLUNTEERS",
                                    logo: TFALogo,
                                    color: "#fa8d1f"

                                }
                            ].map((buttons, i) => (
                                <Col key = {i} md={4} className="text-center">
                                    <Image  key = {buttons.logo} style = {imageSize} className="mb-3" src={buttons.logo} />
                                    <h1 key = {buttons.label} style={{ color: buttons.color, fontFamily: "Oswald-Medium", textAlign: 'center' }}>{buttons.label}</h1>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </Row>
            <Container>
                <Row className="justify-content-center">
                    <h1 style={affOrgsHeader}>AFFILIATED ORGANIZATIONS</h1>
                </Row>
                {
                            [
                                {
                                    label: "tutoring for all",
                                    logo: TFALogo,
                                    linkColor: "#C06204",
                                    bgColor: "#FCAF62",
                                    link: "https://www.tutoringforall.org/"
                                },
                                {
                                    label: "mentoring for all",
                                    logo: MFALogo,
                                    linkColor: "#248F47",
                                    bgColor: "#70DB94",
                                    link: "https://www.mentoringforall.org/",

                                },
                                {
                                    label: "crafts for charity",
                                    logo: CFCLogo,
                                    linkColor: "#006BD6",
                                    bgColor: "#70BAFF",
                                    link: "https://craftsforcharity.com/"

                                }
                            ].map((afforgs, i) => (
                                    <RFAHomeAffOrgsCard key = {i} org = {afforgs.label} link = {afforgs.link} linkColor = {afforgs.linkColor} bgColor ={afforgs.bgColor} logo = {afforgs.logo}/>
                                ))
                        }
            </Container>
            <Container>
                <h3 style = {sponsorsLabel}>Supported by the following organizations and over 50 independent donors:</h3>
                <br/><br/>
                <div className = "d-flex justify-content-around flex-wrap">
                    {[LM, TF, WMM, Google, NSP].map((sponsor, i) => (
                        <Image key = {i} className = "m-3" style = {sponsorImageSize} src = {sponsor} />
                    ))}
                </div>
                <br/><br/>
                <h3 style = {sponsorsLabel}>​Proud partners of the following organizations:</h3>
                <br/><br/>
                <div className = "d-flex justify-content-around flex-wrap">
                    {[AH, YMCA, NGN, WH].map((partner, i) => (
                        <Image key = {i} className = "m-2" style = {sponsorImageSize} src = {partner} />
                    ))}
                </div>
            </Container>
        </>
    );

}