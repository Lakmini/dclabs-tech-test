import React from "react";
import { Link } from "react-router-dom";
export const Tile = ({ url, category }) => {
  return (
    <article className="c-tile" style={{ width: "35%" }}>
      <div
        className="c-tile__content c-shine-context"
        style={{
          background: "linear-gradient(rgb(115, 173, 216), white)",
          padding: "20%",
        }}
      >
        <div
          className="c-tile__media"
          style={{ marginTop: "25px", textAlign: "center" }}
        >
          <img alt="Example image" className="c-tile__poster" src={url} />
        </div>

        <div
          className="c-tile__body"
          style={{ textAlign: "center", marginTop: "50px" }}
        >
          <p
            className="c-tile__title c-heading-delta"
            style={{ color: "black", fontWeight: "bold" }}
          >
            {category}
          </p>
          <Link to={`/collection/${category}`}>
            <button className="c-btn c-btn--primary c-btn--full u-margin-bottom">
              {"Get Started"}
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};
