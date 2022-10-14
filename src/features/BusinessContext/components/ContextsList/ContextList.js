import React from "react";
import ContextItem from "../ContextItem/ContextItem";
import styles from "./ContextList.module.css";
const ContextList = ({ contextList, setActiveContext }) => {
	return (
		<div className={styles.contextList}>
			{contextList.map(contextItem => {
				if (contextItem.businessCtx.length === 0) {
					return null;
				} else {
					return contextItem.businessCtx.map(item => {
						const contextDate = new Date(item.createdAt.date);
						return (
							<ContextItem
								key={item.id}
								title={item.title}
								author={item.author}
								content={item.content}
								createdAt={contextDate.toLocaleString("en-US", { day: "numeric", month: "short" })}
								ctxStatus={item.ctxStatus}
							/>
						);
					});
				}
			})}
		</div>
	);
};

export default ContextList;
