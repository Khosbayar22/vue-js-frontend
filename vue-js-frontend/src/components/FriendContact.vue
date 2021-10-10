<template>
    <section class="card-item">
        <div>
            <h2>{{friendList.name}}</h2>
            <ul v-if="detailsAreVisible">
                <li>{{friendList.id}}</li>
                <li>{{friendList.age}}</li>
                <li>{{friendList.phone}}</li>
            </ul>
            <button @click="toggleDetails">Detail</button>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                friendList: {
                    id: 1, 
                    name: "Bataa", 
                    age: 19,
                    phone: "8000-0000",
                }, 
                detailsAreVisible: false,
            }
        }, 
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            }
        }
    } 
</script>

<style>
body {
    background: #333;
}
.card-item {
    background: #fff;
    width: 300px;
    margin: 8px;
    border-radius: 8px;
    padding: 16px;
}
h2 {
    margin: 0;
    color: #000 ;
}
ul {
    margin: 8px 0;
}
</style>