const app = Vue.createApp({
    data(){
        return {
            bgColor: 'white',
            classUser: '',
            showPar: true
        }
    },
    methods: {
        bhChangeInput(event){
            this.bgColor = event.target.value
        },
        togglePar(){
            this.showPar = !this.showPar
        }
    }
})

app.mount('#assignment')