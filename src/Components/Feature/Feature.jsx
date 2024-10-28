import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div className="flex items-center gap-3">
            <FaCheckCircle className="text-green-600"></FaCheckCircle>
            {feature}
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
    }

export default Feature;