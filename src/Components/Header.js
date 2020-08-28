import React, { useMemo } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import logo from "../assets/logo.png";

// Styled-components
const GnbHeader = styled.header``;
const GnbDimmed = styled.div``;
const GnbWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
const Gnb = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 16px;
`;
const Logo = styled.h1`
  width: 33.33%;
`;
const GnbList = styled.ul`
  display: flex;
  align-items: center;
  width: 33.33%;
`;
const GnbItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const GnbLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 6px;
  &::after {
    position: absolute;
    right: 0;
    bottom: -6px;
    left: 0;
    content: "";
    height: 1px;
    background-color: #1d1d1f;
    transform: scaleX(0);
    transition: 0.25s ease;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;
const LinkTo = styled.a`
  position: relative;
  &::after {
    position: absolute;
    right: 0;
    bottom: -8px;
    left: 0;
    content: "";
    height: 1px;
    background-color: #1d1d1f;
    transform: scaleX(0);
    transition: 0.3s ease;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

const Header = ({ location: { pathname } }) => {
  const LogoStyle = useMemo(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  return (
    <>
      <GnbHeader>
        <GnbDimmed />
        <GnbWrapper>
          <Gnb>
            <GnbList>
              <GnbItem current={pathname === "/"}>
                <GnbLink to="/">Home</GnbLink>
              </GnbItem>
              <GnbItem>
                <GnbLink onClick={e => e.preventDefault()}>Category</GnbLink>
              </GnbItem>
            </GnbList>
            <Logo>
              <a href="/" style={LogoStyle}>
                <img src={logo} alt="logo" />
              </a>
            </Logo>
            <GnbList>
              <GnbItem>
                <LinkTo
                  href="https://smartstore.naver.com/roopre_film"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Shop
                </LinkTo>
              </GnbItem>
              <GnbItem>
                <GnbLink>Contact</GnbLink>
              </GnbItem>
            </GnbList>
          </Gnb>
        </GnbWrapper>
      </GnbHeader>
    </>
  );
};

export default withRouter(Header);
