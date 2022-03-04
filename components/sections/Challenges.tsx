import { ReactElement } from "react";
import { LocationHashEnum, styles } from "@/src/constants";
import { Box, Grid } from "@chakra-ui/core";
import Wrapper from "@/components/Wrapper";
import { HeadlineAuto } from "@/components/core/Text";
import ChallengeItem, { IChallengeItem } from "@/components/ChallengeItem";

import CommunityIcon from "../svgs/community.svg";
import EducationIcon from "../svgs/education.svg";
import HeartIcon from "../svgs/heartbeat.svg";
import ShopIcon from "../svgs/shop.svg";

const challenges: IChallengeItem[] = [
  {
    title: "Salud para todos",
    description: `Recaudar fondos de las de los comercios partipantes para instituciones de salud publicas.`,
    Icon: HeartIcon,
  },
  {
    title: "Educación para todos",
    description: `Recaudar fondos de las de los comercios partipantes para instituciones de educación publicas.`,
    Icon: EducationIcon,
  },
  {
    title: "Comunidad",
    description: `Evento comunitario todos los domingos a las 10:00 AM.`,
    Icon: CommunityIcon,
  },
  {
    title: "Emprendimiento",
    description: `Apoyo a los adjudicatarios de los locales, que muestran sus nuevos emprendimientos.`,
    Icon: ShopIcon,
  },
];

function Challenges(): ReactElement {
  return (
    <Box
      id={LocationHashEnum.Challenges}
      marginTop={[styles.sectionTopMargin, styles.sectionTopMargin, "2in"]}
    >
      <Wrapper>
        <HeadlineAuto marginBottom={["2rem", "2rem", "3rem"]}>
          Eventos
        </HeadlineAuto>
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr", "1fr", "1fr 1fr"]}
          gap="2rem 4rem"
        >
          {challenges.map((challenge) => (
            <ChallengeItem key={challenge.title} {...challenge} />
          ))}
        </Grid>
      </Wrapper>
    </Box>
  );
}

export default Challenges;
