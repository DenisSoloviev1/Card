import React, { useState, useEffect } from "react";
import classes from "./AboutMe.module.scss";

interface Age {
  years: number;
  months: number;
}

const AboutMe: React.FC = () => {
  const AgeCounter = () => {
    const [age, setAge] = useState<Age>({ years: 0, months: 0 });

    useEffect(() => {
      const calculateAge = () => {
        const start = new Date(new Date().getFullYear(), 1, 1); // Февраль текущего года (месяц начинается с 0) и первого дня
        const now = new Date();
        const diffInMonths =
          (now.getFullYear() - start.getFullYear()) * 12 +
          (now.getMonth() - start.getMonth());

        const years = Math.floor(diffInMonths / 12);
        const months = diffInMonths % 12;

        setAge({ years, months });
      };

      calculateAge();
      const intervalId = setInterval(calculateAge, 1000 * 60 * 60 * 24); // Обновление каждые сутки

      return () => clearInterval(intervalId);
    }, []);

    return (
      <p>
        {/* <span>{age.years}</span>{(age.years === 1) ? "год опыта": ((age.years > 4) ? "лет опыта" : "года опыта")}*/}
        {/* когда стукнет год, убрать месяцы */}
        <span>{age.months}</span>
        {age.months > 4 ? "месяцев опыта" : "месяца опыта"}
      </p>
    );
  };

  return (
    <div className="aboutMe">
      <h2>обо мне</h2>
      <h3>Кто я такой</h3>
      <p>
        Студент, ранее изучавший информационную безопасность, но страсть к
        frontend разработке изменила планы. За то время, что я осваиваю и
        работаю в этой сфере успел сделать несколько проектов, посотрудничать с
        талантливыми людьми и принять участие в хакатонах. По своей натуре
        спокойный и целеустремлённый человек, в свободное время слушаю
        IT-подкасты, чтобы быть в курсе последних тенденций
      </p>
      <div className={classes.aboutInfo}>
        {AgeCounter()}
        <p>
          <span>4</span>готовых проекта
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
