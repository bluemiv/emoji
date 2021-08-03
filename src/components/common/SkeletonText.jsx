import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "antd";

const SkeletonText = ({ line }) => {
  return Array(line)
    .fill(0)
    .map((_, idx) => <Skeleton key={idx} active />);
};

SkeletonText.propTypes = {
  line: PropTypes.number.isRequired,
};

export default SkeletonText;
