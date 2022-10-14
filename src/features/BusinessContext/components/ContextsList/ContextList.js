import React from "react";
import ContextItem from "../ContextItem/ContextItem";
import { useContext } from "react";
import TaskContext from "../../../../context/TaskContext";
import styles from "./ContextList.module.css";
const ContextList = ({ contextList }) => {
	const { currentTask, activeContextHandler } = useContext(TaskContext);

	return (
		<div className={styles.contextList}>
			{contextList[currentTask].businessCtx.map(item => {
				const contextDate = new Date(item.createdAt);
				return (
					<ContextItem
						key={item.id}
						id={item.id}
						title={item.title}
						avatar={item.avatar}
						author={item.author}
						content={item.content}
						createdAt={contextDate.toLocaleString("en-US", { day: "numeric", month: "short" })}
						ctxStatus={item.ctxStatus}
						onClick={activeContextHandler}
					/>
				);
			})}
		</div>
	);
};

export default ContextList;
