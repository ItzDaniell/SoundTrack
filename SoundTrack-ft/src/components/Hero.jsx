import PropTypes from "prop-types";

const Hero = ({ image, customClass, alt }) => {
    return ( 
        <img src={image} alt={alt} className={`object-cover ${customClass}`} />
     );
}

Hero.propTypes = {
    image: PropTypes.string.isRequired,
    customClass: PropTypes.string,
    alt: PropTypes.string
};
 
export default Hero;