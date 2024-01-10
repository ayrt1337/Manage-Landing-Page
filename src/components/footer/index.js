import React, { useState } from "react";
import styled from "styled-components";
import Logo from '../../images/svg-edited.svg'
import Facebook from '../../images/icon-facebook.svg'
import Youtube from '../../images/icon-youtube.svg'
import Twitter from '../../images/icon-twitter.svg'
import Pinterest from '../../images/icon-pinterest.svg'
import Instagram from '../../images/icon-instagram.svg'
import { useMediaQuery } from "react-responsive";

const Footer = () => {
    const for1475Width = useMediaQuery({query: '(max-width: 1475px)'})
    const for1015Width = useMediaQuery({query: '(max-width: 1015px)'})
    const for970Width = useMediaQuery({query: '(max-width: 970px)'})
    const for670Width = useMediaQuery({query: '(max-width: 670px)'})
    const for380Width = useMediaQuery({query: '(max-width: 380px)'})

    const [showAlert, setShowAlert] = useState(false)

    function handleChange(){
        const invalidEmail = validateEmail(document.getElementById('inputEmail'))
        if(invalidEmail === false){
            document.getElementById('inputEmail').style.outline = 'none'
            document.getElementById('inputEmail').style.color = 'black'
            setShowAlert(false)
            document.getElementById('inputEmail').value = ''
        }
        else{
            document.getElementById('inputEmail').style.outline = '1px solid red'
            document.getElementById('inputEmail').style.color = 'red'
            setShowAlert(true)
        }
    }

    function validateEmail(email){
        let userEmail = email.value.substring(0, email.value.indexOf("@"))
        let domainEmail = email.value.substring(email.value.indexOf("@") + 1, email.value.length)
    
        if ((userEmail.length >= 1) &&
            (domainEmail.length >= 3) &&
            (userEmail.search("@") === -1) &&
            (domainEmail.search("@") === -1) &&
            (userEmail.search(" ") === -1) &&
            (domainEmail.search(" ") === -1) &&
            (domainEmail.search(".") !== -1) &&
            (domainEmail.indexOf(".") >= 1) &&
            (domainEmail.lastIndexOf(".") < domainEmail.length - 1)) {
            let invalidEmail = false
            return invalidEmail
        }
        else{
            let invalidEmail = true
            return invalidEmail
        }
    }

    return(
        <>
            {!for1475Width &&
                <Div>
                    <div>
                        <img src={Logo} alt=''></img>
        
                        <SocialsMedias>
                            <img style={{cursor: 'pointer'}} src={Facebook} alt=''></img>
                            <img style={{cursor: 'pointer'}} src={Youtube} alt=''></img>
                            <img style={{cursor: 'pointer'}} src={Twitter} alt=''></img>
                            <img style={{cursor: 'pointer'}} src={Pinterest} alt=''></img>
                            <img style={{cursor: 'pointer'}} src={Instagram} alt=''></img>
                        </SocialsMedias>
                    </div>
        
                    <div>
                        <Nav>
                            <Li>Home</Li>
                            <Li>Pricing</Li>
                            <Li>Products</Li>
                            <Li>About Us</Li>
                        </Nav>
                    </div>
        
                    <div>
                        <Nav>
                            <Li>Careers</Li>
                            <Li>Community</Li>
                            <Li>Privacy Policy</Li>
                        </Nav>
                    </div>
        
                    <div>
                        <DivInput>
                            <Input id='inputEmail' type='text' placeholder="Updates in your inbox"></Input>
                            <BtnGo onClick={() => handleChange()}>Go</BtnGo>
                        </DivInput>
        
                        {showAlert &&
                            <AlertP>Please insert a valid email</AlertP>
                        }
        
                        <CopyrightP>Copyright 2020. All Rights Reserved</CopyrightP>
                    </div>
                </Div>
            }

            {(for1475Width && !for970Width) &&
                <Div style={{padding: '70px 100px 70px 100px'}}>
                    <div>
                        <img src={Logo} alt=''></img>
        
                        <SocialsMedias>
                            <img style={{cursor: 'pointer'}} src={Facebook} alt=''></img>
                            <img style={{cursor: 'pointer'}} src={Youtube} alt=''></img>
                            <img style={{cursor: 'pointer'}} src={Twitter} alt=''></img>
                            <img style={{cursor: 'pointer'}} src={Pinterest} alt=''></img>
                            <img style={{cursor: 'pointer'}} src={Instagram} alt=''></img>
                        </SocialsMedias>
                    </div>
        
                    <div>
                        <Nav>
                            <Li>Home</Li>
                            <Li>Pricing</Li>
                            <Li>Products</Li>
                            <Li>About Us</Li>
                        </Nav>
                    </div>
        
                    <div>
                        <Nav>
                            <Li>Careers</Li>
                            <Li>Community</Li>
                            <Li>Privacy Policy</Li>
                        </Nav>
                    </div>
        
                    <div>
                        {!for1015Width &&
                            <DivInput>
                                <Input id='inputEmail' type='text' placeholder="Updates in your inbox"></Input>
                                <BtnGo onClick={() => handleChange()}>Go</BtnGo>
                            </DivInput>
                        }

                        {for1015Width &&
                            <DivInput>
                                <Input style={{width: '170px'}} id='inputEmail' type='text' placeholder="Updates in your inbox"></Input>
                                <BtnGo onClick={() => handleChange()}>Go</BtnGo>
                            </DivInput>
                        }       
        
                        {showAlert &&
                            <AlertP>Please insert a valid email</AlertP>
                        }
        
                        <CopyrightP>Copyright 2020. All Rights Reserved</CopyrightP>
                    </div>
                </Div>
            }

            {(for1475Width && for970Width) &&
                <>
                    {!for670Width &&
                        <Div style={{
                            padding: '70px 100px 70px 100px',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <div>
                                <DivInput>
                                    <Input id='inputEmail' type='text' placeholder="Updates in your inbox"></Input>
                                    <BtnGo onClick={() => handleChange()}>Go</BtnGo>
                                </DivInput>
                                
                                {showAlert &&
                                    <AlertP>Please insert a valid email</AlertP>
                                }
                            </div>
                
                            <div style={{display: 'flex', marginTop: '60px'}}>
                                <div style={{marginRight: '65px'}}>
                                    <Nav>
                                        <Li>Home</Li>
                                        <Li>Pricing</Li>
                                        <Li>Products</Li>
                                        <Li>About Us</Li>
                                    </Nav>
                                </div>
                    
                                <div>
                                    <Nav>
                                        <Li>Careers</Li>
                                        <Li>Community</Li>
                                        <Li>Privacy Policy</Li>
                                    </Nav>
                                </div>
                            </div>
                
         
                            <SocialsMedias>
                                <ImgSocialMedia style={{cursor: 'pointer'}} src={Facebook} alt=''></ImgSocialMedia>
                                <ImgSocialMedia style={{cursor: 'pointer'}} src={Youtube} alt=''></ImgSocialMedia>
                                <ImgSocialMedia style={{cursor: 'pointer'}} src={Twitter} alt=''></ImgSocialMedia>
                                <ImgSocialMedia style={{cursor: 'pointer'}} src={Pinterest} alt=''></ImgSocialMedia>
                                <ImgSocialMedia style={{cursor: 'pointer', margin: '0'}} src={Instagram} alt=''></ImgSocialMedia>
                            </SocialsMedias>
                      
                            <img src={Logo} alt='' style={{marginBottom: '40px', marginTop: '40px'}}></img>
        
                            <CopyrightP style={{float: 'none', margin: '0'}}>Copyright 2020. All Rights Reserved</CopyrightP>
                        </Div>
                    }

                    {for670Width &&
                        <Div style={{
                            padding: '70px 40px 70px 40px',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <div>
                                <DivInput>
                                    {!for380Width &&
                                        <Input style={{width: '170px'}} id='inputEmail' type='text' placeholder="Updates in your inbox"></Input>
                                    }

                                    {for380Width &&
                                        <Input style={{width: '150px', fontSize: '15px'}} id='inputEmail' type='text' placeholder="Updates in your inbox"></Input>
                                    }
                                    <BtnGo onClick={() => handleChange()}>Go</BtnGo>
                                </DivInput>
                                
                                {showAlert &&
                                    <AlertP style={{marginLeft: '10px'}}>Please insert a valid email</AlertP>
                                }
                            </div>
                
                            <div style={{display: 'flex', marginTop: '40px'}}>
                                <div style={{marginRight: '40px'}}>
                                    <Nav>
                                        <Li>Home</Li>
                                        <Li>Pricing</Li>
                                        <Li>Products</Li>
                                        <Li>About Us</Li>
                                    </Nav>
                                </div>
                    
                                <div>
                                    <Nav>
                                        <Li>Careers</Li>
                                        <Li>Community</Li>
                                        <Li>Privacy Policy</Li>
                                    </Nav>
                                </div>
                            </div>
                
         
                            <SocialsMedias>
                                <ImgSocialMedia style={{cursor: 'pointer'}} src={Facebook} alt=''></ImgSocialMedia>
                                <ImgSocialMedia style={{cursor: 'pointer'}} src={Youtube} alt=''></ImgSocialMedia>
                                <ImgSocialMedia style={{cursor: 'pointer'}} src={Twitter} alt=''></ImgSocialMedia>
                                <ImgSocialMedia style={{cursor: 'pointer'}} src={Pinterest} alt=''></ImgSocialMedia>
                                <ImgSocialMedia style={{cursor: 'pointer', margin: '0'}} src={Instagram} alt=''></ImgSocialMedia>
                            </SocialsMedias>
                      
                            <img src={Logo} alt='' style={{marginBottom: '40px', marginTop: '40px'}}></img>
                            
                            {!for380Width &&
                                <CopyrightP style={{float: 'none', margin: '0'}}>Copyright 2020. All Rights Reserved</CopyrightP>
                            }

                            {for380Width &&
                                <CopyrightP style={{float: 'none', margin: '0', fontSize: '14px'}}>Copyright 2020. All Rights Reserved</CopyrightP>
                            }
                        </Div>
                    }
                </>
            }
        </>
    )
}

const Div = styled.div`
    padding: 70px 200px 70px 200px;
    background-color: #1e1e26;
    display: flex;
    justify-content: space-between;
`

const Nav = styled.nav`
    list-style: none;
    color: #f0f1f1;
    font-size: 17px;
`

const Li = styled.li`
    cursor: pointer;
    margin-bottom: 10px;
    transition: 0.2s ease-in-out;

    &:hover{
        opacity: 0.7;
    }
`

const BtnGo = styled.a`
    cursor: pointer;
    background-color: #f3603c;
    color: white;
    padding: 13px 20px 13px 20px;
    border-radius: 30px;
    transition: 0.2s ease-in-out;
    font-weight: 500;
    margin-left: 10px;

    &:hover{
        opacity: 0.7;
    }
`

const Input = styled.input`
    padding: 13px 20px 13px 20px;
    border-radius: 30px;
    border: none;
    font-size: 17px;

    &:focus{
        outline: none;
    }
`

const DivInput = styled.div`
    display: flex;
    align-items: center;
`

const CopyrightP = styled.p`
    color: #6a6a72;
    float: right;
    margin-top: 50px;
`

const SocialsMedias = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

const ImgSocialMedia = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 15px;
`

const AlertP = styled.p`
    color: red;
    font-style: italic;
    margin-left: 20px;
    margin-top: 3px;
    font-size: 16px;
`

export default Footer