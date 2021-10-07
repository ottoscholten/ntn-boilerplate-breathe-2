<template>
    <PageLayout>
        <template v-slot:header="props">
            <Navigation :media="props.media" :navigation="navigation" theme="green" />
        </template>

        <template v-slot:content="props">
            <div style="min-height: 250px; background-color: lightgrey">
                <text-image
                    eyebrow="purpose"
                    title="organize to serve the whole"
                    :image="{
                        src: '/img/walking-escalator.jpg',
                        alt: 'Some picture'
                    }"
                    padding="hero"
                    theme="green"
                    :media="props.media"
                />
                <section>
                    <div class="container">
                        <h2>heyo</h2>
                    </div>
                </section>
            </div>
        </template>
    </PageLayout>
</template>

<script>
import PageLayout from '../layouts/page-layout'
import Navigation from '../components/global/navigation/navigation'
import TextImage from '../components/text-image/text-image'

export default {
    components: {
        PageLayout,
        Navigation,
        TextImage
    },
    async asyncData({ $content }) {
        const navigation = await $content('site/navigation').fetch()
        console.log(navigation)

        return {
            navigation
        }
    }
}
</script>