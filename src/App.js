import "./App.css";
import TaskList from "./features/TaskList/views/TaskList";
import BasePageLayout from "./layouts/BasePageLayout/BasePageLayout";

function App() {
	return (
		<main className="app">
			<BasePageLayout>
				<TaskList />
			</BasePageLayout>
		</main>
	);
}

export default App;
