import { useState } from "react";

function BucketListForm(props) {
  const [formState, setFormState] = useState({
    text: "",
    eagerness: "",
  });

  const setEagerness = (value) => {
    setFormState({ ...formState, eagerness: value });
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formState.eagerness) {
      setFormState({ ...formState, eagerness: "low" });
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: formState.text,
      eagerness: formState.eagerness,
    });

    setFormState({ ...formState, text: "", eagerness: "" });
  };

  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={formState.text}
          name="text"
          className="bucket-input"
          onChange={handleInputChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${formState.eagerness}`}>
            {formState.eagerness || "Priority"}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setEagerness("high")}>Must do</p>
            <p onClick={() => setEagerness("medium")}>Want to do</p>
            <p onClick={() => setEagerness("low")}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>UpdateEntry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={formState.text}
          name="text"
          className="bucket-input"
          onChange={handleInputChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${formState.eagerness}`}>
            {formState.eagerness || "Priority"}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setEagerness("high")}>Must do</p>
            <p onClick={() => setEagerness("medium")}>Want to do</p>
            <p onClick={() => setEagerness("low")}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  );
}

export default BucketListForm;
