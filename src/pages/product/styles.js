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

export const ImageBox = styled.div`
  flex: 1;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 3px;
`

export const ProductBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
`

export const Image = styled.img`
  width: 60%;
  margin: auto;
`


export const Name = styled.image`
  font-size: 28px;
  font-weight: bold;
  line-height: 30px;
  color: #222;
`

export const Brand = styled.image`
  color: #999;
  font-size: 16px;
  line-height: 30px;
`

export const Price = styled.image`
  color: #37BEA9;
  font-weight: bold;
  font-size: 24px;
  line-height: 50px;
`

export const AddToCart = styled.button`
  background-color: #37BEA9;
  color: #FFF;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 3px;
`
