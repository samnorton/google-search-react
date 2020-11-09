import React, { useState } from 'react'

const Body = ({ handleClick }) => {
    const [term, setTerm] = useState('');

    const onHandleSubmit = (e) => {
        e.preventDefault();
        handleClick(term);
    }
    return (
       <>
  <div className="page">
    <img className="logo" src="https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
    <br />

    <form onSubmit={onHandleSubmit} >
    <input id="searchme" className="search" title="Search" value={term} type="text" onChange={(e) => setTerm(e.target.value)}/>
    <br />
    <div className="Bcontainer">
      <a className="button left">Google Search</a>
      <a className="button right">I'm Feeling Lucky</a>
    </div>
    </form>
  </div>
       </>
    )
}

export default Body
