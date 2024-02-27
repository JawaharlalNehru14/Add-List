import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

const App = () => {
  const [item, setNewItem] = useState([
    {
      id: 1,
      name: "Jack",
      gmail: "jnehru902@gmail.com",
      course: "React",
      planning: "Practice Code",
      finished: "NO",
    },
    {
      id: 2,
      name: "hashni",
      gmail: "hashni902@gmail.com",
      course: "React",
      planning: "Practice Code",
      finished: "Yes",
    },
  ]);
  const [newItem, setNewlyItem] = useState({
    name: "",
    email: "",
    course: "Select",
    Html: false,
    practiceCode: false,
    learningCode: false,
    handsOnProject: false,
    finished: "",
  });
  const handleDelete = (id) => {
    let newList = item.filter((value) => value.id !== id);
    setNewItem(newList);
    localStorage.setItem("myList", JSON.stringify(newList));
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setNewlyItem({
      ...newItem,
      [name]: newValue,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", newItem);
    if (!newItem.name || !newItem.email || newItem.course === "Select") return;
    // add to existing list of items
    setNewlyItem({
      name: "",
      email: "",
      course: "Select",
      practiceCode: false,
      learningCode: false,
      handsOnProject: false,
      finished: "",
    });
  };

  return (
    <>
      <div className="App">
        <Header />
        <div className="container-fluid mt-3 mb-3">
          <div className="row">
            <div className="col-md-4">
              <AddItem
                newItem={newItem}
                setNewlyItem={setNewlyItem}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
              />
            </div>
            <div className="col-md-8">
              <Content
                item={item}
                setNewItem={setNewItem}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </div>
        <Footer item={item} />
      </div>
    </>
  );
};

export default App;
