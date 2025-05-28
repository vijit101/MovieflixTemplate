import React from "react";

class MovieCard extends React.Component {
    
    constructor(){
        super();
        this.state = {
            title:"the Avengers",
            plot:"superheroes",
            price:199,
            rating:9.8,
            stars:0
        }



        this.addStars = this.addStars.bind(this);
    } 
  
    addStars(){
      this.setState(
        {stars : this.state.stars + 0.5}
      );
      console.log("Stars added");
    }
  render() {
    const {title , plot , price , rating , stars} = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://m.media-amazon.com/images/I/91hIN+dNYUL.jpg"
            />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                />
                <img
                  className="stars"
                  alt="stars"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />
                <img
                  className="str-btn"
                  alt="Increase"
                  src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                  onClick={this.addStars.bind(this)} // or instead use addStars = ()=>{} arrow function automatically binds fx() to its class
                />
                <span className="star-number">{stars}</span>
              </div>
              <button className="favourite-btn">Favourites</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
