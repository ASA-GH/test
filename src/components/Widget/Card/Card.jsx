import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import './Card.css';

const Card = ({
  className,
  tag: Tag,
  ...attrs
}) => {
  const classes = classNames(
    'card',
    className,
    { innerApp: attrs.innerApp },
    { wrapperHeader: attrs.wrapperHeader },
    { wrapperCardApp: attrs.wrapperCardApp },
    { wrapperFooter: attrs.wrapperFooter },
    { wrapperTest: attrs.wrapperTest },

  );

  return (
    <Tag className={classes} {...attrs}  />
  
  );
};

Card.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
Card.defaultProps = {
  className: '',
  tag: 'div',
};

export default Card;