import { useTonAddress } from "@tonconnect/ui-react";
import { Screen, ScreenContent } from "components/Screen";
import { useJettonAddress } from "hooks/useJettonAddress";
import useNotification from "hooks/useNotification";
import { Token } from "pages/jetton/dataRow/token";
import { StyledContainer } from "pages/jetton/styled";
import { Wallet } from "pages/jetton/wallet";
import { useCallback, useEffect, useState } from "react";
import useJettonStore from "store/jetton-store/useJettonStore";
import FaultyDeploy from "./FaultyDeploy";
import { Box } from "@mui/material";
import { SearchBar } from "components/header/headerSearchBar";
import { HeaderExampleLink, HeaderExampleText, HeaderExampleTextWrapper } from "components/header/styled";
import { EXAMPLE_ADDRESS } from "consts";
import { ScreenHeading } from "pages/deployer/styles";

export const Jetton = () => {
  const [example, setExample] = useState<string | undefined>(undefined);
  
  const { getJettonDetails } = useJettonStore();
  const { isAddressEmpty, jettonAddress } = useJettonAddress();
  const { showNotification } = useNotification();
  const address = useTonAddress();

  useEffect(() => {
    if (jettonAddress) {
      getJettonDetails();
    }
  }, [jettonAddress, address]);

  useEffect(() => {
    !isAddressEmpty && !jettonAddress && showNotification("Invalid jetton address", "error");
  }, []);

  const resetExample = useCallback(() => {
    setExample(undefined);
  }, []);

  return (
    <Screen>
      <Box mb={3} mt={3.75}>
        <ScreenHeading variant="h5">Check Jetton Details</ScreenHeading>
      </Box>
      <Box sx={{ width: "100%" }}>
        <SearchBar
          example={example}
          resetExample={resetExample}
          // closeMenu={() => setMobileMenu(false)}
        />
        <HeaderExampleTextWrapper>
          <HeaderExampleText>
            Enter an existing Jetton contract address.
            <HeaderExampleLink variant="body2" onClick={() => setExample(EXAMPLE_ADDRESS)}>
              {" "}
              example
            </HeaderExampleLink>
          </HeaderExampleText>
        </HeaderExampleTextWrapper>
      </Box>
      <FaultyDeploy />
      <ScreenContent>
        <StyledContainer>
          <Token />
          <Wallet />
        </StyledContainer>
      </ScreenContent>
    </Screen>
  );
};
