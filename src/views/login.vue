<template>
    <div>
        <!-- <v-flex xs6 offset-xs3> -->
        <v-card class="center">
            <v-form v-model="valid" ref="form">
                <v-text-field label="Name" v-model="name" :rules="nameRules" :counter="10" required></v-text-field>
                <v-text-field label="Password" v-model="password" :rules="passwordRules" required></v-text-field>
                <v-btn @click="submit">submit</v-btn>
            </v-form>
        </v-card>

        <!-- </v-flex> -->
    </div>
</template>

<script>
import { auth } from '@/config/firebase'
export default {
    data() {
        return {
            valid: false,
            name: '',
            nameRules: [
                (v) => !!v || 'Name is required',
                (v) => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            password: '',
            passwordRules: [
                (v) => !!v || 'Name is required',
                (v) => v.length <= 10 || 'Name must be less than 10 characters'
            ],
        }
    },
    methods: {
        submit(e) {
            console.log(e);
            this.$refs.form.validate();
            console.log(this.$refs.form);
        },
        // valid() {
        //     this.$refs.form.validate();
        // }
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
