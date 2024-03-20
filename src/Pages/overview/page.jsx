import Filter from "../../Components/OverView/Filter";
import Header from "../../Components/OverView/Header";
import Overview from "../../Components/OverView/Overview";
import { useState } from "react";
import Succeed from "../../Components/OverView/Succeed";
import Failed from "../../Components/OverView/Failed";


export default function OverViewPage() {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <main>
      <Overview />
      <Filter setActiveLink={setActiveLink} />
      <Header />
      <div className={` ${activeLink === 0 ? "block " : "hidden"} `}>
        <Succeed />
      </div>
      <div className={`${activeLink === 1 ? "block" : "hidden"} `}>
        <Failed />
      </div>
    </main>
  );
}
