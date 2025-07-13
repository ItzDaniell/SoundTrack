import PropTypes from "prop-types";

const Button = ({
  type = "button",
  className = "",
  onClick,
  disabled = false,
  children,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 text-black rounded border-1 border-solid cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
