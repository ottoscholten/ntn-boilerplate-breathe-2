<template>
    <nav class="nav container" aria-label="Main Menu">
        <div class="grid">
            <div class="grid__col grid__col--12 md-grid__col--2">
                <nuxt-link to="/">
                    <img src="/logo.svg" alt="Breathe logo" />
                </nuxt-link>
            </div>
            <ul class="grid__col grid__col--12 md-grid__col--8 nav__main">
                <li v-for="(item, index) in mainNavigationItems" :key="index" class="nav__main-item color-white">
                    <nuxt-link :to="item.slug">{{ item.title }}</nuxt-link>
                </li>
            </ul>
            <ul class="grid__col grid__col--12 md-grid__col--2 nav__cta">
                <li v-for="(item, index) in ctaNavigationItems" :key="index" class="nav__cta-item color-orange">
                    <nuxt-link :to="item.slug">{{ item.title }}</nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    props: {
        backgroundColor: { type: String, required: true },
        mainNavigationItems: { type: Array, required: true },
        ctaNavigationItems: { type: Array, required: true }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/elements/text/text.mixins.scss';

.nav {
    &__main-item {
        border-color: $color-white;
        margin-right: $spacing-24;
        margin-left: $spacing-24;
    }

    &__cta-item {
        border-color: $color-orange;
        margin-left: $spacing-24;
        &:first-child {
            margin-left: $spacing-0;
        }
    }

    &__main,
    &__cta {
        align-items: center;
        display: flex;
        justify-content: center;

        a {
            @include text-small;
            border-bottom: 1px transparent;
            padding-bottom: 3px;
            padding-top: 2px;
            transition: border-bottom 0.3s;

            &:hover,
            &:focus {
                border-bottom: 1px solid;
            }
        }
    }
}
</style>