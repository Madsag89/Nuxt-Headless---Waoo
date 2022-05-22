<template>
  <div class="nav__container">

    <AnnouncementBar />

    <Mobile-navigation  />

    <Laptop-navigation />


  </div>
</template>

<script>
import AnnouncementBar from "~/components/AnnouncementBar.vue";
import MobileNavigation from "~/components/Navigation/MobileNavigation.vue";
import LaptopNavigation from "~/components/Navigation/LaptopNavigation.vue";

const OFFSET = 60;

export default {
  OFFSET: OFFSET,
  name: "Navigation",
  components: {
    AnnouncementBar,
    MobileNavigation,
    LaptopNavigation,

    
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.nav {
  /* --- Mobile nav --- */
  &__container {
    background-color: $primary-color;
    align-items: center;
  }
}

</style>
