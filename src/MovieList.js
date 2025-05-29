import React from "react";
import MovieCard from "./MovieCard.js";


class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movieCardList: [
        {
          mtitle: "Avatar",
          Year: "2009",
          Rated: "PG-13",
          Released: "18 Dec 2009",
          Runtime: "162 min",
          mplot: "Action, Adventure, Fantasy",
          Director: "James Cameron",
          Writer: "James Cameron",
          Actors:
            "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
          Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
          Language: "English, Spanish",
          Country: "USA, UK",
          Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
          Poster:
            "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
          Metascore: "83",
          mrating: "7.9",
          imdbVotes: "890,617",
          imdbID: "tt0499549",
          Type: "movie",
          Response: "True",
          mstars: 5,
          Images: [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          ],
        },
        {
          mtitle: "I Am Legend",
          Year: "2007",
          Rated: "PG-13",
          Released: "14 Dec 2007",
          Runtime: "101 min",
          mplot: "Drama, Horror, Sci-Fi",
          Director: "Francis Lawrence",
          Writer:
            "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
          Actors:
            "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
          Plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
          Language: "English",
          Country: "USA",
          Awards: "9 wins & 21 nominations.",
          Poster:
            "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
          Metascore: "65",
          mrating: "7.2",
          imdbVotes: "533,874",
          imdbID: "tt0480249",
          Type: "movie",
          Response: "True",
          mstars: 4,
          Images: [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg",
          ],
        },
        {
          mtitle: "300",
          Year: "2006",
          Rated: "R",
          Released: "09 Mar 2007",
          Runtime: "117 min",
          mplot: "Action, Drama, Fantasy",
          Director: "Zack Snyder",
          Writer:
            "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
          Actors: "Gerard Butler, Lena Headey, Dominic West, David Wenham",
          Plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
          Language: "English",
          Country: "USA",
          Awards: "16 wins & 42 nominations.",
          Poster:
            "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
          Metascore: "52",
          mrating: "7.7",
          imdbVotes: "611,046",
          imdbID: "tt0416449",
          Type: "movie",
          Response: "True",
          mstars: 4,
          Images: [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg",
          ],
        },
        {
          mtitle: "The Avengers",
          Year: "2012",
          Rated: "PG-13",
          Released: "04 May 2012",
          Runtime: "143 min",
          mplot: "Action, Sci-Fi, Thriller",
          Director: "Joss Whedon",
          Writer:
            "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
          Actors:
            "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
          Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
          Language: "English, Russian",
          Country: "USA",
          Awards: "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
          Poster: "https://m.media-amazon.com/images/I/81KJ-sK0YpS.jpg",
          Metascore: "69",
          mrating: "8.1",
          imdbVotes: "1,003,301",
          imdbID: "tt0848228",
          Type: "movie",
          Response: "True",
          mstars: 4,
          Images: [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          ],
        },
        {
          mtitle: "The Wolf of Wall Street",
          Year: "2013",
          Rated: "R",
          Released: "25 Dec 2013",
          Runtime: "180 min",
          mplot: "Biography, Comedy, Crime",
          Director: "Martin Scorsese",
          Writer: "Terence Winter (screenplay), Jordan Belfort (book)",
          Actors:
            "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
          Plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
          Language: "English, French",
          Country: "USA",
          Awards: "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
          Poster: "https://m.media-amazon.com/images/I/51wgJZOiS0L._AC_UF1000,1000_QL80_.jpg",
          Metascore: "75",
          mrating: "8.2",
          imdbVotes: "786,985",
          imdbID: "tt0993846",
          Type: "movie",
          Response: "True",
          mstars: 4.5,
          Images: [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg",
          ],
        },
        {
          mtitle: "Interstellar",
          Year: "2014",
          Rated: "PG-13",
          Released: "07 Nov 2014",
          Runtime: "169 min",
          mplot: "Adventure, Drama, Sci-Fi",
          Director: "Christopher Nolan",
          Writer: "Jonathan Nolan, Christopher Nolan",
          Actors:
            "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
          Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          Language: "English",
          Country: "USA, UK",
          Awards: "Won 1 Oscar. Another 39 wins & 134 nominations.",
          Poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFs2iZuLY71G9lqfyHu_HMTXpn2J618bcPLg&s",
          Metascore: "74",
          mrating: "8.6",
          imdbVotes: "937,412",
          imdbID: "tt0816692",
          Type: "movie",
          Response: "True",
          mstars: 3,
          Images: [
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          ],
        },
      ],
    };
  }

  render() {
    return (
      <>
        {/* <MovieCard
          titleProp={this.state.movieCardList[0].mtitle}
          plotProp={this.state.movieCardList[0].mplot}
          priceProp={this.state.movieCardList[0].mprice}
          ratingProp={this.state.movieCardList[0].mrating}
          starsProp={this.state.movieCardList[0].mstars}
          posterProp = {this.state.movieCardList[0].Poster}
        /> */}

        {this.state.movieCardList.map((movie, index) => {
          return (
            <MovieCard
              key={index}
              titleProp={movie.mtitle}
              plotProp={movie.mplot}
              priceProp={movie.mprice}
              ratingProp={movie.mrating}
              starsProp={movie.mstars}
              posterProp={movie.Poster}
            />
          );
        })}
      </>
    );
  }
}

MovieCard.defaultProps = {
  titleProp: "default title ",
  plotProp: "default plot",
  priceProp: "default price",
  ratingProp: "default rating",
  starsProp: "default stars",
  
};

export default MovieList;
