import React from "react";
import { Outlet, useMatch, useParams } from "react-router-dom";

export default function MyStudyDetail() {
  const test = useMatch("mystudy/123/form");
  let { studyId } = useParams();

  return (
    <div className="pt-[88px] h-screen">
      <Outlet context={"test"} />
    </div>
  );
}
