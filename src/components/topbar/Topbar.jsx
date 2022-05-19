import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import location from "../../assets/Vector.png";
import oclock from "../../assets/oclock.png";
import cart from "../../assets/cart.png";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Time from "../time/Time";

function Topbar({ open }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className="c-select-box"
        style={{ ...(!open && { margin: "0 20px", width: "400px" }) }}
      >
        <img src={location} alt="icon" />
        <select className="c-select">
          <option>2972 Westheimer Rd. Santa Ana</option>
          <option>2972 Westheimer Rd. Santa Ana2</option>
          <option>2972 Westheimer Rd. Santa Ana3</option>
          <option>2972 Westheimer Rd. Santa Ana4</option>
        </select>
      </div>
      <div
        className="c-input-search-box"
        style={{ ...(!open && { width: "400px", marginRight: "20px" }) }}
      >
        <i class="bx bx-search c-icon"></i>
        <input type="text" placeholder="Search products in Wallmart" />
        <IconButton aria-label="delete" className="c-input-btn">
          <i class="bx bx-slider-alt c-icon"></i>
        </IconButton>
      </div>
      <div
        className="c-offcan-box"
        style={{
          ...(!open && {
            marginRight: "20px",
            marginLeft: "0",
            width: "400px",
          }),
        }}
      >
        <Button
          onClick={handleShow}
          variant="contained"
          className="c-oclock-btn"
          sx={{ ...(!open && { width: "100%" }) }}
        >
          <img src={oclock} alt="icon" />
          <span>By 09:00 — 23:00</span>
        </Button>
      </div>
      <Button
        variant="contained"
        className="c-cart-btn"
        sx={{ ...(!open && { width: "180px" }) }}
      >
        <div style={{ ...(!open && { marginRight: "20px" }) }}>
          <img src={cart} alt="icon" />
        </div>
        <span>$230.80</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Delivery time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Time />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <i class="bx bx-x"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Topbar;
