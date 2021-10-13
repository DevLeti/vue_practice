<template>
    <div class="controller">
        <div class="select">
            <label for="order">Order</label>
            <select name="order" id="order" class="selectbox">
                <option value="name-asc">Name Ascending</option>
                <option value="name-desc">Name Descending</option>
            </select>
        </div>
        <button class="clear" v-on:click="clearTodo">Clear All</button>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo() {
            localStorage.clear();
        }
    }
}
</script>

<style>
</style>
