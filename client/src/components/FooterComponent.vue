<script setup>

</script>

<template>
    <footer class="footer">
        <p>&copy; 2024 Save the Whales Organisation</p>
        <p>Follow us on:
            <a href="https://facebook.com" target="_blank">Facebook</a>,
            <a href="https://twitter.com" target="_blank">Twitter</a>,
            <a href="https://instagram.com" target="_blank">Instagram</a>
        </p>
    </footer>

</template>

<style scoped>

.footer {
    background-color: var(--clr-primary); 
    color: white; 
    text-align: center;
    padding: 20px 0; 
    position: relative;
    bottom: 0;
    width: 100%;
    font-size: var(--fs-body);
    font-family: var(--ff-body);
}


.footer a {
    color: white;
    text-decoration: none;
    margin: 0 5px; 
}

.footer a:hover {
    text-decoration: underline;
}

</style>