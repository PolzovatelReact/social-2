import React from "react";
import "./style.css";

const TestPages: React.FC = () => {
  return (
    <div id="content">
      <div id="anketa_form">
        <div className="logo">
          <img src="images/logo.svg" alt="logo simpa" />
        </div>
        <div className="block">
          <div className="header">Регистрация</div>
          <div className="button_block button_full">
            <input
              type="text"
              className="button_value"
              value=""
              placeholder="Email или Телефонный номер"
            />
          </div>
          <div className="button_block button_full">
            <button className="button_fulls">
              <span className="text_button">Зарегистрироваться</span>
            </button>
          </div>
          <div className="text_and">или</div>
          <div className="button_block button_full">
            <button className="button_fulls button_gray">
              <span className="text_button">Воити через VK</span>
            </button>
            <button className="button_fulls button_gray">
              <span className="text_button">Войти через Social 1</span>
            </button>
            <button className="button_fulls button_gray">
              <span className="text_button">Войти через Social 2</span>
            </button>
          </div>
          <div className="politic">
            <span className="politic_text">
              Создавая аккаунт, вы подтверждаете, что вам исполнилось 18 лет, а
              также вы согласны с условиями{" "}
              <a href="">Пользовательского соглашения</a> и{" "}
              <a href="">Обработки данных</a>
            </span>
          </div>
        </div>
      </div>
      <div id="registr_buttom">
        <div className="text">Уже зарегистрированы?</div>
        <div>
          <button className="login">
            <span className="text_button">Войти</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default TestPages;
