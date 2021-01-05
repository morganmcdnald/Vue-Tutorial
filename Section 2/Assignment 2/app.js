const app = Vue.createApp({
    data() {
        return {
            name: '',
            confirmedName: ''
        };
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        buttonClicked() {
            alert('The button was successfully clicked!');
        },
        setName(event) {
            this.name = event.target.value;
        }
    }
});

app.mount('#assignment')