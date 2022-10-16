import styles from "./ContextItem.module.css";
const ContextItem = ({ id, title, avatar, content, author, createdAt, hour, ctxStatus, onClick, isActive }) => {
	const shortenMessage = content.length > 70 ? `${content.substr(0, 90)}...` : content;

	const creationDate = new Date(createdAt);

	return (
		<div
			className={
				ctxStatus === "new"
					? styles.contextItemNew
					: ctxStatus !== "new" && isActive
					? styles.contextItem
					: styles.contextItemRead
			}
			onClick={() => onClick({ id, title, avatar, content, author, createdAt, hour, ctxStatus })}>
			<div className={styles.authorInfo}>
				{ctxStatus === "new" && <p className={styles.newNotification}>NEW</p>}
				<p className={styles.author}>{author}</p>
				<div className={styles.dot}></div>
				<p>{creationDate.toLocaleString("en-US", { day: "numeric", month: "long" })}</p>
			</div>
			<p className={ctxStatus === "new" ? styles.titleNew : styles.title}>{title}</p>
			<p className={styles.content}>{shortenMessage}</p>
		</div>
	);
};

export default ContextItem;
