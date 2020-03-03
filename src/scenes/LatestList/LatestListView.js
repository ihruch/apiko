import React from 'react'
// import s from './LatestList.module.scss'

const LatestListView = ({ list, isLoading }) => {
    
    if(isLoading) {
        return <div>Loading...</div> 
    }

    return (
        <div>
        { 
            list.map(({id, title}) => <div key={id}>{title}</div> ) 
        }
        </div>
    )
}

LatestListView.propTypes = {

}

export default LatestListView

