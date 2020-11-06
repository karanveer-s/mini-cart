import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               <button style={{background:"transparent"}}><a style={{color:"white"}} href="http://localhost:3000">HOME</a></button>
               <ul className="navbar-nav align-item-center">
                   <li className="nav-item ml-5">
                       <Link to="/" className="nav-link">Restaurant</Link>
                   </li>
               </ul> 
               < Link to="/cart" className="ml-auto"><ButtonContainer><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><i class="fa fa-shopping-cart" style={{fontSize:"30px"}}></i></ButtonContainer></Link>  
            </NavWrapper>
        )
    }
}

const NavWrapper=styled.nav`

`
