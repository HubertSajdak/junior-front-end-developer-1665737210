export const mockedData = [
	{
		id: 0,
		taskTitle: "Application Setup",
		taskStatus: "completed",
		businessCtx: [],
	},
	{
		id: 1,
		taskTitle: "Static Books List",
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
				author: "Olga Nelson",
				avatar: "https://randomuser.me/api/portraits/women/65.jpg",
				createdAt: {
					date: "2022-09-15",
					hour: "11:48",
				},
				title: "New sprint, tasks and intro information.",
				content:
					"Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
				ctxStatus: "new",
			},
			{
				id: 1,
				author: "Kirsten Aniston",
				avatar: "https://randomuser.me/api/portraits/women/29.jpg",
				createdAt: {
					date: "2022-10-05",
					hour: "11:48",
				},
				title: "Application has been accepted.",
				content:
					"Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
				ctxStatus: "active",
			},
			{
				id: 2,
				author: "Olga Nelson",
				avatar: "https://randomuser.me/api/portraits/women/65.jpg",
				createdAt: {
					date: "2022-10-05",
					hour: "11:48",
				},
				title: "New sprint, tasks and intro information.",
				content:
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
