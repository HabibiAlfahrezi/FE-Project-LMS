import {
	FaTachometerAlt,
	FaEnvelope,
	FaBook,
	FaClipboardList,
	FaUsers,
} from "react-icons/fa";
import { CiSettings, CiLogout  } from "react-icons/ci";
import logo from "../assets/logo.png";
import friends from "../assets/friends.jpeg";
const Sidebar = () => {
	const menuItems = [
		{ label: "Dashboard", href: "dashboard", icon: <FaTachometerAlt /> },
		{ label: "Inbox", href: "inbox", icon: <FaEnvelope /> },
		{ label: "Lesson", href: "lesson", icon: <FaBook /> },
		{ label: "Task", href: "task", icon: <FaClipboardList /> },
		{ label: "Group", href: "group", icon: <FaUsers /> },
	];

	return (
		<aside className="h-screen border border-black w-60 flex p-8">
			<div>
				<img src={logo} alt="Logo" />
				<div className="pt-12 pb-12 flex flex-col justify-between h-full">
					<div>
						<h4 className="mb-6 font-medium">OVERVIEW</h4>
						<ul className="flex flex-col gap-4">
							{menuItems.map((item, index) => (
								<li key={index} className="flex items-center font-medium gap-4">
									{item.icon}
									<p to={item.href}>{item.label}</p>
								</li>
							))}
						</ul>
						<h4 className="mt-12 mb-6 font-medium">FRIENDS</h4>
						<div className="flex items-center gap-2">
							<img src={friends} alt="" className="w-8 h-8 rounded-full" />
							<div className="text-sm">
								<h4>Prashant</h4>
								<p className="text-[9px]">Software Developer</p>
							</div>
						</div>
					</div>
					<div>
						<h4 className="mt-12 mb-6 font-medium">SETTINGS</h4>
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-2 font-semibold">
								<CiSettings className="text-2xl" />
								<p>Settings</p>
							</div>
							<div className="flex items-center gap-2 font-semibold">
								<CiLogout className="text-2xl" />
								<p>Logout</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
