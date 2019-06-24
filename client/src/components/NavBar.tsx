import React from 'react';
import styled from 'styled-components';
import Navlink from './NavLink';

const SideNav = () => (
   <Container>
      <StyledNavLink to='/'>
         <Logo>quickChat</Logo>
      </StyledNavLink>
      <StyledNavLink to='/df'>Rooms</StyledNavLink>
      <StyledNavLink to='/sdf'>Add Room</StyledNavLink>
   </Container>
);

export default SideNav;

const Container = styled.div`
   background-color: #dcdcdc;
   overflow: hidden;
   height: 50px;
`;

const Logo = styled.h2`
   font-size: 1.3em;
   font-weight: normal;
   border-bottom: inherit;
   padding-bottom: 8px;
`;

const StyledNavLink = styled(Navlink)`
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 1.2em;
  &:hover {
   color: black;
  }
`;
