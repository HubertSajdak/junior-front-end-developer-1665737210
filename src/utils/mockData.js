export const mockedData = [
	{
		id: 0,
		taskTitle: "Application Setup",
		taskStatus: "completed",
		businessCtx: [],
	},
	{
		id: 1,
		taskTitle: "Statuc Books List",
		taskStatus: "completed",
		businessCtx: [],
	},
	{
		id: 2,
		taskTitle: "Administration Panel",
		taskStatus: "completed",
		businessCtx: [],
	},
	{
		id: 3,
		taskTitle: "Connect Admin with Frontend",
		taskStatus: "active",
		businessCtx: [
			{
				id: 0,
				sender: "Olga Nelson",
				date: "dec 17",
				title: "New sprint, tasks and intro information.",
				message:
					"Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
				ctxStatus: "new",
			},
			{
				id: 1,
				sender: "Kristen Aniston",
				date: "dec 17",
				title: "Application has been accepted",
				message:
					"Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
				ctxStatus: "active",
			},
			{
				id: 2,
				sender: "Olga Nelson",
				date: "dec 17",
				title: "New sprint, tasks and intro information.",
				message:
					"Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
				ctxStatus: "read",
			},
		],
	},
	{
		id: 4,
		taskTitle: "Book Review Feature",
		taskStatus: "blocked",
		businessCtx: [],
	},
];
