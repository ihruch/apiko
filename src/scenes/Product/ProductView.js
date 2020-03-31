import React from 'react'


const ProductView = ({ product, isLoading, owner}) => {
    const shouldUpdate = isLoading || !owner;

    console.log("Component ProductView");
    if(!product) {
        return <div>Loading...</div>
    }
    return (
        <div>
           <p> title:  { product.title}   </p>
           <p> author: { shouldUpdate? "Loading..." : owner.fullName} </p>
        </div>
    )
}
 
export default ProductView
