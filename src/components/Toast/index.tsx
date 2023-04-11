import React, { useState } from "react";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function PlacementExample({ title, text, show, setShow }: Props) {
  return (
    <ToastContainer className="p-3" position="bottom-start">
      <Toast onClose={() => setShow(false)} show={show} animation>
        <Toast.Header closeButton={false}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{title}</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

interface Props {
  title: string;
  text: string;
  show: boolean;
  setShow: (value: boolean) => void;
}

export default PlacementExample;
