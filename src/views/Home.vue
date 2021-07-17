<template>
  <v-container :class="`${ $vuetify.breakpoint.mdAndUp ? 'background-lg' : 'background-sm ma-0' }`">
    <div :class="`${ darkTheme ? 'white--text' : 'black--text' } ${ $vuetify.breakpoint.smAndDown ? 'content' : '' }`">
      
      <v-row no-gutters class="py-5">
        <span :class="`${subtitleSize()} font-weight-bold`">calaverita</span>
        <v-spacer/>
        <v-btn icon @click="darkTheme = !darkTheme">
          <v-icon large>fas fa-sun</v-icon>
        </v-btn>
        <span :class="`mx-5 ${subtitleSize()}`">News</span>
        <span :class="`mx-5 ${subtitleSize()}`">Contact</span>
      </v-row>

      <v-row>
        <div>
          <v-col cols="7">
            <v-sheet height="450px" class="transparent d-flex flex-column-reverse">
              <p :class="` ${titleSize()} ${ darkTheme ? 'white--text' : 'black-text' }`">
                <span class="font-weight-bold">Ayudándote</span> a obtener información sobre aves.
              </p>
            </v-sheet>

            <v-col cols="12" md="8">
              <div class="d-flex">
                <v-text-field style="min-width: 120px;" class="mr-12" hide-details="true" placeholder="Busca tu ave" outlined rounded :dark="darkTheme"></v-text-field>
                <v-btn icon x-large class="indigo">
                  <v-icon color="white">fas fa-search</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-col>

          <v-row no-gutters :justify="`${ $vuetify.breakpoint.smAndDown ? 'center' : 'start' }`" class="my-16">
            <v-col cols="12" sm="4" md="3" class="ma-2" v-for="(bird, key) in birds" :key="key">

              <v-card :class="`pa-5 ${ darkTheme ? 'white--text blue-grey darken-4' : 'black--text white' }`" rounded="xl" width="100%">
                <v-img :src="require(`@/assets/${bird.image}`)" width="200px" height="200px" contain class="ma-auto align-self-stretch"></v-img>
                <v-card-title class="justify-center">Lorem Ipsum</v-card-title>
                <v-card-subtitle class="text-center grey--text text--darken-2 body-1">Lorem ipsum dolor sit</v-card-subtitle>
                <div class="mx-4">
                  <v-card-subtitle class="text-center grey--text body-2 pa-0">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod</v-card-subtitle>
                  <v-card-subtitle class="text-center blue--text text--accent-4 body-2 pa-0">Lorem ipsum dolor sit</v-card-subtitle>
                </div>
              </v-card>

            </v-col>
          </v-row>
        </div>
      </v-row>

      <v-row no-gutters class="mt-16">
        <v-col cols="12" sm="4">
          <v-img src="@/assets/bird_3.png"></v-img>
        </v-col>

        <v-col cols="12" sm="8">
          <v-card class="transparent" flat>
            <v-card-title :class="` text-no-wrap font-weight-bold ${titleSize()} ${darkTheme ? 'white--text' : 'black--text'}`">Como funciona</v-card-title>
            <v-card-subtitle :class="` ${subtitleSize()}  grey--text text--darken-2 font-weight-medium`">Los pasos para obtener la información</v-card-subtitle>
            
            <v-row>
              <v-col cols="6" v-for="(item, key) in steps" :key="key">
                <v-icon x-large class="my-6" :color="` ${ darkTheme ? 'white' : 'black'} `">{{item.icon}}</v-icon>

                <v-spacer/>

                <span :class="`${titleSize()} my-6 font-weight-bold ${darkTheme ? 'white--text' : 'black--text'}`">{{item.step}}</span>
                
                <p :class="`${miniSubtitleSize()} my-6 font-weight-ligth grey--text darken--3 ${darkTheme ? 'white--text' : 'grey--text text--darken-2'}`">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </v-col>
            </v-row>

          </v-card>
        </v-col>
      </v-row>
      
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import DefaultComponent from "@/components/DefaultComponent.vue"
import UIModule from "@/store/UIModule";
import { getModule } from "vuex-module-decorators";

@Component({
  components: { DefaultComponent }
})

export default class Home extends Vue {
  bruh = false
  uiModule: UIModule = getModule(UIModule)

  get darkTheme() {
    return this.uiModule.darkTheme
  }

  set darkTheme(v: boolean) {
    this.uiModule.switchDarkTheme(v)
  }

  birds = [
    { image: "bird_2.png" },
    { image: "bird_1.png" },
    { image: "bird_3.png" }
  ]

  steps = [
    { step: "Paso 1", icon: "fas fa-map-marker-alt" },
    { step: "Paso 2", icon: "fas fa-camera" },
    { step: "Paso 3", icon: "fas fa-cloud-upload-alt" },
    { step: "Paso 4", icon: "far fa-file-alt" }
  ]

  titleSize() {
    switch (this.$vuetify.breakpoint.name) {
        case("xs"): return "display-1"
        case("sm"): return "display-2"
        case("md"): return "display-2"
        case("lg"): return "display-3"
        case("xl"): return "display-4"
    }
  }

  subtitleSize() {
    switch (this.$vuetify.breakpoint.name) {
        case("xs"): return "text-h5"
        case("sm"): return "text-h4"
        case("md"): return "text-h4"
        case("lg"): return "text-h4"
        case("xl"): return "text-h3"
    }
  }

  miniSubtitleSize() {
    switch (this.$vuetify.breakpoint.name) {
        case("xs"): return "text-h6"
        case("sm"): return "text-h5"
        case("md"): return "text-h5"
        case("lg"): return "text-h5"
        case("xl"): return "text-h4"
    }
  }

  @Watch('$vuetify.breakpoint.name')
  onBreakpointNameChanged() {
    console.log(this.$vuetify.breakpoint.name)
  }
}

</script>

<style>
.background-lg {
  background: url('../assets/klipartz.com.png') no-repeat !important;
  background-position: 100% 25px !important;
}

.background-sm {
  background: url('../assets/klipartz.com.png') no-repeat !important;
  background-position: center top !important;
}

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .content {
    backdrop-filter: blur(10px);
  }
}

</style>