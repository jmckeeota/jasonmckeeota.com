import React from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";

export default function CustomLink(props) {
  // Use the element properties to scroll to the correct location
  function scrollWithOffset(el) {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = props["data-height"];
    // console.log(yOffset);
    window.scrollTo({
      top: yCoordinate - yOffset,
      behavior: "smooth"
    });
  }

  return (
    <HashLink
      smooth
      // Set the 'to' hash link
      to={props.to}
      scroll={(el) => scrollWithOffset(el)}
      className={props.className ? props.className : ""}
      // On click, use the Navbar onClick to collapse menu
      onClick={props.onClick}
    >
      {props.children}
    </HashLink>
  );
}
