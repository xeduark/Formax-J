// src/data/sponsors.ts
import type { Sponsor, SponsorProduct } from "../types";

export const mainSponsor: Sponsor = {
  id: "cityrun",
  name: "CityRun",
  description:
    "Líder en equipamiento deportivo para patinaje de velocidad. Calzado, protecciones y accesorios de alta calidad para competidores de élite.",
  logo: "https://res.cloudinary.com/cx3z2ry1/image/upload/v1785178467/logocityrun-removebg-preview_l6iwuh.png", // ✅ Tu URL de Cloudinary
  url: "https://cityrun.com",
};

export const sponsorProducts: SponsorProduct[] = [
  {
    id: "patines-pro",
    name: "Patines Pro Speed",
    description: "Botas de fibra de carbono",
    price: "€289",
    icon: "fa-shoe-prints", // ✅ Agregado (icono de Font Awesome)
    color: "orange", // ✅ Agregado (para el color del badge)
    image:
      "https://res.cloudinary.com/cx3z2ry1/image/upload/w_200,q_auto,f_auto/Patines_Pro.png",
  },
  {
    id: "ruedas-110",
    name: "Ruedas 110mm",
    description: "Ruedas de competición",
    price: "€45",
    icon: "fa-circle", // ✅ Agregado (icono de Font Awesome)
    color: "blue", // ✅ Agregado (para el color del badge)
    image:
      "https://res.cloudinary.com/cx3z2ry1/image/upload/w_200,q_auto,f_auto/Ruedas_110.png",
  },
  {
    id: "casco-aero",
    name: "Casco Aerodinámico",
    description: "Certificación CE",
    price: "€89",
    icon: "fa-helmet-battle", // ✅ Agregado (icono de Font Awesome)
    color: "green", // ✅ Agregado (para el color del badge)
    image:
      "https://res.cloudinary.com/cx3z2ry1/image/upload/w_200,q_auto,f_auto/Casco_Aero.png",
  },
  {
    id: "traje-comp",
    name: "Traje de Competición",
    description: "Aerodinámico y ligero",
    price: "€159",
    icon: "fa-tshirt", // ✅ Agregado (icono de Font Awesome)
    color: "purple", // ✅ Agregado (para el color del badge)
    image:
      "https://res.cloudinary.com/cx3z2ry1/image/upload/w_200,q_auto,f_auto/Traje_Comp.png",
  },
];

export const secondarySponsors: Sponsor[] = [
  {
    id: "bikesport",
    name: "BikeSport",
    description: "",
    logo: "https://res.cloudinary.com/cx3z2ry1/image/upload/w_100,q_auto,f_auto/BikeSport_Logo.png",
    url: "#",
  },
  {
    id: "vitahealth",
    name: "VitaHealth",
    description: "",
    logo: "https://res.cloudinary.com/cx3z2ry1/image/upload/w_100,q_auto,f_auto/VitaHealth_Logo.png",
    url: "#",
  },
  {
    id: "aquapure",
    name: "AquaPure",
    description: "",
    logo: "https://res.cloudinary.com/cx3z2ry1/image/upload/w_100,q_auto,f_auto/AquaPure_Logo.png",
    url: "#",
  },
  {
    id: "safeguard",
    name: "SafeGuard",
    description: "",
    logo: "https://res.cloudinary.com/cx3z2ry1/image/upload/w_100,q_auto,f_auto/SafeGuard_Logo.png",
    url: "#",
  },
];
