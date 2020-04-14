import React from 'react'
import s from './Product.module.scss';
import Button from './../../components/Button/Button';
import {Link, generatePath} from 'react-router-dom';
import {routes} from './../router';

const ProductView = ({ product, isLoading, owner}) => {
    const shouldUpdate = isLoading || !owner;

    if(!product) {
        return <div>Loading...</div>
    }
    return (
        <div className={s.container} >
            <div className={s.wrapper}> 
                <div className={s.secProduct}>
                    <div className={s.imgProduct}>
                        <img src={product.photos[0]} alt={product.title}/>
                        <div className={s.priceProduct}> <i className="fas fa-dollar-sign"></i>{product.price}</div>
                    </div>
                    <div className={s.infoProduct}>
                        <h2 className={s.title}>{ product.title} </h2>
                        <div className={s.location}><i className="fas fa-map-marker"></i>{product.location}</div>
                        <div className={s.description}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem   </div>
                    </div>

                </div>
            
                <div className={s.secUser}>
                    <div className={s.avatar}>
                        <div className={s.topLine}> </div>
                        { !owner? 
                            <div style={{marginTop: "30px", textAlign: 'center'}}>Loading...</div>  
                            :   
                            <div className={s.secLine}>
                                <img src="https://www.fillmurray.com/72/72" alt='avatar' />
                                <div className={s.fullName}> 
                                    <Link to={generatePath(routes.seller, {id: owner.id})}> 
                                        { shouldUpdate? "Loading..." : owner.fullName} 
                                    </Link>
                                </div>
                                <div className={s.locationUser}> 
                                    { shouldUpdate? "Loading..." : owner.fullName}
                                </div>
                            </div>
                        }

                    </div>
                    <Button 
                        type="button" 
                        height="47px" 
                        width="259px" 
                        className={s.btnChatSeller}
                    > Chat with seller
                    </Button>

                    <Button 
                        type="button" 
                        height="47px"
                        width="259px" 
                        className={s.btnAddToFavorite}
                        invers
                    > <i className="far fa-heart"></i>Add to favorive
                    </Button>
                </div>
            </div>
        </div>
    )
}
 
export default ProductView
