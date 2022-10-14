import styles from "./BasePageLayout.module.css";
import logo from "../../images/logo.svg";
import userPorfile from "../../images/userProfile.svg";
const BasePageLayout = ({ children }) => {
	return (
		<div className={styles.baseLayout}>
			<header className={styles.header}>
				<div>
					<img src={logo} alt="company logo" />
				</div>
				<div>
					<img src={userPorfile} alt="user avatar" />
				</div>
			</header>
			<div className={styles.container}>{children}</div>
		</div>
	);
};

export default BasePageLayout;
