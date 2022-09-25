import App from '@/vue/App.vue';
import { createApp } from 'vue';
import { themeChange } from 'theme-change'

// Import our CSS
import '@/css/app.css';

// App main
const main = async () => {
    console.log('tryingg');
    themeChange()
    // Create our vue instance
    const app = createApp({});
    app.component('WooHoo', App)
    // Mount the app
    return app.mount('#component-container');
};
console.log("wat");
// Execute async function
main().then( () => {
    console.log('loaded');
});
