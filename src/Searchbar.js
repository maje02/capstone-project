import React from 'react'
import styled from 'styled-components/macro'
import search from './img/search.svg'

export default function Searchbar({ onInput, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="search"></label>
      <SearchIcon>
        <img src={search} alt="search" />
      </SearchIcon>
      <SearchInput
        type="search"
        name="search"
        id="search"
        placeholder="Suche"
        autoFocus={true}
        onInput={onInput}
      ></SearchInput>
      {/* <SearchSubmit id="search" type="submit" name="search" value="Suchen">
        <img src={search} alt="search" />
      </SearchSubmit> */}
    </Form>
  )
}
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 10px 20px 10px 20px;
`

const SearchIcon = styled.div`
  border: 1px solid #6c6c63;
  background: #f7f7f7;
  padding: 4px;
`
const SearchInput = styled.input`
  -webkit-appearance: none;
  margin: 0px 0px 0px -1px;
  border: 1px solid #6c6c63;
  border-left: 0px;
  border-radius: 0;
  padding: 4px;
  background: #f7f7f7;
  width: 150px;
  color: #6c6c63;
  font-family: 'Noto Serif JP';
  flex-grow: 1;
  font-size: 0.8rem;
`
/* const SearchSubmit = styled.button`
  border: 1px solid #f6d9d3;
  background: #f7f7f7;
  margin: -1px;
  background: #f6d9d3;
  padding: 4px;
` */
