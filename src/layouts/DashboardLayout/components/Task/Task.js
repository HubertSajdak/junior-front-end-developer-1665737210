import styles from "./Task.module.css";
import progressIcon from "../../../../images/progressIcon.svg";
import completedIcon from "../../../../images/completedIcon.svg";
import blockedIcon from "../../../../images/blockedIcon.svg";
import { NavLink } from "react-router-dom";
const Task = ({ id, title, taskStatus }) => {
	return (
		<NavLink
			to={`/${id}`}
			className={({ isActive }) => {
				return isActive
					? `${styles.task} + ${styles.active}`
					: taskStatus === "blocked"
					? styles.taskBlocked
					: styles.task;
			}}>
			<div className={styles.icon}>
				{taskStatus === "completed" && <img src={completedIcon} alt="task completed" />}
				{taskStatus === "active" && <img src={progressIcon} alt="task in progress" />}
				{taskStatus === "blocked" && <img src={blockedIcon} alt="task blocked" />}
			</div>
			{title}
		</NavLink>
	);
};

export default Task;
