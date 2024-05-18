<script lang="ts">
    // eslint-disable-next-line import/no-unresolved, import/no-absolute-path
    import Sonner from '@components/ui/sonner/sonner.svelte';
    import { toast } from 'svelte-sonner';
    import Button from '../../../../recipies/DynamicImport.svelte';
</script>

<Button
    variant="default"
    on:click={() => {
        toast('note has been deleted', {
            description: 'water the plants',
            action: {
                label: 'undo?',
                onClick: () => 1,
            },
        });
    }}
>
    click here
</Button>
<Sonner />
