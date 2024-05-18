import './app.css';
import App from 'src/App.svelte';
import initializeDarkMode from './helpers/dark-mode';

initializeDarkMode();
const app = new App({
    target: document.getElementById('app') as HTMLElement,
});

export default app;
