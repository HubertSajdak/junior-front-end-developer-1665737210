import styles from "../TaskList.module.css";
import { tasksData } from "../../../utils/tasksData";
import Task from "../components/Task/Task";
import TaskContext from "../../../context/TaskContext";
import { useContext } from "react";
const TaskList = () => {
	const { activeTaskHandler } = useContext(TaskContext);

	return (
		<div className={styles.taskList}>
			<header className={styles.header}>
				<p className={styles.title}>your tasks</p>
			</header>
			<div className={styles.content}>
				{tasksData.map(item => {
					return (
						<Task
							key={item.id}
							id={item.id}
							title={item.taskTitle}
							taskStatus={item.taskStatus}
							onClick={activeTaskHandler}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default TaskList;
