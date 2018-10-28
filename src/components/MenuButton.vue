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
  .menu-button {
    display: flex;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 6px 10px;
    padding-left: 4px;

    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    color: white;
    font-size: 14px;

    cursor: pointer;

    p {
      margin: 0;
    }

    &:not(:first-child) {
      margin-left: 5px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
</style>