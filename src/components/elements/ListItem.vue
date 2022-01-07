<template>
    <div class="list-item">
        <div class="list-item-image">
            <figure class="image is-64x64">
                <img class="is-rounded" src="https://via.placeholder.com/128x128.png?text=Image">
            </figure>
        </div>
        <div class="list-item-content">
            <div class="list-item-title">
                {{item.name}}
            </div>
            <div class="list-item-description">
                {{item.email}}
            </div>
        </div>
        <div class="list-item-controls">
            <div class="buttons is-right">
                <button class="button is-danger" @click="deleteUser">
                    <span class="icon is-small">
                        <i class="fas fa-trash"></i>
                    </span>
                    <span>Deletar</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from './../../main'

export default {
    name: 'ListItem',
    props: {
        item: {
            type: Object
        }
    },
    methods: {
        deleteUser() {
            eventBus.$emit('deleteUser', this.item.id)
        }
    }
}
</script>