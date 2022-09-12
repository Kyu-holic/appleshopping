import React from "react";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      {/* Outlet 위치에 /about/member 컴포넌트가 들어간다. */}
      <Outlet></Outlet>
    </div>
  );
}

export default About;
