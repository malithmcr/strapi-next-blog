import React, { useEffect, useState } from "react";
import Logo from "../Logo/index";
import Search from "../Search/index";
import CTA from "../CTA/index";
import { HeaderWrapper, HeaderContainer } from "./index.style";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const header = document.getElementById("sticky-header"); // This could be done with useRef too
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <HeaderWrapper id="sticky-header" className={isSticky ? "sticky" : ""}>
      <HeaderContainer>
        <Logo isSticky={isSticky} />
        <Search isSticky={isSticky} />
        <CTA text="Register" isIcon iconName="profile" />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
