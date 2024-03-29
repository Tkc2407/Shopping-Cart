import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  /* background-color:red */
  ${mobile({height:"50px",width:"100%"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding:"10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width:"50px"})}
`;

const Centre = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontsize:"24px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2,justifyContent: "center"})}

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
`;
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" style={{color:"gray", fontsize:16}}/>
            <Search />
          </SearchContainer>
        </Left>
        <Centre>
          <Logo>TAPS</Logo>
        </Centre>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
