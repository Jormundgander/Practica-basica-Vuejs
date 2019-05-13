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
                return this.templateName = 'Reactive Template';
            } else {
                return this.templateName;
            }
        },
        setUsername(){
            if(this.username == ''){
                return this.username = 'Username';
            } else {
                return this.username;
            }
        }
    }
});


//Select materialize
$(function(){
    $('select').formSelect();
});