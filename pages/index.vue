<template>
    <section class="mt-5">
        <h1 class="header text-3xl text-center font-bold text-orange-700 uppercase">Nuxt TypeScript Starter</h1>
        <p class="text-xl text-gray-800 mt-8">{{someText}}</p>
        <div class="mt-16 w-5/12 mx-auto bg-gray-100 p-4 text-blue-600 uppercase font-medium text-center">
            <p>Counter</p>
            <p class="text-4xl text-orange-500 my-5">{{count}}</p>
            <button v-on:click="increment" class="bg-blue-600 hover:bg-blue-800 rounded text-white p-3">Increment this!</button>
        </div>

    </section>
</template>

<script lang="ts">
    import {
        Component,
        Vue
    } from "nuxt-property-decorator"




import {exampleStore} from '~/store'

    @Component({})
    export default class extends Vue {
        get count() {
            return exampleStore.count;
        }

        someText = "Lorem ipsum posuere curabitur augue aptent eleifend mi, " +
            "aliquam mollis nibh nisl nam dui, " +
            "dictum cursus pharetra taciti integer turpis.";

        increment(){
            exampleStore.increment(1);
        }
    }
</script>

<style scoped>
    .header {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
    }
</style>
