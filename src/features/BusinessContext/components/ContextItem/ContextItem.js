import styles from "./ContextItem.module.css";
const ContextItem = ({ id, title, avatar, content, author, createdAt, hour, ctxStatus, onClick }) => {
	return (
		<div
			className={
				ctxStatus === "new" ? styles.contextItemNew : ctxStatus === "read" ? styles.contextItemRead : styles.contextItem
			}
			onClick={() => onClick({ id, title, avatar, content, author, createdAt, hour, ctxStatus })}>
			<div className={styles.authorInfo}>
				{ctxStatus === "new" && <p className={styles.new}>NEW</p>}
				<p className={styles.author}>{author}</p>
				<div className={styles.dot}></div>
				<p>{createdAt}</p>
			</div>
			<p className={ctxStatus === "new" ? styles.titleNew : styles.title}>{title}</p>
			<p className={styles.content}>{content}</p>
		</div>
	);
};

export default ContextItem;
