import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import { IconLink } from "@tabler/icons";

const config: DocsThemeConfig = {
  logo: (
    <Image
      alt="Isla Logo"
      src="https://getisla.com/logos/isla.png"
      height={27}
      width={50}
    />
  ),
  project: {
    link: "https://getisla.com",
    icon: IconLink,
  },
  chat: {
    icon: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: "Your hub to send and receive work requests.",
  },
  editLink: { component: null },
};

export default config;
