import React from 'react'
import classNames from 'classnames';
import Avatar from '../Avatar/Avatar';
import './Popover.css';

const Popover = ({className, handleLogout, viewer}) => {
    
    const classes = classNames(
        'blockPopover',
        className,
    )
    
    return(
        <div className={classes}>
            <div className="popSettings">
                <div className="popSettingsTop">
                    <Avatar 
                        viewer={viewer} 
                        height="48" 
                        width="48" 
                        circle
                        badge                 
                    />
                    <div className="popSettingsInfo">
                        <h3>{viewer.fullName}</h3>
                        <p>{viewer.email}</p>
                        <div>Profile</div>
                    </div>
                </div>
            </div>

            <div className="blockFooter popEditProfile">
                Edit profile
            </div>       
            <div className="blockFooter popLogout" onClick={handleLogout}>
                logout
            </div>
        </div>    
    )
}


export default Popover;