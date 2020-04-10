  
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Icon.css';

const Icon = ({ name, className, onClick }) => {
   
  const classes = classNames(
    'far',
    `fa-${name}`,
    { func: onClick },
    className,
  );

  return (
    <i
      className={classes}
      onClick={onClick}
    />
  );
};

export default Icon;

