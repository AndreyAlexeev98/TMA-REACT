// @ts-nocheck

import React, { useState } from "react";
import styles from "./Accordion.module.css";

const AccordionItem = ({ title, description, date = "" }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <button className={styles.button} onClick={toggleAccordion}>
          <div>{title}</div>
          <div>{date}</div>
        </button>
        {expanded && <div className={styles.description}>{description}</div>}
      </div>
    </div>
  );
};

const MyAccordion = () => {
  return (
    <div>
      <AccordionItem
        title="Прочистить трубы"
        date="15.05.2024"
        description={
          <>
            <div>
              <span style={{ fontWeight: "bold" }}>Адрес:</span>{" "}
              <span>Петроградская д.5, к.1, кв.234</span>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <span style={{ fontWeight: "bold" }}>Стоимость заказа:</span>{" "}
              <span>1 000 руб.</span>
            </div>
            <a
              className={styles.link}
              href="https://t.me/AndreyAlexeev98?text=Здравствуйте!%20Готов%20выполнить заказ%20в%20ближайшее%20время!"
            >
              Перейти в чат с заказчиком
            </a>
          </>
        }
      />
      <AccordionItem
        title="Поменять смеситель"
        date="19.05.2024"
        description={
          <>
            <div>
              <span style={{ fontWeight: "bold" }}>Адрес:</span>{" "}
              <span>Петроградская д.5, к.1, кв.234</span>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <span style={{ fontWeight: "bold" }}>Стоимость заказа:</span>{" "}
              <span>1 000 руб.</span>
            </div>
            <a
              className={styles.link}
              href="https://t.me/AndreyAlexeev98?text=Здравствуйте!%20Готов%20выполнить заказ%20в%20ближайшее%20время!"
            >
              Перейти в чат с заказчиком
            </a>
          </>
        }
      />
      <AccordionItem
        title="Замена ванны"
        date="22.05.2024"
        description={
          <>
            <div>
              <span style={{ fontWeight: "bold" }}>Адрес:</span>{" "}
              <span>Петроградская д.5, к.1, кв.234</span>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <span style={{ fontWeight: "bold" }}>Стоимость заказа:</span>{" "}
              <span>1 000 руб.</span>
            </div>
            <a
              className={styles.link}
              href="https://t.me/AndreyAlexeev98?text=Здравствуйте!%20Готов%20выполнить заказ%20в%20ближайшее%20время!"
            >
              Перейти в чат с заказчиком
            </a>
          </>
        }
      />
    </div>
  );
};

export default MyAccordion;
