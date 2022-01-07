<template>
    <div :class="classFormat">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Columns',
    props: {
        centered: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classFormat() {
            return [
                'columns',
                this.centered ? 'is-centered' : ''
            ]
        }
    }
}
</script>