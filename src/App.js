import "./App.css";
import { TaskProvider } from "./context/TaskContext";
import BusinessContext from "./features/BusinessContext/views/BusinessContext";
import TaskList from "./features/TaskList/views/TaskList";
import BasePageLayout from "./layouts/BasePageLayout/BasePageLayout";

function App() {
	return (
		<TaskProvider>
			<BasePageLayout>
				<TaskList />
				<BusinessContext />
			</BasePageLayout>
		</TaskProvider>
	);
}

export default App;
