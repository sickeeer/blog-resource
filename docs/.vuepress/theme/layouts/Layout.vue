<template>
  <div>
    <BaseListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>
<script>
export default {
  mounted() {
    // console.log(this.$pagination);
    // console.log(this.$site);
    // console.log(this.$page);
    // console.log(this.$frontmatter);
    // console.log(this.$route.meta.pid)
    // console.log(this.$route.meta.id)
    // console.log('Layout.vue');
  },
};
</script>