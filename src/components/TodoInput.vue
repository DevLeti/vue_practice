<template>
    <div class="add">
        <input
               type="text"
               class="add__input"
               placeholder="Enter your task"
               v-model="newTodoItem"
               v-on:keyup.enter="addTodoItem"
        />
        <b-button pill variant="primary"
                  class="add_button"
                  v-on:click="addTodoItem">add</b-button>
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
                this.$emit("addItem", this.newTodoItem);
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
