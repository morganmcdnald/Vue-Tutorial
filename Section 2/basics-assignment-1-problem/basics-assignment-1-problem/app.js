const app = Vue.createApp({
    data() {
        return {
            myName: 'Morgan McDonald',
            myAge: 23,
            imageLink: 'https://wallpaperaccess.com/full/894004.jpg'
        };
    },
    methods: {
        ageInFive() {
            return this.myAge + 5;
        },
        randomNo() {
            return Math.random();
        }
    }
});

app.mount('#assignment');