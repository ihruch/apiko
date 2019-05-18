import React from 'react';
import { Link } from 'react-router-dom';

const styleUl = {
    display: "flex",
    listStyle: "none",
    padding: 0
}
const styleLi ={
    margin: "0 14px 0 0",
    border: "1px solid #ddd",
    padding: "7px 15px",
    borderRadius: "5px"

}

function Footer({routers}) {
   
    return(
        <div >
            <ul style={styleUl}>
                {  
                    routers.map( link => (
                    <li key={link.id} style={styleLi}>
                        <Link to={link.link} style={{textDecoration: "none"}}> {link.name} </Link>
                    </li>
                    ))
                }         
            </ul>
        </div>
    );

}

export default Footer;