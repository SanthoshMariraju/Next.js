
import styles from '../../styles/Feed.module.css';
import { useRouter } from 'next/router';
import { Topbar } from '../../components/topbar';

// grap pageNumber from URL
//grap artecles from API 
export const Feed =({pageNumber , articles}) => {
    const router = useRouter();
 console.log(pageNumber , articles )
    return (
        <>
            <div className="page-container">
                <Topbar />
            <div className={styles.main}>
        {articles.map((article ,index) => (
            <div key={index} className={styles.post}>
                <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                <p className={styles.desc}>{article.description}</p>
                {article.urlToImage && <img src={article.urlToImage} /> }
            </div>
        ))}
          </div>

          <div className={styles.paginator}>
          <div
            className={pageNumber === 1 ? styles.disabled : styles.active}
            onClick={() => {
              if (pageNumber > 1) {
                router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Previous Page
          </div>

          <div>#{pageNumber}</div>

          <div
            className={pageNumber === 5 ? styles.disabled : styles.active}
            onClick={() => {
              if (pageNumber < 5) {
                router.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Next Page
          </div>
        </div>

            </div>

        </>
    )
} 


export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;

    if(!pageNumber || pageNumber < 1 || pageNumber > 5){
        return {
            props : {
                articles : [],
                pageNumber: 1, 
            }
        }
    }


// fetch API NEWS with key
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
        {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
          },
    ).then(res => res.json());


const { articles } = apiResponse;

return {
    props : {
        articles,
        pageNumber: Number.parseInt(pageNumber)

    }
}
}

export default Feed;