<template>
  <div>
    <section class="posts">
      <div class="posts__container">
        <div class="post">
          <div class="post__wrapper">
            <div class="post__content">
              <h2 class="post__title">
                FÅ VORES GUIDE MED INSPIRATION TIL INDRETNING AF DIN
                HJEMMEARBEJDSPLADS
              </h2>
              <div class="post__text">
                <p>
                  At have en god hjemmearbejdsplads er vigtigere end nogensinde
                  før. Et velfungerende hjemmekontor skal have rolige omgivelser
                  og god ergonomi, så du har mulighed for at fordybe dig i
                  arbejdet. Vi tror nemlig, at hjemmearbejde er kommet for at
                  blive – også i 2022.
                </p>
                <p>
                  Derfor kan du her downloade vores 5 tips til, hvordan du
                  indretter den perfekte hjemmearbejdsplads. Med få og enkle
                  tiltag kan du nemlig gøre hjemmekontoret mindst lige så
                  komfortabel og inspirerende, som du er vant til. I guiden
                  finder du blandt andet:
                </p>
                <ul>
                  <li>Gode råd til hjemmearbejde</li>
                  <li>Tips til at få den rigtige belysning</li>
                  <li>Indspark til en god indretning af dit hjemmekontor</li>
                  <li>
                    Idéer til at bringe hyggen ind på hjemmearbejdspladsen
                  </li>
                </ul>
                <p>
                  Husk, at du selvfølgelig også er velkommen til at dele denne
                  guide til indretning af den ultimative hjemmearbejdsplads med
                  dine kollegaer.
                </p>
              </div>
            </div>
            <div class="post__image-container">
              <img
                class="post__image"
                src="~/assets/images/waoowaoowaoo.png"
                alt="Waoo med hvid skrift på orange baggrund"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Introduction",
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

  &:nth-of-type(7) {
    background-color: $bg-tertiary-color;
    color: white !important;
  }

  &__wrapper {
    padding: $spacer-xl $base-space $spacer-xl $base-space;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
  }

  &__content {
    max-width: 650px;
    &__text {
      &:nth-of-type(7) {
        color: $bg-primary-color;
      }
    }
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
    color: $paragraph-color;
    figure {
      display: none;
    }

    a {
      color: $secondary-color;
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

@media screen and (min-width: 1201px) {
  section.posts > div > div:nth-child(2n) > div {
    flex-direction: row-reverse;
  }
}
div:nth-child(7) > div > div.post__content > div {
  color: white;
}
</style>
