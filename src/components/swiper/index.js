import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import AnishaImage from '../../images/avatar-anisha.png'
import AliImage from '../../images/avatar-ali.png'
import RichardImage from '../../images/avatar-richard.png'
import ShanaiImage from '../../images/avatar-shanai.png'
import { useMediaQuery } from "react-responsive";
import './index.css'


const DivSwiper = () => {
    const for1475Width = useMediaQuery({query: '(max-width: 1475px)'})
    const for670Width = useMediaQuery({query: '(max-width: 670px)'})
    const for360Width = useMediaQuery({query: '(max-width: 360px)'})

    return(
        <>
            {!for1475Width &&
                <Div>
                    <H1>What they've said</H1>

                    <Wrapper>
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={2.5}
                            centeredSlides
                            loop
                        >
                            <SwiperSlide>
                                <SwiperInfo>
                                    <Img src={AnishaImage}></Img>

                                    <div>
                                        <H3>Anisha Li</H3>

                                        <P>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</P>
                                    </div>
                                </SwiperInfo>
                            </SwiperSlide>

                            <SwiperSlide>
                                <SwiperInfo>
                                    <Img src={AliImage}></Img>

                                    <H3>Ali Bravo</H3>

                                    <P>"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."</P>
                                </SwiperInfo>
                            </SwiperSlide>

                            <SwiperSlide>
                                <SwiperInfo>
                                    <Img src={RichardImage}></Img>

                                    <H3>Richard Watts</H3>

                                    <P>"Manage allows us to provide structure and process. It keep us organized and focused. I can't stop recommending them to everyone i talk to!"</P>
                                </SwiperInfo>
                            </SwiperSlide>

                            <SwiperSlide>
                                <SwiperInfo>
                                    <Img src={ShanaiImage}></Img>

                                    <H3>Shanai Gough</H3>

                                    <P>"Their software allow us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."</P>
                                </SwiperInfo>
                            </SwiperSlide>
                        </Swiper>
                    </Wrapper>

                    <BtnGetStart>Get Started</BtnGetStart>
                </Div>
            }

            {(for1475Width && !for670Width) &&
                <Div style={{margin: '80px 100px 0px 100px'}}>
                    <H1 style={{fontSize: '35px'}}>What they've said</H1>
                
                    <Wrapper>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={40}
                            slidesPerView={2.5}
                            centeredSlides
                            loop
                            breakpoints={{
                                900: {
                                    slidesPerView: 1.7,
                                    pagination: {
                                        enabled: false
                                    }
                                },

                                300: {
                                    slidesPerView: 1,
                                    pagination: {
                                        enabled: true,
                                        clickable: true,
                                        el: '.swiper-custom-pagination'
                                    }
                                }
                            }}
                        >
                            <SwiperSlide>
                                <SwiperInfo>
                                    <Img src={AnishaImage}></Img>

                                    <div>
                                        <H3>Anisha Li</H3>

                                        <P>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</P>
                                    </div>
                                </SwiperInfo>
                            </SwiperSlide>

                            <SwiperSlide>
                                <SwiperInfo>
                                    <Img src={AliImage}></Img>

                                    <H3>Ali Bravo</H3>

                                    <P>"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."</P>
                                </SwiperInfo>
                            </SwiperSlide>

                            <SwiperSlide>
                                <SwiperInfo>
                                    <Img src={RichardImage}></Img>

                                    <H3>Richard Watts</H3>

                                    <P>"Manage allows us to provide structure and process. It keep us organized and focused. I can't stop recommending them to everyone i talk to!"</P>
                                </SwiperInfo>
                            </SwiperSlide>

                            <SwiperSlide>
                                <SwiperInfo>
                                    <Img src={ShanaiImage}></Img>

                                    <H3>Shanai Gough</H3>

                                    <P>"Their software allow us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."</P>
                                </SwiperInfo>
                            </SwiperSlide>
                        </Swiper>

                        <div className='swiper-custom-pagination' style={{marginTop: '20px'}}></div>
                    </Wrapper>

                    <BtnGetStart>Get Started</BtnGetStart>
                </Div>
            }

            {(for1475Width && for670Width) &&
                <Div style={{margin: '80px 40px 0px 40px'}}>
                    <H1 style={{fontSize: '30px'}}>What they've said</H1>
                
                    <Wrapper style={{marginTop: '70px'}}>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={40}
                            slidesPerView={2.5}
                            centeredSlides
                            loop
                            breakpoints={{
                                900: {
                                    slidesPerView: 1.7,
                                    pagination: {
                                        enabled: false
                                    }
                                },

                                300: {
                                    slidesPerView: 1,
                                    pagination: {
                                        enabled: true,
                                        clickable: true,
                                        el: '.swiper-custom-pagination'
                                    }
                                }
                            }}
                        >
                            <SwiperSlide>
                                <SwiperInfo style={{padding: '40px 35px 40px 35px'}}>
                                    <Img src={AnishaImage}></Img>

                                    <div>
                                        <H3>Anisha Li</H3>

                                        {!for360Width &&
                                            <P style={{fontSize: '15px'}}>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</P>
                                        }

                                        {for360Width &&
                                            <P style={{fontSize: '14px'}}>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</P>
                                        }
                                    </div>
                                </SwiperInfo>
                            </SwiperSlide>

                            <SwiperSlide>
                                <SwiperInfo>
                                    <Img src={AliImage}></Img>

                                    <H3>Ali Bravo</H3>

                                    {!for360Width &&
                                        <P style={{fontSize: '15px'}}>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</P>
                                    }

                                    {for360Width &&
                                        <P style={{fontSize: '14px'}}>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</P>
                                    }
                                </SwiperInfo>
                            </SwiperSlide>

                            <SwiperSlide>
                                <SwiperInfo>
                                    <Img src={RichardImage}></Img>

                                    <H3>Richard Watts</H3>

                                    {!for360Width &&
                                        <P style={{fontSize: '15px'}}>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</P>
                                    }

                                    {for360Width &&
                                        <P style={{fontSize: '14px'}}>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</P>
                                    }
                                </SwiperInfo>
                            </SwiperSlide>

                            <SwiperSlide>
                                <SwiperInfo>
                                    <Img src={ShanaiImage}></Img>

                                    <H3>Shanai Gough</H3>

                                    {!for360Width &&
                                        <P style={{fontSize: '15px'}}>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</P>
                                    }

                                    {for360Width &&
                                        <P style={{fontSize: '14px'}}>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</P>
                                    }
                                </SwiperInfo>
                            </SwiperSlide>
                        </Swiper>

                        <div className='swiper-custom-pagination' style={{marginTop: '20px'}}></div>
                    </Wrapper>

                    <BtnGetStart>Get Started</BtnGetStart>
                </Div>
            }
        </>
    )
}

const Div = styled.div`
    text-align: center;
    margin: 80px 200px 0px 200px;
`

const H1 = styled.h1`
    color: #242d50;
    font-size: 40px;
`

const BtnGetStart = styled.a`
    cursor: pointer;
    background-color: #f3603c;
    color: white;
    padding: 13px 40px 13px 40px;
    border-radius: 30px;
    transition: 0.2s ease-in-out;
    font-weight: 500;
    box-shadow: 0px 10px 28px -10px #f3603c;

    &:hover{
        opacity: 0.7;
    }
`

const SwiperInfo = styled.div`
    background-color: #fafafa;
    padding: 40px 50px 40px 50px;
    height: 100%;
`

const Wrapper = styled.div`
    margin: 100px 0px 65px 0px;
`

const Img = styled.img`
   height: 80px;
   width: 80px;
`

const H3 = styled.h3`
    margin: 15px 0px 15px 0px;  
    color: #242d50;
`

const P = styled.p`
    font-weight: 500;
    color: #98999d;
`

export default DivSwiper