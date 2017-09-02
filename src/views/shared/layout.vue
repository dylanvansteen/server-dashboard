<template>
    <div>
        <v-navigation-drawer permanent clipped transition="slide-x-transition">
            <v-list dense class="pt-0">
                <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar transition="slide-y-transition">
            <v-subheader>
                Server Monitoring
            </v-subheader>
        </v-toolbar>
        <main>
            <v-container fluid>
                <transition name="fade" :appear="true" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-container>
        </main>
        <v-footer fixed>
            <span>© {{ new Date().getFullYear() }} - Author Dylan van Steen</span>
        </v-footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            items: [
                { title: 'Dashboard', icon: 'dashboard', link: 'dashboard' },
                { title: 'Servers', icon: 'question_answer', link: 'server' }
            ],
            right: null
        }
    },
    watch: {
        '$route'(to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}
</script>

<style>

</style>
