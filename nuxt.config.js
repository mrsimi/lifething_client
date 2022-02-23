export default {
    head: {
      titleTemplate: 'LifeThing',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Meta description' }
      ], 
      link: [
          { rel: 'preconnect', href:'https://fonts.googleapis.com'}, 
          { rel:"preconnect", href:"https://fonts.gstatic.com" ,crossorigin:true},
          { href: "https://fonts.googleapis.com/css2?family=Inter&display=swap", rel: "stylesheet"}
      ]
    }, 
    buildModules: [
        '@nuxt/postcss8',
        // ...
    ],
    build: {
        postcss: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
    },
    css: [
        '@/assets/css/main.css',
    ],
    modules:[
      '@nuxtjs/axios',
      '@nuxtjs/toast',
    ], 
    axios:{
      baseURL:'https://localhost:5001/api/'
    }
};

