import React from "react";
import { createGlobalStyle } from "styled-components";

// Components
import Router from "./Router";

// Global style
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Spoqa Han Sans";
  font-weight: 200;
  src: url("../public/fonts/Spoqa\ Han\ Sans\ Thin.ttf");
}
@font-face {
  font-family: "Spoqa Han Sans";
  font-weight: 300;
  src: url("../public/fonts/Spoqa\ Han\ Sans\ Light.ttf");
}
@font-face {
  font-family: "Spoqa Han Sans";
  font-weight: 400;
  src: url("../public/fonts/Spoqa\ Han\ Sans\ Regular.ttf.ttf");
}
@font-face {
  font-family: "Spoqa Han Sans";
  font-weight: 500;
  src: url("../public/fonts/Spoqa\ Han\ Sans\ Bold.ttf.ttf");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-family: "Spoqa Han Sans";
  color: #1d1d1f;
}
a {
  color: inherit;
  text-decoration: none;
}
ol,
ul {
  list-style: none;
}
img {
  border: none;
  max-width: 100%;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}
fieldset {
  border: none;
}
legend,
caption {
  display: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
}
header,
section,
footer,
article,
aside,
figure,
video,
audio,
nav {
  display: block;
}
strong,
em {
  font-weight: normal;
  font-style: normal;
}
button,
input[type="submit"],
input[type="reset"] {
  cursor: pointer;
}
.cf:after,
.cf:before {
  content: "";
  display: block;
  clear: both;
}
`;

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
