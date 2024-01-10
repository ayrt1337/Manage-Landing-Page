import React from "react";
import Header from "../header";
import Hero from "../hero";
import AboutUs from "../about-us";
import styled from "styled-components";
import DivSwiper from "../swiper";
import SectionGetStarted from "../get-started-section";
import Footer from "../footer";
import { useMediaQuery } from "react-responsive";
import Overlay from "../overlay";

const Content = props => {
    const for1050Height = useMediaQuery({query: '(min-height: 1050px)'})
    const for815Height = useMediaQuery({query: '(max-height: 815px)'})

    return(
        <>
            {props.showOverlay &&
                <Overlay setShowOverlay={props.setShowOverlay} showOverlay={props.showOverlay}/>
            }

            {(!for1050Height && !for815Height)&&
                <Home>
                    <Header setShowOverlay={props.setShowOverlay} showOverlay={props.showOverlay}/>
                    <Hero />
                </Home>
            }

            {(for1050Height || for815Height) &&
                <>
                    {for815Height &&
                        <div style={{marginBottom: '150px'}}>
                            <Header setShowOverlay={props.setShowOverlay} showOverlay={props.showOverlay}/>
                            <Hero/>
                        </div>
                    }

                    {for1050Height &&
                        <div style={{marginBottom: '50px'}}>
                            <Header setShowOverlay={props.setShowOverlay} showOverlay={props.showOverlay}/>
                            <Hero />
                        </div>
                    }
                </>
            }
            
            <AboutUs />
            <DivSwiper />
            <SectionGetStarted />
            <Footer />
        </>
    )
}

const Home = styled.div`
    height: 100vh;
`

export default Content