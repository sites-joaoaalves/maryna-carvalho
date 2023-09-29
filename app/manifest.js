export default function manifest() {
  return {
    name: "Maryna Carvalho Advocacia",
    short_name: "Maryna Carvalho Advocacia",
    description: "Advocacia especializada em Direito de Família e Sucessões",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
        purpose: "any maskable",
      },
    ],
  };
}
