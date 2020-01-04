import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import home from './img/home.svg'
import add from './img/add.svg'
import place from './img/place.svg'

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavItem to="/">
        <img src={home} alt="home" />
      </NavItem>
      <NavItem to="/add">
        <img src={add} alt="add" />
      </NavItem>
      <NavItem to="/map">
        <img src={place} alt="map" />
      </NavItem>
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
