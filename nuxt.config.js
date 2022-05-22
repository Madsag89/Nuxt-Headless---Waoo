import axios from "axios"
let dynamicRoutes = () => {
  const routes = axios
    .get("http://madsaj.dk/wp-json/wp/v2/posts")
    .then(res => {
      return res.data.map(post => `/blog/${post.slug}`)
    })
  console.log(routes)
  return routes
}

export default {
  target: 'static',
  router: {
    base: 'Madsag89.github.io',
  },
  head: {
    htmlAttrs: {
      lang: 'da'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: "width=device-width, initial-scale=1" },
      { hid: 'title', name: 'title', content: "Indretning af hjemmekontor • Få en guide med inspiration her"},
      { hid: 'description', name: "description", content: "Hjemmekontoret kræver en indretning, der passer til dine arbejdsbehov. Få inspiration og vores bedste tips i denne guide"},
      { hid: 'canonical', rel: 'canonical', href: 'http://madsag89.github.io/'},
      
      { hid: 'theme-color', content: "#ffffff"},
      { hid: 'application-name', content: "Waoo"},

      { hid: 'robots', name: 'robots',  content: 'noindex'},
      { hid: 'robots', name: 'robots', content: 'nofollow'},

      { hid: 'og:title', content: "Indretning af hjemmekontor • Få en guide med inspiration her"},
      { hid: 'og:site_name', content: "Det ultimative hjemmekontor"},
      { hid: 'og:url', content: 'madsag89.github.io'},
      { hid: 'og:description', content: "Hjemmekontoret kræver en indretning, der passer til dine arbejdsbehov. Få inspiration og vores bedste tips i denne guide"},
      { hid: 'og:type', content: "website"},
      { hid: 'og:image', content: "http://madsaj.dk/wp-content/uploads/2022/04/waoowaoowaoo.png"},
      { property: 'og:locale', content: 'da_DA'
          }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Oswald:wght@700&display=swap"
          
      }
    ]
  },

  loading: { color: "#fff" },
  css: [
    "~/assets/scss/variables.scss",
    "~/assets/scss/global.scss"
  ],

  plugins: [
  ],
  generate: {
    routes: dynamicRoutes
  },

  buildModules: [
     'nuxt-vite'
  ],

  build: {

    extend(config, ctx) {}
  }
}

