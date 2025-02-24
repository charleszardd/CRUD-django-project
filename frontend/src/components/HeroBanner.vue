<template>
    <v-container fluid class="main-font">
        <v-row class="mt-10 d-flex justify-center align-center">
            <v-col class="text-center">
                <h1 class="main-font text-grey-darken-4 text-h3 font-weight-bold">Showcase Your Work to The World</h1>
                <p class=" text-grey-darken-2 text-h6 font-weight-semibold">Create your professional portfolio in minutes</p>
                <Button height="45" to="/projects" color="#212121" class="mt-5" :noSpacing="false" icon="mdi-plus" @click="handleClick" >Create Projects</Button>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>

</style>