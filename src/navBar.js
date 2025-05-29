import React from "react";
import styled from "styled-components";

const MyNavStyle = styled.div`
width: 100%;
  height: 70px;
  background-color: beige;
  display: flex;
  justify-content: space-between;
`

class NavBar extends React.Component{
    render(){
        return(
        <>
        <MyNavStyle>
           <div className="navbartitle" style={styles.title}>Title</div>

           <div className="cart">
            <img style={styles.cart} alt= "Cart Icon" src="https://cdn-icons-png.flaticon.com/128/12718/12718415.png"/>
            <span>Number</span>
           </div>
        </MyNavStyle>
        </>
        )
    }
}

const styles = {
    title:{
        fontSize:30,
        color: "black",
        
    },
    cart:{
        marginTop:"30px",
        width: "35px",
        height : "35px",
    }
}

export default NavBar;