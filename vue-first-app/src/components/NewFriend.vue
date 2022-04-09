<template>
    <form @submit.prevent='submitData'>
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label>email</label>
            <input type="email" v-model="enteredEmail">
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="enteredPhone">
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data(){
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        submitData(){
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
        }
    }
}
</script>