<template>
  <v-container :class="`${ $vuetify.breakpoint.lgAndUp ? 'background-lg' : 'background-md' }`" fluid>
    <div :class="`${ darkTheme ? 'white--text' : 'black--text' } ${ $vuetify.breakpoint.mdAndDown ? 'content' : '' }`">
    <v-row class="text-h5 text-md-h4 py-5 no-wrap">
      <span class="mx-5 font-weight-bold">calaverita</span>
      <v-spacer/>
      <v-btn icon @click="darkTheme = !darkTheme">
        <v-icon large>fas fa-sun</v-icon>
      </v-btn>
      <span class="mx-5">News</span>
      <span class="mx-5">Contact</span>
    </v-row>

    <v-row>
      <div class="mx-5">
        <v-col cols="7" offset="12">
          <v-sheet height="450px" class="transparent d-flex flex-column-reverse">
            <p :class="`text-h3 text-md-h2 ${ darkTheme ? 'white--text' : 'black-text' }`">
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

        <v-row no-gutters justify="center" class="my-16">
          <v-col cols="12" sm="4" md="3" class="ma-2" v-for="(bird, key) in birds" :key="key">
            <v-card :class="`pa-5 ${ darkTheme ? 'white--text blue-grey darken-4' : 'black--text white' }`" rounded="xl" width="100%">
              <v-img :src="require(`@/assets/${bird.image}`)" width="200px" height="200px" contain class="mx-auto align-self-stretch"></v-img>
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
          <v-card-title :class="`text-h2 text-no-wrap font-weight-bold ${darkTheme ? 'white--text' : 'black--text'}`">Como funciona</v-card-title>
          <v-card-subtitle class="text-h5 grey--text text--darken-2 font-weight-medium">Los pasos para obtener la información</v-card-subtitle>
          <v-row>
            <v-col cols="6" v-for="(item, key) in steps" :key="key">
              <v-icon x-large class="my-6" :color="` ${ darkTheme ? 'white' : 'black'} `">{{item.icon}}</v-icon>
              <v-spacer/>
              <span :class="`text-h4 my-6 font-weight-bold ${darkTheme ? 'white--text' : 'black--text'}`">{{item.step}}</span>
              <p :class="`text-h6 my-6 font-weight-ligth grey--text darken--3 ${darkTheme ? 'white--text blue-grey darken-4' : 'grey--text text--darken-2'}`">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import DefaultComponent from "@/components/DefaultComponent.vue"
import UIModule from "@/store/UIModule";
import { getModule } from "vuex-module-decorators";

@Component({
  components: { DefaultComponent }
})

export default class Home extends Vue {

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
}

</script>

<style>
.background-lg {
  background: url('../assets/klipartz.com.png') no-repeat !important;
  background-position: 100% 25px !important;
}

.background-md {
  background: url('../assets/klipartz.com.png') no-repeat !important;
  background-position: center top !important;
}

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .content {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
}

</style>