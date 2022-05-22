<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__content-container">
        <div class="footer__content">
          <h3 class="footer__heading">Kundeservice</h3>
          <ul class="footer__list">
            <li class="footer__item">
              <a class="footer__anchor">Spørgsmål og svar</a>
            </li>
            <li class="footer__item">
              <a class="footer__anchor">Vejledninger og vilkår</a>
            </li>
            <li class="footer__item">
              <a class="footer__anchor">Supportfilm</a>
            </li>
            <li class="footer__item">
              <a class="footer__anchor">Kan jeg få fiber</a>
            </li>

            <li class="footer__item">
              <a class="footer__anchor">Login Waoo Mobil</a>
            </li>
          </ul>
        </div>

        <div class="footer-content">
          <h3 class="footer__heading">Produkter</h3>
          <ul class="footer__list">
            <li class="footer__item">
              <a class="footer__anchor">Fiberbredbånd Produkter</a>
            </li>
            <li class="footer__item">
              <a class="footer__anchor">TV Produkter</a>
            </li>
            <li class="footer__item">
              <a class="footer__anchor">Telefoni</a>
            </li>
            <li class="footer__item">
              <a class="footer__anchor">Hastighedstest</a>
            </li>

            <li class="footer__item">
              <a class="footer__anchor">Login Waoo Mobil</a>
            </li>
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__heading">Om Waoo</h3>
          <ul class="footer__list">
            <li class="footer__item">
              <a class="footer__anchor">Presse</a>
            </li>
            <li class="footer__item">
              <a class="footer__anchor">Ledelse</a>
            </li>
            <li class="footer__item">
              <a class="footer__anchor">Job</a>
            </li>
            <li class="footer__item">
              <a class="footer__anchor">Om Waoo</a>
            </li>
            <li class="footer__item">
              <a class="footer__anchor">Persondata- <br />og coockiepolitik</a>
            </li>
            <li class="footer__item">
              <a class="footer__anchor">Netneutralitet</a>
            </li>
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__heading">Kontakt</h3>
          <ul class="footer__list">
            <li class="footer__item">
              <a class="footer__anchor">Kontakt kundeservice</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom-footer">
        <div class="footer__copyright">
          <img
            class="footer__image"
            src="~/assets/images/waoo-logo-footer.png"
          />
          <p>Copyright © 2022 Waoo. Alle rettigheder forbeholdes.</p>
        </div>
        <div class="footer__socials">
          <a class="footer__reference">
            <img
              class="footer__social-image"
              src="~/assets/icons/email.png"
              alt="E-mail icon"
            />
          </a>

          <a
            class="footer__reference"
            href="https://www.facebook.com/waoo.dk/?ref=br_rs"
            target="_blanck"
          >
            <img
              class="footer__social-image"
              src="~/assets/icons/facebook.png"
              alt="Facebook icon"
            />
          </a>

          <a
            class="footer__reference"
            href="https://www.instagram.com/waoo.dk/?hl=en"
            target="_blanck"
          >
            <img
              class="footer__social-image"
              src="~/assets/icons/instagram.png"
              alt="Instagram icon"
            />
          </a>
          <a
            class="footer__reference"
            href="https://www.youtube.com/user/WaooFiberbredbaand"
            target="_blanck"
          >
            <img
              class="footer__social-image"
              src="~/assets/icons/youtube.png"
              alt="Youtube icon"
            />
          </a>
          <a
            class="footer__reference"
            href="https://www.linkedin.com/company/waoo-/"
            target="_blanck"
          >
            <img
              class="footer__social-image"
              src="~/assets/icons/linkedin.png"
              alt="Linkedin icon"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  components: {},

  data() {
    return {
      items: [
        {
          footerItem: "Spørgsmål og svar",
          footerItemUrl: "https://www.waoo.dk/kundeservice/sporgsmal-og-svar/",
          footerItem: "Vejledninger og vilkår",
          footerItemUrl: "https://www.waoo.dk/kundeservice/sporgsmal-og-svar/",
          footerItem: "Supportfilm",
          footerItemUrl: "https://www.waoo.dk/kundeservice/sporgsmal-og-svar/",
          footerItem: "Vejledninger og vilkår",
          footerItemUrl: "https://www.waoo.dk/kundeservice/sporgsmal-og-svar/",
          footerHeading: "Kundeservice",
        },
        {
          footerHeading: "Produkter",
          footerItem: "Spørgsmål og svar",
          footerItemUrl: "https://www.waoo.dk/kundeservice/sporgsmal-og-svar/",
          footerItem: "Vejledninger og vilkår",
          footerItemUrl: "https://www.waoo.dk/kundeservice/sporgsmal-og-svar/",
          footerItem: "Supportfilm",
          footerItemUrl: "https://www.waoo.dk/kundeservice/sporgsmal-og-svar/",
          footerItem: "Vejledninger og vilkår",
          footerItemUrl: "https://www.waoo.dk/kundeservice/sporgsmal-og-svar/",
        },

        // { footerItemKundeservice: "Spørgsmål og svar",

        // },
        // { footerItemKundeservice: "Vejledninger og vilkår" },
        // { footerItemKundeservice: "Supportfilm" },
        // { footerItemKundeservice: "Kan jeg få fiber?" },
        // { footerItemKundeservice: "Login Waoo Mobil" },
        // { footerHeading: "Produkter" },
        // { footerItem: "Fiberbredbånd Produkter" },
        // { footerItem: "TV Produkter" },
        // { footerItem: "Telefoni" },
        // { footerItem: "Hastighedstest" },
        // { footerHeading: "Om Waoo" },
        // { footerItem: "Presse" },
        // { footerItem: "Ledelse" },
        // { footerItem: "Job" },
        // { footerItem: "Om Waoo" },
        // { footerItem: "Persondata- og cookiepolitik" },
        // { footerItem: "Netneutralitet" },
        // { footerHeading: "Kontakt" },
        // { footerItem: "Kontakt Kundeservice" },
        // { footerItem: "TV" },
        // { footerItem: "Streaming" },
        // { footerItem: "Telefoni" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.footer {
  color: white;
  text-align: center;

  &__wrapper {
    background-color: $primary-color;
    padding: 2rem 2rem 0.5rem 2rem;
  }

  &__content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  &__content {
    justify-content: center;
  }

  &__heading {
    font-size: $secondary-heading-m;
    padding: 3rem 1rem 1rem 1rem;
  }

  &__list {
    list-style-type: none;
    padding: $base-space;

    &li {
      padding: 1rem;
    }
  }

  &__item {
    margin-bottom: 15px;
  }

  &__copyright {
    margin-bottom: $spacer-xl;
    text-align: center;
    p {
      font-size: 12px;
    }
  }

  &__image {
    width: 20%;
    margin-top: 2rem;
  }

  &__socials {
    display: flex;
    justify-content: center;
  }

  &__social-image {
    width: 60%;
  }
}

@media screen and (min-width: 600px) {
  .footer {
    text-align: left;
    &__content-container {
      flex-direction: row;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
    }

    &__image {
      margin: 0;
    }
  }
}

@media screen and (min-width: 850px) {
  .footer {
    &__bottom-footer {
      display: flex;
      justify-content: space-between;

      max-width: 1200px;
      margin: 0 auto;
    }

    &__copyright {
      display: flex;
      align-items: center;
      width: 350px;
    }

    &__content-container {
      margin-bottom: 5rem;
      align-items: flex-start;
    }
  }
}
</style>
