import React from 'react'
// import s from './LatestList.module.scss'
import Loader from '../../components/LoaderHoc/Loader';
import ProductItem from './../../components/ProductItem/ProductItem';
import {Link} from 'react-router-dom';

const LatestListView = ({ list, isLoading }) => {
    
    return (
        <div>
            <Link to='/test'> **TEST** </Link>
           <br/>
            { list.map( ({id, title}) => <ProductItem key={id} id={id} title={title} /> ) } 
        </div>
    )
}

export default Loader('isLoading')(LatestListView)

