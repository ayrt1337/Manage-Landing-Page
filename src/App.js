import './App.css';
import { createGlobalStyle } from 'styled-components';
import Content from './components/show-content';
import { useState } from 'react';

function App() {
  const [showOverlay, setShowOverlay] = useState(false)

  return (
    <>
      <GlobalStyle />

      <Content showOverlay={showOverlay} setShowOverlay={setShowOverlay}/>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing; border-box;
    color: inherit;
    text-decoration: none;
  }
`

export default App;
