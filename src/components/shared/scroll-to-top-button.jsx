import React, { useEffect, useState } from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import styled from "styled-components";

const ScrollButton = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 60;
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(180deg, #4c69ff 0%, #405ff2 100%);
  color: #ffffff;
  box-shadow: 0 18px 36px rgba(64, 95, 242, 0.28);
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(12px)"};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition:
    opacity 0.22s ease,
    transform 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    box-shadow: 0 22px 42px rgba(64, 95, 242, 0.34);
  }

  @media (max-width: 640px) {
    right: 16px;
    bottom: 16px;
    width: 48px;
    height: 48px;
  }
`;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollButton
      $visible={visible}
      aria-label="Scroll back to top"
      onClick={handleClick}
      type="button"
    >
      <KeyboardArrowUpRoundedIcon />
    </ScrollButton>
  );
};

export default ScrollToTopButton;
