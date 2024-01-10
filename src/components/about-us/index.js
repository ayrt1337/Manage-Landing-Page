import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const AboutUs = () => {
    const for1475Width = useMediaQuery({query: '(max-width: 1475px)'})
    const for860Width = useMediaQuery({query: '(max-width: 860px)'})
    const for670Width = useMediaQuery({query: '(max-width: 670px)'})

    return(
        <>
            {!for1475Width &&
                <Div>
                    <div>
                        <H1>What's different about Manage?</H1>
        
                        <P>Manage provides all the functionally your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</P>
                    </div>
        
                    <div>
                        <Ol>
                            <Li>
                                <div>
                                    <H3>Track company-wide progress</H3>
        
                                    <P>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</P>
                                </div>
                            </Li>
        
                            <Li>
                                <div>
                                    <H3>Advanced built-in reports</H3>
        
                                    <P>Set internal delivery estimates and track progress toward company golds. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</P>
                                </div>
                            </Li>
        
                            <Li>
                                <div>
                                    <H3>Everything you need in one place</H3>
        
                                    <P>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</P>
                                </div>
                            </Li>
                        </Ol>
                    </div>
                </Div>
            }

            {(for1475Width && !for860Width) &&
                <Div style={{margin: '20px 100px 0px 100px'}}>
                    <div>
                        <H1 style={{fontSize: '35px'}}>What's different about Manage?</H1>
        
                        <P style={{fontSize: '17px'}}>Manage provides all the functionally your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</P>
                    </div>
        
                    <div>
                        <Ol style={{paddingLeft: '130px'}}>
                            <Li>
                                <div>
                                    <H3>Track company-wide progress</H3>
        
                                    <P style={{fontSize: '17px'}}>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</P>
                                </div>
                            </Li>
        
                            <Li>
                                <div>
                                    <H3>Advanced built-in reports</H3>
        
                                    <P style={{fontSize: '17px'}}>Set internal delivery estimates and track progress toward company golds. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</P>
                                </div>
                            </Li>
        
                            <Li>
                                <div>
                                    <H3>Everything you need in one place</H3>
        
                                    <P style={{fontSize: '17px'}}>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</P>
                                </div>
                            </Li>
                        </Ol>
                    </div>
                </Div>
            }

            {(for1475Width && for860Width) &&
                <>
                    {!for670Width &&
                        <Div style={{
                            margin: '20px 100px 0px 100px',
                            flexDirection: 'column'
                        }}>
                            <div style={{
                                textAlign: 'center',
                                marginBottom: '100px'
                            }}>
                                <H1 style={{fontSize: '35px'}}>What's different about Manage?</H1>
                
                                <P style={{fontSize: '17px'}}>Manage provides all the functionally your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</P>
                            </div>
                
                            <div>
                                <Ol style={{paddingLeft: '0px'}}>
                                    <Li>
                                        <div>
                                            <H3>Track company-wide progress</H3>
                
                                            <P style={{fontSize: '17px'}}>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</P>
                                        </div>
                                    </Li>
                
                                    <Li>
                                        <div>
                                            <H3>Advanced built-in reports</H3>
                
                                            <P style={{fontSize: '17px'}}>Set internal delivery estimates and track progress toward company golds. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</P>
                                        </div>
                                    </Li>
                
                                    <Li>
                                        <div>
                                            <H3>Everything you need in one place</H3>
                
                                            <P style={{fontSize: '17px'}}>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</P>
                                        </div>
                                    </Li>
                                </Ol>
                            </div>
                        </Div>
                    }

                    {for670Width &&
                        <Div style={{
                            margin: '20px 40px 0px 40px',
                            flexDirection: 'column'
                        }}>
                            <div style={{
                                textAlign: 'center',
                                marginBottom: '100px'
                            }}>
                                <H1 style={{fontSize: '30px'}}>What's different about Manage?</H1>
                
                                <P style={{fontSize: '17px'}}>Manage provides all the functionally your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</P>
                            </div>
                
                            <div>
                                <Ol style={{paddingLeft: '0px'}}>
                                    <Li>
                                        <div>
                                            <H3>Track company-wide progress</H3>
                
                                            <P style={{fontSize: '17px'}}>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</P>
                                        </div>
                                    </Li>
                
                                    <Li>
                                        <div>
                                            <H3>Advanced built-in reports</H3>
                
                                            <P style={{fontSize: '17px'}}>Set internal delivery estimates and track progress toward company golds. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</P>
                                        </div>
                                    </Li>
                
                                    <Li>
                                        <div>
                                            <H3>Everything you need in one place</H3>
                
                                            <P style={{fontSize: '17px'}}>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</P>
                                        </div>
                                    </Li>
                                </Ol>
                            </div>
                        </Div>
                    }
                </>
            }
        </>
    )
}

const Div = styled.div`
    display: flex;
    margin: 0px 200px 0px 200px;
`

const H1 = styled.h1`
    margin-bottom: 12px;
    color: #242d50;
    font-size: 40px;
`

const H3 = styled.h3`
    color: #242d50;
    margin-bottom: 20px;
`

const P = styled.p`
    font-weight: 500;
    color: #98999d;
    font-size: 19px;
`

const Ol = styled.ol`
    padding-left: 200px;
    list-style: none;
    counter-reset: item;
`

const Li = styled.li`
    display: flex;
    margin-bottom: 70px;
    counter-increment: item;

    &:before{
        padding: 3px 20px 5px 20px;
        margin-top: 2px;
        margin-right: 12px;
        content: counter(item);
        background-color: #f3603c;
        color: white;
        text-align: center;
        display: inline-block;
        height: 20px;
        width: 20px;
        border-radius: 30px;
    }
`

export default AboutUs