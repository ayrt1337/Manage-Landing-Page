import React from "react";
import styled from "styled-components";
import Image from '../../images/bg-simplify-section-desktop.svg'
import { useMediaQuery } from "react-responsive";

const SectionGetStarted = () => {
    const for1475Width = useMediaQuery({query: '(max-width: 1475px)'})
    const for1140Width = useMediaQuery({query: '(max-width: 1140px)'})
    const for970Width = useMediaQuery({query: '(max-width: 970px)'})
    const for670Width = useMediaQuery({query: '(max-width: 670px)'})

    return(
        <>
            {!for1475Width &&
                <Div>
                    <H1>Simplify how your team works today.</H1>
        
                    <BtnGetStart>Get Started</BtnGetStart>
                </Div>
            }

            {(for1475Width && !for970Width) &&
                <Div style={{padding: '130px 100px 130px 100px'}}>

                    {!for1140Width &&
                        <>
                            <H1 style={{fontSize: '38px'}}>Simplify how your team works today.</H1>

                            <BtnGetStart>Get Started</BtnGetStart>
                        </>
                    }

                    {for1140Width &&
                        <>
                            <H1 style={{fontSize: '28px'}}>Simplify how your team works today.</H1>

                            <BtnGetStart style={{
                                padding: '10px 40px 10px 40px'
                            }}>Get Started</BtnGetStart>
                        </>
                    }       
    
                </Div>
            }

            {(for1475Width && for970Width && !for670Width) &&
                <Div style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundSize: 'cover'
                }}>
                    <H1 style={{marginBottom: '28px', fontSize: '38px'}}>Simplify how your team works today.</H1>
        
                    <BtnGetStart>Get Started</BtnGetStart>
                </Div>
            }

            {(for1475Width && for970Width && for670Width) &&
                <Div style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundSize: 'cover',
                    padding: '100px 40px 100px 40px'
                }}>
                    <H1 style={{marginBottom: '28px', fontSize: '35px'}}>Simplify how your team works today.</H1>
        
                    <BtnGetStart>Get Started</BtnGetStart>
                </Div>
            }
        </>
    )
}

const Div = styled.div`
    background-color: #f3603c;
    display: flex;
    justify-content: space-between;
    padding: 130px 200px 130px 200px;
    margin-top: 200px;
    align-items: flex-end;
    background-image: url(${Image});
    background-repeat:no-repeat;
    background-position: right;
`

const H1 = styled.h1`
    color: white;
    font-size: 45px;
`

const BtnGetStart = styled.a`
    cursor: pointer;
    background-color: white;
    color: #f3603c;
    padding: 13px 40px 13px 40px;
    border-radius: 30px;
    transition: 0.2s ease-in-out;
    font-weight: 500;
    box-shadow: 0px 10px 28px -10px #f3603c;

    &:hover{
        opacity: 0.9;
    }
`

export default SectionGetStarted