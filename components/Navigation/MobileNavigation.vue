<template>
  <div class="nav__container">
    <nav>
      <div class="nav__wrapper-mobile">
        <div
          class="nav__burger-mobile"
          @click="showMobileMenu = !showMobileMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <img
            class="nav__logo-mobile"
            src="~/assets/icons/logo.svg"
            alt="Waoo logo"
            title="Logo til waoo.dk"
          />
        </div>

        <div class="nav__cart-mobile">
          <img
            class="nav__cart-icon-mobile"
            src="~/assets/icons/shopping-cart.svg"
            alt="Indkøbskurv"
            title="Indkøbskurv"
          />
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
const OFFSET = 60;

export default {
  OFFSET: OFFSET,
  name: "MobileNavigation",

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

.burgerMenu {
  display: block !important;
}

.nav {
  &__wrapper-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    transition: 0.1s all ease-out;
    height: 110px;
    width: 100vw;
    background-color: $primary-color;
  }

  &__burger-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }

  &__burger-mobile > span {
    display: block;
    width: 20px;
    height: 2px;
    margin: 3px;
    background-color: $bg-primary-color;
  }

  &__cart-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30px;
    margin-right: 8px;
  }
}

@media screen and (min-width: 850px) {
  .nav {
    &__wrapper-mobile {
      display: none;
    }
  }
}
</style>
