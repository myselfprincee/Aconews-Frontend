import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsCard = ({ title, description,content, image, url, width, flexStyle, showContent, showDescription, source }) => {
  return (
    <div className={`flex ${flexStyle} gap-2 p-3 `}>
      <img
        className={`${width} object-cover`}
        src={image}
        alt="News image"
      />
      <div>
        <Link to={url}>
          <p className="font-[Morn-Regular] font-bold text-[20px] text-[#0865FE]">
            {title}
          </p>
        </Link>
        {showDescription && <p className="text-wrap font-[Morn-Regular] sm:text-[16px] text-gray-500">
          {description}
        </p>}

        {showContent && (
          <p className="text-wrap font-[Morn-Regular] sm:text-[16px] text-gray-500">
            {content}
          </p>
        )}

        <div className="text-sm text-gray-300 italic">
          Sourced from :
          <Link to={source.url}>
            {source.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.object,
  description: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.string,
  flexStyle: PropTypes.string,
  showContent: PropTypes.bool,
  showDescription: PropTypes.bool,
};

NewsCard.defaultProps = {
  width: 'w-full',
  flexStyle: 'flex flex-col',
  showContent: false,
  showDescription: true,
};

export default NewsCard;
