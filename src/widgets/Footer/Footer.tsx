import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https:/t.me/denis_solo">
              Telergam
            </a>
          </li>
          
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/_denis_solov?igsh=a2ZheWcweWhnejRw"
            >
              Instagram
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/DenisSoloviev1"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
