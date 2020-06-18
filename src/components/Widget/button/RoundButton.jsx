import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

const ButtonCircular = ({
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
    'btnCircle',
    className,
    { active },
    { invert },
    { wrapperLoginHeader: attrs.wrapperLoginHeader },
    { wrapperMusicFooter: attrs.wrapperMusicFooter },
    { wrapperNav: attrs.wrapperNav },
    { backgroundColort: attrs.backgroundColort },


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

ButtonCircular.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ButtonCircular.defaultProps = {
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
  tag: 'div',
};

export default ButtonCircular;
