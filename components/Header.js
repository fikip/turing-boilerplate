import React from "react";
import Link from "next/link";
import { logout } from "../utils/auth";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 0.2rem;
  color: #fff;
  background-color: #333;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-right: 1rem;
  &:first-child {
    margin-left: auto;
  }
`;
const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #ddd;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <nav>
      <List>
        <ListItem>
          <Link href="/">
            <LinkText>Home</LinkText>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/login">
            <LinkText>Login</LinkText>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/profile">
            <LinkText>Profile</LinkText>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/state-example">
            <LinkText>Global state</LinkText>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/client-only">
            <LinkText>Client-Only</LinkText>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/apolloIndex">
            <LinkText>Apollo home</LinkText>
          </Link>
        </ListItem>
        <ListItem>
          <button onClick={logout}>Logout</button>
        </ListItem>
      </List>
    </nav>
  </HeaderWrapper>
);

export default Header;
