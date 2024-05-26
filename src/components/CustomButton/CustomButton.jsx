import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import "./CustomButton.css";

const CustomButton = ({
  startIcon,
  endIcon,
  children,
  style,
  className,
  ...props
}) => {
  return (
    <Button
      startIcon={startIcon ? <span className="icon">{startIcon}</span> : null}
      endIcon={
        endIcon ? <span className="icon icon-end">{endIcon}</span> : null
      }
      variant="contained"
      style={style}
      // className={className}
      {...props}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  children: PropTypes.node.isRequired,
  props: PropTypes.object,
};

export default CustomButton;
