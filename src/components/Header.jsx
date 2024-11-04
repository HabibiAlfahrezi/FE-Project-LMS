import { CiFilter, CiSearch } from "react-icons/ci";
const Header = () => {
	return (
		<header className="w-full py-8">
			<div className="flex items-center w-full gap-4">
				<div className="relative w-full">
					<CiSearch className="absolute top-1/2 text-2xl ml-4 -translate-y-1/2 text-gray-500 cursor-pointer"/>
					<input
						type="text"
						placeholder="Search your course here..."
						className="border border-[#CCCCCC] outline-none pl-12 p-4 w-full rounded-xl"
					/>
				</div>
				<div>
					<CiFilter className="text-3xl cursor-pointer"/>
				</div>
			</div>
		</header>
	);
};

export default Header;
