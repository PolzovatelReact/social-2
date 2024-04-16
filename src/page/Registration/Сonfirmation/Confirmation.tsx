import React from "react";
import useStyles from "./styles";
import simpaLogo from "./Svg/logo.svg";
import "../../../index.css";

const Confirmation: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.body}>
        <div className={classes.Content}>
          <div className={classes.AnketaForm}>
            <div className={classes.logoImg}>
              {" "}
              <img src={simpaLogo} alt="" />
            </div>
            <div className={classes.anketaFormBlock}>
              <div className={classes.header}>Подтверждение Почты/Телефона</div>
              <div className={classes.textFinishOne}>
                Введите код, отправленный на адрес/телефон ХХ******ХХ
              </div>
              <div className={`${classes.buttonFull}`}>
                <input
                  type="text"
                  className={classes.buttonValue}
                  value=""
                  placeholder="Введите OTP код"
                />
              </div>
              <div className={`${classes.buttonBlock} ${classes.buttonFull}`}>
                <button className={`${classes.buttonFulls} ${classes.button}`}>
                  <span className={classes.textButton}>Подтвердить</span>
                </button>
              </div>
              <div className={classes.blockNoCode}>
                <button className={classes.buttonNoCode}>
                  <span>Не получили код?</span>
                </button>
              </div>
            </div>
          </div>

          <div className={classes.registrButtom} id="registr_buttom">
            <div className={classes.registrButtomText}>
              Уже зарегистрированы?
            </div>
            <div>
              <button className={classes.registrButtomLogin}>
                <span>Войти</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
