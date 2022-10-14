import "./App.css";
import BusinessContext from "./features/BusinessContext/views/BusinessContext";
import TaskList from "./features/TaskList/views/TaskList";
import BasePageLayout from "./layouts/BasePageLayout/BasePageLayout";

function App() {
	return (
		<div className="App">
			<BasePageLayout>
				<TaskList />
				<BusinessContext />
			</BasePageLayout>
		</div>
	);
}

export default App;
