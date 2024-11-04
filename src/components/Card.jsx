import PropTypes from "prop-types";

const Card = ({category, title, friends, job, thumbnail, name}) => {
    console.log("Terpanggii Cik");
    
	return (
		<div className="p-4 bg-white">
			<img src={thumbnail} alt="" className="rounded-xl h-32 w-full mb-2" />
			<div className="flex mb-4">
				<div className="bg-gray-300 px-4 py-1 rounded-full">
					<p className="uppercase text-xs">{category}</p>
				</div>
			</div>
			<p className="font-medium text-base">
				{title}
			</p>

			<div className="relative my-2">
				<div className="h-2 w-full rounded-full bg-[#D9D9D9]"></div>
				<div className="h-2 w-1/2 absolute top-0 z-10 rounded-full bg-[#702DFF]"></div>
			</div>

			<div className="flex items-center gap-2">
				<img src={friends} alt="" className="w-8 h-8 rounded-full" />
				<div className="text-sm">
					<h4>{name}</h4>
					<p className="text-[9px]">{job}</p>
				</div>
			</div>
		</div>
	);
};


Card.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    friends: PropTypes.string.isRequired,
    thumbnail: PropTypes.any,
    job: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Card;
