import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavItem to="/">HOME</NavItem>
      <NavItem to="/add">ADD</NavItem>
      <NavItem to="/map">MAP</NavItem>
    </NavigationWrapper>
  )
}

const NavigationWrapper = styled.nav`
  margin: 0;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  height: 100%;
  border: none;
  background: #637f68;
  color: #f6d9d3;
  font-family: 'Julius Sans One';
`
const NavItem = styled(Link)`
  text-decoration: none;
  color: #f6d9d3;
`
