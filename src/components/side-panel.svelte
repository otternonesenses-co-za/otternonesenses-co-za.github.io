<script>
    let isOpen = false;

    export let sections
    const toggle_panel = () => {
        isOpen = !isOpen
    }
</script>

<div>
    <div class="side-panel {isOpen ? "open" : ""}">
        <div class="header">
            Menu
        </div>

        {#each sections as sec}
            <a href="{sec.href}">{sec.name}</a>
        {/each}
    </div>
</div>