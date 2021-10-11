import React from "react";
// we setting up component

const Book = ({ img, title, author }) => {
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Reference example
      </button>
      <button type='button' onClick={() => compexExample(author)}>
        Complex example
      </button>
    </article>
  );
};
const clickHandler = (e) => {
  console.log(e);
  console.log(e.target);
  // alert("Hello World");
};
const compexExample = (author) => {
  console.log(author);
};
export default Book;
// Just one default! In index.js I called in SpecificBook and it still works
