<template>
  <header id="header">
    <a class="logo" href="#">Industrious</a>
    <nav>
      <a href="#" @click="openMenu">Menu</a>
    </nav>
  </header>

  <nav id="menu" :class="{ show: isMenuOpen }">
    <ul class="links">
      <li
        v-for="link in links"
        :key="link.path"
        :class="{ active: $route.path === link.path }"
      >
        <router-link :to="link.path">{{ link.label }}</router-link>
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
      links: [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Element',
          path: '/element',
        },
        {
          label: 'Generic',
          path: '/generic',
        },
      ],
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

<style>
.links .active {
  font-weight: bold;
  color: goldenrod;
}
</style>
