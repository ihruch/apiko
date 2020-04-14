import React from 'react'
import s from "./Seller.module.scss";
import Avatar from './../../components/Avatar/Avatar'
import ProductItem from './../../components/ProductItem/ProductItemContainer'


const SellerView = ({seller, list}) => {

   console.log('SellerView', {list})
   

    return (
        <div className={s.container}>
            { !seller? 
             <div>Loading....</div>
             :
             <>
                <div className={s.info}>
                    <Avatar 
                        viewer={seller}
                        circle
                        width="95" 
                        height="95" 
                        src="https://www.fillmurray.com/95/95"
                        className={s.avatar}
                    />
                    
                    <h1 className={s.title}>{seller.fullName}</h1>   
                    <p className={s.subtitle}>{seller.fullName}</p>
                </div>    

            <div className={s.stat}>
                <div className={s.wrapperStat}>
                 
                    <div className={s.itemStat}>
                        <p>88%</p>
                        <span>Positive feedback</span>
                    </div>

                    <div className={s.itemStat}>
                        <p>88%</p>
                        <span>Positive feedback</span>
                    </div>

                    <div className={s.itemStat}>
                        <p>88%</p>
                        <span>Positive feedback</span>
                    </div>
                        
                </div>    
            </div>    
            <div className={s.wrapperList}> 
                    { !list.length? 
                        <span>Loading... </span>:
                         list.map( id => <ProductItem key={id} id={id} />) } 
            </div>    
            </>
            }
        </div>
    )
}

export default SellerView
