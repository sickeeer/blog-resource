<template>
  <div>
    this is me
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