const app = Vue.createApp({
    data(){
        return {
            newTask: '',
            listOfTasks: [],
            isHidden: false
        }
    },
    computed: {
        textButton(){
            return this.isHidden ? 'Show List' : 'Hide' 
        },
    },
    methods: {
        addNewTask(){
            if(this.newTask.trim()){
                this.listOfTasks.push(this.newTask)
                this.newTask = ''
            }
        },
        toggleVisibiltyList(){
            this.isHidden = !this.isHidden
        }
    }
})

app.mount('#assignment')