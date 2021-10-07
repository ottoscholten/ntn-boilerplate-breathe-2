<template>
    <div class="page-layout" v-resize="onResize">
        <header
            v-scroll="onScroll"
            ref="header"
            class="page-layout__header"
            :class="[
                { 'page-layout__header--hidden': !showHeader },
                { 'page-layout__header--sticky': stickyHeader },
                { 'page-layout__header--animate': animateHeader }
            ]"
        >
            <slot name="header" :media="media"></slot>
        </header>

        <main class="page-layout__content">
            <slot name="content" :media="media"></slot>
        </main>

        <footer class="page-layout__footer">
            <section class="container">
                <div style="height: 120px">footer area</div>
            </section>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'PageLayout',
    data: () => ({
        showHeader: true,
        stickyHeader: false,
        animateHeader: false,
        media: 'small'
    }),
    mounted() {
        this.media = this.getMediaQuery(window.innerWidth)
    },
    methods: {
        getMediaQuery(width) {
            switch (true) {
                case width >= 1440:
                    return 'xlarge'
                case width >= 1240:
                    return 'large'
                case width >= 768:
                    return 'medium'
                case width < 768:
                default:
                    return 'small'
            }
        },
        onResize(windowWidth) {
            this.media = this.getMediaQuery(windowWidth)
        },
        onScroll({ currentPosition, lastPosition }) {
            const isTopOfPage = currentPosition === 0

            const isBelowHeader = currentPosition > this.$refs.header.clientHeight

            // On touch devices, we shouldn't continue to scroll if less than zero
            if (currentPosition < 0) {
                return
            }

            if (lastPosition > currentPosition) {
                // Scrolling up
                this.animateHeader = !isTopOfPage
                if (isTopOfPage) {
                    this.stickyHeader = false
                    this.showHeader = true
                } else {
                    this.showHeader = true
                }
            } else {
                // Scrolling down
                if (isBelowHeader) {
                    this.stickyHeader = true
                    this.showHeader = false
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.page-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    &__header {
        background-color: $color-white;
        min-height: $header-height;
        position: absolute;
        transform: translateY(0);
        width: 100%;
        z-index: $z-index-1;
        &--sticky {
            position: fixed;
        }
        &--animate {
            transition: 0.15s transform ease-out;
        }
        &--hidden {
            transform: translateY(-100%);
        }
    }
    &__content {
        flex: 1;
        margin-top: $header-height; // Update to 36?
        z-index: $z-index-0;
    }
    &__footer {
        background-color: $color-black;
        color: $color-white;
        height: 100%;
        min-height: $spacing-12 * 10;
    }
}
</style>