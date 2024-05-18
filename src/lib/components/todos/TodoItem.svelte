<script lang="ts">
    let checked = false;
    let item = '';
</script>

<div class="flex items-center space-x-8">
    <input
        type="checkbox"
        bind:checked
        class="rounded-[50%] border border-solid border-red-400 bg-inherit checkbox-round"
    />
    <input type="text" bind:value={item} class="bg-inherit border text-4xl" />
</div>

<style>
    .checkbox-round {
        width: 1.3em;
        height: 1.3em;
        background-color: white;
        border-radius: 50%;
        vertical-align: middle;
        border: 1px solid #ddd;
        /* appearance: none;
        -webkit-appearance: none; */
        outline: none;
        cursor: pointer;
    }

    .checkbox-round:checked {
        background-color: red;
    }
</style>
