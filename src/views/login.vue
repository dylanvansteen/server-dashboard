<template>
    <div>
        <!-- <v-flex xs6 offset-xs3> -->
        <v-card class="center">
            <v-form v-model="valid">
                <v-text-field label="Name" v-model="name" :counter="10" required></v-text-field>
                <v-text-field label="password" v-model="password" required></v-text-field>
                <v-btn @click="submit">submit</v-btn>
            </v-form>
        </v-card>

        <!-- </v-flex> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            password: '',
            valid: false
        }
    }
}
</script>

<style scoped>
.center {
    top: 30%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    position: absolute;
    padding: 25px;
}
</style>
