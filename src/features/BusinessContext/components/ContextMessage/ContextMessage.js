import Avatar from "../../../../components/Avatar/Avatar";
import styles from "./ContextMessage.module.css";
const ContextMessage = ({ title, avatar, author, createdAt, hour, content }) => {
	let dateString = "2022-10-14";
	const oldDate = new Date(dateString);
	const curDate = new Date();
	const dateDifference = Math.abs(+curDate - +oldDate);
	const daysDifference = Math.round(dateDifference / (1000 * 60 * 60 * 24)) - 1;

	return (
		<div className={styles.ctxContent}>
			<div className={styles.title}>{title}</div>
			<div className={styles.container}>
				<Avatar avatarUrl={avatar} />
				<div className={styles.wrapper}>
					<div className={styles.authorInfo}>
						<div className={styles.authorName}>
							<p>{author}</p>
						</div>
						<div className={styles.dot}></div>
						<div className={styles.date}>
							{daysDifference === 0 ? "Today" : `${daysDifference} day(s) ago`},{" "}
							{oldDate.toLocaleString("en-US", { day: "numeric", month: "long" })}
						</div>
						<div className={styles.dot}></div>
						<div className={styles.hour}>11:14</div>
					</div>
					<div className={styles.message}>
						<p>{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContextMessage;
