//  JS6 modules not react
import React from "react";
// index.js is an entry point we need to Inject greeting to root with render (from ReactDom)
import ReactDom from "react-dom";

// CSS
import "./index.css";
// REFERENCE TO CSS IN JSX
// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: ".75rem", margin: ".25rem" }}>
//     Amelia Hepworth
//   </h4>
// );

// What is happeing under the hood
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world create")
//   );
// };

// JSX RULES:
// stateless functional component
// Component with JSX (HTML) MUST have Capital Letter.
// always return JSX (html)
// return single element
// div / section or React.Fragment <> </>
// use camelCase for html attributes onClick
// className instead of class
// Close every element
// return () || return

// Nested Components, React Tools

// CSS in JSX is stonger than CSS from index.css
// Libraries might have style in JSX (inline) and overwrite our index.css

// Set up variables

// import of books.js
import { books } from "./books";

// Default import (I can change the Book name to whatever)
// But than I have to change <Book/> to the other name
import SpecificBook from "./Book";

// special prop key &&  children
function BookList() {
  return (
    <section className='booklist'>
      {books.map((element) => {
        return <SpecificBook key={element.id} {...element} />;
      })}
    </section>
  );
}

// method WHAT and WHERE we wanna render, brings the Booklist to APP root
ReactDom.render(<BookList />, document.getElementById("root"));
