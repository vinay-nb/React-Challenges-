import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./style.css";
import OpenModal from "./OpenModal";

function ModalPopup() {
  const [isModal, setIsModal] = useState(false);

  const handleClick = () => {
    setIsModal(true);
  };

  const modaldata = {
    title: "Modal heading",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, voluptates. Nobis delectus magni quaerat et deserunt fuga temporibus doloribus vero quidem repellat suscipit nulla tempora eveniet, repellendus deleniti placeat quibusdam.",
  };

  return (
    <>
      <button className="btn-modal" onClick={handleClick}>
        Open Modal
      </button>
      {createPortal(
        <OpenModal
          isModal={isModal}
          setIsModal={setIsModal}
          title={modaldata.title}
          content={modaldata.content}
        />,
        document.body
      )}
    </>
  );
}

export default ModalPopup;
