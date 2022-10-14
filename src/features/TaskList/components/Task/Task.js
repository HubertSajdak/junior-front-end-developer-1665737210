import styles from "./Task.module.css";
import progressIcon from "../../../../images/progressIcon.svg";
import completedIcon from "../../../../images/completedIcon.svg";
import blockedIcon from "../../../../images/blockedIcon.svg";
const Task = ({ title, taskStatus }) => {
	return (
		<div className={styles.task}>
			<div className={styles.icon}>
				{taskStatus === "completed" && <img src={completedIcon} alt="task completed" />}
				{taskStatus === "active" && <img src={progressIcon} alt="task in progress" />}
				{taskStatus === "blocked" && <img src={blockedIcon} alt="task blocked" />}
			</div>
			<p className={styles.title}>{title}</p>
		</div>
	);
};

export default Task;
