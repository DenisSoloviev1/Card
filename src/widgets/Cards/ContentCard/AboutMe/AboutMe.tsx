import React, { useState, useEffect } from "react";
import "./AboutMe.scss";

interface Age{
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
      <span>
        {/* {age.years}{(age.years > 4) | (age.years === 0) ? <p>лет</p> : <p>года</p>}
        <p>и</p> */} 
        {/* когда стукнет год, убрать месяцы */}
        {age.months}{" "}
        {age.months > 4 ? <p>месяцев опыта</p> : <p>месяца опыта</p>}
      </span>
    );
  };

  return (
    <div className="aboutMe">
      <title>обо мне</title>
      <h1>Кто я такой</h1>
      <p>
        Студент, ранее изучавший информационную безопасность, но страсть к
        frontend разработке изменила планы. За то время, что я осваиваю и
        работаю в этой сфере успел сделать несколько проектов, посотрудничать с
        талантливыми людьми и принять участие в хакатонах. По своей натуре
        спокойный и целеустремлённый человек, в свободное время слушаю
        IT-подкасты, чтобы быть в курсе последних тенденций 
      </p>
      <div className="aboutInfo">
        {AgeCounter()}
        <span>
          2<p>готовых проекта</p>
        </span>
      </div>
    </div>
  );
}

export default AboutMe;