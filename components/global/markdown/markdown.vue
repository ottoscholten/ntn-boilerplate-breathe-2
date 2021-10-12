<template>
    <div v-html="$md.render(markdown)" class="markdown"></div>
</template>

<script>
export default {
    props: {
        markdown: { type: String, required: true }
    }
}
</script>

<style lang="scss">
@import '~/assets/scss/elements/text/alternative-text.scss';

.markdown {
    p {
        @extend .paragraph;
    }
}
</style>