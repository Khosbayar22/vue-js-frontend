<template>
    <div id="section">
        <h2 class="title-text">Friend List</h2>
        <ul>
            <li>
                <friend-contact></friend-contact>
                <friend-contact></friend-contact>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style>
.title-text {
    color: #fff;
}
ul {
    list-style: none;
}
</style>