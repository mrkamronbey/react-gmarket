import * as React from "react";
import "./Feed.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import feed from "../../assets/feed.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import images from "../../assets/images.png";
import { useRef } from "react";

function Feed({ open }) {
  const btn1 = useRef();
  const btn2 = useRef();

  return (
    <>
      <div
        className="c-feed-big-box"
        style={{
          ...(open && {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }),
        }}
      >
        <Card
          sx={{
            ...(open && {
              width: "70.2%",
              height: "300px",
              borderRadius: "10px",
              boxShadow: "none",
              background: "none",
            }),
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{ maxWidth: "100%" }}
              component="img"
              height="200"
              image={feed}
              alt="green iguana"
            />
            <CardContent
              sx={{
                ...(open && { boxShadow: "none" }),
                background: "#ECEFF3",
                padding: " 30px 15px",
                border: "1px solid #D0D3DC",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                <div
                  className="c-card-info-box"
                  style={{
                    ...(open && { display: "flex", alignItems: "center" }),
                  }}
                >
                  <img className="c-position-img" src={images} alt="image" />
                  <h2
                    style={{
                      ...(open && { fontSize: "18px", width: "250px" }),
                    }}
                  >
                    Wallmart store
                  </h2>
                  <span
                    className="c-circle c-circle-margin"
                    style={{ ...(open && { display: "none" }) }}
                  ></span>
                  <a
                    href="#"
                    className="c-card-link"
                    style={{ ...(open && { width: "200px", margin: 0 }) }}
                  >
                    <img src={image1} alt="image" />
                    <span style={{ ...(open && { fontSize: "12px" }) }}>
                      Store info
                    </span>
                  </a>
                  <span
                    className="c-circle"
                    style={{ ...(open && { display: "none" }) }}
                  ></span>
                  <a
                    href="#"
                    className="c-card-link"
                    style={{
                      ...(open && { width: "300px", margin: "0 10px" }),
                    }}
                  >
                    <img src={image2} alt="image" />
                    <span>Store delivery time</span>
                  </a>
                  <span
                    className="c-circle"
                    style={{ ...(open && { display: "none" }) }}
                  ></span>
                  <a href="#" className="c-card-link">
                    <img src={image3} alt="image" />
                    <span>Seved</span>
                  </a>

                  <p className="c-star-text">
                    <i class="bx bxs-star"></i>
                    <span>4.5</span>
                  </p>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <div
          className="c-shop-box"
          style={{
            ...(open && {
              width: "135px",
              height: "288px",
              marginTop: "-15px",
              marginLeft: "10px",
            }),
          }}
        >
          <Button
            ref={btn1}
            sx={{ backgroundColor: "#2E3456" }}
            onClick={() => {
              btn2.current.style.background = "white";
              btn1.current.style.background = "#2E3456";
            }}
            className="c-img-box"
          >
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 18V20H1V18H2V11.242C1.38437 10.8311 0.879713 10.2745 0.53082 9.62176C0.181927 8.96899 -0.000407734 8.24017 6.84612e-07 7.5C6.84612e-07 6.673 0.224001 5.876 0.633001 5.197L3.345 0.5C3.43277 0.347985 3.559 0.221749 3.71101 0.133981C3.86303 0.0462129 4.03547 4.45922e-06 4.211 0H17.79C17.9655 4.45922e-06 18.138 0.0462129 18.29 0.133981C18.442 0.221749 18.5682 0.347985 18.656 0.5L21.358 5.182C21.9546 6.17287 22.1463 7.35553 21.8934 8.48414C21.6405 9.61275 20.9624 10.6005 20 11.242V18H21ZM4.789 2L2.356 6.213C2.11958 6.79714 2.11248 7.44903 2.33613 8.03818C2.55978 8.62733 2.99768 9.11029 3.56218 9.39039C4.12668 9.6705 4.77614 9.72708 5.38058 9.54882C5.98502 9.37055 6.49984 8.9706 6.822 8.429C7.157 7.592 8.342 7.592 8.678 8.429C8.8633 8.89342 9.1836 9.2916 9.59753 9.5721C10.0115 9.85261 10.5 10.0025 11 10.0025C11.5 10.0025 11.9885 9.85261 12.4025 9.5721C12.8164 9.2916 13.1367 8.89342 13.322 8.429C13.657 7.592 14.842 7.592 15.178 8.429C15.3078 8.74845 15.5022 9.0376 15.7491 9.27828C15.996 9.51895 16.2901 9.70595 16.6127 9.82752C16.9354 9.94909 17.2797 10.0026 17.6241 9.98468C17.9684 9.96677 18.3053 9.87782 18.6136 9.72343C18.9219 9.56903 19.1949 9.35253 19.4155 9.08753C19.6361 8.82253 19.7995 8.51477 19.8955 8.18357C19.9914 7.85238 20.0178 7.50493 19.973 7.16305C19.9281 6.82118 19.8131 6.49227 19.635 6.197L17.21 2H4.79H4.789Z"
                fill="#ECEFF3"
              />
            </svg>
            <p>Shop</p>
          </Button>
          <Button
            ref={btn2}
            onClick={() => {
              btn2.current.style.background = "#2E3456";
              btn1.current.style.background = "white ";
            }}
            className="c-info-box "
          >
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0.666672V27.3333H21.3333V16.6667H17.3333V7.33334C17.3333 5.56523 18.0357 3.86954 19.286 2.61929C20.5362 1.36905 22.2319 0.666672 24 0.666672ZM8 16.5333V27.3333H5.33333V16.5333C3.82774 16.2255 2.47466 15.4072 1.50286 14.2167C0.531063 13.0263 0.000188087 11.5367 0 10V2.00001H2.66667V11.3333H5.33333V2.00001H8V11.3333H10.6667V2.00001H13.3333V10C13.3331 11.5367 12.8023 13.0263 11.8305 14.2167C10.8587 15.4072 9.50559 16.2255 8 16.5333Z"
                fill="#ECEFF3"
              />
            </svg>
            <p>Recipes</p>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Feed;
