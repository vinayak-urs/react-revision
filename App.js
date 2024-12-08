// Rendering through the Vanila JS

// const heading = document.createElement("h1")
// heading.innerHTML = "Hello From Namste Javascript!"
// const root = document.getElementById("root")
// root.appendChild(heading)

// Rendering throught the React without the JSX

// React.createElement(ElementName, ElementAttribute,ElementChildren)

// const heading = React.createElement("h1",{},"This is comming directly from the CDN")

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)

// We can also make the nested Component using the same analogy

{
  /* <div id="parent">
  <div id="child"></div>
</div> */
}
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child1" },
//     React.createElement(
//       "div",
//       { id: "child2" },
//       "This is comming directly from the CDN"
//     )
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
