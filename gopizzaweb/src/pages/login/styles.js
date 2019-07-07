import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  background: #000;
  z-index: 1;
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  background: url("fundo.jpg") no-repeat;
  background-size: cover;
  opacity: 0.4;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img.attrs({
  src: "logo@3x.png"
})`
  width: 72px;
  height: 72px;
`;

export const Form = styled.form`
  margin-top: 30px;
  width: 100%;
  max-width: 315px;
  display: flex;
  flex-direction: column;

  input {
    height: 44px;
    padding: 0 20px;
    background: #fff;
    font-size: 15px;
    color: #333;
    border-radius: 10px;
    margin-bottom: 10px;
    font-family: Helvetica;

    border: ${props => (props.withError ? "2px solid #f00" : 0)};

    &::placeholder {
      color: #999;
    }
  }

  button {
    height: 44px;
    margin-top: 5px;
    background: #e3293e;
    color: #fff;
    border: 0;
    font-size: 15px;
    font-weight: bold;
    border-radius: 10px;
    font-family: Helvetica;

    &:hover {
      background: #d2182d;
    }
  }
`;
