Vue.createApp({
    data() {
        return {
            myName: 'Oleg',
            myAge: 20,
            linkPhoto: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
        }
    },
    methods: {
        randomNumber(){
            return Math.random()
        },

    }
}).mount('#assignment')