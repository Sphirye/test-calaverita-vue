<template>
  <v-app>
    <v-main :class="`${ darkTheme ? 'grey darken-4' : 'grey lighten-4' }`">
      <div :class="` ${ $vuetify.breakpoint.mdAndUp ? 'background-lg' : 'background-sm' } `">
        <div class="content">
          <router-view/>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import AppBarComponent from "@/components/AppBarComponent.vue"
import UIModule from "./store/UIModule"
import { getModule } from "vuex-module-decorators"

@Component({
  components: { AppBarComponent }
})

export default class App extends Vue {

  uiModule: UIModule = getModule(UIModule)

  get darkTheme() {
    return this.uiModule.darkTheme
  }

  set darkTheme(v: boolean) {
    this.uiModule.switchDarkTheme(v)
  }

  beforeCreate() {
    Vue.prototype.$darkTheme = false
  }

}

</script>

<style>
.background-lg {
  background: url('./assets/klipartz.com.png') no-repeat !important;
  background-position: 100% 25px !important;
}

.background-sm {
  background: url('./assets/klipartz.com.png') no-repeat !important;
  background-position: center top !important;
}

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .content {
    backdrop-filter: blur(10px);
  }
}
</style>