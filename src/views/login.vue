<template>
    <div>
        <!-- <v-flex xs6 offset-xs3> -->
        <v-card class="center">
            <v-form ref="form">
                <v-text-field label="Name" v-model="name" :rules="nameRules" required></v-text-field>
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
                // (v) => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            password: '',
            passwordRules: [
                (v) => !!v || 'Name is required',
                // (v) => v.length <= 10 || 'Name must be less than 10 characters'
            ],
        }
    },
    methods: {
        submit(e) {
            console.log(e);
            this.$refs.form.validate();
            console.log(this.$refs.form);
            this.signInWithPassword();
        },
        signUpWithPassword() {
            // if (this.password === this.confirmPassword) {
            // auth.createUserWithEmailAndPassword(this.name, this.password)
            //     .then(() => this.signInWithPassword())
            //     .catch((error) => { this.errorMessage = error.message });
            // }
        },
        signInWithPassword() {
            let self = this;
            return auth.signInWithEmailAndPassword(this.name, this.password)
                .then((userData) => {
                    console.log('userData', userData);
                    localStorage.setItem('userData', userData);
                    self.onSignedIn();
                    return userData;
                })
                .catch((error) => { this.errorMessage = error.message });
        },
        onSignedIn() {
            this.$router.push('/app');
        },
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
