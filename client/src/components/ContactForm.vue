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
 email.value = '';
 message.value = '';
 // TODO: Add code to clear other form fields
} 

</script>

<template>
    <section id="contact" class="card-container">
        <h2 class="sub-heading-primary item-border">Contact Us</h2>
        <p>If you have any questions or would like to get involved, please reach out to us. We would love to hear from
            you!</p>
        <form class="contact-form" @submit.prevent="handleSubmit">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" v-model="name"  required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" v-model="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" v-model="message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
        
        <p v-show="showConfirmation">Message has been sent!</p>
    </section>
</template>

<style scoped>
.contact-form {
  border: 1px solid #ddd;
  padding: 1rem;
  min-width: 960px;
  border-radius: 5px; 
  margin: 8px auto;
}

/* Styling for labels */
.contact-form label {
  font-family: var(--ff-body);
  font-weight: var(--fw-bold);
  margin-top: 10px;
  display: block;
  font-size: var(--fs-body);
}

/* Styling for the input fields */
.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: var(--ff-body);
}

/* Styling for the submit button */
.contact-form button {
  background-color: var(--btn-info);
  color: white;
  font-family: var(--ff-btn);
  font-weight: var(--fw-bold);
  font-size: var(--fs-body);
  border: none;
  padding: 12px 20px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
}

/* Add hover effect to the submit button */
.contact-form button:hover {
  background-color: #218838;
}
</style>