import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
function App() {
	return (
		<section className="bg-[#f8f8f9]">
			<div className="flex gap-8">
				<Sidebar />

				<main className="w-full">
					<Header />
					<Outlet />
				</main>
				<Sidebar />
			</div>
		</section>
	);
}

export default App;
