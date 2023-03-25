import React,{useState,useEffect} from 'react'
import Card  from './Card'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'
import Spinner from './Spinner'

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const updateNews = async (country)=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=bc0a9b7b55984f7899cc8a1d2c5ab5ad&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    console.log(props.country)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

useEffect(()=>{
  updateNews(props.country);
},[props.country,props.mode])

const fetchMoreData = async () => {   
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bc0a9b7b55984f7899cc8a1d2c5ab5ad&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1) 
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData.articles)
  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)
};

  return (
    <>
    <h3 className='container my-3'>NEWSFeed - Top {props.country} {props.category} news</h3>
    {loading && <Spinner/>}
    <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} > 
    <div className="container my-3 justify-content-center">
      <div className="row">
      {articles.map((element) => {
        return <div className="col-md-4 my-3" key={element.url}>
        <Card mode={props.mode} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
        </div>
        })}
      </div>
      </div>
      </InfiniteScroll>
      </>
  )
}
// News.defaultProps = {
//   country: 'in',
//   pageSize: 8,
//   category: 'general',
// }

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News
