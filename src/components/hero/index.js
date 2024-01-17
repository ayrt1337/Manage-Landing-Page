import React from "react";
import Image from '../../images/illustration-intro.svg'
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const for1475Width = useMediaQuery({query: '(max-width: 1475px)'})
    const for1400Width = useMediaQuery({query: '(max-width: 1400px)'})
    const for1150Width = useMediaQuery({query: '(max-width: 1150px)'})
    const for1020Width = useMediaQuery({query: '(max-width: 1020px)'})
    const for965Width = useMediaQuery({query: '(max-width: 965px)'})
    const for670Width = useMediaQuery({query: '(max-width: 670px)'})
    const for420Width = useMediaQuery({query: '(max-width: 420px)'})
    const for815Height = useMediaQuery({query: '(max-height: 815px)'})

    return(
        <>
            {!for1475Width &&
                <Div style={{height: `${for815Height ? 'auto' : '70vh'}`}}>
                    <DivText>   
                        <H1>Bring everyone together to build better products.</H1>
                        
                        <P>Manage makes it simple for softwares teams to plan day-to-day tasks while keeping the larger team goals in view.</P>
        
                        <BtnGetStart>Get Started</BtnGetStart>
                    </DivText>
                    
                    {!for1400Width &&
                        <div>
                            <img src={Image} alt=''></img>
                        </div>
                    }
                </Div>
            }

            {(for1475Width && !for1150Width) &&
                <Div style={{
                    margin: '0px 100px 0px 100px', 
                    height: `${for815Height ? 'auto' : '70vh'}`
                }}>
                    <DivText>   

                        {!for1400Width &&
                            <>
                                <H1>Bring everyone together to build better products.</H1>

                                <P>Manage makes it simple for softwares teams to plan day-to-day tasks while keeping the larger team goals in view.</P>
                            </>
                        }

                        {for1400Width &&
                            <>
                                <H1 style={{fontSize: '45px'}}>Bring everyone together to build better products.</H1>

                                <P style={{fontSize: '17px'}}>Manage makes it simple for softwares teams to plan day-to-day tasks while keeping the larger team goals in view.</P>
                            </>
                        }
        
                        <BtnGetStart>Get Started</BtnGetStart>
                    </DivText>
                    
                    {!for1400Width &&
                        <div>
                            <img src={Image} alt=''></img>
                        </div>
                    }

                    {for1400Width &&
                        <div>
                            <img src={Image} alt='' style={{
                                height: '480px',
                                width: '500px'
                            }}></img>
                        </div>
                    }
                </Div>
            }

            {(for1150Width && for1475Width && !for965Width) &&
                <Div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '0px 100px 0px 100px',
                    height: `${for815Height ? 'auto' : '70vh'}`
                }}>  
                    <DivText>  

                        {!for1020Width &&
                            <H1 style={{fontSize: '45px'}}>Bring everyone together to build better products.</H1>
                        }

                        {for1020Width &&
                            <H1 style={{fontSize: '38px'}}>Bring everyone together to build better products.</H1>
                        }

                        <P style={{fontSize: '17px'}}>Manage makes it simple for softwares teams to plan day-to-day tasks while keeping the larger team goals in view.</P>
                
                        <BtnGetStart>Get Started</BtnGetStart>

                    </DivText>

                    <div>
                        <img src={Image} alt='' style={{
                            height: '350px',
                            width: '380px'
                        }}></img>
                    </div>
                </Div>
            }

            {(for1150Width && for1475Width && for965Width && !for670Width) &&
                <Div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0px 100px 0px 100px',
                    height: `${for815Height ? 'auto' : '70vh'}`
                }}>  
                    <div>
                        <img src={Image} alt='' style={{
                            height: '350px',
                            width: '380px'
                        }}></img>
                    </div>

                    <DivText style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        padding: '0px 20px 0px 20px'
                    }}>  

                        {!for1020Width &&
                            <H1 style={{fontSize: '45px'}}>Bring everyone together to build better products.</H1>
                        }

                        {for1020Width &&
                            <H1 style={{fontSize: '32px'}}>Bring everyone together to build better products.</H1>
                        }

                        <P style={{fontSize: '17px'}}>Manage makes it simple for softwares teams to plan day-to-day tasks while keeping the larger team goals in view.</P>
                
                        <BtnGetStart>Get Started</BtnGetStart>

                    </DivText>
                </Div>
            }

            {(for1150Width && for1475Width && for965Width && for670Width) &&
                <Div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0px 40px 0px 40px',
                    height: `${for815Height ? 'auto' : '70vh'}`
                }}>  
                    <div>
                        {!for420Width &&
                            <img src={Image} alt='' style={{
                                height: '320px',
                                width: '330px'
                            }}></img>
                        }

                        {for420Width &&
                            <img src={Image} alt='' style={{
                                height: '270px',
                                width: '280px'
                            }}></img>
                        }
                    </div>

                    <DivText style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        padding: '0px 0px 0px 0px'
                    }}>  
                    
                        {!for420Width &&
                            <H1 style={{fontSize: '32px'}}>Bring everyone together to build better products.</H1>
                        }

                        {for420Width &&
                            <H1 style={{fontSize: '26px'}}>Bring everyone together to build better products.</H1>
                        }

                        <P style={{fontSize: '16px'}}>Manage makes it simple for softwares teams to plan day-to-day tasks while keeping the larger team goals in view.</P>
                
                        <BtnGetStart>Get Started</BtnGetStart>

                    </DivText>
                </Div>
            }
        </>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 200px 0px 200px;
    height: 70vh;
`

const H1 = styled.h1`
    color: #242d50;
    font-size: 53px;
`

const P = styled.p`
    font-weight: 500;
    color: #98999d;
    margin: 20px 0px 40px 0px;
    font-size: 19px;
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

const DivText = styled.div`
    padding: 0px 50px 0px 0px;
`

export default Hero