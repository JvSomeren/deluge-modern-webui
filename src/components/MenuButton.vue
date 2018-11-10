<template>
  <div class="menu-button" :style="buttonStyle">
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
  },
  computed: {
    buttonStyle() {
      if(this.text !== "")
        return;
      else
        return { paddingRight: '4px' };
    }
  }
}
</script>

<style lang="scss">

</style>