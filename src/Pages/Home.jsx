import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div className="Test Flex">
          <article className="Test__item">
            <NavLink to="/hamilton/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/825/825590.png"
                alt="Anxiety Icon"
              />
              <h2>Hamilton Anxiety Rating Scale, HARS</h2>
            </NavLink>
          </article>
        </div>
    </React.Fragment>
  );
};

export default Home;