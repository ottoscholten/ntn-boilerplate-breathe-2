<template>
    <section class="text-image padding-y-24 md-padding-y-48">
        <div class="container">
            <div class="grid justify-content-space-between">
                <div class="grid__col grid__col--12 md-grid__col--7 lg-grid__col--6">
                    <h2 v-if="!!content.title" class="subtitle margin-bottom-12">{{ content.title }}</h2>
                    <p class="intro margin-bottom-24">{{ content.subtitle }}</p>
                    <markdown :markdown="content.text" />
                    <div v-if="!!content.link" class="margin-top-24 md-margin-top-48 margin-bottom-24 md-margin-bottom-0">
                        <Link :link="content.link" />
                    </div>
                </div>
                <div class="grid__col grid__col--12 md-grid__col--5" :class="{ 'height-100': media === 'small' }">
                    <read-more
                        v-if="!!content.readMoreText && media === 'small'"
                        :read-more-text="content.readMoreText"
                        class="margin-bottom-24"
                        style="margin-left: -24px; margin-right: -24px"
                    />
                    <template v-if="content.imageList.length === 3">
                        <!-- If 3 images -->
                        <div class="grid height-100">
                            <div class="grid__col grid__col--12 margin-bottom-12 md-margin-bottom-24">
                                <img :src="content.imageList[0].src" :alt="content.imageList[0].alt" class="image-3" />
                            </div>
                            <div class="grid__col grid__col--6 padding-right-6 md-padding-right-12">
                                <img :src="content.imageList[1].src" :alt="content.imageList[1].alt" class="image-3" />
                            </div>
                            <div class="grid__col grid__col--6 padding-left-6 md-padding-left-12">
                                <img :src="content.imageList[2].src" :alt="content.imageList[2].alt" class="image-3" />
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <img :key="index" :src="content.imageList[0].src" :alt="content.imageList[0].alt" class="image-1" />
                    </template>
                </div>
            </div>
        </div>
        <read-more v-if="!!content.readMoreText && media !== 'small'" :read-more-text="content.readMoreText" class="margin-top-24" />
    </section>
</template>

<script>
import ReadMore from '../global/read-more/read-more.vue'

export default {
    components: { ReadMore },
    props: {
        media: { type: String, required: true },
        content: { type: Object, required: true }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/media-queries.scss';

// Single image
.image-1 {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    &:first-child {
        max-height: 360px;
        @include media('medium') {
            max-height: 100%;
            min-height: 600px;
        }
        @include media('large') {
            min-height: 100%;
        }
    }
}

// When 3 images
.image-3 {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
}
</style>