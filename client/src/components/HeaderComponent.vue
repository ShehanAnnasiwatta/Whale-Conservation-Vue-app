<script setup>

</script>

<template>
    <header class="header">
        <h1>Save the Whales</h1>
        <a class="donate-button" href="#donate">Donate Now</a>
    </header>
</template>

<style scoped>
/* Styling for the header */
.header {
    background-color: var(--clr-primary);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 100px;
}

/* Centering the h1 element */
.header h1 {
    text-align: center;
    margin: 0;
    flex-grow: 1;
    font-family: var(--ff-heading);
    font-size: var(--fs-primary-heading);
    font-weight: var(--fw-bold);
}

/* Styling the 'Donate Now' button */
.donate-button {
    background-color: var(--btn-success-light);
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    font-family: var(--ff-btn);
    font-size: var(--fs-body);
    font-weight: var(--fw-bold);
    position: relative;
    right: 0;
    transition: background-color 0.3s ease;
}

/* Hover effect for the button */
.donate-button:hover {
    background-color: mediumseagreen;
}
</style>