const app = Vue.createApp({
    data(){
        return {
            firstOutput: '',
            secondOutput: ''
        }
    },
    methods: {
        showAlert(){
            alert('Button is clicked')
        },
        keydownEvent(event){
            this.firstOutput = event.target.value
        },
        keydownEnterEvent(event){
            this.secondOutput = event.target.value
        }
    }
})

app.mount('#assignment')