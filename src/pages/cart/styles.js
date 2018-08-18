import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`

export const Products = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
`

export const ProductRow = styled.tr`
    border: 1px solid #ddd;
    border-radius: 3px;
    margin: 35px 0;
`

export const HeaderInfo = styled.td`
  padding: 15px 0;
  color: #999;
  font-weight: bold;
  font-size: 14px;
`

export const TextInfo = styled.td`
  /* display: flex;
  flex-direction: column; */
  min-width: 250px;
  strong {
    display: block
  }

  small {
    color: #999;
  }
`;

export const Image = styled.td`
  display: flex;

  img {
    width: 50px;
    height: 60px;
    margin: auto;
  }
`


export const Input = styled.td`

  max-width: 50px;

  input {
    max-width: 50px;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ddd;
    color: #999;

  }
`;


export const Price = styled.td`
  color: #37BEA9;
  font-weight: bold;
  font-size: 24px;
  line-height: 50px;
`

export const DeleteButton = styled.td`
  min-width: 30px;

  button {
    text-align: center;
    border: 0;
    i {
      color: #999;
      font-size: 14px;
    }
  }
`

export const TotalInfo = styled.div`
  text-align: right;
  padding: 20px;
  color: #999;
  font-size: 24px;
  font-weight: bold;
`;

export const TotalPrice = styled.strong`
  color: #37BEA9;
  font-weight: bold;
  font-size: 30px;
`
