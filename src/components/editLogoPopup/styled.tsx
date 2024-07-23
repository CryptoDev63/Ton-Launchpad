import { Box, Link, styled, Typography } from "@mui/material";
import { CenteringWrapper } from "components/footer/styled";

const PopupTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "#18D09A",
  fontSize: 26,
  fontWeight: 800,
  padding: 0,
  marginBottom: theme.spacing(3),
}));

const PopupDescription = styled(Typography)({
  fontSize: 14,
  paddingLeft: "17px",
  color: "white",
  margin: "8px 0 4px 0",
});

const PopupContent = styled(CenteringWrapper)({
  position: "relative",
  width: "100%",
  padding: "0 16px",
});

const PopupLink = styled(Link)({
  color: "#9CADB6",
  textDecorationColor: "#9CADB6",
  fontWeight: 800,
  fontSize: 14,
  display: "flex",
  alignItems: "center",
});

const LogoTextAreaWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  background: "transparent",
  border: "0.5px solid #18D09A",
  transition: "0.2s all",
  borderRadius: "10px", //40
  overflowWrap: "anywhere",
});

const LogoTextArea = styled("textarea")({
  resize: "none",
  width: "100%",
  flex: 1,
  border: "0.5px solid rgba(114, 138, 150, 0.16)",
  background: "transparent",
  outline: "none",
  color: "#18D09A",
  fontFamily: "Mulish",
  fontSize: 16,
  caretColor: "##18D09A",
  borderRadius: "10px",
  padding: "10px 20px",
  maxHeight: 97,
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export { LogoTextArea, LogoTextAreaWrapper, PopupTitle, PopupContent, PopupDescription, PopupLink };
