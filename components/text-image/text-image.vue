<template>
    <section :class="`background-color-${theme} ${paddingClass}`">
        <div class="container">
            <div :class="`grid align-items-center text-image`">
                <div class="grid__col grid__col--12 md-grid__col--6 md-grid__col--offset-2 text-image--text">
                    <h2 class="margin-bottom-12 color-turquoise page-title">{{ eyebrow }}</h2>
                    <h1 class="color-white heading-large">{{ title }}</h1>
                </div>
                <div v-if="media !== 'small'" class="text-image--background" :style="getBackgroundImage()" />
                <div class="text-image--circle" :style="getCircles()"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TextImage',
    props: {
        eyebrow: { type: String, required: true },
        title: { type: String, required: true },
        image: { type: Object, required: true },
        padding: { type: String, default: 'small' },
        theme: { type: String, default: 'white' },
        media: { type: String, required: true }
    },
    data: () => ({
        paddingClass: ''
    }),
    mounted() {
        this.paddingClass = this.getPaddingClass(this.padding)
    },
    methods: {
        getPaddingClass(padding) {
            switch (true) {
                case padding == 'hero':
                    return 'padding-top-24 padding-bottom-48'
                case padding == 'large':
                    return 'padding-y-96'
                case padding == 'medium':
                    return 'padding-y-48'
                case padding == 'none':
                    return 'padding-y-0'
                default:
                    return 'padding-y-24'
            }
        },
        getBackgroundImage() {
            let background = `url(${this.image.src})`
            let backgroundRepeat = `no-repeat`
            let backgroundPosition = `left center`
            let backgroundSize = `cover`

            return {
                background,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize
            }
        },
        getCircles() {
            const circles = `'./img/circles-white.svg'`
            let background = `url(${circles})`
            let backgroundRepeat = `no-repeat`
            let backgroundPosition = `center 0`
            let backgroundSize = `contain`
            let height = `650px`

            if (this.media === 'small') {
                backgroundSize = `cover`
            }
            if (this.media === 'medium') {
                height = `500px`
            }

            return {
                background,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                height
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.text-image {
    min-height: 650px;
    &--text {
        z-index: $z-index-1;
    }
    &--circle {
        position: absolute;
        width: 100%;
        right: 0;
    }
    &--background {
        position: absolute;
        height: 580px;
        width: 50vw;
        right: 50%;
        transform: translateX(50vw);
    }
}
</style>