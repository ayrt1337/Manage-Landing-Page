import React from "react";
import styled from "styled-components";
import CloseBtn from '../../images/icon-close.svg'
import { useMediaQuery } from "react-responsive";

const Overlay = props => {
    const for380Width = useMediaQuery({query: '(max-width: 380px)'})

    return(
        <>
            <DivOverlay></DivOverlay>

            {!for380Width &&
                <DivHeader>
                    <div style={{textAlign: 'right'}}>
                        <Img src={CloseBtn} alt='' 
                            onClick={() => {
                                if(props.showOverlay){
                                    props.setShowOverlay(false)
                                }
                            }}>
                        </Img>
                    </div>

                    <Nav>
                        <Li><NavLink href='#'>Pricing</NavLink></Li>
                        <Li><NavLink href='#'>Product</NavLink></Li>
                        <Li><NavLink href='#'>About Us</NavLink></Li>
                        <Li><NavLink href='#'>Careers</NavLink></Li>
                        <Li style={{marginBottom: '0'}}><NavLink href='#'>Community</NavLink></Li>
                    </Nav>
                </DivHeader>
            }

            {for380Width &&
                <DivHeader style={{width: '250px'}}>
                    <div style={{textAlign: 'right'}}>
                        <Img src={CloseBtn} alt='' 
                            onClick={() => {
                                if(props.showOverlay){
                                    props.setShowOverlay(false)
                                }
                            }}>
                        </Img>
                    </div>

                    <Nav>
                        <Li><NavLink href='#'>Pricing</NavLink></Li>
                        <Li><NavLink href='#'>Product</NavLink></Li>
                        <Li><NavLink href='#'>About Us</NavLink></Li>
                        <Li><NavLink href='#'>Careers</NavLink></Li>
                        <Li style={{marginBottom: '0'}}><NavLink href='#'>Community</NavLink></Li>
                    </Nav>
                </DivHeader>
            }
        </>
    )
}

const DivOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.26);
    z-index: 10;
`

const DivHeader = styled.div`
    left: 0;
    right: 0;
    margin: 130px auto 0px auto;
    position: absolute;
    z-index: 999;
    width: 300px;
`

const Nav = styled.nav`
    border-radius: 5px;
    background-color: white;
    padding: 40px 0px 40px 0px;
    text-align: center;
    list-style: none;
`

const Li = styled.li`
    color: #242d50;
    font-weight: 500;
    margin-bottom: 14px;
`

const NavLink = styled.a`
    transition: 0.3s ease-in-out;

    &:hover{
        opacity: 0.7;
    }
`

const Img = styled.img`
    cursor: pointer;
    margin-bottom: 15px;
`

export default Overlay