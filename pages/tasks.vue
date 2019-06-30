<template>
    <div class="mx-10 p-5 rounded-b-lg shadow-xl mt-20 my-10 bg-white max-w-5xl mx-auto">
        <p class="ml-8 mt-6 text-xl text-green-800 mb-10">Bienvenido <span class="font-bold text-xl text-green-800 font-medium tracking-wide font-sans">{{name.toUpperCase()}}</span> </p>
        <h1 class="text-2xl justify-center text-center">Tasks:</h1>
        <div class="contentTask mt-6">
            <div class="w-8/12 bg-blue-800 mx-auto border-blue-800 border rounded-b-sm rounded" v-for="task in tasks">
                <div class="font-bold py-2 text-center text-lg text-gray-200 uppercase">{{task.title}}</div>
                <div class="p-3 bg-white text-base pt-4">{{task.description}}</div>
            </div>

        </div>

        <div class="max-w-md mx-auto mt-12 mb-8">
            <h2 class="text-xl uppercase">Add task</h2>
            <label class="block text-gray-700 text-sm font-bold mb-2">Titulo</label>
            <input class="shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="titulo">
            <label class="block text-gray-700 text-sm font-bold mb-2">Detalles</label>
            <input class="shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="description">
            <button class="mt-5 block text-sm bg-blue-700
                            text-white font-bold py-2 px-4 rounded
                            focus:outline-none focus:shadow-outline

                            " @click="saveTask()">guardar tarea</button>
        </div>

    </div>

</template>

<script lang="ts">
    import {Component, Vue} from "nuxt-property-decorator";
    import {Task} from "~/types";
    import {exampleStore,initialiseStores} from "~/utils/store-accessor";
    import {getModule} from "~/node_modules/vuex-module-decorators";

    @Component
    export default class extends Vue{
        mount(){
            initialiseStores(this.$store);
        }

        get tasks() {
            this.mount();
            return exampleStore.count
        }

        name: string = "pedro";
        titulo: string = "";
        description: string = "";



        saveTask(){
            console.log("guardando " + this.titulo + " " + this.description)
        }
    }
</script>
