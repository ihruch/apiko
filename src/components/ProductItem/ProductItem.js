
import React from 'react';
import {Link} from 'react-router-dom'
import {routes} from './../../scenes/router';
import { generatePath } from "react-router";
import s from './ProductItem.module.scss';

const ProductItem = ({id, title}) => {
    return (  
        <div className={s.product}>       
            <Link to={generatePath(routes.product, {id})}>
                <div>{title}</div> 
            </Link>
        </div>
    )
}

export default ProductItem
