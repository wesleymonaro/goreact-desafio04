import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  margin: 10px 0 0;
  background: #FF9696;
  height: 40px;
  border-radius: 3px;
  padding: 10px;
`

export const Category = styled.a`

  text-transform: uppercase;
  font-size: 12px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  margin-left: 15px;
  cursor: pointer;
  color: ${props => props.active ? '#FFF' : 'rgba(255, 255, 255, 0.7)'};
  text-decoration: none;

`
