import svg1 from "./assets/green-1.svg?raw";
import svg2 from "./assets/green-2.svg?raw";
import svg3 from "./assets/green-3.svg?raw";
import svg4 from "./assets/green-4.svg?raw";

export const getInvolvedSection = {
  title: "Envolva-se",
  subheading1_1: "Junte-se a nós",
  subheading1_2: "Construir um futuro sustentável",
  initiatives: [
    {
      title: "Atividades de extensão comunitária",
      description:
        "Descubra as nossas iniciativas comunitárias que visam a promoção da sensibilização e da educação sobre a vida sustentável. Junte-se a nós para criarmos juntos um impacto positivo.",
      visual: svg2,
    },
    {
      title: "Eventos ecológicos",
      description:
        "Participe nos nossos próximos eventos ecológicos. Desde mutirões de plantação de árvores a workshops sobre ambiente, faça parte do movimento por um planeta mais saudável.",
      visual: svg4,
    },
    {
      title: "Parcerias para a Sustentabilidade",
      description:
        "Explore as nossas parcerias com organizações dedicadas à conservação ambiental. Saiba como pode contribuir para práticas sustentáveis ​​através da colaboração.",
      visual: svg3,
    },
  ],
  visual: "get-involved-section-image.jpg",
  callToAction: "Aja hoje por um amanhã mais verde.",
  button: "Participe nas nossas iniciativas",
};
