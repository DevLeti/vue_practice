<template>
    <div id="app">
        <TodoHeader />
        <TodoTitle v-bind:propsdata="todoItemsLength"/>
        <TodoInput v-on:addItem="addOneItem" />
        <TodoController v-on:clearAll="clearAllItem"/>
        <TodoList
            v-bind:propsdata="todoItems"
            v-on:removeItem="removeOneItem"
            v-on:toggleItem="toggleOneItem"
        />
        <TodoFooter />
    </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoTitle from "./components/TodoTitle.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoController from "./components/TodoController.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
    name: "App",
    data() {
        return {
            todoItems: [],
            todoItemsLength: localStorage.length
        };
    },
    methods: {
        refreshItemsLength() {
            this.todoItemsLength = localStorage.length;
        },
        addOneItem(todoItem) {
            var value = {
                item: todoItem,
                completed: false
            };
            localStorage.setItem(todoItem, JSON.stringify(value));
            this.todoItems.push(value);
            this.refreshItemsLength();
        },
        removeOneItem(todoItem, index) {
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1);
            this.refreshItemsLength();
        },
        toggleOneItem(todoItem) {
            todoItem.completed = !todoItem.completed;
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
            this.refreshItemsLength();
        },
        clearAllItem() {
            this.todoItems = [];
            localStorage.clear();
        }
    },
    created() {
        if(localStorage.length > 0){
            for (let i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    this.todoItems.push(
                        JSON.parse(localStorage.getItem(localStorage.key(i)))
                    );
                }
            }
        }
    },
    components: {
        TodoHeader,
        TodoTitle,
        TodoInput,
        TodoController,
        TodoList,
        TodoFooter
    }
}
</script>

<style>
</style>
