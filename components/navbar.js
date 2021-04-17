import { useState } from "react";
import Link from "next/link";
import * as Icon from "react-feather";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isDown_1, setIsDown_1] = useState(false);
  const [isDown_2, setIsDown_2] = useState(false);
  const [isDown_3, setIsDown_3] = useState(false);

  const navbarNikal = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  // const dropdownNikal = (n) => {
  //   switch (n) {
  //     case 1:
  //       setIsDown_1(!isDown_1);
  //       break;
  //     case 2:
  //       setIsDown_2(!isDown_2);
  //       break;
  //     case 3:
  //       setIsDown_3(!isDown_3);
  //       break;
  //   }
  // };

  return (
    <>
      <nav className="menu">
        <div className="wrapper">
          <ul>
            <li data-text="Updates" className="dropdown-title">
              <Link href="/updates">Updates</Link>
            </li>
            <li data-text="Notices">
              <Link href="/notices">Notices</Link>
            </li>
            <li data-text="Hall of Fame" className="dropdown-title">
              <Link href="/fame">Hall of Fame</Link>
            </li>
            <li data-text="Societies">
              <Link href="/societies">Societies</Link>
            </li>
            <li data-text="Blog">
              <a href="https://tsg-blog.medium.com/" target="_blank" rel="noopener noreferrer">
                Blog <Icon.ExternalLink />
              </a>
            </li>
            <li data-text="Contacts">
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-navbar">
        <div className={`mobile-navbar-icon ${isActive ? "out" : ""}`} onClick={navbarNikal}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav>
          <div className={`wrapper ${isActive ? "active" : ""}`}>
            <ul>
              <li data-text="Updates">
                <Link href="/updates">Updates</Link>
              </li>
              <li data-text="Notices">
                <Link href="/notices">Notices</Link>
              </li>
              <li data-text="Hall of Fame">
                <Link href="/fame">Hall of Fame</Link>
              </li>
              <li data-text="Societies">
                <Link href="/societies">Societies</Link>
              </li>
              <li data-text="Blog">
                <a href="https://tsg-blog.medium.com/" target="_blank" rel="noopener noreferrer">
                  Blog <Icon.ExternalLink />
                </a>
              </li>
              <li data-text="Contacts">
                <Link href="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
