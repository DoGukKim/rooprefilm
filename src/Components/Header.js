import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled-components
const GnbHeader = styled.header`
  border: 1px solid black;
`;
const GnbDimmed = styled.div``;
const GnbWrapper = styled.div``;
const Gnb = styled.nav``;
const Logo = styled.h1``;
const GnbList = styled.ul``;
const GnbItem = styled.li``;
const GnbLink = styled(Link)``;
const Header = () => {
  return (
    <>
      <GnbHeader>
        <GnbDimmed />
        <GnbWrapper>
          <Gnb>
            <GnbList>
              <GnbItem></GnbItem>
              <GnbItem></GnbItem>
            </GnbList>
            <Logo>
              <GnbLink>RoopreFilm</GnbLink>
            </Logo>
            <GnbList></GnbList>
          </Gnb>
        </GnbWrapper>
      </GnbHeader>
    </>
  );
};

export default Header;
