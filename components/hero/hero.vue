<template>
    <section :class="`background-color-${backgroundColor} ${paddingClass} margin-bottom-24 md-margin-bottom-48`">
        <div class="container">
            <div :class="`grid align-items-center text-image`">
                <div class="grid__col grid__col--12 md-grid__col--6 md-grid__col--offset-2 text-image--text">
                    <p v-if="content.eyebrow" class="margin-bottom-12 color-turquoise page-title">
                        {{ content.eyebrow }}
                    </p>
                    <h1
                        :class="{ 'margin-bottom-24': !!content.link && !!content.link.text && !!content.link.slug }"
                        class="color-white heading-large"
                    >
                        {{ content.title }}
                    </h1>
                    <link :link="content.link" />
                </div>
                <div v-if="media !== 'small'" class="text-image--background" :style="getBackgroundImage()" />
                <div class="text-image--circle" :style="getCircles()"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Hero',
    props: {
        content: { type: Object, required: true },
        padding: { type: String, default: 'small' },
        backgroundColor: { type: String, default: 'white' },
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
            return {
                background: `url(${this.content.image.src})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `left center`,
                backgroundSize: `cover`
            }
        },
        getCircles() {
            // Adjust size and positioning for devices
            let backgroundSize = `contain`
            let height = `500px`

            if (this.media === 'small') {
                backgroundSize = `cover`
            } else {
                height = `590px`
            }

            return {
                background: `url('/img/circles-white.svg')`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center 0`,
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
    min-height: 550px;
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
        height: 530px;
        width: 50vw;
        right: 50%;
        transform: translateX(50vw);
    }
}
</style>