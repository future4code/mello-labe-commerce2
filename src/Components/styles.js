import styled from 'styled-components';

// Global
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

// Header
export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  background-color: #ffffff;
  width: 85vw;
  height: 8vh;
  color: black;
  box-shadow: 0 0 2px gray;
  a {
    text-decoration: none;
    color: black;
    color: #2fbd5d;
    padding: 5px;
    margin: 8px;
    :hover {
      text-shadow: 0 0 2px green;
    }
  }
  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15vw;
    height: 8vh;
    background-color: #21262a;
  }
  h1 {
    color: #2fbd5d;
    text-shadow: 0 0 25px green;
    font-size: 42px;
    text-align: center;
    padding: 5px;
  }
  @media (max-width: 1366px) {
    width: 100vw;
    div:nth-child(1) {
      width: 25vw;
    }
  }
`;

export const MainContent = styled.main`
  display: flex;
  background-color: #ebeff2;
  width: 85vw;
  @media (max-width: 1366px) {
    width: 100vw;
  }
`;

//Filtro & Cart
export const FilterStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #32373d;
  width: 15vw;
  h2 {
    color: white;
    padding-top: 20px;
  }
  h3 {
    padding-top: 10px;
    color: #2fbd5d;
    text-align: center;
  }
  h4 {
    color: #ffffff;
    padding: 5px;
  }
  p {
    color: #ffffff;
  }
  button {
    background-color: #48bd2f;
    color: #ffffff;
    padding: 10px;
    margin: 10px;
    border-radius: 2px;
    border: none;
    cursor: pointer;
    :hover {
      background-color: red;
    }
  }
  @media (max-width: 1366px) {
    width: 25vw;
  }
`;

export const InputFilter = styled.input`
  padding: 10px;
  margin: 10px;
  width: 198px;
  border-radius: 2px;
  border: none;
`;

export const SelectFilter = styled.select`
  background-color: #48bd2f;
  color: #ffffff;
  padding: 10px;
  margin: 10px;
  width: 198px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  option {
    background-color: whitesmoke;
    color: black;
  }
`;

// Home
export const ProductsCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ebeff2;
  width: 70vw;
  height: 100%;
  @media (max-width: 1366px) {
    width: 100vw;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 10px;
  width: 200px;
  height: 300px;
  background-color: #ffffff;
  box-shadow: 0 0 4px gray;
  border-radius: 2px;
`;

export const ButtonAddBasket = styled.button`
  background-color: #48bd2f;
  color: whitesmoke;
  padding: 10px;
  margin: 10px;
  border-radius: 2px;
  box-shadow: 0 0 2px gray;
  border: none;
  cursor: pointer;
  :hover {
    background-color: green;
  }
`;

export const ProductDescription = styled.label`
  margin: 10px;
`;
