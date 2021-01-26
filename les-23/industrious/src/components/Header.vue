<template>
  <header id="header">
    <a class="logo" href="#">Industrious</a>
    <nav>
      <a href="#" @click="openMenu">Menu</a>
    </nav>
  </header>

  <nav id="menu" :class="{ show: isMenuOpen }">
    <ul class="links">
      <li><a href="#">Home</a></li>
      <li>
        <a href="#">Elements</a>
      </li>
      <li>
        <a href="#">Generic</a>
      </li>
    </ul>
    <a href="#" class="close" @click="closeMenu" />
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = true;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style></style>
