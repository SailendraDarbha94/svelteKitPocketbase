<script>
    export let form;
</script>

<div class="flex flex-col items-center h-full w-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Reset your password
    </h2>
    <p class="text-center mt-1">
        We will send you a link to reset your password
    </p>
    <form action="?/resetPassword" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
        <div class="form-control w-full max-w-md">
            <label for="email" class="label font-medium pb-1">
                <span class="label-text">Email</span>
            </label>
            <input type="email" name="email" class="input input-bordered w-full max-w-md">
        </div>
        <div class="w-full max-w-md pt-2">
            <button type="submit" class="btn btn-primary w-full">Reset Password</button>
        </div>
        {#if form?.success}
            <div class="alert alert-warning shadow-lg w-full max-w-md">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>An email has been sent to reset your password.</span>
                </div>
            </div>
        {/if}
    </form>
</div>