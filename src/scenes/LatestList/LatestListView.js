import React from 'react'
// import s from './LatestList.module.scss'
import Loader from '../../components/LoaderHoc/Loader';


const LatestListView = ({ list, isLoading }) => {

    return (
        <div>
            { list.map(({id, title}) => <div key={id}>{title}</div> ) }
        </div>
    )
}

LatestListView.propTypes = {}

export default Loader('isLoading')(LatestListView)

