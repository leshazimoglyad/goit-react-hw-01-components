import PropTypes from 'prop-types';
import css from '../friendListItem/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={css.item}>
      <span
        className={isOnline ? css.status__onLine : css.status__offLine}
      ></span>
      <img className={css.avatar} src={avatar} alt={'User avatar'} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};