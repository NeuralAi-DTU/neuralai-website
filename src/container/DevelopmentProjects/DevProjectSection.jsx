import React from "react";
import DevProject from "../../common/DevProject/DevProject";
import Line from "../../common/Line/Line";

const DevProjectSection = ({ props }) => {
  return (
    <div>
      {props.map((e, i) => {
        return (
          <>
            <DevProject props={e} ind={i + 1} />
          </>
        );
      })}
      <Line />
    </div>
  );
};

export default DevProjectSection;
