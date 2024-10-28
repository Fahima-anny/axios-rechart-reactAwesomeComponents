import PropTypes from 'prop-types'; 

const Link = ({route}) => {
    return (
        <li className='px-16 py-2 text-xl hover:bg-pink-200'><a href={route.path}>{route.name}</a></li>
    );
};

Link.propTypes = {
route: PropTypes.object
}

export default Link;