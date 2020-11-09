import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {

   const handleClick = (term) =>{
      window.open(`https://www.google.com/search?q=${term}`);
   }

  return (
   <>
     <Header />
      <Body handleClick={handleClick} />
       <Footer />
   </>
  )
}

export default App;
