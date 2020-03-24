import React from 'react'
// import s from './LatestList.module.scss'
import Loader from '../../components/LoaderHoc/Loader';
import ProductItem from './../../components/ProductItem/ProductItem';

const LatestListView = ({ list, isLoading }) => {
    
    return (
        <div>
            { list.map( ({id, title}) => <ProductItem key={id} id={id} title={title} /> ) } 
        </div>
    )
}

LatestListView.propTypes = {}

export default Loader('isLoading')(LatestListView)

