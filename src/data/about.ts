import type { AboutData } from "../types";

export const aboutData: AboutData = {
  badge: "Sobre Nosotros",
  title:
    ' Formación máxima<span class="gradient-text"> a través del deporte</span>',
  description:
    "En el Club Deportivo FORMAX-J construimos procesos de formación integral, modelando excelentes personas y grandes deportistas.",
  images: [
    "https://res.cloudinary.com/cx3z2ry1/image/upload/v1785184161/ni%C3%B1apatines_seylrj.jpg",
    "https://res.cloudinary.com/cx3z2ry1/image/upload/v1785184161/ni%C3%B1apatinesnegros_pp3cia.jpg",
    "https://res.cloudinary.com/cx3z2ry1/image/upload/v1785184160/patinespronegros_ubo62r.jpg",
    "https://res.cloudinary.com/cx3z2ry1/image/upload/v1783628803/hero_n9nnbb.jpg",
  ],
  features: [
    {
      icon: "fa-child",
      title: "Educación Física",
      description:
        "La Educación Física es la base para la formación integral de la persona, y mediante el desarrollo de las capacidades físicas, motrices y coordinativas se favorece el conocimiento corporal, el dominio del movimiento, la autonomía y la construcción de hábitos positivos para la vida.",
      color: "green",
    },
    {
      icon: "fa-graduation-cap",
      title: "Escuela Básica",
      description:
        "Cada aprendizaje se construye de manera progresiva, respetando las características y el ritmo de cada deportista.",
      color: "yellow",
    },
    {
      icon: "fa-running",
      title: "Formación Máxima",
      description:
        "A través de la disciplina, la constancia y el compromiso, acompañamos al deportista en la construcción de un proceso que le permita avanzar desde la formación deportiva hacia la especialización y el alto rendimiento.",
      color: "blue",
    },
    {
      icon: "fa-trophy",
      title: "Alto rendimiento",
      description:
        "La planificación, la preparación física, el perfeccionamiento técnico y la experiencia competitiva se integran para que cada deportista pueda desarrollar su potencial y alcanzar su máximo nivel de rendimiento.",
      color: "purple",
    },
  ],
};
