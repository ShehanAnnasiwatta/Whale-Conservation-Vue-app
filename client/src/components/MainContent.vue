<script setup>
import ContactForm from './ContactForm.vue';
</script>

<template>
  <main>
    <section id="feature" class="card-container feature-bg-clr">
      <h2 class="sub-heading-primary item-border">Featured: Whale Conservation</h2>
      <p>Learn about our efforts to protect whale populations worldwide and how you can help. Our mission is to
        raise awareness and support for whale conservation through education, advocacy, and community involvement.</p>
      <div style="text-align: center;">
        <img
          src="https://media.istockphoto.com/id/1301664341/photo/humpback-whale-mother-and-calf-swimming-in-clear-blue-ocean.jpg?s=2048x2048&w=is&k=20&c=vLK4jDJFVTVelVJNUxo-l00xgnRVNt_eq5ZbnXjz1vY="
          alt="Whale in the ocean" class="whale-image">
        <a class="button" href="#donate">Help the Whale</a>
      </div>
    </section>

    <section id="about" class="card-container">
      <h2 class="sub-heading-primary item-border">About Us</h2>
      <p class="">We are dedicated to preserving whale species and their habitats through education and advocacy.
        Founded in 2001, our organisation has been at the forefront of whale conservation, working with global partners
        to ensure the survival of these majestic creatures.</p>
      <h3 class="sub-heading-secodary">Our Mission</h3>
      <p>Our mission is to protect whales and their habitats through comprehensive conservation strategies,
        public education, and policy advocacy. We aim to reduce the impact of human activities on whale populations and
        ensure a future where whales thrive.</p>
      <h3 class="sub-heading-secodary">Our Impact</h3>
      <ul class="list">
        <li>Over 500 whales rescued and rehabilitated</li>
        <li>Numerous awareness campaigns reaching millions worldwide</li>
        <li>Active collaboration with international conservation organisations</li>
      </ul>
    </section>

    <section id="donate" class="card-container">
      <h2 class="sub-heading-primary item-border">Donate</h2>
      <p class="">Your contribution helps fund important research and conservation projects. Every donation, big or
        small, makes a difference in protecting whale populations and preserving their natural habitats.</p>
      <h3 class="sub-heading-secodary">How Your Donation Helps</h3>
      <p>Donations support various initiatives, including:</p>
      <ul class="list">
        <li>Whale tracking and research programmes</li>
        <li>Rescue and rehabilitation of stranded whales</li>
        <li>Public education and outreach programmes</li>
        <li>Advocacy for stronger conservation policies</li>
      </ul>
      <h3 class="sub-heading-secodary">Donation Form</h3>
      <form class="donation-form">
        <label for="donor-name">Name:</label>
        <input type="text" id="donor-name" name="donor-name" required>

        <label for="donor-email">Email:</label>
        <input type="email" id="donor-email" name="donor-email" required>

        <label for="donation-amount">Donation Amount:</label>
        <input type="number" id="donation-amount" name="donation-amount" min="1" required>

        <button type="submit">Donate Now</button>
      </form>
    </section>

    <ContactForm />

  </main>
</template>

<style scoped>
.feature-bg-clr {
  background-color: var(--clr-nuetral);
}

.whale-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0 auto;
}

.button {
  display: inline-block;
  background-color: var(--btn-success-bold);
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-family: var(--ff-btn);
  font-size: var(--fs-body);
  font-weight: var(--fw-bold);
  margin-block: 10px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: mediumseagreen;
}

.list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-inline: 6rem;
}

.list li {
  font-family: var(--ff-body);
  font-size: var(--fs-body);
}

/* Styling for the form container */
.donation-form {
  border: 1px solid #ddd;
  padding: 1rem;
  min-width: 960px;
  border-radius: 5px;
  margin: 8px auto;
}

/* Styling for labels */
.donation-form label {
  font-family: var(--ff-body);
  font-weight: var(--fw-bold);
  margin-top: 10px;
  display: block;
  font-size: var(--fs-body);
}

/* Styling for the input fields */
.donation-form input[type="text"],
.donation-form input[type="email"],
.donation-form input[type="number"] {
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
.donation-form button {
  background-color: var(--btn-success-light);
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
.donation-form button:hover {
  background-color: #218838;
}
</style>