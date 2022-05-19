import "./Store.css";
import React from "react";
import Feed from "../../components/feed/Feed";
import TabComp from '../../components/TabComp/TabComp'
import Slider from '../../components/slider/Slider'
function Store({open}) {
  return (
    <div>
      <section className="store">
        <div className="container" style={{ ...(open && { width: '1330px' }) }}>
          <Feed open={open} />
          <Slider open={open} />
          <TabComp open={open} />
        </div>
      </section>
    </div>
  );
}
export default Store;
