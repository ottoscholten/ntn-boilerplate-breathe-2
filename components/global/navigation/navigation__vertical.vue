<template>
    <section class="container" :class="backgroundColor">
        <div class="navigation">
            <nuxt-link to="/" class="navigation__logo">
                <img src="/logo.svg" alt="Breathe logo" />
            </nuxt-link>
            <div tabindex="-1">
                <button
                    type="button"
                    class="navigation__button"
                    aria-controls="navigation"
                    :aria-expanded="isOpen"
                    @click="isOpen = !isOpen"
                >
                    <svg
                        width="22"
                        height="18"
                        viewbox="0 0 22 18"
                        fill="none"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M1 1H19" class="line1"></path>
                        <path d="M1 8H19" class="line2"></path>
                        <path d="M1 15H19" class="line3"></path>
                    </svg>
                </button>
                <transition name="slide-in">
                    <nav :class="backgroundColor" class="nav" v-if="isOpen">
                        <div class="container nav--margin">
                            <ul class="nav__main">
                                <li class="nav__main-item color-white">
                                    <nuxt-link to="/projects">Projects</nuxt-link>
                                </li>
                            </ul>
                            <ul class="nav__cta">
                                <li class="nav__cta-item color-orange">
                                    <nuxt-link to="/projects">Get in touch</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </transition>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Navigation',
    data: () => ({
        isOpen: false
    }),
    props: {
        theme: { type: String, default: 'blue' }
    },
    watch: {
        isOpen: function (newVal) {
            if (newVal) {
                document.documentElement.style.overflow = 'hidden'
                document.body.style.overflow = 'hidden'
            } else {
                document.documentElement.style.overflow = ''
                document.body.style.overflow = ''
            }
        }
    },
    computed: {
        backgroundColor() {
            return 'background-color-' + this.theme
        }
    },
    beforeDestroy() {
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/elements/text/text.mixins.scss';
@import '~/assets/scss/media-queries.scss';

// Entire header bar
.navigation {
    align-items: center;
    display: flex;
    height: $header-height;
    &__logo {
        z-index: $z-index-2;
    }
    &__button {
        position: absolute;
        right: 12px;
        top: 25px;
        z-index: 2;
        width: 48px;
        height: 48px;
    }
}

// The nav
.nav {
    box-shadow: 0px 10px 10px rgba(0, 24px, 24px, 0.1);
    height: 100vh;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;

    @include media('medium') {
        width: 40vw;
    }

    &--margin {
        margin-top: $header-height;
    }

    &__main,
    &__cta {
        &-item {
            @include text-xsmall;
        }
    }
}

// During slide state
.slide-in-enter-active,
.slide-in-leave-active {
    transform: translateX(0%);
    transition: 0.3s ease-in-out;
    width: 100vw;

    @include media('medium') {
        width: 40vw;
        min-width: 300px;
    }
}

// Before slide state
.slide-in-enter,
.slide-in-leave-to {
    transform: translateX(100%);
}
</style>