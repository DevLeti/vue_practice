<template>
    <div class="add">
        <input
               type="text"
               class="add__input"
               placeholder="Enter your task"
               v-model="newTodoItem"
               v-on:keyup.enter="addTodoItem"
        />
        <button class="add_button" v-on:click="addTodoItem">add</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ""
        };
    },
    methods: {
        addTodoItem() {
            if (this.newTodoItem !== ""){
                var value = {
                    item: this.newTodoItem,
                    completed: false
                };
                localStorage.setItem(this.newTodoItem, JSON.stringify(value));
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = "";
        }
    }
};
</script>

<style>
</style>
