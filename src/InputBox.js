import React from 'react';

let savedText = '';

function processInput(e) {
  console.log(e.target.value);
  savedText = e.target.value;
  console.log(savedText);
}

const InputBox = (props) => {
  return (
    <input onChange={processInput} />
  );
};

export default InputBox;