import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <Div>
    <p>©  2022 Rode-Battle</p>
    <ul className='footer-links'>
        <li>F-code</li>
        <li>Tips and Tricks</li>
        <li>FAQS</li>
        <li>Privacy &amp; Terms</li>
        <li><FacebookIcon></FacebookIcon></li>
    </ul>
    </Div>
  )
}

export default Footer

const Div=styled.div`
width:100%;
background: var(--clr-footer-bg);
height:37px;
color:var(--clr-text);
display:flex;
align-items:center;
 ul{
    width:80%;
    display:flex;
    align-items:center;
    justify-content: center;
    li{
    margin: 0 45px;
    cursor:pointer;
    text-decoration:underline;
    }
    li:hover{
        color:white;
    }
} `
