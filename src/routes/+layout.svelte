<script>
    import Menu from "../components/menu.svelte";
    import Background from "../components/background.svelte";

</script>

<Menu home={
{name: "Otter nonesense",
link: "/"
}} sections={[
    {
        name: "test",
        link:"https://www.google.com" ,
    },
    {
        name: "Test2",
        link: "https://www.google.com"
    }
]}/>

<Background />
<slot/>