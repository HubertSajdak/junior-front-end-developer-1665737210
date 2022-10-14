import styles from "../TaskList.module.css";
import { mockedData } from "../../../utils/mockData";
import Task from "../components/Task/Task";
const TaskList = () => {
	return (
		<div className={styles.taskList}>
			<header className={styles.header}>
				<p className={styles.title}>your tasks</p>
			</header>
			<div className={styles.content}>
				{mockedData.map(item => {
					return <Task key={item.id} title={item.taskTitle} taskStatus={item.taskStatus} />;
				})}
			</div>
		</div>
	);
};

export default TaskList;
