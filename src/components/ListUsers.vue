<template>
    <div>
        <List v-if="!loadingUsers && users.length">
            <ListItem
                v-for="item in users"
                :key="item.id"
                :item="item" 
            />
        </List>
        <Columns centered v-else-if="loadingUsers">
            <Loading />
        </Columns>
        <NotFound v-else/>
    </div>
</template>

<script>
import { eventBus } from './../main'

import axios from 'axios'
import 'bulma-list/css/bulma-list.css'

import List from './elements/List.vue'
import Columns from './layout/Columns.vue'
import ListItem from './elements/ListItem.vue'
import Loading from './elements/Loading.vue'
import NotFound from './elements/NotFound.vue'

export default {
    name: 'ListUsers',
    data() {
        return {
            users: [],
            loadingUsers: false
        }
    },
    components: {
        List,
        Columns,
        ListItem,
        Loading,
        NotFound
    },
    methods: {
        async getUsers() {
            this.loadingUsers = true
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.loadingUsers = false
            this.users = response.data
        },
        deleteUser(id) {
            const userById = this.users.findIndex(user => user.id == id)
            this.users.splice(userById, 1)
        }
    },
    created() {
        this.getUsers()
        eventBus.$on('deleteUser', this.deleteUser)
    }
}
</script>