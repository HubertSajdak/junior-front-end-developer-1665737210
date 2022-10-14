import Appbar from "../components/Appbar/Appbar";
import styles from "../BusinessContext.module.css";
import ContextList from "../components/ContextsList/ContextList";
import { tasksData } from "../../../utils/tasksData";
import ContextMessage from "../components/ContextMessage/ContextMessage";
import { useContext } from "react";
import TaskContext from "../../../context/TaskContext";
const BusinessContext = () => {
	const { currentContext } = useContext(TaskContext);
	return (
		<div className={styles.businessCtx}>
			<Appbar breadcrumbTitle="business context" />
			<div className={styles.wrapper}>
				<ContextList contextList={tasksData} />
				{currentContext && (
					<ContextMessage
						title={currentContext.title}
						avatar={currentContext.BusinessContextavatar}
						author={currentContext.author}
						createdAt={currentContext.createdAt}
						hour={currentContext.hour}
						content={currentContext.content}
					/>
				)}
			</div>
		</div>
	);
};

export default BusinessContext;
