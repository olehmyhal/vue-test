<template>
    <div>
        <input type='text' v-model='name' @keydown.enter='changeData($event, "name")'/>
        <input type='number' v-model='age' @keydown.enter='changeData($event, "age")'/>
    </div>
</template>

<script>
export default {
    emits: ['change-user'],
    data(){
        return {
            name: '',
            age: 0
        }
    },
    methods: {
        changeData(e, name){
            this.$emit('change-user', e.target.value, name)
        }
    }
}
</script>