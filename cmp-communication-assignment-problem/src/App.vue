<template>
    <div>
        <user-data @change-user='changeUser'/>
        <active-user 
            :username='person.name' 
            :age='person.age'
        />
    </div>
</template>

<script>
export default {
    data(){
        return {
            person: {
                name: '',
                age: '0'
            }
        }
    },
    methods: {
        changeUser(value, key) {
            this.person[key] = value
        }
    }
}
</script>