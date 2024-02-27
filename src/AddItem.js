import React, { useRef } from "react";

const AddItem = ({ newItem, handleChange, handleSubmit }) => {
  const inputRef = useRef("");
  return (
    <>
      <form className="formAlign" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={newItem.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="course">Course:</label>
        <br />
        <select
          id="course"
          name="course"
          value={newItem.course}
          onChange={handleChange}
        >
          <option value="Select">Select</option>
          <option value="HTML">HTML</option>
          <option value="CSS3">CSS3</option>
          <option value="Bootstrap">Bootstrap</option>
          <option value="JS">JS</option>
        </select>
        <br />
        <br />
        <label>Planning:</label>
        <br />
        <input
          type="checkbox"
          id="practice_code"
          name="practiceCode"
          checked={newItem.practiceCode}
          onChange={handleChange}
        />{" "}
        Practice Code
        <br />
        <input
          type="checkbox"
          id="learning_code"
          name="learningCode"
          checked={newItem.learningCode}
          onChange={handleChange}
        />{" "}
        Learning Code
        <br />
        <input
          type="checkbox"
          id="hands_on_project"
          name="handsOnProject"
          checked={newItem.handsOnProject}
          onChange={handleChange}
        />{" "}
        Hands-on Project
        <br />
        <br />
        <fieldset>
          <legend>Finished</legend>
          <label htmlFor="finished_yes">Yes:</label>
          <input
            type="radio"
            id="finished_yes"
            name="finished"
            value="Yes"
            checked={newItem.finished === "Yes"}
            onChange={handleChange}
          />
          <label htmlFor="finished_no">No:</label>
          <input
            type="radio"
            id="finished_no"
            name="finished"
            value="No"
            checked={newItem.finished === "No"}
            onChange={handleChange}
          />
        </fieldset>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddItem;
