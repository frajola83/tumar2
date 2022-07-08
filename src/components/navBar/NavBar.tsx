import React, { useState } from "react"
import styled from "styled-components"
import { LogoImg } from "../navBar/Logo"
import { Drawer } from "../navBar/Drawer"
import { Nav } from "../navBar/Nav"
import { breakpoints } from "../../utils/styledResponsive"
import { Link } from "gatsby"
// import { useDrag } from "react-use-gesture"

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 93px;
  width: 100%;
`

const LogoHolder = styled(Link)`
  display: block;
  width: 30%;
  ${breakpoints("width", ["30%", "30%", "30%", "30%"])}
`

const NavHolder = styled.div`
  width: 30%;
  ${breakpoints("width", ["30%", "30%", "70%", "70%"])}
`

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [toggled, toggle] = useState(false)
  return (
    <>
      <StyledNavBar>
        <LogoHolder to="/">
          <LogoImg />
        </LogoHolder>
        <NavHolder>
          <Nav toggle={() => toggle(!toggled)} toggled={toggled} />
        </NavHolder>
      </StyledNavBar>
      <div
        style={{
          left: toggled ? 0 : -355,
          position: "fixed",
          top: 0,
          transform: "translateZ(0.1px)",
          transition: "all 0.3s ease-in-out",
          zIndex: 10,
        }}
      >
        <Drawer open={toggled} />
      </div>
    </>
  )
}

// import { Link } from "gatsby";
// import React from "react";
// import { Col, Container, Row } from "styled-bootstrap-grid";
// import styled from "styled-components";

// const Logo = styled.a`
//   display: "inline-block"; // . logo-link
// `;

// const NavBar = () => {
//   return (
//     <div class="top">
//       <Container>
//         <Row>
//           <Col xs={12} md={2} lg={4}>
//             <Logo>
//               <image src="/" alt="tumar" />
//             </Logo>
//           </Col>
//           <Col md={10} lg={8} className="d-none d-md-block">
//             <ul>
//               <li>
//                 <Link to="/sobre">Sobre</Link>
//               </li>
//               <li>
//                 <Link to="/produtos">Produtos</Link>
//               </li>
//               <li>
//                 <Link to="/designers">Designers</Link>
//               </li>
//               <li>
//                 <Link to="/representantes">Representantes</Link>
//               </li>
//               <li>
//                 <Link to="/contato">Contato</Link>
//               </li>
//             </ul>
//           </Col>
//           <Col xs={4} className="d-md-none">
//             <button
//               id="hamburguer"
//               className="hamburger hamburger--collapse"
//               type="button"
//             >
//               <span className="hamburger-box">
//                 <span className="hamburger-inner"></span>
//               </span>
//             </button>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default NavBar;
