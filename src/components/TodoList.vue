<template>
    <ul class = "list">
        <li class = "list__item">
            <input type="checkbox" id="list-item-1" />
            <label for="list-item-1">
                <p class="list__text">Have a nice day!</p>
            </label>
            <p class = "list__date">10/10</p>
            <button class="list__delete">Delete</button>
        </li>
    </ul>
</template>

<script>
</script>

<style lang="scss">
$color: #f0f0f0;
.list{
    background: $color;
    
    &__text {
        font-weight: bold;
    }
}
</style>
