import React from 'react'
import './Header.css';
import {Poster} from './Poster.js';

export const Header = () => {
  return (
    <div className='z-index'><div>
        <nav className='navig'>
            <div className='logo'>
                <img className='img' src="data:image/png;base64,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" alt="logo" width={36}/>
            </div>
            <ul className='nav-items'>
                <li>
                    <a style={{fontSize:"25px"}} href="#">Emotions</a>
                </li>
                <li>
                    <a style={{fontSize:"25px"}} href="#">Trade</a>
                </li>
                <li>
                    <a style={{fontSize:"25px"}} href="#">About Crypto</a>
                </li>
                <li>
                    <a style={{fontSize:"25px"}} href="#">Work with us</a>
                </li>
            </ul>
            <button className='button'>Download app</button>
        </nav>
        <br/><br/><br/><hr/>
        
        <Poster/>

        <div className='head_para'>
            <h1 style={{fontWeight:"500", fontSize:"50px"}}>EQ beats IQ</h1>
            <p style={{fontSize:"25px"}}>
            People with high emotional<br/>
            intelligence (EQ) live more fulfilled<br/>
            lives. They tend to be happier and<br/>
            have healthier relationships<br/>
            </p>
            <p style={{fontSize:"25px"}}>
                They are more successful in their<br/>
                pursuits and make for inspiring<br/>
                leaders. According to science, they<br/>
                earn $29k a year.
            </p>
        </div>
    </div>
    </div>
  )
}
