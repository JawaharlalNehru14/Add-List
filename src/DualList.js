import React, { useState } from "react";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";

const options = [
  { value: "one", label: "Option One" },
  { value: "two", label: "Option Two" },
];

function Widget() {
  const [selected, setSelected] = useState([]);

  return (
    <DualListBox
      options={options}
      selected={selected}
      onChange={(newValue) => setSelected(newValue)}
    />
  );
}
