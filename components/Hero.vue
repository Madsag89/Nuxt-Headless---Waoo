<template>
  <div class="hero">
    <h1 class="hero__title">
      {{ tagline }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagline: "Det ultimative hjemmekontor",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.hero {
  background-color: $primary-color;
  padding: 3rem 0rem 6rem 0rem;

  &__title{
    font-size: 40px;
  color: white;
  position: relative;

  }
}


@media screen and (min-width: 992px) {
  h1 {
    font-size: 60px;
  }
}
</style>
