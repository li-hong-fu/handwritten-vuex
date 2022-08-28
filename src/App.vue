<template>
    <div id="app">
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
        <h2>名字:{{ $store.state.name }}</h2>
        <h2>名字:{{ $store.getters.addName }}</h2>
        <h2>火花同学工作了{{ $store.state.age }}年</h2>
        <button @click="add()">加10</button>
        <!-- <router-view /> -->
    </div>
</template>

<script>
export default {
    mounted() {
        // console.log(this.$store);
        // setInterval(() =>{
        //     this.$store.state.age += 1;
        // }, 1000);
    },
    methods: {
        add() {
            this.$store.commit("syncAdd", 1);
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
