import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectCars } from "../Store/Cars/carSlice.js";

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <div>
      <Container>
        <a href="">
          <img src="/images/logo.svg" alt="logo" />
        </a>

        <Menu>{cars && cars.map((car, ind) => <a key={ind} href="#">{car}</a>)}</Menu>

        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenu onClick={() => setMenuStatus(true)} />
        </RightMenu>

        <BurgerNavMenu show={menuStatus}>
          <CloseWrap>
            <CustomCloseBtn onClick={() => setMenuStatus(false)} />
          </CloseWrap>
         
          {cars && cars.map((car, ind) => <li key={ind}>
            <a href="#">{car}</a>
          </li>)}

          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Use Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
        </BurgerNavMenu>
      </Container>
    </div>
  );
};

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNavMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 325px;
  z-index: 50;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  transition: transform 0.2s ease-in;

  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CustomCloseBtn = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrap = styled.div`
  display: flex;
  justify-content: end;
`;
export default Navbar;
