import './app.css';
import App from 'src/App.svelte';

const app = new App({
    target: document.getElementById('app') as HTMLElement,
});

export default app;
