import electroHub from "../assets/projects/ElectroHub.jpg";
import alAmiraFurniture from "../assets/projects/AlAmiraFurniture.jpg";
import netflixClone from "../assets/projects/NetflixClone.jpg";
import smartMedTrack from "../assets/projects/SmartMedTrack.jpg";

const projects = [
  {
    id: 1,
    title: "ElectroHub",
    description:
      "A modern e-commerce website for browsing electronic products with a clean and responsive user interface.",
    technologies: ["React", "CSS", "JavaScript"],
    image: electroHub,
    github: "https://github.com/",
    demo: "https://mm34556464575-spec.github.io/ElectroHub12/",
  },
  {
    id: 2,
    title: "Al Amira Furniture",
    description:
      "A modern furniture store website with a responsive design and product management features.",
    technologies: ["React", "CSS", "JavaScript"],
    image: alAmiraFurniture,
    github: "https://github.com/mm34556464575-spec/amira-furniture/",
    demo: "https://mm34556464575-spec.github.io/amira-furniture/",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A modern Netflix-inspired web application with a responsive interface and interactive UI.",
    technologies: ["React", "Vite", "CSS"],
    image: netflixClone,
    github: "https://github.com/",
    demo: "#",
  },
  {
    id: 4,
    title: "SmartMedTrack",
    description:
      "A smart system designed for monitoring medical devices and helping track their status.",
    technologies: ["React", "JavaScript", "AI"],
    image: smartMedTrack,
    github: "https://github.com/",
    demo: "https://smartmedtrack.vercel.app/",
  },
];

export default projects;