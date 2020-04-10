import React from 'react'
import Loader from '../../components/LoaderHoc/Loader';
import ProductItem from './../../components/ProductItem/ProductItemContainer';
import s from './LatestList.module.scss'

const LatestListView = ({ list }) => {
    
    return (
        <div className={s.wrapperList}>
            { list.map( ({id}) => <ProductItem key={id} id={id} />) } 
        </div>
    )
}

export default Loader('isLoading')(LatestListView)

