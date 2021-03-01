<template>
  <div>
      <Content slot-key="carousel" />

      <Content slot-key="module1" />
      <Content slot-key="module2" />
      <Content slot-key="module3" />
      <Content slot-key="module4" />
      <Content slot-key="module5" />
      <Content />
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$pagination);
    console.log(this.$site);
    console.log(this.$page);
    console.log(this.$frontmatter);
  },
};
</script>