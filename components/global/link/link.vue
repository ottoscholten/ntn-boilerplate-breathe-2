<template>
    <nuxt-link
        v-if="!!link && !!link.text && !!link.slug"
        :to="link.slug"
        :class="{ 'color-orange': color === 'orange', 'color-white': color === 'white' }"
        class="link text-small md-text"
    >
        {{ link.text }}
        <div v-html="require(`~/static/img/icons/arrow-right.svg?raw`)" class="link__icon" />
    </nuxt-link>
</template>

<script>
export default {
    props: {
        link: { type: Object },
        color: { type: String, default: 'orange' }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/media-queries.scss';

.link {
    align-items: center;
    display: inline-flex;
    transition: opacity 0.2s, border-bottom 0.3s;
    border-bottom: 1px solid transparent;

    &:hover,
    &:focus {
        border-bottom: 1px solid;
    }

    &:hover &__icon,
    &:focus &__icon {
        margin-left: $spacing-24;
    }

    &__icon {
        display: flex;
        margin-left: 16px;
        transition: margin-left 0.2s ease-in-out;
        width: 22px;
        height: 22px;
        @include media('medium') {
            height: 28px;
            width: 28px;
        }
    }
}
</style>