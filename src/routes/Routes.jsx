import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import BrowseJobs from "../pages/BrowseJobs";
import JobDetails from "../pages/JobDetails";
import CraftJob from "../pages/CraftJob";
import BrowseCategories from "../pages/BrowseCategories";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/signup",
				Component: SignUpPage,
			},
			{
				path: "/login",
				Component: LoginPage,
			},
			{
				path: "/categories",
				Component: BrowseCategories,
				loader: () => fetch("http://localhost:5100/categories"),
			},
			{
				path: "/jobs",
				Component: BrowseJobs,
				loader: () => fetch("http://localhost:5100/jobs"),
			},
			{
				path: "/jobs/details/:id",
				Component: JobDetails,
				loader: ({ params }) => fetch(`http://localhost:5100/jobs/${params.id}`),
			},
			{
				path: "/jobs/craft",
				Component: CraftJob,
				loader: () => fetch(`http://localhost:5100/jobs/craft`),
			},
		],
	},
]);

export default router;
