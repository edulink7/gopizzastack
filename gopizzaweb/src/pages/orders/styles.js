import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #fff;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  max-width: 710px;
  width: 710px;
  padding-top: 30px;
`;

export const LabelOrders = styled.div`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 18px;
  color: #333333;
`;
