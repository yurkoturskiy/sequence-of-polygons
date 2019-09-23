import React, { useMemo } from "react";
import { morphing } from "primitivo-svg";

function Composition(props) {
  const generatePathParams = () => {
    let x = 1;
    let y = 1;
    let width = 98;
    let height = 98;
    let centerX = 49;
    let centerY = 49;
    let numOfSegments = [];

    for (let i = 2.01; i < 44; i *= 1.01) {
      numOfSegments.push(i);
    }
    return {
      numOfSegments,
      depth: 0,
      x,
      y,
      width,
      height,
      centerX,
      centerY,
      rotate: 0,
      numOfGroups: 1,
      groups: [
        {
          type: "radial",
          incircle: true,
          round: 0,
          distance: 1
        }
      ]
    };
  };

  const pathParams = useMemo(() => generatePathParams(), []);
  const morphParams = {
    numOfKeyPaths: pathParams.numOfSegments.length,
    loop: true
  };
  const values = morphing(morphParams, pathParams).dValues;
  return (
    <svg className="composition" viewBox="0 0 100 100">
      <path stroke="white" strokeWidth="1px" d="M 1 50 L 99 50 Z">
        <animate
          attributeName="d"
          dur="7000ms"
          begin="1.6s"
          repeatCount="indefinite"
          values={values}
        />
      </path>
    </svg>
  );
}

export default Composition;
