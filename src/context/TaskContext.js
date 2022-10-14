import { createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [currentTask, setCurrentTask] = useState(0);
	const [currentContext, setCurrentContext] = useState(null);
	const activeTaskHandler = taskId => {
		setCurrentTask(taskId);
	};
	const activeContextHandler = contextId => {
		setCurrentContext(contextId);
	};

	return (
		<TaskContext.Provider value={{ activeTaskHandler, currentTask, currentContext, activeContextHandler }}>
			{children}
		</TaskContext.Provider>
	);
};
export default TaskContext;
