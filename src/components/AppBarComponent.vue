<template>
  <v-app-bar dark clipped-left app elevation="2">
    <v-toolbar-title class="font-weight-black text-h5">calaverita</v-toolbar-title>
    <v-spacer/>
		<span class="text-h5 mx-4">News</span>
		<span class="text-h5">Contact</span>

  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"

@Component({
  components: { }
})

export default class NavigationDrawerComponent extends Vue {

}

</script>
