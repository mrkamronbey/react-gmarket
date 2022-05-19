import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./TabComp.css";
import tabData from "../../data";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";
import foiz from "../../assets/foiz.png";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabComp({ open }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          ...(open && {
            width: "83%",
            marginLeft: "235px",
          }),
        }}
        className="c-tab-big-box"
      >
        <Box sx={{ borderColor: "divider" }}>
          <Tabs
            sx={{
              ...(open && {
                display: "flex",
                justifyContent: "flex-end",
                width: "97.8%",
                marginLeft: "15px",
                transition: "0.5s",
              }),
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab className="c-tab-tabs" label="Pantrys" {...a11yProps(0)} />
            <Tab
              className="c-tab-tabs"
              label="Fruits and Vegetables"
              {...a11yProps(1)}
            />
            <Tab
              className="c-tab-tabs"
              label="Eggs and Dairys"
              {...a11yProps(2)}
            />
            <Tab className="c-tab-tabs" label="Frozens" {...a11yProps(3)} />
            <Tab className="c-tab-tabs" label="Beverange" {...a11yProps(4)} />
            <Tab className="c-tab-tabs" label="Snacks" {...a11yProps(5)} />
            <Tab className="c-tab-tabs" label="Households" {...a11yProps(6)} />
            <Tab className="c-tab-tabs" label="More" {...a11yProps(7)} />
          </Tabs>
        </Box>
        <TabPanel
          value={value}
          index={0}
          sx={{ ...(open && { width: "100%" }) }}
        >
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
              <h2 style={{ ...(open && { marginLeft: "20px" }) }}>Pantrys</h2>
              <Link className="c-data-link" to="/product">
                <span>See all</span>
                <i
                  class="bx bx-chevron-right"
                  style={{ ...(open && { marginRight: "1px" }) }}
                ></i>
              </Link>
            </div>
            <ul
              className="c-tab-list"
              style={{ ...(open && { marginLeft: "10px" }) }}
            >
              {tabData.slice(0, 5).map((elem) => (
                <li
                  key={elem.id}
                  className="c-tab-item"
                  style={{ ...(open && { width: "215px" }) }}
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
        </TabPanel>
        <TabPanel value={value} index={1}>
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
              <h2 style={{ ...(open && { marginLeft: "20px" }) }}>
                Fresh Fruit
              </h2>
              <Link className="c-data-link" to="/product">
                <span>See all</span>
                <i
                  class="bx bx-chevron-right"
                  style={{ ...(open && { marginRight: "1px" }) }}
                ></i>
              </Link>
            </div>
            <ul
              className="c-tab-list"
              style={{ ...(open && { marginLeft: "10px" }) }}
            >
                <li
                  className="c-tab-item"
                  style={{ ...(open && { width: "215px" }) }}
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
                    <h4>Calavo Hass Avocados</h4>
                    <div className="c-item-price-box">
                      <p style={{ ...(open && { fontSize: "18px" }) }}>
                      $5.99
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
                <li
                  className="c-tab-item"
                  style={{ ...(open && { width: "215px" }) }}
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
                      src={product2}
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
                    <h4>Lemons (Large) 8</h4>
                    <div className="c-item-price-box">
                      <p style={{ ...(open && { fontSize: "18px" }) }}>
                      $3.89
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
                <li
                  className="c-tab-item"
                  style={{ ...(open && { width: "215px" }) }}
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
                      src={product3}
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
                    <h4>Jumbo Cantaloupe</h4>
                    <div className="c-item-price-box">
                      <p style={{ ...(open && { fontSize: "18px" }) }}>
                      $10.5
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
                <li
                  className="c-tab-item"
                  style={{ ...(open && { width: "215px" }) }}
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
                      src={product4}
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
                    <h4>Zespri Kiwifruit 2 lb</h4>
                    <div className="c-item-price-box">
                      <p style={{ ...(open && { fontSize: "18px" }) }}>
                      $4.90
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
                <li
                  className="c-tab-item"
                  style={{ ...(open && { width: "215px" }) }}
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
                      src={product5}
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
                    <h4>Hass Large Avocado</h4>
                    <div className="c-item-price-box">
                      <p style={{ ...(open && { fontSize: "18px" }) }}>
                      $4.90
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
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
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
              <h2 style={{ ...(open && { marginLeft: "20px" }) }}>
                Eggs and Dairys
              </h2>
              <Link className="c-data-link" to="/product">
                <span>See all</span>
                <i
                  class="bx bx-chevron-right"
                  style={{ ...(open && { marginRight: "1px" }) }}
                ></i>
              </Link>
            </div>
            <ul
              className="c-tab-list"
              style={{ ...(open && { marginLeft: "10px" }) }}
            >
              {tabData.slice(0, 5).map((elem) => (
                <li
                  key={elem.id}
                  className="c-tab-item"
                  style={{ ...(open && { width: "215px" }) }}
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
        </TabPanel>
        <TabPanel value={value} index={3}>
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
              <h2 style={{ ...(open && { marginLeft: "20px" }) }}>Frozens</h2>
              <Link className="c-data-link" to="/product">
                <span>See all</span>
                <i
                  class="bx bx-chevron-right"
                  style={{ ...(open && { marginRight: "1px" }) }}
                ></i>
              </Link>
            </div>
            <ul
              className="c-tab-list"
              style={{ ...(open && { marginLeft: "10px" }) }}
            >
              {tabData.slice(0, 5).map((elem) => (
                <li
                  key={elem.id}
                  className="c-tab-item"
                  style={{ ...(open && { width: "215px" }) }}
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
        </TabPanel>
        <TabPanel value={value} index={4}>
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
              <h2 style={{ ...(open && { marginLeft: "20px" }) }}>Beverange</h2>
              <Link className="c-data-link" to="/product">
                <span>See all</span>
                <i
                  class="bx bx-chevron-right"
                  style={{ ...(open && { marginRight: "1px" }) }}
                ></i>
              </Link>
            </div>
            <ul
              className="c-tab-list"
              style={{ ...(open && { marginLeft: "10px" }) }}
            >
              {tabData.slice(0, 5).map((elem) => (
                <li
                  key={elem.id}
                  className="c-tab-item"
                  style={{ ...(open && { width: "215px" }) }}
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
        </TabPanel>
        <TabPanel value={value} index={5}>
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
              <h2 style={{ ...(open && { marginLeft: "20px" }) }}>Snacks</h2>
              <Link className="c-data-link" to="/product">
                <span>See all</span>
                <i
                  class="bx bx-chevron-right"
                  style={{ ...(open && { marginRight: "1px" }) }}
                ></i>
              </Link>
            </div>
            <ul
              className="c-tab-list"
              style={{ ...(open && { marginLeft: "10px" }) }}
            >
              {tabData.slice(0, 5).map((elem) => (
                <li
                  key={elem.id}
                  className="c-tab-item"
                  style={{ ...(open && { width: "215px" }) }}
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
        </TabPanel>
        <TabPanel value={value} index={6}>
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
              <h2 style={{ ...(open && { marginLeft: "20px" }) }}>
                Households
              </h2>
              <Link className="c-data-link" to="/product">
                <span>See all</span>
                <i
                  class="bx bx-chevron-right"
                  style={{ ...(open && { marginRight: "1px" }) }}
                ></i>
              </Link>
            </div>
            <ul
              className="c-tab-list"
              style={{ ...(open && { marginLeft: "10px" }) }}
            >
              {tabData.slice(0, 5).map((elem) => (
                <li
                  key={elem.id}
                  className="c-tab-item"
                  style={{ ...(open && { width: "215px" }) }}
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
        </TabPanel>
        <TabPanel value={value} index={7}>
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
              <h2 style={{ ...(open && { marginLeft: "20px" }) }}>
                Households
              </h2>
              <Link className="c-data-link" to="/product">
                <span>See all</span>
                <i
                  class="bx bx-chevron-right"
                  style={{ ...(open && { marginRight: "1px" }) }}
                ></i>
              </Link>
            </div>
            <ul
              className="c-tab-list"
              style={{ ...(open && { marginLeft: "10px" }) }}
            >
              {tabData.slice(0, 5).map((elem) => (
                <li
                  key={elem.id}
                  className="c-tab-item"
                  style={{ ...(open && { width: "215px" }) }}
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
        </TabPanel>
      </Box>
    </>
  );
}