<script>
    export let data;
</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

{#if data}
    <div>
        email : {data.user.email}
        <br>
        username: {data.user.username}
        <br>
        gender: {data.user.male ? 'Male' : 'Female'}
    </div>
{/if}