import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Counter from "~/store/counter";


let exampleStore: Counter;

function initialiseStores(store: Store<any>): void {
    exampleStore = getModule(Counter, store)
}

export {
    initialiseStores,
    exampleStore,
}
