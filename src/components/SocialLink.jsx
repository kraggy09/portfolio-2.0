import PropTypes from "prop-types";

const SocialLink = ({ href, label, Icon, colorScheme }) => {
  return (
    <a
      href={href}
      className={`border m-auto lg:p-12 md:p-8 p-5 sm:p-6 xl:p-3 rounded-3xl ${colorScheme.border} ${colorScheme.bg} ${colorScheme.bgopacity} ${colorScheme.text}`}
      aria-label={label}
    >
      <Icon className="w-6 h-6  md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-8 xl:h-10" />
    </a>
  );
};

// Define prop types for the component
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired, // Icon should be a React component
  colorScheme: PropTypes.shape({
    border: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    bgopacity: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default SocialLink;
