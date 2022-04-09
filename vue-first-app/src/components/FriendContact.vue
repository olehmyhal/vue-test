<template>
    <li>
        <h2>{{ name }} {{ isFavourite ? '(Fav)' : '' }}</h2>
        <button @click='toggleFav'>{{ isFavourite ? 'Remove fav' : 'Make fav' }}</button>
        <button @click='toggleDetails'>{{ detailsAreVisible ? 'Hide' : 'Show' }} details</button>
        <ul v-if='detailsAreVisible'>
            <li><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li><strong>Email: </strong>{{ emailAdress }}</li>
        </ul>
        <button @click="deleteFriend">Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAdress: {
            type: String,
            required: true
        },
        isFavourite: {
            type: Boolean,
            required: false,
            default: false
        }

    },
    data(){
        return {
            detailsAreVisible: false
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleFav(){
            this.$emit('toggle-fav', this.id)
        },
        deleteFriend(){
            this.$emit('delete-contact', this.id)
        }
    }
}
</script>