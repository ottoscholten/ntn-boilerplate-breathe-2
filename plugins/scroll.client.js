import Vue from 'vue';

const elements = new Map();

const throttle = (delay, fn) => {
    let inThrottle = false;

    return args => {
        if (inThrottle) {
            return;
        }

        inThrottle = true;
        fn(args);
        setTimeout(() => {
            inThrottle = false
        }, delay)
    }
}

let lastPosition = 0;

const handler = event => {
    const args = { currentPosition: window.pageYOffset, lastPosition };
    lastPosition = window.pageYOffset;
    elements.forEach((callback) => {
        throttle(100, callback(args));
    });
};

/**
 * Scroll directive binds a window scroll handler on an element
 * returns the window curretn and last scroll position
 * 
 * @example
 * <template>
 *      <div v-scroll="onScroll">
 *          ...
 *      </div>
 * </template>
 * 
 * <script>
 * export default {
 *      methods: {
 *          onScroll ({ currenPosition, lastPosition }) {
 *              console.log(currentPosition, lastPosition)
 *          }
 *      }
 * }
 * </script>
 */

Vue.directive('scroll', {
    bind(el, binding) {
        const context = binding.value;
        // keep only one window resize handler for all directives
        if (elements.size === 0) {
            window.addEventListener('scroll', handler);
        }
        elements.set(el, context);
    },
    unbind(el) {
        elements.delete(el);
        if (elements.size === 0) {
            window.removeEventListener('scroll', handler);
        }
    }
})
