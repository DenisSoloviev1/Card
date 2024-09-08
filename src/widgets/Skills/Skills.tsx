import React from "react";
import "./Skills.scss";
import Skill from "../../components/Skill/Skill.tsx";
import { HtmlSvg } from "../../assets/svg.tsx";
import { CssSvg } from "../../assets/svg.tsx";
import { JavaScriptSvg } from "../../assets/svg.tsx";
import { ReactSvg } from "../../assets/svg.tsx";
import { SassSvg } from "../../assets/svg.tsx";
import { TypeScriptSvg } from "../../assets/svg.tsx";

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <h2>навыки</h2>

      <h3>Hard Skills</h3>

      <section>
        <Skill
          url={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
          svg={<HtmlSvg />}
          name={"HTML"}
        />

        <Skill
          url={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
          svg={<CssSvg />}
          name={"CSS"}
        />

        <Skill
          url={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
          svg={<JavaScriptSvg />}
          name={"JavaScript"}
        />

        <Skill url={"https://react.dev/"} svg={<ReactSvg />} name={"React"} />

        <Skill url={"https://sass-lang.com/"} svg={<SassSvg />} name={"Sass"} />

        <Skill
          url={"https://www.typescriptlang.org/"}
          svg={<TypeScriptSvg />}
          name={"TypeScript"}
        />
      </section>
    </div>
  );
};

export default Skills;
