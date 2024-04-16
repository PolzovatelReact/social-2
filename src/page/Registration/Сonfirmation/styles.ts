import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    body: {
      background: "#F5F5FA",
      margin: "0 auto",
    },
    Content: {
      height: "100vh",
      maxWidth: "498px",
      margin: "0 auto",
      width: "96%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    AnketaForm: {
      textAlign: "center",
      maxWidth: "498px",
      margin: "0 auto",
      position: "absolute",
      top: "10%",
      width: "90%",
    },
    logoImg: { margin: "0 auto", width: "154.55px", height: "64px" },
    FormTextOneText: {
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
    FormTextTwo: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
      letterSpacing: "0em",
      color: "#777777",
      textAlign: "center",
    },

    anketaFormBlock: {
      display: "flex",
      flexDirection: "column",
      aligntems: "center",
      padding: "32px 24px 40px 24px",
      gap: "24px",
      background: "#FFFFFF",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
      borderRadius: "24px 24px 24px 2px",
      order: 1,
      flexGrow: 0,
      margin: "30px 0",
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

    textFinishOne: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.02em",
      textAlign: "center",
      color: "#777777",
    },

    buttonBlock: {
      display: "flex",
      flexdirection: "row",
      alignItems: "flex-start",
      padding: "0px",
      gap: "24px",
      width: "100%",
      flex: "none",
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

    buttonFull: { display: "flex", flexWrap: "wrap", maxWidth: "450px" },

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

    buttonFulls: {
      width: "100%",
    },

    textButton: {
      fontSize: "17px",
      fontWeight: 600,
      letterSpacing: "0em",
      textAlign: "center",
      cursor: "pointer",
    },

    blockNoCode: {
      textAlign: "center",
    },

    buttonNoCode: {
      border: "none",
      background: "none",
      fontSize: "13px",
      fontWeight: 600,
      lineHeight: "18px",
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
    },

    registrButtomText: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.02em",
      textAlign: "center",
      color: "#231F20",
      width: "100%",
      margin: "0 0 15px 0",
    },

    registrButtomLogin: {
      background: "none",
      border: "none",
      color: "#2E81FF",
      fontSize: "17px",
      fontWeight: 600,
      lineheight: "24px",
      letterSpacing: "0em",
    },
  })
);

export default useStyles;
