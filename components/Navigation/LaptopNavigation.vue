<template>
  <div class="nav__container">
    <nav>
      <div class="nav__wrapper">
        <div>
          <img
            class="nav__logo"
            src="~/assets/icons/logo.svg"
            alt="Waoo logo"
            title="Logo til waoo.dk"
          />
        </div>

        <ul class="nav__list">
          <li v-for="item in items" :key="item.navLink">
            <a :href="item.navURL" :key="item.navURL" class="nav__anchor">
              {{ item.navLink }}
            </a>
          </li>
        </ul>

        <div class="nav__cart-wrapper">
          <span>Menu</span>
          <div
            class="nav__burger-bar"
            @click="showMobileMenu = !showMobileMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="nav__cart">
            <img
              class="nav__cart-icon"
              src="~/assets/icons/cart.svg"
              alt="Indkøbsskruv"
              title="Indkøbskurv"
            />
          </div>
        </div>
      </div>

      <div class="sidebar__container" :class="{ burgerMenu: showMobileMenu }">
        <div class="sidebar__close" @click="showMobileMenu = !showMobileMenu">
          <span>Luk X</span>
        </div>
        <ul class="sidebar__list">
          <li v-for="item in items" :key="item.navLink" class="sidebar__item">
            <a :href="item.navURL" :key="item.navURL" class="sidebar__anchor">
              {{ item.navLink }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import AnnouncementBar from "~/components/AnnouncementBar.vue";

const OFFSET = 60;

export default {
  OFFSET: OFFSET,
  name: "MobileNavigation",
  components: {
    AnnouncementBar,
  },

  data() {
    return {
      showMobileMenu: false,
      items: [
        { navLink: "Fibernet", navURL: "https://www.waoo.dk/fibernet/" },
        { navLink: "TV", navURL: "https://www.waoo.dk/tv/" },
        { navLink: "Streaming", navURL: "https://www.waoo.dk/streaming/" },
        { navLink: "Telefoni", navURL: "https://www.waoo.dk/telefoni/" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/global.scss";

.nav {
  &__wrapper {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.7rem 0.5rem 1.7rem 0.5rem;
  }

  &__burger-icon {
    width: 26px;
  }

  &__logo {
    width: 75px;
  }

  &__logo-mobile {
    width: 50px;
  }

  &__list {
    display: flex;
    list-style-type: none;
    margin-left: 44px;
  }

  &__anchor {
    padding: 1rem;
    color: $bg-primary-color;
    font-weight: bold;
    margin: 0 10px;
    text-decoration: none;
  }

  &__cart-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 90;
    cursor: pointer;
    font-size: 11px;
    font-weight: 700;
    color: $bg-primary-color;
    transition: opacity 0.2s ease-in-out;
  }

  &__cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: $bg-primary-color;
  }

  &__burger-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: $bg-primary-color;
  }

  &__cart > span {
    display: block;
    width: 20px;
    height: 2px;
    margin: 2px;
    background-color: $bg-tertiary-color;
  }

  &__burger-bar > span {
    display: block;
    width: 20px;
    height: 2px;
    margin: 2px;
    background-color: $bg-tertiary-color;
  }

  &__cart-icon {
    width: 40px;
  }

  &__cart-icon {
    width: 26px;
  }
}

@media screen and (max-width: 850px) {
  .nav {
    &__wrapper {
      display: none;
    }
  }
}
</style>
