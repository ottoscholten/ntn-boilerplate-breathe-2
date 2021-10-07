import Vue from 'vue';

const elements = new Map();
let timer;

const handler = event => {
    elements.forEach((callback) => {
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback(event.target.innerWidth);
        }, 250)
    })
}


/**
 * Resize directive binds a window resize handler on an element
 * returns the window width
 * 
 * @example
 * <template>
 *      <div v-resize="onResize">
 *          ...
 *      </div>
 * </template>
 * 
 * <script>
 * export default {
 *      methods: {
 *          onResize (windowWidth) {
 *              console.info(windowWidth)
 *          }
 *      }
 * }
 * </script>
 */


Vue.directive('resize', {
    bind(el, binding) {
        const context = binding.value;
        // keep only one window resize handler for all directives
        if (elements.size === 0) {
            window.addEventListener('resize', handler);
        }
        elements.set(el, context);
    },
    unbind(el) {
        elements.delete(el);
        if (elements.size === 0) {
            window.removeEventListener('resize', handler);
        }
    }
});

