import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Image from "next/image";
import { IconLink } from "@tabler/icons";
import { useRouter } from "next/router";

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
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – Isla Documentation",
      };
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const config = useConfig();
    const { frontMatter } = config;
    console.log("asd", config);
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={`https://docs.getisla.com${asPath}`} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Your hub to send and receive work requests."
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="icon" href="/favicons/favicon.ico" />
        <meta name="theme-color" content="#ffefe3" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#ff8a0a"
        />
        <meta name="msapplication-TileColor" content="#ffefe3" />
      </>
    );
  },
};

export default config;
