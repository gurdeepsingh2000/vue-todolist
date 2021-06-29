Vue.config.devtools = true;

new Vue (  
    {
        el: '#app', 
        data:{
            list_task: ['Comprare Il Latte',"Comprare l'insalata",'Comprare Il pane'],
            add_Task: ''
        },
        methods:{
            deleteTask: function(actual_position){
                this.list_task.splice(actual_position , 1)
            },
            pushTask: function(){
                if(this.add_Task.length === 0){
                    alert('Devi aggiungere qualcosa!')
                }else{
                    this.list_task.push(this.add_Task);
                }
                this.add_Task = ''
            }
        }
    }
)
