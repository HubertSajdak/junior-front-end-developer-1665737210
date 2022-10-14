import styles from "./Avatar.module.css";
const Avatar = ({ avatarUrl }) => {
	return (
		<div className={styles.avatar}>
			<img className={styles.img} src={avatarUrl} alt="avatar" />
		</div>
	);
};

export default Avatar;
