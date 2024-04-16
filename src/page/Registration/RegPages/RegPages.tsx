import React from "react";
import useclasses from "./styles";
import simpaLogo from "./Svg/logo.svg";
import "../../../index.css";

import { Link } from "react-router-dom";

const RegPages: React.FC = () => {
  const classes = useclasses();
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.anketaForm}>
          <div className={classes.logoImg}>
            <img src={simpaLogo} alt="logo simpa" />
          </div>
          <div className={classes.block}>
            <div className={classes.header}>Регистрация</div>

            <div className={`${classes.buttonBlock} ${classes.buttonFull}`}>
              <input
                type="text"
                className={classes.buttonValue}
                placeholder="Email или Телефонный номер"
              />
            </div>

            <div className={`${classes.buttonBlock} ${classes.buttonFull}`}>
              <button className={`${classes.buttonFulls} ${classes.button}`}>
                <span className={classes.textButton}> Зарегистрироваться</span>
              </button>
            </div>

            <div className={classes.textAnd}>или</div>

            <div className={` ${classes.buttonBlock} ${classes.buttonFull} `}>
              <button
                className={` ${classes.button} ${classes.buttonFulls} ${classes.buttonGray}`}
              >
                <span className={classes.textButton}>Воити через VK</span>
              </button>

              <button
                className={` ${classes.button} ${classes.buttonFulls} ${classes.buttonGray}`}
              >
                <span className={classes.textButton}>Войти через Social 1</span>
              </button>

              <button
                className={` ${classes.button} ${classes.buttonFulls} ${classes.buttonGray} `}
              >
                <span className={classes.textButton}>Войти через Social 2</span>
              </button>
            </div>

            <div>
              <span className={classes.politicText}>
                Создавая аккаунт, вы подтверждаете, что вам исполнилось 18 лет,
                а также вы согласны с условиями{" "}
                <Link to="/"> Пользовательского соглашения</Link> и{" "}
                <Link to="/">Обработки данных</Link>
              </span>
            </div>
          </div>
        </div>

        <div className={classes.registrButtom}>
          <div className={classes.registrButtomText}>Уже зарегистрированы?</div>
          <div>
            <button className={classes.registrButtomLogin}>
              <span className={classes.RegistrLogonTextButton}>Войти</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegPages;
export {};
