import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import classNames from 'classnames'


const Card= ({
  children,
  className,
  tag: Tag,
  ...attrs
}) => {
  const classes = classNames(
    'Card',
    className,
  );

  return (
    <Tag className={classes} {...attrs}>
      {children}
    </Tag>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Card.defaultProps = {
  children: null,
  className: '',
  tag: 'div',
};


export default Card;