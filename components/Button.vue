<template>
  <div>
    <button>Hent guiden nu</button>
  </div>
</template>

<script>
export default {
  Name: "Button",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

button {
  font-family: $heading;
  background-color: $button-background-color;
  color: white;
  text-transform: uppercase;
  border: none;
  width: 100%;
  max-width: 320px;
  border-radius: 4px !important;
  font-weight: 900;
  font-size: 20px;
  padding: 1rem;
}
</style>
