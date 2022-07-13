import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {

    static defaultProps={          //// default props which dont need any call
        country:"in",
        category:"general",
        
    }                               
    constructor(){                         ///// to make state,  its like usestate in class component
                                          ////// this.state work as useState variable
        super();                           //// super is mandatory in constructor
        this.state={
            articles: [],       ////// initailizing article varaible by 4 for handling 0 value of article
            loading:false,
            totalResults:4,       //// for handling 0 value of article
            page:1
        }
    }       
  async componentDidMount(){                       ////  for fetching api and set the state we use componentDidMount

    let api=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=23ffa2f720f44f0cb8edbc2b9701b38c&page=${this.state.page}`;
     this.setState({loading:true});
    let data= await fetch(api);
    data=await data.json();
    this.setState({loading:false})
    this.setState({articles:data.articles})       //// seting value in this.state.articles
    this.setState({totalResults:data.totalResults})
    this.setState({page: this.state.page+1})
    
    console.log("Initial".concat(this.state.articles.length));
  
  }
  fetchMoreData = async () => {
    let api=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=23ffa2f720f44f0cb8edbc2b9701b38c&page=${this.state.page}`;
    let data= await fetch(api);    ///// await lagana jaruri h jason ko call karne k liye
    data= await data.json()      ///// await lagana jaruri h jason ko call karne k liye
    this.setState({articles:this.state.articles.concat(data.articles)})       //// seting value in this.state.articles
    this.setState({totalResults:data.totalResults})
    this.setState({page: this.state.page+1})
    console.log("fetch".concat(this.state.articles.length));
  };
  
  render() {
    return (
      
      <div className="container" >
      <h1 className='text-center'style={{margin:"25px 0px"}}> Top headlines</h1>
                                                 {/*for amkin loding when page load without infinity scroll*/} 
      <InfiniteScroll 
      dataLength={this.state.articles.length} ///for handling 0 value of article
      next={this.fetchMoreData}
      hasMore={this.state.articles.length<this.state.totalResults}    ////for handling 0 value of article and totalresults
      loader={<Spinner/>} >
        <div className="container">
        <div className="row">
        {this.state.articles.map((element=>{
               return <div className="col-md-4" key={Math.random()}>
                <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage?element.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} learnMore={element.url} category={this.props.category} author={element.source.name}/>
                </div>
                }))}
        </div>
        </div>
        </InfiniteScroll>
      </div>
      

    )
  }
}

export default News