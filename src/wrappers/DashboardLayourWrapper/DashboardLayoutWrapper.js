import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import { useContext } from "react";
import TaskContext from "../../context/TaskContext";
const DashboardLayoutWrapper = ({ children }) => {
	const { tasksData } = useContext(TaskContext);

	return <DashboardLayout tasksList={tasksData}>{children}</DashboardLayout>;
};

export default DashboardLayoutWrapper;
