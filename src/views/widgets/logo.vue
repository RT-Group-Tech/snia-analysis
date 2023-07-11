<template>
    <div class="navbar-brand d-flex">
        <img src="img/logo.png" style="height: 50px;" alt="logo">
        <div class="d-flex flex-column">
            <h1 class="text-white font-weight-bold" style="font-size: 2.2em; margin-bottom: 0;">SNIA</h1>
            <div class="d-flex" style="width: 75px; margin-top: 0;">
                <div style="flex-grow:1; background-color: #00aeef; height: 2.5px;"></div>
                <div style="flex-grow:1; background-color: #fff200; height: 2.5px;"></div>
                <div style="flex-grow:1; background-color: #ed1c24; height: 2.5px;"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Logo',
    props: {
        size: {
            default: 70
        }
    }
}
</script>

<style scoped>
.logo-subtitle {
    font-family: Arial, Helvetica, sans-serif;
    font-size: .55em;
    font-weight: 700;
}

.flags {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>