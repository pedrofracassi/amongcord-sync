const { default: styled } = require("styled-components")

export default styled.button`
  border: none;
  height: 50px;
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  background-color: #505DD6;
  border-radius: 25px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #444FB6;
  }

  &:focus, button:active {
    border: none;
  }

  &:disabled { 
    background-color: #A7AEEB
  }
`