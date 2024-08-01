import React from "react";
import "./Skills.scss";
import Skill from "./Skill/Skill.tsx";

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <title>навыки</title>
      <h1>Hard Skills</h1>
      <section>
        <Skill
          url={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
          svg={
            <svg viewBox="0 0 24 24">
              <path d="M21.46777,2.3252A1.00007,1.00007,0,0,0,20.73,2H3.27a1.00039,1.00039,0,0,0-.99609,1.08887l1.52,17a.99944.99944,0,0,0,.72851.87451l7.2002,2A.99628.99628,0,0,0,11.99023,23a1.01206,1.01206,0,0,0,.26709-.03613l7.21973-2a1.00055,1.00055,0,0,0,.729-.875l1.52-17A1,1,0,0,0,21.46777,2.3252Zm-3.19238,16.896L11.99072,20.9624,5.72461,19.22168,4.36328,4H19.63672ZM7.81982,13h6.895l-.32714,3.271-2.56788.917L8.65625,16.05811a1.00017,1.00017,0,1,0-.67285,1.88378l3.5,1.25a1.00291,1.00291,0,0,0,.67285,0l3.5-1.25a1.00044,1.00044,0,0,0,.65869-.84228l.5-5A1.00064,1.00064,0,0,0,15.81982,11H8.72461L8.4248,8h7.895a1,1,0,0,0,0-2h-9a1.00064,1.00064,0,0,0-.99511,1.09961l.5,5A1.00012,1.00012,0,0,0,7.81982,13Z" />
            </svg>
          }
          name={"HTML"}
        />
        <Skill
          url={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
          svg={
            <svg viewBox="0 0 24 24">
              <path d="M7.95215,8.00044h6.98633l-.17719,2H9.99121a1,1,0,0,0,0,2h4.59284L14.32031,14.977l-2.3291.52832L9.66309,14.976l-.09571-1.06445a1,1,0,1,0-1.99218.17774l.16015,1.79a1.00142,1.00142,0,0,0,.77442.88672l3.25976.74024a1.0188,1.0188,0,0,0,.44336,0l3.26074-.74024a1.00139,1.00139,0,0,0,.77442-.88769l.43158-4.86792.002-.01-.00079-.00391.34649-3.9082a1.001,1.001,0,0,0-.99609-1.08789H7.95215a1,1,0,0,0,0,2ZM20.6543,2.32563a1.002,1.002,0,0,0-.73828-.32519H4.06641a.99963.99963,0,0,0-.9961,1.08887L4.51367,19.28364a.999.999,0,0,0,.72754.874l6.47266,1.80566a.99028.99028,0,0,0,.53711,0l6.49023-1.8125a.999.999,0,0,0,.72754-.874l1.44336-16.1875A1.00166,1.00166,0,0,0,20.6543,2.32563Zm-3.11621,16.085-5.55567,1.55176L6.44434,18.41743,5.15918,4.00044H18.82324Z" />
            </svg>
          }
          name={"CSS"}
        />
        <Skill
          url={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
          svg={
            <svg viewBox="-2 -2 20 20">
              <path d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" />
            </svg>
          }
          name={"JavaScript"}
        />
        <Skill
          url={"https://react.dev/"}
          svg={
            <svg viewBox="0 0 24 24">
              <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z" />
            </svg>
          }
          name={"React"}
        />
        <Skill
          url={"https://sass-lang.com/"}
          svg={
            <svg viewBox="0 0 32 32">
              <path d="M15.092 22.146c-0.015 0.030-0.030 0.054 0 0zM27.548 17.796c-1.006-0-1.998 0.23-2.9 0.675-0.295-0.595-0.6-1.115-0.65-1.505-0.060-0.455-0.125-0.725-0.055-1.265s0.385-1.305 0.38-1.36c-0.005-0.055-0.070-0.33-0.715-0.335s-1.2 0.125-1.265 0.295c-0.114 0.311-0.203 0.63-0.265 0.955-0.115 0.585-1.289 2.675-1.954 3.765-0.22-0.425-0.405-0.8-0.445-1.1-0.060-0.455-0.125-0.725-0.055-1.265s0.385-1.305 0.38-1.36c-0.005-0.055-0.070-0.33-0.714-0.335s-1.2 0.125-1.265 0.295c-0.065 0.17-0.135 0.57-0.265 0.955s-1.695 3.865-2.104 4.77c-0.21 0.46-0.39 0.83-0.52 1.080-0.020 0.040-0.035 0.065-0.045 0.085 0.015-0.025 0.025-0.050 0.025-0.040-0.11 0.215-0.175 0.335-0.175 0.335v0.005c-0.085 0.16-0.18 0.305-0.225 0.305-0.030 0-0.095-0.42 0.015-0.995 0.235-1.21 0.79-3.090 0.785-3.155-0.005-0.035 0.105-0.36-0.365-0.535-0.455-0.165-0.62 0.11-0.66 0.11s-0.070 0.1-0.070 0.1c0 0 0.505-2.12-0.97-2.12-0.92 0-2.2 1.010-2.829 1.925-0.395 0.215-1.25 0.68-2.15 1.175-0.345 0.19-0.7 0.385-1.035 0.57-0.025-0.025-0.045-0.050-0.070-0.075-1.79-1.91-5.094-3.26-4.954-5.825 0.050-0.935 0.375-3.39 6.354-6.37 4.9-2.44 8.817-1.77 9.492-0.28 0.97 2.125-2.095 6.080-7.183 6.65-1.94 0.215-2.959-0.535-3.214-0.815-0.265-0.295-0.305-0.31-0.405-0.255-0.165 0.090-0.060 0.35 0 0.505 0.15 0.395 0.775 1.095 1.84 1.445 0.935 0.305 3.209 0.475 5.958-0.59 3.089-1.19 5.494-4.505 4.788-7.28-0.718-2.82-5.394-3.745-9.815-2.175-2.635 0.935-5.484 2.405-7.533 4.32-2.435 2.28-2.824 4.265-2.664 5.095 0.57 2.945 4.629 4.865 6.253 6.285-0.080 0.045-0.155 0.085-0.225 0.125-0.815 0.405-3.909 2.025-4.684 3.735-0.875 1.94 0.145 3.33 0.814 3.52 2.090 0.58 4.229-0.465 5.379-2.18s1.010-3.955 0.48-4.975c-0.005-0.015-0.015-0.025-0.020-0.040 0.21-0.125 0.425-0.25 0.64-0.375 0.415-0.245 0.82-0.47 1.175-0.665-0.2 0.54-0.345 1.19-0.42 2.13-0.090 1.1 0.365 2.525 0.955 3.085 0.26 0.245 0.574 0.25 0.77 0.25 0.69 0 1-0.57 1.345-1.25 0.425-0.83 0.8-1.795 0.8-1.795s-0.47 2.61 0.815 2.61c0.47 0 0.94-0.605 1.15-0.915v0.005c0 0 0.010-0.020 0.035-0.060 0.050-0.075 0.075-0.12 0.075-0.12v-0.015c0.19-0.325 0.605-1.070 1.23-2.3 0.81-1.59 1.584-3.575 1.584-3.575 0.075 0.436 0.179 0.867 0.31 1.29 0.14 0.475 0.435 0.995 0.67 1.5-0.19 0.26-0.305 0.41-0.305 0.41 0 0.004 0.002 0.007 0.005 0.010-0.15 0.2-0.32 0.415-0.495 0.625-0.639 0.76-1.4 1.63-1.5 1.88-0.12 0.295-0.090 0.515 0.14 0.685 0.17 0.13 0.47 0.15 0.785 0.125 0.575-0.040 0.98-0.18 1.175-0.27 0.36-0.129 0.699-0.307 1.010-0.53 0.625-0.46 1.005-1.12 0.97-1.99-0.020-0.48-0.175-0.96-0.365-1.41 0.055-0.080 0.115-0.165 0.17-0.25 0.989-1.445 1.755-3.031 1.755-3.031 0.075 0.436 0.178 0.867 0.31 1.29 0.12 0.405 0.355 0.85 0.57 1.285-0.93 0.755-1.505 1.63-1.704 2.205-0.37 1.065-0.080 1.545 0.465 1.655 0.245 0.050 0.595-0.065 0.855-0.175 0.386-0.129 0.75-0.316 1.079-0.555 0.625-0.46 1.23-1.105 1.189-1.98-0.015-0.395-0.125-0.79-0.27-1.17 0.785-0.33 1.805-0.51 3.105-0.36 2.784 0.325 3.329 2.065 3.224 2.79s-0.69 1.13-0.885 1.25c-0.195 0.12-0.255 0.165-0.24 0.255 0.025 0.13 0.115 0.125 0.28 0.095 0.23-0.040 1.46-0.59 1.515-1.935 0.080-1.7-1.555-3.57-4.45-3.555zM6.089 25.031c-0.92 1.005-2.209 1.385-2.764 1.065-0.595-0.346-0.36-1.825 0.774-2.896 0.69-0.65 1.58-1.25 2.17-1.62 0.135-0.080 0.33-0.2 0.57-0.345 0.040-0.025 0.060-0.035 0.060-0.035 0.045-0.030 0.095-0.055 0.145-0.085 0.414 1.52 0.015 2.86-0.955 3.915zM12.807 20.461c-0.32 0.785-0.994 2.785-1.405 2.68-0.35-0.090-0.565-1.615-0.070-3.115 0.25-0.755 0.78-1.655 1.095-2.005 0.505-0.565 1.060-0.745 1.19-0.52 0.175 0.295-0.61 2.47-0.81 2.96zM18.357 23.111c-0.135 0.070-0.26 0.115-0.32 0.080-0.045-0.025 0.055-0.12 0.055-0.12s0.695-0.745 0.97-1.085c0.16-0.2 0.345-0.435 0.545-0.695 0 0.025 0.005 0.050 0.005 0.080-0.006 0.895-0.866 1.5-1.256 1.74zM22.637 22.136c-0.1-0.070-0.085-0.305 0.25-1.035 0.13-0.285 0.43-0.765 0.95-1.225 0.059 0.174 0.091 0.356 0.095 0.54-0.005 1.125-0.81 1.545-1.295 1.72z" />
            </svg>
          }
          name={"Sass"}
        />
        <Skill
          url={"https://www.typescriptlang.org/"}
          svg={
            <svg viewBox="-2 -2 20 20">
              <path d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" />
            </svg>
          }
          name={"TypeScript"}
        />
      </section>
    </div>
  );
};

export default Skills;
