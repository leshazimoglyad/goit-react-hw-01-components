import PropTypes from "prop-types";
import css from '../friendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend__list}>

            {friends.map(({ avatar, name, isOnline, id }) =>
            (<li key={id} className={css.item}>
                <span className={isOnline ? css.status__onLine : css.status__offLine}></span>
                <img className={css.avatar} src={avatar} alt={'User avatar'} width="48" />
                <p className={css.name}>{name}</p>
            </li>))}
        </ul>
    )
    
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
    
}