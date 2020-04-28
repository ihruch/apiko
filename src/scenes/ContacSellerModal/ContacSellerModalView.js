import React from 'react'

const ContacSellerModalView = ({product, owner, text, setText, submit, disabled}) => {

    console.log('ContacSellerModalView', owner )
    return (
        <div>
            <h3>Product: {product.title}</h3>
            <p> owner: {owner.fullName}</p>

            <textarea value={text} onChange={ e => setText(e.target.value)}></textarea>
            <button disabled={disabled} type='button' onClick={submit}> Sent text</button>
        </div>
    )
}

export default ContacSellerModalView;
