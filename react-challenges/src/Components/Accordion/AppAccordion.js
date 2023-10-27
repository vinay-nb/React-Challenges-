import React, { useState } from "react";
import questions from "./data";
import Accordion from "./Accordion";
import "./style.css";

export default function AppAccordion() {
  const [multiple, setMultiple] = useState(true);
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const setIdOfOpenAccordion = (id = null) => {
    setOpenAccordionId(multiple ? null : id);
  };

  const onMultipleChange = () => {
    if (multiple) {
      setOpenAccordionId(-1);
    }
    setMultiple(!multiple);
  };

  return (
    <div className="accordion-cnt">
      <h4>
        <label htmlFor="max-open">Is multiple open accordion allowed?</label>
        <input
          type="checkbox"
          id="max-open"
          checked={multiple}
          onChange={onMultipleChange}
        />
        <div className="accordions-wrapper">
          {questions.map((question) => (
            <Accordion
              key={questions.id}
              multiple={multiple}
              openAccordionId={openAccordionId}
              setIdOfOpenAccordion={setIdOfOpenAccordion}
              {...question}
            />
          ))}
        </div>
      </h4>
    </div>
  );
}
