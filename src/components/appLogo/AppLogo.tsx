import { Chip, Typography } from "@mui/material";
import { APP_DISPLAY_NAME, ROUTES } from "consts";
import logo from "assets/icons/logo.png";
import { LogoWrapper, ImageWrapper } from "./styled";
import { useNetwork } from "lib/hooks/useNetwork";
import { useNavigatePreserveQuery } from "lib/hooks/useNavigatePreserveQuery";

export const AppLogo = () => {
  const navigate = useNavigatePreserveQuery();
  const { network } = useNetwork();
  return (
    <LogoWrapper onClick={() => navigate(ROUTES.deployer)}>
      <ImageWrapper>
        <img src={logo} alt="Logo" width={32} />
      </ImageWrapper>
      <Typography variant="h4" color="#18D09A" fontSize="28px !important">{APP_DISPLAY_NAME}</Typography>
      {network === "testnet" && <Chip sx={{ ml: 1 }} label="testnet" />}
    </LogoWrapper>
  );
};
