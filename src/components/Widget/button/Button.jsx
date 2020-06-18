import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

const Button = ({
   onClick, className, disabled, active, invert, tag: Tag, ...attrs
}) => {
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const classes = classNames(
    'btn',
    className,
    { active },
    { invert },
    { wrapperNav: attrs.wrapperNav },

  );


  return (
    <Tag
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
    </Tag>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
  tag: 'div',
};

export default Button;
