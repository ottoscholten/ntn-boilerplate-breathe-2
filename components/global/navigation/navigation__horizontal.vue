<template>
    <nav :class="backgroundColor" class="nav" aria-label="Main Menu">
        <div class="container">
            <div class="grid">
                <div class="grid__col grid__col--12 md-grid__col--2">
                    <nuxt-link to="/">
                        <img src="/logo.svg" alt="Breathe logo" />
                    </nuxt-link>
                </div>
                <ul class="grid__col grid__col--12 md-grid__col--8 nav__main">
                    <li class="nav__main-item color-white">
                        <nuxt-link to="/projects">Projects</nuxt-link>
                    </li>
                </ul>
                <ul class="grid__col grid__col--12 md-grid__col--2 nav__cta">
                    <li class="nav__cta-item color-orange">
                        <nuxt-link to="/projects">Get in touch</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    props: {
        theme: { type: String, default: 'blue' }
    },
    computed: {
        backgroundColor() {
            return 'background-color-' + this.theme
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/elements/text/text.mixins.scss';
.nav {
    align-items: center;
    display: flex;
    height: $header-height;

    &__main {
        align-items: center;
        display: flex;
        justify-content: center;
        &-item {
            padding-right: $spacing-24;
            padding-left: $spacing-24;
        }
    }

    &__cta {
        align-items: center;
        display: flex;
        justify-content: right;
    }

    &__main-item,
    &__cta-item {
        @include text-xsmall;
    }
}
</style>