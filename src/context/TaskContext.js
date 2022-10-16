import { createContext, useState } from "react";

import { tasksData as initialTasksData } from "../utils/tasksData";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [tasksData, setTasksData] = useState(initialTasksData);
	const [currentTask, setCurrentTask] = useState(0);
	const [activeContext, setActiveContext] = useState(initialTasksData[currentTask].businessCtx[0]);

	const activeTaskHandler = taskId => {
		setCurrentTask(taskId);
	};
	const activeContextHandler = contextId => {
		setActiveContext(contextId);
	};

	return (
		<TaskContext.Provider
			value={{
				currentTask,
				activeTaskHandler,
				activeContext,
				activeContextHandler,
				tasksData,
				setTasksData,
			}}>
			{children}
		</TaskContext.Provider>
	);
};
export default TaskContext;
