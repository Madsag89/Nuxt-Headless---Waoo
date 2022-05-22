<template>
    <div class="error">
        <h2 class="error__heading">Langsomt internet er roden til alt ondt - dog ikke denne fejlside</h2>
        <img class="error__image" src="~/assets/images/fiber_orange.svg" alt="Internetforbindelse"/>
        <p>Sku' du også sætte tempoet op?</p>
        <button class="error__button">Få et hastighedstjek med waoo her</button>
    </div>
</template>

<script>
    export default {
        name: "Error",
    }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.error{
    padding: $base-space;
    text-align: center;

    &__heading{
        text-transform: uppercase;
    }

    &__button{
        border: none;
        background-color: $secondary-color;
        color: white;
        font-family: oswald;
        font-weight: bold;
        text-transform: uppercase;
        padding: 10px 20px 10px 20px;
        border-radius: 50px;
        width: 340px;
    }
    
    &__image{
        width: 100%;
        max-width: 700px;
    }
}

</style>