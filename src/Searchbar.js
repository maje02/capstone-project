import React from 'react'
import styled from 'styled-components/macro'
import search from './img/search.svg'

export default function Searchbar({ onInput, onSubmit }) {
  return (
    <Form>
      <label htmlFor="search"></label>

      <SearchInput
        type="search"
        name="search"
        id="search"
        placeholder="Suche"
        onInput={onInput}
      ></SearchInput>
      <SearchSubmit id="search" type="submit" name="search" value="Suchen">
        <img src={search} alt="search" />
      </SearchSubmit>
    </Form>
  )
}
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 10px 20px 10px 20px;
`
const SearchInput = styled.input`
  border: 1px solid grey;
  background: #f7f7f7;
  width: 150px;
  color: #6c6c63;
  font-family: 'Noto Serif JP';
  flex-grow: 1;
  font-size: 0.8rem;
`
const SearchSubmit = styled.button`
  border: 1px solid #f6d9d3;
  background: #f7f7f7;
  margin: -1px;
  background: #f6d9d3;
  padding: 4px;
`
