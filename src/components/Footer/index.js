import React from 'react';
import { Link } from 'react-router-dom';

const styleUl = {
    display: "flex",
    listStyle: "none",
    marginTop: "5px !important",
    marginBottom: "5px !important",
    justifyContent: "center"
}
const styleLi ={
    flex: "0 0 15%",
    textAlign: "center",
    margin: "0 10px 0 0",
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