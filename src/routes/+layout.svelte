<script>
  import "../app.postcss";
  export let data
  console.log(data)
</script>

<div class="min-h-full">
  <nav class="navbar bg-base-100 border-b">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl">Showcase</a>
    </div>
    <div class="flex-none">
      {#if !data.user}
        <div class="dropdown dropdown-end">
          <a href="/login" class="btn btn-primary">Login</a>
          <a href="/register" class="btn btn-primary">Register</a>
        </div>
      {:else}
        <div class="dropdown dropdown-end">
          <a href="/projects/new" class="btn btn-primary btn-outline">Add Project</a>
        </div>
        <div class="dropdown dropdown-end">
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img src="https://placeimg.com/80/80/people" alt="placeholder avatar image">
            </div>
          </label>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/my/projects" class="justify-between">My Projects</a>
            </li>
            <li>
              <a href="/my/settings">Settings</a>
            </li>
            <li>
              <form action="/logout" method="POST">
                <button type="submit" class="w-full text-start">Logout</button>
              </form>
            </li>
          </ul>
        </div>
      {/if}
    </div>
  </nav>
</div>
<div class="py-10">
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    {#if data.user}
      <pre>
        Welcome {data.user.name}
      </pre>
    {/if}
    <slot />
  </div>
</div>
