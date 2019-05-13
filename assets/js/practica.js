const app = new Vue({
    el: '#app',
    data: {
        templateName: '',
        username: '',
        colorBackground1: '',
        colorBackground2: ''
    },
    computed: {
        setTemplateName(){
            if(this.templateName == ''){
                return template = 'Reactive Template';
            } else {
                return template = this.templateName;
            }
        },
        setUsername(){
            if(this.username == ''){
                return username = 'Username';
            } else {
                return username = this.username;
            }
        }
    }
});


//Select materialize
$(function(){
    $('select').formSelect();
});