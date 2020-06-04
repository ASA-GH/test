import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import './Card.css';

const Card = ({
  children,
  className,
  width,
  height,
  tag: Tag,
  ...attrs
}) => {
  const classes = classNames(
    'Card',
    className,
  );

  return (
    <Tag 
    className={classes}
    width={width}
    height={height}
    {...attrs}
    >
    {children}
    </Tag>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Card.defaultProps = {
  children: null,
  className: '',
  tag: 'div',
  width: 100,
  height: 100,
};


export default Card;