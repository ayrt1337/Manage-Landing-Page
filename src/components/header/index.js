import React from "react";
import styled from "styled-components";
import Logo from '../../images/logo.svg'
import { useMediaQuery } from "react-responsive";
import Hamburguer from '../../images/icon-hamburger.svg'

const Header = props => {
    const for1580Width = useMediaQuery({query: '(max-width: 1580px)'})
    const for1475Width = useMediaQuery({query: '(max-width: 1475px)'})
    const for1050Width = useMediaQuery({query: '(max-width: 1050px)'})
    const for950Width = useMediaQuery({query: '(max-width: 950px)'})
    const for670Width = useMediaQuery({query: '(max-width: 670px)'})

    return(
        <>
            {!for1475Width &&
                <DivHeader>
                    <img src={Logo} alt=''></img>

                    <Nav>
                        {!for1580Width && 
                            <>
                                <Li>Pricing</Li>
                                <Li>Product</Li>
                                <Li>About Us</Li>
                                <Li>Careers</Li>
                                <Li>Community</Li>
                            </>
                        }

                        {for1580Width &&
                            <>
                                <Li style={{
                                    fontSize: '15px', 
                                    margin: '0px 10px 0px 20px'
                                }}>Pricing</Li>

                                <Li style={{
                                    fontSize: '15px', 
                                    margin: '0px 10px 0px 20px'
                                }}>Product</Li>

                                <Li style={{
                                    fontSize: '15px', 
                                    margin: '0px 10px 0px 20px'
                                }}>About Us</Li>

                                <Li style={{
                                    fontSize: '15px', 
                                    margin: '0px 10px 0px 20px'
                                }}>Careers</Li>

                                <Li style={{
                                    fontSize: '15px', 
                                    margin: '0px 10px 0px 20px'
                                }}>Community</Li>
                            </>
                        }
                    </Nav>

                    {!for1580Width &&
                        <BtnGetStart>Get Started</BtnGetStart>
                    }

                    {for1580Width &&
                        <BtnGetStart style={{fontSize: '14px'}}>Get Started</BtnGetStart>
                    }
                </DivHeader>
            }

            {(for1475Width && !for950Width) &&
                <DivHeader style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '70px 100px 60px 100px',
                    alignItems: 'center'
                }}>
                    <img src={Logo} alt=''></img>

                    <Nav>
                        {!for1580Width && 
                            <>
                                <Li>Pricing</Li>
                                <Li>Product</Li>
                                <Li>About Us</Li>
                                <Li>Careers</Li>
                                <Li>Community</Li>
                            </>
                        }

                        {(for1580Width && !for1050Width) &&
                            <>
                                <Li style={{
                                    fontSize: '15px', 
                                    margin: '0px 10px 0px 20px'
                                }}>Pricing</Li>

                                <Li style={{
                                    fontSize: '15px', 
                                    margin: '0px 10px 0px 20px'
                                }}>Product</Li>
                                
                                <Li style={{
                                    fontSize: '15px', 
                                    margin: '0px 10px 0px 20px'
                                }}>About Us</Li>

                                <Li style={{
                                    fontSize: '15px', 
                                    margin: '0px 10px 0px 20px'
                                }}>Careers</Li>

                                <Li style={{
                                    fontSize: '15px', 
                                    margin: '0px 10px 0px 20px'
                                }}>Community</Li>
                            </>
                        }

                        {for1050Width &&
                            <>
                                <Li style={{
                                    fontSize: '14px', 
                                    margin: '0px 0px 0px 18px'
                                }}>Pricing</Li>

                                <Li style={{
                                    fontSize: '14px', 
                                    margin: '0px 0px 0px 18px'
                                }}>Product</Li>
                                
                                <Li style={{
                                    fontSize: '14px', 
                                    margin: '0px 0px 0px 18px'
                                }}>About Us</Li>

                                <Li style={{
                                    fontSize: '14px', 
                                    margin: '0px 0px 0px 18px'
                                }}>Careers</Li>

                                <Li style={{
                                    fontSize: '14px', 
                                    margin: '0px 0px 0px 18px'
                                }}>Community</Li>
                            </>
                        }
                    </Nav>

                    {!for1580Width &&
                        <BtnGetStart>Get Started</BtnGetStart>
                    }

                    {(for1580Width && !for1050Width) &&
                        <BtnGetStart style={{fontSize: '14px'}}>Get Started</BtnGetStart>
                    }

                    {(for1580Width && for1050Width) &&
                        <BtnGetStart style={{
                            fontSize: '14px',
                            padding: '13px 25px 13px 25px'
                        }}>Get Started</BtnGetStart>
                    }
                </DivHeader>
            }

            {(for1475Width && for950Width && !for670Width) &&
                <DivHeader style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '70px 100px 60px 100px',
                    alignItems: 'center'
                }}>
                    <img src={Logo} alt=''></img>

                    <img src={Hamburguer} alt='' style={{cursor: 'pointer'}} 
                        onClick={() => {
                            if(!props.showOverlay){
                                props.setShowOverlay(true)
                            }
                        }}>
                    </img>
                </DivHeader>
            }

            {(for1475Width && for950Width && for670Width) &&
                <DivHeader style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '70px 40px 60px 40px',
                    alignItems: 'center'
                }}>
                    <img src={Logo} alt=''></img>

                    <img src={Hamburguer} alt='' style={{cursor: 'pointer', marginBottom: '10px'}} 
                        onClick={() => {
                            if(!props.showOverlay){
                                props.setShowOverlay(true)
                            }
                        }}>
                    </img>
                </DivHeader>
            }
        </>
    )
}

const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 70px 200px 60px 200px;
    align-items: center;
`

const Nav = styled.nav`
    list-style: none;
    display: flex;
`

const Li = styled.li`
    cursor: pointer;
    margin: 0px 20px 0px 20px;
    font-weight: 500;
    color: #242d50;
    transition: 0.2s ease-in-out;
    font-size: 17px;

    &:hover{
        opacity: 0.7;
    }
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

export default Header