import styles from "./DashboardLayout.module.css";
import logo from "../../images/logo.svg";
import userPorfile from "../../images/userProfile.png";
import TaskList from "./components/TasksList/TasksList";
import { Outlet } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import Footer from "./components/Footer/Footer";
const DashboardLayout = ({ tasksList }) => {
	return (
		<div className={styles.dashboardLayout}>
			<div className={styles.header}>
				<div>
					<img src={logo} alt="company logo" />
				</div>
				<Avatar avatarUrl={userPorfile} />
			</div>
			<main className={styles.container}>
				<TaskList tasksList={tasksList} />
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default DashboardLayout;
