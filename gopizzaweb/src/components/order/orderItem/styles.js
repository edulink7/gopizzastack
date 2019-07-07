import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  max-height: 80px;
  width: 212px;
  max-width: 212px;
  background: #fff;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  margin-top: 14px;
  margin-right: 14px;
`;

export const Preview = styled.img`
  width: auto;
  height: 60px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  margin-left: 8px;
`;

export const Title = styled.h1`
  font-family: Helvetica;
  font-size: 13px;
  color: #0b2031;
`;

export const Size = styled.h2`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
`;
