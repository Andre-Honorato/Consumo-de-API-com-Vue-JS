<template>
    <div :class="classFormat">
        <div class="hero-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    props: {
        fullHeight: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: ''
        }
    },
    computed: {
        classFormat() {
            return [
                'hero',
                this.fullHeight ? 'is-fullheight' : '',
                this.color ? `is-${this.color}` : ''
            ]
        }
    }
}
</script>