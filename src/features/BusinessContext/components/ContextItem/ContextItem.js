import styles from "./ContextItem.module.css";
const ContextItem = ({ title, content, author, createdAt, ctxStatus }) => {
	return (
		<div
			className={
				ctxStatus === "new" ? styles.contextItemNew : ctxStatus === "read" ? styles.contextItemRead : styles.contextItem
			}>
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
