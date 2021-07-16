import store from "@/store/store"
import { Module, Mutation, VuexModule } from "vuex-module-decorators"

@Module({dynamic: true, store, name: "UIModule"})
export default class UIModule extends VuexModule {

    darkTheme: boolean = false

    @Mutation
    switchDarkTheme(v: boolean) {
        this.darkTheme = v
    }

}