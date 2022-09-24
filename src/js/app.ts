import App from '@/vue/App.vue';
import { createApp } from 'vue';

// Import our CSS
import '@/css/app.css';

// App main
const main = async () => {
    console.log('trying');

    // Create our vue instance
    const app = createApp({});
    app.component('WooHoo', App)
    // Mount the app
    return app.mount('#component-container');
};

// Execute async function
main().then( () => {
    console.log('loaded');
});