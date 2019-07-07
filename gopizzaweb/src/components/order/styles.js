import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #ddd;
  margin-top: 14px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 14px;
`;
export const Title = styled.h1`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: bold;
  color: #0b2031;
`;

export const Time = styled.h2`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  margin: 8px 0;
`;

export const Total = styled.h3`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: bold;
  color: #0b2031;
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 14px;
  margin-right: -14px;
`;

export const Observation = styled.h3`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: bold;
  color: #706e7b;
  padding-top: 20px;
  border-top: 1px solid #f2f2f2;
`;
