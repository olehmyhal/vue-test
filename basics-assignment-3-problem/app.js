const app = Vue.createApp({
    data(){
        return {
            result: 0
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.result = 0
            }, 5000)
        }
    },
    computed: {
        resultValue(){
            return (this.result > 37) ? 'Too much' : this.result
        }
    },
    methods: {
        changeResult(val){
            this.result += val
        }
    }
})

app.mount('#assignment')