import React from 'react';

const InputBox = (props) => {
  return (
    <input onChange={(e) => {
      props.handler(e.target.value);
    }}
    />
  );
};

export default InputBox;