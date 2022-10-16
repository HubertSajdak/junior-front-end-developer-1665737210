import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { TaskProvider } from "./context/TaskContext";
import BusinessContext from "./features/BusinessContext/views/BusinessContext";
import DashboardLayoutWrapper from "./wrappers/DashboardLayourWrapper/DashboardLayoutWrapper";

function App() {
	return (
		<TaskProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<DashboardLayoutWrapper />}>
						<Route path="/:taskId" element={<BusinessContext />} />
						<Route path="/" element={<Navigate to="/0" />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</TaskProvider>
	);
}

export default App;
