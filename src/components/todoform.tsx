// class components
// import React from "react";
// import "./TodoForm.css";
// interface fcprops {
//   onSubmit: (todo: { isComplete: boolean; id: number; text: string }) => void;
// }

// class TodoForm1 extends React.Component<fcprops, { input: string }> {
//   constructor(props: fcprops | Readonly<fcprops>) {
//     super(props);
//     this.state = {
//       input: "",
//     };
//   }
//   handleChange = (e: { target: HTMLInputElement }) => {
//     document.addEventListener("keydown", function (event) {
//       if (event.key === "Escape") {
//         (document.getElementById("bt") as HTMLFormElement).style.display =
//           "inline-block";
//         (document.getElementById("input1") as HTMLFormElement).style.display =
//           "none";
//       }
//     });
//     this.setState({ input: (e.target as HTMLInputElement).value });
//   };
//   onSubmitbtn = () => {
//     (document.getElementById("bt") as HTMLFormElement).style.display = "none";
//     (document.getElementById("input1") as HTMLFormElement).style.display =
//       "block";
//   };
//   handleSubmit = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     if (this.state.input.length === 0) {
//       alert("enter something");
//     } else {
//       this.props.onSubmit({
//         isComplete: false,
//         id: Math.floor(Math.random() * 10000),
//         text: this.state.input,
//       });
//       this.setState({ input: "" });
//     }
//   };
//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit} className="todo-form">
//           <input
//             id="input1"
//             value={this.state.input}
//             onChange={this.handleChange}
//             name="text"
//             className="todo-input"
//           />
//         </form>
//         <button id="bt" onClick={this.onSubmitbtn} className="todo-button">
//           +
//         </button>
//       </>
//     );
//   }
// }

// export default TodoForm1;

import { useState } from "react";
import "./TodoForm.css";
interface fcprops {
  onSubmit: (todo: { isComplete: boolean; id: number; text: string }) => void;
}

const TodoForm = (props: fcprops) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: { target: HTMLInputElement }) => {
    document.addEventListener("keydown", function (event: KeyboardEventInit) {
      if (event.key === "Escape") {
        (document.getElementById("bt") as HTMLFormElement).style.display =
          "inline-block";
        (document.getElementById("input1") as HTMLFormElement).style.display =
          "none";
      }
    });
    setInput((e.target as HTMLInputElement).value);
  };
  const onSubmitbtn = () => {
    (document.getElementById("bt") as HTMLFormElement).style.display = "none";
    (document.getElementById("input1") as HTMLFormElement).style.display =
      "block";
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (input.length === 0) {
      alert("enter something");
    } else {
      props.onSubmit({
        isComplete: false,
        id: Math.floor(Math.random() * 10000),
        text: input,
      });
      setInput("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          id="input1"
          value={input}
          onChange={handleChange}
          name="text"
          className="todo-input"
        />
      </form>
      <button id="bt" onClick={onSubmitbtn} className="todo-button">
        +
      </button>
    </>
  );
};

export default TodoForm;
