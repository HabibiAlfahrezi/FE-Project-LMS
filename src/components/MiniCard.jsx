import PropTypes from "prop-types";
import { CiBellOn } from "react-icons/ci";
import { IoEllipsisVertical } from "react-icons/io5";
const MiniCard = ({ watched, title }) => {
	return (
		<div className="flex justify-between items-center gap-6 bg-white rounded-md shadow-md px-6 py-4">
			<div className="flex items-center gap-4">
				<div className="p-2 bg-[#702DFF] rounded-full">
					<CiBellOn className="text-2xl text-white" />
				</div>
				<div>
					<p className="text-sm text-[#5F5F5F]">{watched}</p>
					<p className="text-sm font-semibold">{title}</p>
				</div>
			</div>
			<IoEllipsisVertical className="text-2xl" />
		</div>
	);
};

MiniCard.propTypes = {
	watched: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};


export default MiniCard;
