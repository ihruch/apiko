
import React from 'react';
import {Link} from 'react-router-dom'
import {routes} from './../../scenes/router';
import { generatePath } from "react-router";
import s from './ProductItem.module.scss';

const ProductItem = ({product}) => {
    const {id, title, price, photos, ...rest} = product;
   // console.log('photos', photos)
   
   let src = '';

    if (photos && photos.length > 0){
        src = photos[0];
    }else {
        src = 'https://dummyimage.com/202x148/eeeeee/8b8b8b&text=text';
    };

    return (  
        <div className={s.wrapperItem}>       
            <Link to={generatePath(routes.product, {id})}>

                    <div>
                        <div className={s.photo}>
                            <img src={src} width="202" height="148" alt='img' />
                        </div>
                        <div className={s.info}>
                            <h2 className={s.infoTitle}>{title}</h2>
                            <p className={s.infoPrice}>${price}</p>
                        </div>

                    </div>

            </Link>
        </div>
    )
}

export default ProductItem


// id(pin):"b32307a1-8074-473c-83a8-b3520bf1ae28"
// ownerId(pin):"bd0aa6be-e450-4479-839d-0ee7050ec5de"
// title(pin):"Poduct test "
// description(pin):"Description test product"
// photos(pin):null
// location(pin):"Odessa"
// price(pin):120
// createdAt(pin):1583672471985
// updatedAt(pin):null
// saved(pin):false