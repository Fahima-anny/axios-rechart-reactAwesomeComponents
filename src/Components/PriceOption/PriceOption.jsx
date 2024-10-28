import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name,price,features} = option ;
    return (
        <div className="space-y-5 bg-pink-200 p-6 rounded-xl my-10 flex flex-col ">
            <h2 className="text-center  font-bold">
            <span className="text-7xl">{price}</span>
            <span>/Month</span>
            </h2>
            <h4 className="text-3xl text-center font-bold text-pink-800">{name}</h4>
            <div className="space-y-2 flex-grow pl-5">
                {
                    features.map( (feature,idx) => <Feature 
                        key={idx} 
                        feature={feature}
                        ></Feature> )
                }
            </div>
            <button className="w-full bg-pink-800 text-white py-2 rounded-md hover:bg-pink-700 ">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
option: PropTypes.object
}

export default PriceOption;