Vue.config.devtools = true;

new Vue (  
    {
        el: '#app', 
        data:{
            list_task: [],
            add_Task = ''
        },
        methods:{
            pushTask: function(){
                this.list_task.push(this.add_Task);
                this.add_Task = ''
            }
        }
    }
)
