import React from "react";
import MovieCard from "./MovieCard.js";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movieCardList: [
        {
          mtitle: "Avengers",
          mplot: "Superhero",
          mprice: 199,
          mrating: 9.2,
          mstars: 5,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <MovieCard
          titleProp={this.state.movieCardList[0].mtitle}
          plotProp={this.state.movieCardList[0].mplot}
          priceProp={this.state.movieCardList[0].mprice}
          ratingProp={this.state.movieCardList[0].mrating}
          starsProp = {this.state.movieCardList[0].mstars}
        />
      </>
    );
  }
}

export default MovieList;
