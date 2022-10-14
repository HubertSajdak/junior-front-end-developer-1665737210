import styles from "./ContextMessage.module.css";
const ContextMessage = ({ title, avatar, author, date, hour, content }) => {
	let dateString = "2022-10-14";
	const oldDate = new Date(dateString);
	const curDate = new Date();
	const dateDifference = Math.abs(+curDate - +oldDate);
	const daysDifference = Math.round(dateDifference / (1000 * 60 * 60 * 24)) - 1;

	return (
		<div className={styles.ctxContent}>
			<div className={styles.title}>Application has been accepted</div>
			<div className={styles.container}>
				<div
					className={styles.avatar}
					style={{
						width: "50px",
						height: "50px",
						borderRadius: "50%",
						border: "1px solid black",
						padding: "2px",
						display: "grid",
						placeItems: "center",
					}}>
					<img
						src="https://randomuser.me/api/portraits/women/65.jpg"
						alt=""
						style={{ width: "100%", borderRadius: "50%" }}
					/>
				</div>
				<div className={styles.wrapper}>
					<div className={styles.authorInfo}>
						<div className={styles.authorName}>
							<p>Kristen Aniston</p>
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
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia deserunt autem dolores
							minima ipsa veritatis officia maxime ipsam eum qui neque vel quisquam totam inventore facilis nisi ducimus
							aspernatur error sed ea, ad fugiat iste soluta? Iste tempore corrupti, iusto fuga, eaque qui tenetur quam
							reiciendis quos dolores consectetur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
							tempore dolorem eveniet pariatur, illo saepe dignissimos facere quibusdam numquam quo perspiciatis culpa
							veritatis aliquam mollitia, nihil officia est, praesentium sed.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContextMessage;
