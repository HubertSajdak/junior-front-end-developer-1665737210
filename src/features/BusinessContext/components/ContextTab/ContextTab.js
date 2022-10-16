import styles from "./ContextTab.module.css";
const ContextTab = ({ breadcrumbsList }) => {
	return (
		<div className={styles.contextTab}>
			<div className={styles.breadcrumbs}>
				{breadcrumbsList.map(breadcrumb => {
					return (
						<div key={breadcrumb.id} className={styles.breadcrumb}>
							<div className={styles.icon}>
								<img src={breadcrumb.icon} alt="" />
							</div>
							<div className="title">{breadcrumb.title}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ContextTab;
