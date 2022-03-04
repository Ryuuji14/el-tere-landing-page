import { ReactElement } from "react";
import styled from "@emotion/styled";
import { Box, Flex, Image } from "@chakra-ui/core";
import Wrapper from "@/components/Wrapper";
import { BodyAuto, HeadlineAuto } from "@/components/core/Text";
import { LocationHashEnum } from "@/src/constants";

const BubbleImage = styled(Image)`
  position: absolute;
  object-fit: cover;
  border-radius: 9999px;
`;

function About(): ReactElement {
  return (
    <div id={LocationHashEnum.About}>
      <Wrapper>
        <Flex
          marginTop="8em"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column-reverse", "column-reverse", "row"]}
        >
          <Box
            width={["100%", "100%", "50%"]}
            marginRight={[0, 0, "0.5in"]}
            marginTop={["5em", "5em", 0]}
          >
            <HeadlineAuto marginBottom="16px">
              El mercado terepaima
            </HeadlineAuto>
            <BodyAuto>
            El Mercado Terepaima brinda productos a la comunidad 
            al mejor precio de la mano con la mejor atención y calidad, 
            teniendo en cuenta el bienestar de nuestros clientes y asociados 
            para brindar un satisfactorio servicio que refleje los valores de 
            responsabilidad, competitividad,calidad, transparencia y honestidad 
            de la organización.
            </BodyAuto>
          </Box>
          <Box
            position="relative"
            size={["2.5in", "4in", "3in", "3.5in", "4.5in"]}
          >
            <BubbleImage top="0" left="7%" size="33%" src="/images/2020a.jpg" />
            <BubbleImage
              bottom="4%"
              left="4%"
              size="54%"
              src="/images/2020b.jpg"
            />
            <BubbleImage
              top="8%"
              right="2%"
              size="42%"
              src="/images/2020c.jpg"
            />
            <BubbleImage
              bottom="1%"
              right="2%"
              size="28%"
              src="/images/2020d.jpg"
            />
          </Box>
        </Flex>
      </Wrapper>
    </div>
  );
}

export default About;
