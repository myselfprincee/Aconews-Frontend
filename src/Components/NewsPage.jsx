import NewsCard from './NewsCard';
import PropTypes from 'prop-types';

const NewsPage = ({ articles }) => {
    // Limit to the first 9 articles
    const limitedArticles = articles?.slice(0, 9);

    return (
        <div className="grid px-4 sm:grid-cols-2 gap-4">
            {limitedArticles?.map((article, index) => (
                <div
                    key={index}
                    className={` ${index === 0 ? 'row-span-2' : ''}`}
                >
                    <NewsCard
                        title={article.title}
                        description={article.description}
                        content={article.content}
                        image={article.image}
                        url={article.url}
                        source={article.source}
                        width={index === 0 ? 'w-full h-[300px] object-cover' : 'w-full sm:w-[10rem]'}
                        flexStyle={index === 0 ? 'flex flex-col' : 'flex flex-col sm:flex-row'}
                        showContent={index === 0}
                        showDescription={index !== 0}
                    />
                </div>
            ))}
        </div>
    );
}

NewsPage.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            image: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ),
};

export default NewsPage;
