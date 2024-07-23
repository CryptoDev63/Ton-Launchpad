import { styled, Box } from "@mui/material";

const SearchBarWrapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  position: "relative",
  display: "flex",
  alignItems: "center",
  margin: "auto",
  padding: "0px 17px",
  paddingRight: 10,
  width: "100%",
  minHeight: 50,
  height: "100%",
  transition: "0.1s all",
  border: "1px solid #18D09A",
  borderRadius: 10,
  background: "#232323",
  [theme.breakpoints.down("md")]: {
    height: 40,
  },
}));

const SearchBarInput = styled("input")(({ theme }) => ({
  flex: 1,
  marginLeft: 10,
  width: "100%",
  fontSize: 16,
  fontWeight: 500,
  outline: "unset",
  fontFamily: "Mulish",
  color: "#18D09A",
  border: "none",
  background: "#232323",
  caretColor: "#18D09A",
  "&::placeholder": {
    color: "#18D09A",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
}));

const SearchResultsWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "calc(100% + 10px)",
  left: 0,

  padding: `${theme.spacing(1)}, ${theme.spacing(2)}`,
  zIndex: 99,

  background: "#232323",
  border: "1px solid #18D09A",
  borderRadius: 10,
  width: "100%",
  maxHeight: 450,
  overflowY: "auto",

  [theme.breakpoints.down("md")]: {
    // display: "none",
  },
}));

const CenteringWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const SearchResultsItem = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  fontSize: 20,
  color: "#18D09A",
  fontWeight: 500,
  height: 30,
  padding: "20px 24px 20px 30px",
  transitionDuration: ".15s",
  "&:hover": {
    cursor: "pointer",
    scale: "1.01",
  },
}));

const IndentlessIcon = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginLeft: 14,
  padding: 0,
}));

export {
  SearchBarWrapper,
  SearchBarInput,
  IndentlessIcon,
  SearchResultsWrapper,
  SearchResultsItem,
  CenteringWrapper,
};
