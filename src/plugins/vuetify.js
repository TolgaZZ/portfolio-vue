import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

const MY_ICONS = {
    Tlogo: '../assets/logo.svg',
}


Vue.use(Vuetify, {
    iconfont: 'md',
});

export default new Vuetify({
    icons: {
      values: MY_ICONS,
      iconfont: 'fa',
    },
    theme: {
        themes: {
            light: {
                primary: "#e2f3f5", // #E53935
                secondary: "#0e153a",
                Pblue: "#3d5af1",
                Lblue: "#22d1ee",
            },
        },
    },
})

