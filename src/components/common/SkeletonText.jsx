import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "antd";

const SkeletonText = ({ line }) => {
  return Array(line)
    .fill(0)
    .map((_) => <Skeleton active />);
};

SkeletonText.propTypes = {};

export default SkeletonText;
