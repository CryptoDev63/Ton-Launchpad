import { Box, styled } from "@mui/material";

const StyledContainer = styled(Box)({
  width: "100%",
  overflow: "auto",
});

const StyledInputContainer = styled(Box)(({ error }: { error: boolean }) => ({
  width: "100%",
  height: 45,
  display: "flex",
  alignItems: "center",
  background: "rgba(24, 208, 154,0.10)",
  border: "1px solid rgba(24, 208, 154)",
  borderRadius: 10,
  paddingRight: 5,
  transition: "0.2s all",
  "& .base-button": {
    height: "calc(100% - 10px)",
    padding: "0px 15px",
    fontSize: 12,
  },
}));

const StyledInput = styled("input")({
  flex: 1,
  height: "100%",
  border: "unset",
  textIndent: 16,
  background: "transparent",
  outline: "none",
  color: "#fff",
  fontFamily: "Mulish",
  fontSize: 16,
  caretColor: "#18D09A",
  "&::placeholder": {
    color: "#18D09A",
    fontFamily: "Mulish",
    transition: "0.2s all",
  },
  "&:focus": {
    "&::placeholder": {
      opacity: 0,
    },
  },
});

export { StyledInput, StyledInputContainer, StyledContainer };
