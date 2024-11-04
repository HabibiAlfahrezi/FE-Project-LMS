import { TiMediaPlayOutline } from "react-icons/ti";
import star from "../assets/star.png";
import MiniCard from "../components/MiniCard";
import profile from "../assets/friends.jpeg";
import thumbnail from "../assets/thumbnail.jpg";
import Card from "../components/Card";
const Dashboard = () => {
	const cardData = {
		category: "Frontend",
		title: "Beginner’s Guide To Becoming A Professional Frontend Developer",
		name: "Prashant Kumar Singh",
		role: "Software Developer",
		profile: profile,
		image: thumbnail,
	};

	return (
		<>
			<section className="mb-6">
				<div className="bg-[#702DFF] text-white rounded-[20px] p-6 relative">
					<p className="uppercase mb-4">Online Course</p>
					<h3 className="font-semibold text-2xl mb-6">
						Sharpen Your Skills With <br className="hidden md:block" />
						Professional Online Courses
					</h3>
					<button className="bg-[#202020] px-5 py-3 rounded-full flex items-center justify-center gap-4 font-medium">
						Join Now
						<div className="bg-white rounded-full text-xl p-1 ">
							<TiMediaPlayOutline className="text-black bg-transparent rounded-full" />
						</div>
					</button>
					<img src={star} alt="" className="absolute right-28 top-16" />
					<img
						src={star}
						alt=""
						className="absolute right-8 bottom-4 opacity-90"
					/>
					<img
						src={star}
						alt=""
						className="absolute right-16 -top-8 opacity-45"
					/>
					<img
						src={star}
						alt=""
						className="absolute right-44 scale-150 -bottom-8 opacity-60"
					/>
					<img
						src={star}
						alt=""
						className="absolute right-44 scale-50 top-8 opacity-80"
					/>
				</div>
			</section>

			<section className="mb-6">
				<div className="flex justify-center gap-4">
					<MiniCard watched="2/8 Watched" title="Product Design" />
					<MiniCard watched="2/8 Watched" title="Product Design" />
					<MiniCard watched="2/8 Watched" title="Product Design" />
					<MiniCard watched="2/8 Watched" title="Product Design" />
				</div>
			</section>

			<section>
				<h3 className="font-medium mb-5">Continue watching</h3>
				<div className="grid lg:grid-cols-3">
					<Card
						category={cardData.category}
						title={cardData.title}
						friends={cardData.profile}
						name={cardData.name}
						job={cardData.role}
						thumbnail={cardData.image}
					/>
					<Card
						category={cardData.category}
						title={cardData.title}
						friends={cardData.profile}
						name={cardData.name}
						job={cardData.role}
						thumbnail={cardData.image}
					/>
					<Card
						category={cardData.category}
						title={cardData.title}
						friends={cardData.profile}
						name={cardData.name}
						job={cardData.role}
						thumbnail={cardData.image}
					/>
				</div>
			</section>
		</>
	);
};

export default Dashboard;
