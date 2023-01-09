import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cart: []
        }
    },
    mutations: {
        addToCart (state, article) {
            state.cart.push(article)
        }
    }
});

export default store;