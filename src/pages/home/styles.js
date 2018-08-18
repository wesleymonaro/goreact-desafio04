import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Product = styled.a`
  border: 1px solid #ddd;
  border-radius: 3px;
  height: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 22%;
  margin: 10px;
  cursor: pointer;

  text-decoration: none;
`

export const Image = styled.img`
  width: 70%;
  margin: auto;
  height: 200px;
`


export const Name = styled.image`
  font-size: 14px;
  font-weight: bold;
  line-height: 30px;
  color: #222;
`

export const Brand = styled.image`
  color: #999;
  font-size: 12px;
  line-height: 30px;
`

export const Price = styled.image`
  color: #37BEA9;
  font-weight: bold;
  font-size: 18px;
  line-height: 50px;
`
