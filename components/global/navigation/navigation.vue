<template>
    <section :class="`background-color-${backgroundColor}`" class="navigation">
        <component
            :is="isVertical ? 'NavigationVertical' : 'NavigationHorizontal'"
            :background-color="backgroundColor"
            :mainNavigationItems="navigation.mainNavigationItems"
            :ctaNavigationItems="navigation.ctaNavigationItems"
        />
    </section>
</template>

<script>
import NavigationVertical from './navigation__vertical.vue'
import NavigationHorizontal from './navigation__horizontal.vue'

export default {
    name: 'Navigation',
    components: {
        NavigationHorizontal,
        NavigationVertical
    },
    props: {
        media: { type: String, required: true },
        backgroundColor: { type: String, default: 'blue' },
        navigation: { type: Object, required: true }
    },
    computed: {
        isVertical() {
            return this.media === 'small' || this.media === 'medium'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.navigation {
    height: $header-height + 1; // This fixes 1 pixel line bug, that you see if size is perfect.
    align-items: center;
    display: flex;
}
</style>
