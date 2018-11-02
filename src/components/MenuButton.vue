<template>
  <div class="menu-button">
    <i class="material-icons">{{ icon }}</i>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  props: {
    icon: String,
    text: String
  }
}
</script>

<style lang="scss">

</style>