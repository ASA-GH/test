import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

const ButtonCircular = ({
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
    'circular',
    className,
    { active },
    { invert },
    { wrapperLoginHeader: attrs.wrapperLoginHeader },
    { wrapperMusicFooter: attrs.wrapperMusicFooter },
    { wrapperNav: attrs.wrapperNav },
    { backgroundColort: attrs.backgroundColort },


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

ButtonCircular.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

ButtonCircular.defaultProps = {
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
};

export default ButtonCircular;
