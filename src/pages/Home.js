import React from "react";
import NavBar from "../components/NavBar";

import styles from "../styles/Home.module.css";

import { Link } from "react-router-dom";

const Home = ({ orderCount }) => {
  return (
    <div className={styles.container}>
      <NavBar orderCount={orderCount} />
      <div className={styles.header}>
        <h1>Welcome to the best climbing shop on the planet</h1>
        <h3>From beginners to experts, we have what you need</h3>
        <button>
          <Link to="/shopping-cart/shop">SHOP NOW</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
