<template>
  <div class="form">
    <h2 class="form__heading">{{ tagline }}</h2>

    <img
      class="form__image"
      src="~/assets/images/waoo-guide-compressed.png"
      alt="Waoo guide - hjemmekontor"
      title="Guide til hjemmekontor"
    />

    <form class="form__container">
      <div class="form__input-container">
        <label class="form__label">Fornavn*</label>
        <input placeholder="Indtast fornavn" type="text" class="form__input" />
      </div>

      <div class="form__input-container">
        <label class="form__label">E-mail*</label>
        <input placeholder="Indtast fornavn" type="text" class="form__input" />
      </div>
    </form>
    <div class="form__concent">
      <div class="form__button-container">
        <div class="form__checkbox">
          <input type="checkbox" />
          <label>Ja tak, jeg giver samtykke*</label>
        </div>

        <div class="form__show-more">
          <p>
            *Jeg giver samtykke til at modtage markedsføring relateret til Waoo
            A/S. <br />

            <span @click="showMore = !showMore" key="down"> Læs mere</span>
          </p>
        </div>
        <div class="form__read-more" key="down" v-if="showMore">
          <p class="form__read-more-text" :class="{ showText: showMore }">
            Jeg giver samtykke til at modtage markedsføring relateret til Waoo
            A/S’ og de bagvedliggende fiberselskabers produktsortimenter
            (fiberbredbånd, TV, digitale tjenester og indhold, hardware, smart
            home udstyr mv.) via e-mail, sms og telefon. Markedsføringen vil
            blive målrettet mine interesser ved brug af oplysninger indsamlet om
            mig i forbindelse med min bestilling, mine kliks på links i
            nyhedsbrevet samt brug af waoo.dk, herunder via cookies i det omfang
            du har samtykket til sådanne på waoo.dk. Jeg kan til enhver tid
            tilbagekalde mit samtykke. Læs mere om Waoos behandling af
            personoplysninger og dine rettigheder i Waoo persondatapolitik
            <span>
              <a href="https://www.waoo.dk/om-waoo/persondataogcookies/">her</a>
              </span
            >.
          </p>
        </div>
       

        <div></div>
      </div>
      <Button />
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button.vue";
export default {
  components: {
    Button,
  },
  name: "Form",
  data() {
    return {
      tagline: "FÅ 5 TIPS TIL DEN ULTIMATIVE HJEMMEARBEJDSPLADS",
      showMore: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.showText {
  display: block !important;
}

.form {
  margin: 2.5rem;
  font-family: Arial, Helvetica, sans-serif;

  &__heading {
    text-align: center;
    font-size: 30;
  }
  &__image {
    display: block;
    text-align: center;
    min-width: 250px;
    width: 25%;
    margin: 0 auto;
    margin-top: $spacer-m;
    margin-bottom: $spacer-l;
    max-width: 600px;
  }

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    padding-bottom: 1rem;
  }

  &__label {
    margin-bottom: $spacer-s;
    color: $paragraph-color;
  }

  &__input {
    background-color: $bg-secondary-color;
    border: none;
    padding: 0.8rem;
    width: 100%;

    margin: 0 auto;
  }

  &__concent {
    text-align: center;
  }

  &__button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    padding: $spacer-m 0rem $spacer-m 0rem;
    & p {
      margin: 10px;
    }

    input[type="checkbox"] {
      margin-right: $spacer-s;
      background-color: $secondary-color;
    }
  }

  &__checkbox {
    display: flex;
    align-items: center;
    padding-bottom: $base-space;

    &label {
      font-size: 10px;
    }
  }

  &__read-more {
    background-color: $bg-secondary-color;
    font-size: 12px;
  }

  &__show-more {
    font-size: 13px;
  }
  &__show-more > p > span {
    margin: 0;
    color: $secondary-color;
    text-decoration: underline;
    cursor: pointer;
  }

  &__read-more-text {
    display: none;
    padding: 1rem;
    max-width: 600px;

    & > span > a {
      color: $secondary-color;
      text-decoration: underline;
    }
  }

  &__display__text {
    background-color: $bg-secondary-color;
    padding: 1rem;
  }
}

div.form__button-container > div.form__checkbox > label {
  font-size: 15px;
}

@media screen and (min-width: 600px) {
  .form {
    &__container {
      flex-direction: row;
      max-width: 1000px;
      margin: 0 auto;
    }

    &__input-container {
      max-width: 400px;
    }

    &__heading {
      font-size: 35px;
    }
  }
}
</style>
