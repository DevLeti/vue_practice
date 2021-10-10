<template>
    <div class="title">
        <p class ="title__message">{{ message }}</p>
        <p class = "title__task">You have</p>
        <span class = "title__task-total">{{ todoTotal }}</span> tasks.
    </div>
</template>

<script>
export default{
    data() {
        return {
            message: "Hello !",
            todoTotal: 5
        };
    }
};
</script>

<style>
</style>