import { mount } from 'svelte';
import './app.css';
import App from 'src/App.svelte';

// enable TailwindCSS dark mode
document.documentElement.classList.add('dark');

// render the application
const app = mount(App, {
    target: document.getElementById('app') as HTMLElement,
});

export default app;
