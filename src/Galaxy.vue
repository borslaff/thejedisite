<template>
    <div>
        <p>Sterretjes {{ stars }}</p>
        <button @click="count"> count dem stars</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            stars: 'a lot...',
        }
    },
    methods: {
        count(){
            this.stars = 'To much';
        }
    }
}
</script>
