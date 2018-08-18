import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0;
`;

export const Logo = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 6px 7px 6px 0px;

  h1 {
    color: #FF9696;
    font-weight: bold;
    font-size: 26px;
  }
`;


export const CartInfo = styled.a`
  cursor: pointer;
  text-decoration: none;

  display: flex;
  align-items: center;
  color: #999;

  i {
    margin-right: 5px;
  }

  span {
    color: #999;
    font-size: 14px;
  }
`;
