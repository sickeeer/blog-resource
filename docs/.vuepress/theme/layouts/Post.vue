<template>
  <div id="vuepress-theme-blog__post-layout">
    <article
      class="vuepress-blog-theme-content"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <header>
        <h1 class="post-title" itemprop="name headline">
          {{ $frontmatter.title }}
        </h1>
        <PostMeta
          :tags="$frontmatter.tags"
          :author="$frontmatter.author"
          :date="$frontmatter.date"
          :location="$frontmatter.location"
        />
      </header>
      <Content itemprop="articleBody" />
      
      <div><time dateUpdated itemprop="dateUpdated" :datetime="$page.lastUpdated">
        最后修改时间：{{ $page.lastUpdated }}
      </time>{{$frontmatter.waiting?" 更新中 ":" 全文完 "}}</div>
      <footer>
        <Newsletter v-if="$service.email.enabled" />
        <hr />
        留下一条留言?
          <Comment />
      </footer>
    </article>
    <Toc />
  </div>
</template>

<script>
import Toc from '@theme/components/Toc.vue'
import PostMeta from '@theme/components/PostMeta.vue'
// import PageInfo from '@mr-hope/vuepress-plugin-comment/lib/client/PageInfo.vue'
import Comment from '@mr-hope/vuepress-plugin-comment/lib/client/Comment.vue'

export default {
  components: {
    Toc,
    PostMeta,
    // PageInfo,
    Comment,
    Newsletter: () => import('@theme/components/Newsletter.vue'),
  },
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.vuepress-blog-theme-content
  @extend $wrapper
  font-size 16px
  letter-spacing 0px
  font-family PT Serif, Serif
  color $textColor
  position relative

  @media (min-width: $MQNarrow)
    box-shadow 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07)

  .post-title
    padding-top 0

@media (max-width: $MQMobile)
  .vuepress-blog-theme-content
    padding-top 0

  .post-title
    margin-top 0
</style>
