import Avatar from "../../../../components/Avatar/Avatar";
import styles from "./ContextBody.module.css";
const ContextBody = ({ title, avatar, author, createdAt, hour, content }) => {
	const creationDate = new Date(createdAt);
	const currentDate = new Date();
	const dateDifference = Math.abs(+currentDate - +creationDate);
	const daysDifference = Math.ceil(dateDifference / (1000 * 60 * 60 * 24)) - 1;
	return (
		<section className={styles.ctxContent}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.container}>
				<Avatar avatarUrl={avatar} />
				<div className={styles.wrapper}>
					<div className={styles.authorInfo}>
						<div className={styles.authorName}>
							<p>{author}</p>
						</div>
						<div className={styles.dot}></div>
						<p className={styles.date}>
							{daysDifference === 0 ? "Today" : `${daysDifference} day(s) ago`},{" "}
							{creationDate.toLocaleString("en-US", { day: "numeric", month: "long" })}
						</p>
						<div className={styles.dot}></div>
						<p className={styles.hour}>{hour}</p>
					</div>
					<div className={styles.message}>
						<p>{content}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContextBody;
