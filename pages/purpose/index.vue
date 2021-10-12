<template>
    <page-layout>
        <template v-slot:header="props">
            <navigation :media="props.media" :navigation="navigation" background-color="green" />
        </template>

        <template v-slot:content="props">
            <hero :media="props.media" :content="hero" padding="hero" background-color="green" />
            <!-- "The Story" -->
            <text-image :media="props.media" :content="textImageOne" />
            <text-image :media="props.media" :content="textImageOne" />
        </template>
    </page-layout>
</template>

<script>
import PageLayout from '~/layouts/page-layout'
import Navigation from '~/components/global/navigation/navigation'
import Hero from '~/components/hero/hero'
import TextImage from '~/components/text-image/text-image.vue'

export default {
    components: {
        PageLayout,
        Navigation,
        Hero,
        TextImage
    },
    async asyncData({ $content, $md }) {
        const navigation = await $content('site/navigation').fetch()
        const page = await $content('pages/purpose').fetch()
        const hero = page.hero
        const textImageOne = page.textImageOne

        return {
            navigation,
            hero,
            textImageOne
        }
    }
}
</script>