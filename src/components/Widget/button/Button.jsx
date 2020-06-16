import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

const Button = ({
   onClick, className, disabled, active, invert, ...attrs
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
    { backgroundColort: attrs.backgroundColor },

  );

  const Tag = attrs.href ? 'a' : 'div';

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
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
};

export default Button;
