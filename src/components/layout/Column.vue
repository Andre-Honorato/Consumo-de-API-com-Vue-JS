<template>
    <div :class="classFormat">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Column',
    props: {
        size: {
            type: String,
            default: '12'
        }
    },
    computed: {
        classFormat() {
            return [
                'column',
                this.size ? `is-${this.size}` : ''
            ]
        }
    }
}
</script>