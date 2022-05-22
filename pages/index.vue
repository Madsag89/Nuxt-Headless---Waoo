<template>
  <div>
    <section class="posts">
      <div class="posts__container">
        <div
          class="post"
          v-for="post in posts.slice().reverse()"
          :key="post.id"
        >
          <div class="post__wrapper">
            <div class="post__content">
              <h2 class="post__title" v-html="post.title.rendered"></h2>
              <div class="post__text" v-html="post.content.rendered"></div>
            </div>
            <div class="post__image-container">
              <img
                class="post__image"
                :src="post.acf.image.url"
                loading="lazy"
                :alt="post.acf.image.alt"
                :title="post.acf.image.title"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import Form from "~/components/Form.vue";

export default {
  head: {
    htmlAttrs: {
      lang: "da",
    },
    meta: [
      { hid: "robots", name: "robots", content: "noindex" },
      { hid: "robots", name: "robots", content: "nofollow" },
    ],
  },
  components: {
    Hero,
    Form,
  },
  data() {
    return {
      selectedTag: null,
      activeClass: "active",
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  created() {
    this.$store.dispatch("getPosts");
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.figure {
  display: none;
}

.wp-block-image .size-full {
  display: none;
}

.post {
  //Background-colors of posts
  &:nth-of-type(2n + 1) {
    background-color: $bg-secondary-color;
  }

  &:nth-of-type(6) {
    background-color: $bg-tertiary-color;
    color: white !important;
  }

  &__wrapper {
    padding: $spacer-m $base-space $spacer-m $base-space;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
  }

  &__content {
    max-width: 650px;
  }

  &__title {
    font-size: $primary-heading-xl;
    &:nth-of-type(7) {
      background-color: $bg-primary-color;
    }
    &p {
      color: #fa4c06;
    }
  }

  &__text {
    &:nth-of-type(6) {
      background-color: $bg-tertiary-color;
      color: white !important;
    }
  }

  &__image {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  ul {
    list-style: none;
  }

  ul li::before {
    content: "\2022";
    color: $secondary-color;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
}

@media screen and (min-width: 1200px) {
  .post {
    &__wrapper {
      flex-direction: row;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;
      max-width: 1300px;
      padding: $spacer-xl $base-space $spacer-xl $base-space;

      &:nth-child(2) {
        flex-direction: row-reverse;
      }
    }
    &__content {
      width: 50%;
    }

    &__image-container {
      width: 43%;
    }
  }
}

div:nth-child(6) > div > div.post__content > div {
  color: white;
}

@media screen and (min-width: 1201px) {
  section.posts > div > div:nth-child(2n) > div {
    flex-direction: row-reverse;
  }
}
</style>
