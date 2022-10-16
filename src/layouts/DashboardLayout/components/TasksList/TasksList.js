import styles from "./TasksList.module.css";
import Task from "../Task/Task";
const TaskList = ({ tasksList }) => {
	return (
		<div className={styles.taskList}>
			<header className={styles.header}>
				<p className={styles.title}>your tasks</p>
			</header>
			<ul className={styles.content}>
				{tasksList.map(item => {
					return <Task key={item.id} id={item.id} title={item.taskTitle} taskStatus={item.taskStatus} />;
				})}
			</ul>
		</div>
	);
};

export default TaskList;
