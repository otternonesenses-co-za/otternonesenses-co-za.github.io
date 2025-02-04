<script>
    export let sections
</script>

<div class="menu-container">
    {#each sections as sec}
        <a href="{sec.link}">{sec.name}</a>
    {/each}
</div>

<style>
    .menu-container {
        top: 0;
        position: fixed;
        /* border: 1px solid red; */
        width: 100vw;
        left: 0;
        background: var(--white);
        display: flex;
        padding: 1em 0px;
        box-shadow: 10px 0px 10px var(--black);
        flex-direction: row;
        align-items: right;
        justify-content: right;
        align-content:space-evenly;
        flex-wrap: wrap;
        z-index: 1000;
}

    .menu-container a {
        text-decoration: none;
        color: var(--black);
        font-weight: 500;
        font-size: 1.5rem;
        /* flex: 1; */
        padding: 0px 20px;    
        }
</style>