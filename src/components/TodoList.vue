<template>
    <ul class = "list">
        <li class = "list__item"
            v-for="(todoItem, index) in propsdata"
            v-bind:key="todoItem.item">
            <input
                   type="checkbox"
                   v-bind:id="todoItem.item"
                   v-bind:checked="todoItem.completed === true"
                   v-on:change="toggleComplete(todoItem)"
            />
            <label v-bind:for="todoItem.item" class="list__label">
                <p class="list__text">{{ todoItem.item }}</p>
            </label>
            <button class="list__delete" v-on:click="removeTodo(todoItem, index)">Delete</button>
        </li>
    </ul>
</template>

<script>
export default {
    props: ["propsdata"],
    methods: {
        toggleComplete(todoItem){
            todoItem.completed = !todoItem.complted;
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        removeTodo(todoItem, index){
            this.emit("removeItem", todoItem, index);
        },
        toggleComplete(todoItem) {
            this.$emit("toggleItem", todoItem);
        }
    }
};
</script>

<style>
</style>
