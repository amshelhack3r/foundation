import React from "react";
import "../App.css";
import { StyleSheet, css } from "aphrodite";

/**
 * This will contain:
 * Banner image(logo)
 * Name of the site
 * Slogan
 *
 */
const Banner = () => {
  return (
    <div className="mx-auto pt-5 mt-5 mb-5">
      <h1>
        <span className={css(styles.first)}>BISHOP </span>
        <span className={css(styles.last)}>MELIYIO</span>
      </h1>
      <h1 className="heading_foundation">
        <span className={css(styles.slogan)}>FOUNDATION</span>
      </h1>
      <hr className="style18" />
      <p className="slogan">
        for I was hungry. Thirsty,a stranger naked, sick, in prison and you came
        to me.
      </p>
    </div>
  );
};

//create styles
const styles = StyleSheet.create({
  slogan: {
    fontSize: 60
  },
  first: {
    color: "#3F51B5",
    fontSize: 80
  },
  last: {
    color: "#d50000",
    fontSize: 80
  }
});
export default Banner;
