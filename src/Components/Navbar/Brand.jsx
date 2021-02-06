import React from "react";
import styled from "styled-components";

import brand from "../../../public/brand.png";

const Brand = () => {
  return <Image src={brand} alt="Company Logo" />;
};

export default Brand;

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;
