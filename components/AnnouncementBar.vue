<template>
  <div class="announcement">
    <p class="announcement__title">
      Hvilken mobilpakke passer til dine behov?
      <span>Tag testen her og find svaret.</span>
    </p>
  </div>
</template>

<script>
import "../assets/scss/variables.scss";
export default {
  name: "TopHeader",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

p {
  margin: 0;
}

.announcement {
  top: 0;
  background-color: $secondary-color;

  &__title {
    color: white;
    padding: 0.8rem;
    font-size: 14px;
    text-align: center;

    span {
      text-decoration: underline;
    }
  }
}
</style>
