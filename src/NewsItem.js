import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    return (
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-4 md:w-100px">
            <div className="card">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden md:w-100px">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={
                    this.props.imgUrl
                      // ? this.props.imgUrl
                      // : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                  }
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {this.props.category}{" "}
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                     {this.props.author}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {this.props.title}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {this.props.description}
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href={this.props.learnMore}
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
