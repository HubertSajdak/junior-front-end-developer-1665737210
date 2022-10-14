import styles from "./Appbar.module.css";
import breadcrumbIcon from "../../../../images/breadcrumbIcon.png";
const Navbar = ({ breadcrumbTitle }) => {
	return (
		<nav className={styles.appbar}>
			<div className={styles.breadcrumbs}>
				<div className={styles.icon}>
					<img src={breadcrumbIcon} alt="" />
				</div>
				<div className="title">{breadcrumbTitle}</div>
			</div>
		</nav>
	);
};

export default Navbar;
