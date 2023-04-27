import { BiInfoCircle } from "react-icons/bi";
import { OverlayTrigger } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";
import Tooltip from "react-bootstrap/Tooltip";

function InformativeToolTip({ text }: Props) {
  return (
    <OverlayTrigger
      placement="right"
      overlay={
        <Tooltip style={{ fontSize: "0.725rem" }} id={`tooltip-right`}>
          {text}
        </Tooltip>
      }
    >
      <Button className="icon-button small">
        <BiInfoCircle />
      </Button>
    </OverlayTrigger>
  );
}

interface Props {
  text: string;
}

export default InformativeToolTip;
