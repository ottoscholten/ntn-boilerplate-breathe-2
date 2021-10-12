<template>
    <div class="read-more">
        <div class="container">
            <button type="button" aria-role="button" class="paragraph" @click="isOpen = !isOpen">
                Read more
                <div v-html="require(`~/static/img/icons/${icon}.svg?raw`)" class="icon" />
            </button>
        </div>
        <div :class="{ 'read-more__content--open': isOpen }" class="read-more__content">
            <markdown :markdown="readMoreText" class="container padding-y-24 md-padding-y-48" />
        </div>
    </div>
</template>

<script>
import Markdown from '../markdown/markdown.vue'

export default {
    components: {
        Markdown
    },
    data() {
        return {
            isOpen: false
        }
    },
    props: {
        readMoreText: { type: String, default: '' }
    },
    computed: {
        icon() {
            return this.isOpen ? 'minus' : 'plus'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/media-queries.scss';

.read-more {
    button {
        align-items: center;
        background-color: $color-sky;
        border-top: 3px solid $color-white;
        color: $color-green;
        display: flex;
        padding: 20px;
        padding-right: $spacing-48;
        padding-left: $spacing-48;
        transition: background-color 0.3s, border-top 0.3s;

        &:hover {
            background-color: $color-sky--opacity-60;
        }

        &:focus {
            border-top: 3px solid $color-sky;
            background-color: $color-sky--opacity-60;
        }

        .icon {
            display: flex;
            margin-left: $spacing-24;
            width: 18px;
            @include media('medium') {
                width: $spacing-24;
            }
        }
    }
    &__content {
        background-color: $color-sky;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
        &--open {
            max-height: 1000px;
        }
    }
}
</style>