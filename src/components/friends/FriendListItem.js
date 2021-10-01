import PropTypes from "prop-types";
import s from "./Friend.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={s.friend}>
      <span className={isOnline ? s.onLine : s.status}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
