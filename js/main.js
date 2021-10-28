const app = Vue.createApp({
    data() {
        return {
            title: "Contador App - Vue",
            count: 0,
        };
    },
    methods: {
        disCount() {
            this.count -= 1;
        },
        addCount() {
            this.count += 1;
        },
        modCount(instruccion = "add", limit = 1) {
            if (instruccion === "dis") this.count -= limit;
            else this.count += limit;
        },
    },
});
