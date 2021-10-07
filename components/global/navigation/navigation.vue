<template>
    <component
        :is="isVertical ? 'NavigationVertical' : 'NavigationHorizontal'"
        :theme="theme"
        :mainNavigationItems="navigation.mainNavigationItems"
        :ctaNavigationItems="navigation.ctaNavigationItems"
    />
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
        theme: { type: String, default: 'blue' },
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
</style>
