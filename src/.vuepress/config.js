const { description } = require("../../package");

module.exports = {
  markdown: {
    lineNumbers: true,
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Guias",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  dest: "docs",
  base: "/notebook/",
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "icon", href: "/img/star.png" }],
    [
      "link",
      { rel: "icon", href: "/img/icons/favicon.ico", type: "image/x-icon" },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#0575E6" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/img/icons/apple-touch-icon-152x152.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/img/icons/safari-pinned-tab.svg",
        color: "#0575E6",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guias",
        link: "/guide/",
      },
      {
        text: "Código y Herramientas",
        link: "/herramientas/",
      },
      {
        text: "Plantillas Diseño Web",
        link: "/templates/",
      },
      {
        text: "Librerias y FrameWorks",
        link: "/librerias/",
      },
      {
        text: "Plugins",
        link: "/plugins/",
      },
      {
        text: "Tutoriales",
        link: "/tutorials/",
      },
      {
        text: "WordPress",
        link: "/wordpress/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guias",
          collapsable: true,
          children: ["", "git", "ssh", "docker"],
        },
        {
          title: "CSS",
          collapsable: true,
          children: ["css/flexbox.md"],
        },
      ],
      "/herramientas/": [
        {
          title: "Recursos Diseño Web",
          collapsable: true,
          children: [
            "/herramientas/resources-dw/generadores.md",
            "/herramientas/resources-dw/images-icons.md",
            "/herramientas/resources-dw/cdns.md",
          ],
        },
        {
          title: "Web",
          collapsable: true,
          children: ["/herramientas/web-tools.md"],
        },
      ],
      "/templates/": [
        {
          title: "Plantillas",
          collapsable: true,
          children: [""],
        },
        {
          title: "NavBars",
          collapsable: true,
          children: ["navbars/navbar.md", "navbars/navType1.md"],
        },
        {
          title: "Sliders",
          collapsable: true,
          children: ["sliders/fullScreen.md"],
        },
        {
          title: "Decoraciones",
          collapsable: true,
          children: ["decoratives/decoratives-lines.md"],
        },
        {
          title: "Componentes",
          collapsable: true,
          children: ["components/buttons.md"],
        },
        {
          title: "Funciones especiales",
          collapsable: true,
          children: ["functions/waByDate.md"],
        },
      ],
      "/plugins/": [
        {
          title: "Plugins",
          collapsable: true,
          children: [""],
        },
      ],
      "/tutorials/": [
        {
          title: "Wordpress & MarkDown",
          collapsable: true,
          children: [""],
        },
        {
          title: "Linux",
          collapsable: true,
          children: [
            "linux/general.md",
            "linux/arch-linux.md",
            "linux/spotify-adblock.md",
            "linux/img-compress.md",
            "linux/image-convert.md",
            "linux/rar-compress.md",
          ],
        },
        {
          title: "Fedora",
          collapsable: true,
          children: ["linux/fedora/fedora-basics.md"],
        },
        {
          title: "Android",
          collapsable: true,
          children: ["android/android.md"],
        },
      ],
      "/librerias/": [
        {
          title: "Librerias",
          collapsable: true,
          children: [""],
        },
        {
          title: "Animaciones",
          collapsable: true,
          children: ["animaciones.md"],
        },
      ],
      "/wordpress/": [
        {
          title: "Documentación",
          collapsable: true,
          children: [""],
        },
        {
          title: "Básicos",
          collapsable: true,
          children: ["basicos.md"],
        },
        {
          title: "Tema Básico",
          collapsable: true,
          children: [
            "basic-theme/basic-theme.md",
            "basic-theme/functions.md",
            "basic-theme/estilos.md",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/search",
    {
      searchMaxSuggestions: 10,
    },
    "@vuepress/nprogress",
    "@vuepress/medium-zoom",
    {
      selector: "img.zoom-custom-imgs",
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16,
      },
    },
    "vuepress-plugin-container",
    {
      type: "right",
      defaultTitle: "",
    },
    "vuepress-plugin-smooth-scroll",
    "vuepress-plugin-code-copy",
    {
      selector: String,
      align: String,
      color: String,
      backgroundTransition: Boolean,
      backgroundColor: String,
      successText: String,
    },
    "@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: {
        message: "Actualizar",
        buttonText: "ok",
      },
    },
  ],
};
