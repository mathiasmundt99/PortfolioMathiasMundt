export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  comingSoon: boolean;

  overview: {
    heading: string;
    text: string;
  };

  metadata: {
    label: string;
    value: string;
  }[];

  technologies: string[];

  images: {
    hero: string;
  };

  sections: {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
  }[];

  takeaways: {
    heading: string;
    items: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "weather-app",
    title: "Weather App",
    subtitle: "Modern weather application with animations and favourites.",
    description:
      "A modern weather application built with Vue, Nuxt and GSAP, focusing on smooth animations and an intuitive user experience.",
      comingSoon: true,

    overview: {
      heading: "Making weather information feel simple and engaging.",
      text: "",
    },

    metadata: [
      {
        label: "Role",
        value: "Frontend Developer",
      },
      {
        label: "Duration",
        value: "",
      },
      {
        label: "Team",
        value: "",
      },
    ],

    technologies: ["Vue", "Nuxt", "GSAP"],

    images: {
      hero: "/images/weather-placeholder.jpg",
    },

    sections: [
      {
        title: "Current Weather",
        description: "",
        image: "/images/weather-placeholder.jpg",
        imageAlt: "Current weather screenshot",
      },
      {
        title: "Forecast",
        description: "",
        image: "/images/weather-placeholder.jpg",
        imageAlt: "Forecast screenshot",
      },
      {
        title: "Animations",
        description: "",
        image: "/images/weather-placeholder.jpg",
        imageAlt: "Animations screenshot",
      },
    ],

    takeaways: {
      heading: "Key Takeaways",
      items: ["", "", ""],
    },
  },

  {
    slug: "alai",
    title: "Alai",
    subtitle:
      "Live football analytics platform currently being used in the World Cup",
    description:
      "Live football analytics platform built with React, Next.js and TypeScript. Focused on data visualization, dashboards and modern UX.",
      comingSoon: false,

    overview: {
      heading: "Helping football clubs make better decisions through data.",
      text: "During my time at Alai, I worked on building a live football analytics platform that is currently being used in the World Cup to provide real-time insights to football clubs such as the Portugese National Team. My work focused on building modern dashboards, interactive graphs and reusable components to visualize performance data in real time.",
    },

    metadata: [
      {
        label: "Role",
        value: "Frontend Developer",
      },
      {
        label: "Duration",
        value: "3 months",
      },
      {
        label: "Team",
        value: "Startup",
      },
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    images: {
      hero: "/images/alai_hero_case.jpg",
    },

    sections: [
      {
        title: "Dashboard",
        description:
          "Built modern dashboards that allow coaches and analysts to quickly understand match data.",
        image: "/images/alai_dashboard.png",
        imageAlt: "Dashboard screenshot",
      },
      {
        title: "Interactive Graphs",
        description:
          "Developed reusable graph components to visualize performance data in real time.",
        image: "/images/alai_graph.png",
        imageAlt: "Interactive graphs screenshot",
      },
      {
        title: "Section Under construction",
        description:
          "Under construction, but the platform is currently being used in the World Cup to provide live analytics to football clubs such as the Portugese National Team.",
        image: "/images/alai_wc.jpg",
        imageAlt: "Component library screenshot",
      },
    ],

    takeaways: {
      heading: "Key Takeaways",
      items: ["Gained experience using React, Next.js, Tailwind CSS and TypeScript in a real project", "Improved understanding of modern frontend development practices", "Gained experience working with data visualization using libraries like D3.js and Chart.js"],
    },
  },
];