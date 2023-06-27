<template>
  <div id="app">
    <router-view/>
    <router-view name="PrimaryFooter" />
  </div>
</template>
<script>
export default {
  name:'App',
}
</script>