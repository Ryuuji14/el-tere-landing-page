import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export const styles = {
  paddingX: ["0.25in", "0.5in", "0.75in", "1.25in"],
  navBarOffset: 69.2,
  sectionTopMargin: "8em",
};

export enum LocationHashEnum {
  About = "about",
  Sponsors = "sponsors",
  Challenges = "challenges",
  FAQ = "faq",
}

export const locations: { href: string; label: string }[] = [
  { href: `#${LocationHashEnum.About}`, label: "Quienes somos?" },
  { href: `#${LocationHashEnum.Sponsors}`, label: "Comercios" },
  { href: `#${LocationHashEnum.Challenges}`, label: "Eventos" },
  { href: `#${LocationHashEnum.FAQ}`, label: "Preguntas Frecuentes" },
];

export const socials: { icon: IconDefinition; href: string }[] = [
  { icon: faFacebookSquare, href: "#" },
  { icon: faInstagram, href: "#" },
  { icon: faTwitterSquare, href: "#" },
];
