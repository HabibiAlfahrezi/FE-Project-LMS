import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
	return (
		<main>
			<div className="flex gap-8">
				<Sidebar />
				<Header />
				<Sidebar />
			</div>
		</main>
	);
};

export default Dashboard;
