<template>
    <b-navbar toggleable="md" type="dark" variant="dark" fixed="top" v-bind:class="{ inTop: isInTop }">

        <b-nav-toggle target="nav_collapse"></b-nav-toggle>

        <b-navbar-brand :to="{ name: 'Home'}">Landing</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">


            <!-- Right aligned nav items -->
            <b-nav is-nav-bar class="ml-auto" v-if="allPagesLoaded">
            <template>
            <b-nav-item v-for="page in allPages" :to="{ name: 'Page-Template', params: { page_id: page.id }}" :key="page.id">{{ page.title.rendered }}
            </b-nav-item>
            </template>
            <!--<b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">ENx</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>

                <template slot="button-content">
                <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
        -->
            </b-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    data() {
      return {
        isInTop: true
      }
    },
    computed: {
    ...mapGetters({
        allPagesLoaded: 'allPagesLoaded',
        allPages: 'allPages',
    })
    },
    methods: {
        handleScroll: function (event) {
            if (window.scrollY == 0) {
                this.isInTop = true;
            }else{
                this.isInTop = false;
            }
        }
    },
    created: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
.inTop {
    background-color:rgba(0, 0, 0, 0.5) !important;
    transition: background-color .5s ease-out;
}

    
</style>