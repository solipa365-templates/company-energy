import imgGrid from "./assets/inno-grid.webp";
import imgSolar from "./assets/inno-panel.webp";
import imgWind from "./assets/inno-wind.webp";

export const innovationsSection = {
  title: "Últimas inovações",
  subheading1_1: "Descubra a nossa tecnologia de ponta",
  subheading1_2: "Tecnologias de energia verde",
  innovations: [
    {
      title: "Integração de redes inteligentes",
      description:
        "Revolucione a distribuição de energia com a nossa tecnologia de redes inteligentes, otimizando a eficiência, minimizando o desperdício e adaptando-se às flutuações da procura. Mantenha-se conectado com soluções inovadoras para um ecossistema energético sustentável e económico. Abrace o futuro com a nossa integração de redes inteligentes de ponta, melhorando a fiabilidade e abrindo caminho para a eficiência e a sustentabilidade.",
      visual: imgGrid,
    },
    {
      title: "Design avançado de painéis solares",
      description:
        "Aumente a eficiência da sua energia solar com os nossos painéis solares de última geração. As nossas tecnologias inovadoras captam mais luz solar, garantindo a máxima produção de energia para a sua casa ou empresa. Experimente uma maior sustentabilidade e um aumento da produção de energia com as nossas soluções solares avançadas.",
      visual: imgSolar,
    },
    {
      title: "Turbinas eólicas de última geração",
      description:
        "Transforme a sua experiência com a energia eólica com as nossas turbinas eólicas de última geração. O nosso design elegante, a eficiência melhorada e o impacto ambiental mínimo reforçam o nosso compromisso com a inovação. Eleve a sua jornada rumo à energia sustentável com soluções eólicas de ponta que priorizam tanto o desempenho como a responsabilidade ambiental.",
      visual: imgWind,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Descubra o futuro da energia verde com COMPANY Energy",
  button: "Saber mais",
};
