import ContextTab from "../components/ContextTab/ContextTab";
import styles from "../BusinessContext.module.css";
import ContextList from "../components/ContextsList/ContextList";
import ContextBody from "../components/ContextBody/ContextBody";
import { useContext } from "react";
import TaskContext from "../../../context/TaskContext";
import breadcrumbIcon from "../../../images/breadcrumbIcon.svg";
import { useParams } from "react-router-dom";
const BusinessContext = () => {
	const { activeContext, tasksData } = useContext(TaskContext);

	const pathname = useParams();
	const prevActiveTaskBusinessContextId = tasksData.find(task => task.id === +pathname.taskId).lastActiveBusinessCtx;
	const activeTaskBusinessContextList = tasksData.find(task => task.id === +pathname.taskId).businessCtx;

	return (
		<div className={styles.businessCtx}>
			<ContextTab breadcrumbsList={[{ id: 0, title: "business context", icon: breadcrumbIcon }]} />
			<div className={styles.wrapper}>
				<ContextList
					activeContext={activeContext}
					activeTaskBusinessContextList={activeTaskBusinessContextList}
					prevActiveTaskBusinessContextId={prevActiveTaskBusinessContextId}
				/>
				<ContextBody
					title={activeContext.title}
					avatar={activeContext.avatar}
					author={activeContext.author}
					createdAt={activeContext.createdAt}
					hour={activeContext.hour}
					content={activeContext.content}
				/>
			</div>
		</div>
	);
};

export default BusinessContext;
