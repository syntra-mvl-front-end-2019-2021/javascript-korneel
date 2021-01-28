<template>
  <section>
    <div class="content">
      <header>
        <a href="#" :class="['icon', iconClass]"
          ><span class="label">Icon</span></a
        >
        <h3>{{ title }}</h3>
      </header>
      <p>
        {{ text }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Highlight',
  props: {
    iconClass: {
      type: String,
      default: 'fa-vcard-o',
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
