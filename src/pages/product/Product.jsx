import React from "react";
import tabData from "../../data";
import product1 from "../../assets/product1.png";
import foiz from "../../assets/foiz.png";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./Product.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Product({ open }) {
  return (
    <>
      <section className="product">
        <div className="container" style={{ ...(open && { width: "1330px" }) }}>
          <div className="c-tab-data-box">
            <div
              className="c-title-box"
              style={{
                ...(open && {
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }),
              }}
            >
              <h2 style={{ ...(open && { marginLeft: "250px" }) }}>
                All product
              </h2>
            </div>
            <ul
              className="c-tab-list"
              style={{ ...(open && { width: "82%", marginLeft: "246px" }) }}
            >
              {tabData.map((elem) => (
                <li
                  key={elem.id}
                  className="c-tab-item c-tab-itemx"
                  style={{
                    ...(open && { width: "215.5px", margin: "11px 0" }),
                  }}
                >
                  <div className="c-item-img-box">
                    <span
                      className="c-item-span"
                      style={{ ...(open && { width: "30px", height: "30px" }) }}
                    >
                      <img src={foiz} alt="icon" />
                    </span>
                    <img
                      style={{ ...(open && { width: "100px" }) }}
                      src={product1}
                      width="129"
                      height="130"
                      alt="image"
                    />
                    <Checkbox
                      sx={{ background: "transparent" }}
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                  </div>
                  <div className="c-item-info-box">
                    <h4>{elem.title}</h4>
                    <div className="c-item-price-box">
                      <p style={{ ...(open && { fontSize: "18px" }) }}>
                        ${elem.price}
                      </p>
                      <Button
                        className="c-data-btn"
                        sx={{ ...(open && { width: "30px", height: "30px" }) }}
                      >
                        <i class="bx bx-plus c-plus"></i>
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Product;