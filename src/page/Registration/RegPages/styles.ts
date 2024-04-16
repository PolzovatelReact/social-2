import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    body: {
      background: "#F5F5FA",
    },

    content: {
      height: "100vh",
      maxWidth: "498px",
      margin: "0 auto",
      width: "96%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    anketaForm: {
      textAlign: "center",
      maxWidth: "498px",
      margin: "0 auto",
      position: "absolute",
      top: "10%",
      width: "90%",
      "@media (max-width: 1600px)": {
        top: "initial",
        position: "initial",
        margin: "20px 0 0 0",
        minHeight: "542px",
      },
    },

    textOneText: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "150%",
      textAlign: "center",
      letterSpacing: "0.02em",
      color: "#777777",
      margin: "60px auto  0 auto",
      maxWidth: "450px",
    },
    textTwoText: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
      letterSpacing: "0em",
      color: "#777777",
      textAlign: "center",
    },
    blockSkip: { display: "flex", gap: "8px", flexWrap: "wrap" },
    blockSkipDiv: { width: "100%" },
    /////////
    textFinishOne: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.02em",
      textAlign: "center",
      color: "#777777",
    },
    textFinishTwo: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "14px",
      letterSpacing: "0em",
      textAlign: "center",
      color: "#777777",
    },
    buttonSkip: {
      verticalAlign: "middle",
      display: "inline-flex",
      alignItems: "center",
      background: "none",
      padding: "0px",
      border: "none",
      gap: "5px",
    },
    buttonSkipButtonText: {
      fontSize: "13px",
      fontWeight: 600,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "center",
    },
    buttonSkipButtonImg: {
      position: "relative",
      left: "0px",
      transition: "0.2s",
    },
    ///buttonSkip:hover .button_img{position:relative;left:5px;}

    ///////////
    logoImg: {
      margin: "0 auto",
      width: "154.55px",
      height: "64px",
    },
    block: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#FFFFFF",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
      borderRadius: "24px 24px 24px 2px",
      order: 1,
      flexGrow: 0,
      margin: "30px 0",
      "@media (max-width: 1600px)": {
        padding: "30px 24px 30px 24px",
        margin: "25px 0",
        gap: "20px",
      },
    },
    header: {
      maxWidth: "450px",
      height: "25px",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "21px",
      lineHeight: "120%",
      textAlign: "center",
      color: "#231F20",
      flex: "none",
      order: 0,
      flexGrow: 0,
    },

    button: {
      width: "168px",
      padding: "18px 32px 18px 32px",
      borderRadius: "16px 16px 16px 0px",
      gap: "8px",
      background: "#E7E7E7",
      borderTop: "0px",
      borderLeft: "0px",
      borderRight: "0px",
      borderBottom: "0px",
    },
    buttonBlock: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: "0px",
      gap: "24px",
      width: "100%",
      flex: "none",
      flexGrow: 0,
      "@media (max-width: 1600px)": {
        gap: "20px",
      },
    },
    buttonFull: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "450px",
    },
    buttonFulls: {
      width: "100%",
    },
    buttonValue: {
      color: "#ECEBF5",
      borderLeft: "none",
      borderTop: "none",
      borderRight: "none",
      borderBottom: "1px solid #ECEBF5",
      padding: "10px",
      width: "100%",
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: "21px",
      letterSpacing: "0em",
      textAlign: "left",
    },

    textAnd: {
      fontSize: "17px",
      fontWeight: 600,
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "center",
      color: "#231F20",
    },

    buttonGray: {
      background: "#999999",
      color: "#fff",
    },
    textButton: {
      fontSize: "17px",
      fontWeight: 600,
      letterSpacing: "0em",
      textAlign: "center",
      cursor: "pointer",
      "@media (max-width: 1600px)": {
        fontSize: "14px",
      },
    },

    politicText: {
      color: "#777777",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
      letterSpacing: "0em",
      textAlign: "center",
    },
    registrButtom: {
      textAlign: "center",
      width: "96%",
      position: "absolute",
      bottom: "5%",
      maxWidth: "498px",
      margin: "0 auto",
      "@media (max-width: 1600px)": {
        bottom: "initial",
        position: "initial",
        margin: "30px 0 0px 0",
        width: "100%",
      },
    },

    registrButtomText: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.02em",
      textAlign: "center",
      color: "#231F20",
      width: "100%",
      "@media (max-width: 1600px)": {
        fontSize: "14px",
        lineHeight: "22px",
        margin: "0 0 5px 0",
      },
    },
    registrButtomLogin: {
      background: "none",
      border: "none",
      color: "#2E81FF",
      fontSize: "17px",
      fontWeight: 600,
      lineHeight: "24px",
      letterSpacing: "0em",
    },
    RegistrLogonTextButton: { color: "#2E81FF" },
  })
);

export default useStyles;
