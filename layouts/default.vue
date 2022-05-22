<template>
  <div>
    <header>
      <Navigation />
      <Hero />
    </header>
    <main>
      <Introduction />
      <Form />
      <Posts />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation/Navigation.vue";
import Footer from "~/components/Footer.vue";
import Introduction from "~/components/Introduction.vue";
import Form from "~/components/Form.vue";
import Hero from "~/components/Hero.vue";
import Posts from "~/components/Posts.vue";

export default {
  components: {
    Navigation,
    Footer,
    Introduction,
    Form,
    Hero,
    Posts
  },
  data() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'http://waoo.madsaj.dk/',
        }
      ]
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #fff;
}

h1,
h2,
h3 {
  font-family: "Oswald", sans-serif;
  font-weight: normal;
  text-transform: uppercase;
}

p {
  line-height: 1.5;
}

.individual h3 {
  margin: 2em 0 25px;
}

h1 {
  margin-bottom: 30px;
  text-align: center;
}

img {
  width: 100%;
}

video {
  width: 100%;
  margin: 25px 0;
}

small {
  color: #9d5615;
}

pre,
code {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  background: #eee;
  border-radius: 4px;
}

pre {
  padding: 8px 10px;
}

code {
  padding: 2px 0;
  line-height: 1.5;
}

p {
  margin: 15px 0 20px;
}
</style>
