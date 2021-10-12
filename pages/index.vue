<template>
    <PageLayout>
        <template v-slot:header="props">
            <Navigation :media="props.media" :navigation="navigation" background-color="blue" />
        </template>

        <template v-slot:content="props">
            <Hero :media="props.media" :content="hero" padding="hero" background-color="blue" />
            <section class="background-color-blue" style="min-height: 250px"></section>
        </template>
    </PageLayout>
</template>

<script>
import PageLayout from '../layouts/page-layout'
import Navigation from '../components/global/navigation/navigation'
import Hero from '~/components/hero/hero'
import TextImage from '~/components/text-image/text-image.vue'

export default {
    components: {
        PageLayout,
        Navigation,
        Hero,
        TextImage
    },
    async asyncData({ $content }) {
        const navigation = await $content('site/navigation').fetch()
        const page = await $content('pages/home').fetch()
        const hero = page.hero
        return {
            navigation,
            hero
        }
    }
}
</script>