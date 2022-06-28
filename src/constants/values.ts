
interface HomeImgInfos {
  src: string;
  description: string;
}

export const homeImgInfos: HomeImgInfos[] = [
  {
    src: "/assets/cocktail.svg",
    description: "Vida noturna",
  },
  {
    src: "/assets/surf.svg",
    description: "Praia",
  },
  {
    src: "/assets/building.svg",
    description: "Moderno"
  },
  {
    src: "/assets/museum.svg",
    description: "Clássico"
  },
  {
    src: "/assets/earth.svg",
    description: "e mais..."
  }

]

interface HomeCarousel {
  src: string;
  continent: string;
  text: string;
  href: string;
}

export const ContinentItems: HomeCarousel[] = [
  {
    src: "/assets/Europe.png",
    continent: "Europa",
    text: "O continente mais antigo",
    href: "europa"
  },
  {
    src: "/assets/brazil.jpg",
    continent: "América do Sul",
    text: "O continente mais colorido",
    href: "america-do-sul"
  },
  {
    src: "/assets/canada.jpg",
    continent: "América do Norte",
    text: "Neve e paisagens lindas",
    href: "america-do-norte"
  },
  {
    src: "/assets/japan.jpg",
    continent: "Ásia",
    text: "Tradição e natureza",
    href: "asia"
  },
]
