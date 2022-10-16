import ContextItem from "../ContextItem/ContextItem";
import { useContext, useEffect } from "react";
import TaskContext from "../../../../context/TaskContext";
import styles from "./ContextList.module.css";
import { useParams } from "react-router-dom";
const ContextList = ({ activeContext, activeTaskBusinessContextList, prevActiveTaskBusinessContextId }) => {
	const { activeContextHandler, setTasksData } = useContext(TaskContext);
	const pathname = useParams();

	useEffect(() => {
		//automatically changes active context to previously read context by the user
		const prevActiveContext = activeTaskBusinessContextList.find(ctx => ctx.id === prevActiveTaskBusinessContextId);
		activeContextHandler({ ...prevActiveContext });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname.taskId]);

	const changeActiveContext = currentContextInfo => {
		//changing business context message status after user clicks on it
		setTasksData(prevState => {
			const updatedTasks = [...prevState];

			updatedTasks.map(task => {
				if (task.id === +pathname.taskId) {
					return task.businessCtx.map(context => {
						if (context.id === currentContextInfo.id) {
							return (context.ctxStatus = "read");
						}
						return context;
					});
				}
				return task;
			});

			//changing task's last read context by user
			updatedTasks.map(task => {
				if (task.id === +pathname.taskId) {
					return (task.lastActiveBusinessCtx = currentContextInfo.id);
				}
				return task;
			});
			return updatedTasks;
		});
		activeContextHandler(currentContextInfo);
	};

	return (
		<ul className={styles.contextList}>
			{activeTaskBusinessContextList.map(item => {
				return (
					<ContextItem
						key={item.id}
						id={item.id}
						title={item.title}
						avatar={item.avatar}
						author={item.author}
						content={item.content}
						createdAt={item.createdAt}
						hour={item.hour}
						ctxStatus={item.ctxStatus}
						onClick={changeActiveContext}
						isActive={activeContext && item.id === activeContext.id ? true : false}
					/>
				);
			})}
		</ul>
	);
};

export default ContextList;
