<template>
    <ul class = "list">
        <li class = "list__item"
            v-for="(todoItem, index) in todoItems"
            v-bind:key="todoItem.item">
            <input
                   type="checkbox"
                   v-bind:id="todoItem.item"
                   v-bind:checked="todoItem.completed === true"
                   v-on:change="toggleComplete(todoItem)"/>
            <label v-bind:for="todoItem.item" class="list__label">
                <p class="list__text">{{ todoItem.item }}</p>
            </label>
            <button class="list__delete" v-on:click="removeTodo(todoItem, index)">Delete</button>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            todoItems: []
        };
    },
    created() {
        if(localStorage.length > 0){
            for (let i = 0; i < localStorage.length; i++){
                this.todoItems.push(
                    JSON.parse(localStorage.getItem(localStorage.key(i)))
                );
            }
        }
    },
    methods: {
        toggleComplete(todoItem){
            todoItem.completed = !todoItem.complted;
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        removeTodo(todoItem, index){
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1);
        }
    }
};
</script>

<style>
</style>
