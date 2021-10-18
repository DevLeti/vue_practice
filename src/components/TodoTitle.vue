<template>
    <div class="title">
        <p class ="title__message">{{ message }}</p>
        <p class = "title__task">You have</p>
        <span class = "title__task-total">{{ propsdata }}</span> tasks.
    </div>
</template>

<script>
export default{
    props: ["propsdata"],
    data() {
        return {
            message: "Hello !",
        };
    },
    methods: {
        
    }
};
</script>

<style>
</style>