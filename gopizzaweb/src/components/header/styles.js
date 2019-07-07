import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  max-height: 80px;
  width: 100%;
  background: #0b2031;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.h1`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 14px;
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #3b4c5a;
  padding-right: 20px;
`;

export const Logo = styled.img.attrs({
  src: "logo@3x.png"
})`
  width: 32px;
  height: 32px;
`;

export const User = styled.h2`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  text-align: right;
`;

export const Logout = styled.a`
  font-family: Helvetica;
  font-size: 14px;
  color: #ffffff;
  opacity: 0.6;
  text-decoration: none;
  text-align: right;
`;

export const Bag = styled.button`
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 50px;
  background-color: #e3293e;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
