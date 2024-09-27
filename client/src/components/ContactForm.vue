<script setup>

// Import Vue's ref to create reactive properties
import { ref } from 'vue';
// Define reactive properties for form fields
const name = ref('');
const email = ref('');
const message = ref('');
// TODO: Define reactive properties for email and message
// Reactive property to control the display of the confirmation message
const showConfirmation = ref(false);
// Function to handle form submission
function handleSubmit() {
 // Show the confirmation message
 showConfirmation.value = true;
 // Clear form fields
 name.value = '';
 // TODO: Add code to clear other form fields
} 

</script>

<template>
    <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to get involved, please reach out to us. We would love to hear from
            you!</p>
        <form @submit.prevent="handleSubmit">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" v-model="name"  required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" v-model="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" v-model="message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </section>
</template>