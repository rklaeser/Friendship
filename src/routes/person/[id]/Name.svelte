<script lang="ts">
    export let data;
    export let isEditing;

    import ProfilePic from '$lib/components/ProfilePic.svelte';
    import { intentImages } from '$lib/images/intentImages';
    import fallbackImage from '$lib/images/github.svg';


    async function handleDelete(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData
    });
    window.location.href = '/';
  
  }


</script>

<div class="flex flex-col items-center mt-8">   
    <ProfilePic index={data.friend.profile_pic_index} size={256} />
</div>
<div>
    <h1>{data.friend.name}</h1>
    {#if isEditing}
    <form method="POST" action="?/delete" on:submit={handleDelete}>
        <input type="hidden" name="id" value={data.friend.id}>
        <input type="hidden" name="name" value={data.friend.name}>
        <button type="submit" class="text-gray-500 px-6 py-3" aria-label="Delete person"><i class="fa-solid fa-trash"></i></button>
      </form>
    {/if}
</div>