import { ReactElement } from "react";
import styled from "@emotion/styled";
import { Box, Divider, Flex, Link } from "@chakra-ui/core";
import { Headline, Body, Caption } from "@/components/core/Text";
import EmailInput from "@/components/EmailInput";
import theme from "@/src/theme";
import { socials } from "@/src/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "@/components/Wrapper";

const Wordmark = styled(Headline)`
  font-family: "Harabara";
  font-size: 32px;
  line-height: 100%;
  margin-bottom: 4px;
`;

const GreyCaption = styled(Caption)`
  color: grey;
`;

const footerItemMarginX = "32px";
const footerItemMarginY = ["16px", "16px", "16px", 0];

const FooterLink = styled(Link)`
  font-family: Inter;
  font-weight: normal;
  font-size: 12px;
  color: ${theme.colors.brand.background_on};
`;

const FooterText = styled(Body)`
  font-size: 12px;
`;

function Footer(): ReactElement {
  return (
    <>
      <Wrapper>
        <footer>
          <Box paddingBottom="30vw">
            <Divider
              marginTop={["1in", "1.5in", "2in", "2.5in"]}
              marginBottom={["0.4in", "0.6in", "0.8in", "1in"]}
              borderColor="#dbdbdb"
            />
            <Flex
              direction={["column", "column", "row", "row"]}
              marginBottom={["0.4in", "0.4in", "0.8in", "1.5in"]}
              align="center"
              justify="space-between"
            >
              <Box textAlign={["center", "center", "left", "left"]}>
                <Wordmark>El Tere</Wordmark>
                <GreyCaption marginBottom={["24px", "24px", 0]}>
                Tu mejor aliado para hacer mercado.
                </GreyCaption>
              </Box>
              <EmailInput />
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              direction={["column", "column", "column", "row"]}
            >
              <Flex
                direction={["column", "column", "column", "row"]}
                textAlign={["center", "center", "center", "left"]}
              >
                <FooterLink
                  marginY={footerItemMarginY}
                  href="https://github.com/Ryuuji14/el-tere-landing-page"
                  isExternal
                >
                  GitHub
                </FooterLink>
              </Flex>
              <Flex direction="row" marginY={["24px", "24px", "24px", 0]}>
                {socials.map(({ href, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    isExternal
                    marginX={[
                      "16px",
                      "16px",
                      "16px",
                      "16px",
                      footerItemMarginX,
                    ]}
                  >
                    <FontAwesomeIcon width="20px" icon={icon} />
                  </Link>
                ))}
              </Flex>
              <FooterText>Presentado por el equipo Aurora.</FooterText>
            </Flex>
          </Box>
        </footer>
      </Wrapper>
    </>
  );
}

export default Footer;
