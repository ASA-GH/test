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
    { wrapperHeaderAndFooter: attrs.wrapperHeaderAndFooter },
    { wrapperCardApp: attrs.wrapperCardApp },
    { wrapperTest: attrs.wrapperTest },
    { wrapperProfileHome: attrs.wrapperProfileHome },
    { wrapperUnderTheProfileHome: attrs.wrapperUnderTheProfileHome },
    { wrapperNewsHome: attrs.wrapperNewsHome },
    { wrapperFriendsHome: attrs.wrapperFriendsHome },
    { wrapperMessagesomeDialogs: attrs.wrapperMessagesomeDialogs},
    { wrapperContactsDialogs: attrs.wrapperContactsDialogs },
    { wrapperSettings: attrs.wrapperSettings },
    { wrapperMyPostProfile: attrs.wrapperMyPostProfile },
    { wrapperTrackListMusic: attrs.wrapperTrackListMusic },
    { wrapperUnderTheProfileMusic: attrs.wrapperUnderTheProfileMusic },
    { wrapperAlbumMusic: attrs.wrapperAlbumMusic },

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