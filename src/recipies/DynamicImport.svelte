<!-- TODO: perhaps we can make this more generic??? -->

<script lang="ts">
    import type { ButtonProps, ButtonEvents } from '@components/ui/button';
    import { onMount, type ComponentType, type SvelteComponent } from 'svelte';

    let Button: ComponentType<SvelteComponent<ButtonProps, ButtonEvents>>;
    onMount(async () => {
        Button = (await import('src/lib/components/ui/button/button.svelte'))
            .default;
    });

    type $$Props = ButtonProps;
    type $$Events = ButtonEvents;
</script>

<svelte:component this={Button} {...$$restProps} on:click>
    <slot />
</svelte:component>
