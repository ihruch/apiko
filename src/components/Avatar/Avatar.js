import React  from 'react';
import classNames from 'classnames';
import './Avatar.css';

const randomColorbg = () =>{
    let min = Math.ceil(0);
    let max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const Avatar = ({viewer, circle, width, height, className, src, badge }) => {
    const classes = classNames(
        className,
        {isCircle: circle}
    );

    // if(!src) {
    //     src = `https://via.placeholder.com/${width}×${height}/FFFF00/000000?Text=AV`
    // }
    const color = `rgb(${randomColorbg()},${randomColorbg()},${randomColorbg()}`;
    
    if(badge) {
        const [name, lastName=null, ...rest] = viewer.fullName.split(' ');

        return (
            <div 
                className={classes}
                style={{
                    backgroundColor: color,
                    height: `${height}px`,
                    width: `${width}px`,
                    lineHeight: `${height}px`,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    zIndex: '100'
                }}
            >
                {name.charAt(0)} {lastName && lastName.charAt(0)} 
            </div>
        )
    }else {
        return (
            <img 
                src={src}
                className={classes}
                width={width}
                height={height}
                alt="img"
               
            />
        )
    }
    
}

export default Avatar;