<script setup>
import ContactForm from './ContactForm.vue';
</script>

<template>
      <main>
    <section id="feature" class="card-container">
      <h2 class="sub-heading-primary  item-border">Featured: Whale Conservation</h2>
      <p class="">Learn about our efforts to protect whale populations worldwide and how you can help. Our mission is to raise awareness and support for whale conservation through education, advocacy, and community involvement.</p>
      <div class="">
        <img src="https://media.istockphoto.com/id/1301664341/photo/humpback-whale-mother-and-calf-swimming-in-clear-blue-ocean.jpg?s=2048x2048&w=is&k=20&c=vLK4jDJFVTVelVJNUxo-l00xgnRVNt_eq5ZbnXjz1vY=" alt="Whale in the ocean">
        <a href="#donate">Help the Whale</a>
      </div>
    </section>
    
    <section id="about" class="card-container">
      <h2 class="sub-heading-primary  item-border">About Us</h2>
      <p class="">We are dedicated to preserving whale species and their habitats through education and advocacy. Founded in 2001, our organisation has been at the forefront of whale conservation, working with global partners to ensure the survival of these majestic creatures.</p>
      <h3 class="sub-heading-secodary ">Our Mission</h3>
      <p class="">Our mission is to protect whales and their habitats through comprehensive conservation strategies, public education, and policy advocacy. We aim to reduce the impact of human activities on whale populations and ensure a future where whales thrive.</p>
      <h3 class="sub-heading-secodary ">Our Impact</h3>
      <ul class="list">
        <li>Over 500 whales rescued and rehabilitated</li>
        <li>Numerous awareness campaigns reaching millions worldwide</li>
        <li>Active collaboration with international conservation organisations</li>
      </ul>
    </section>
    
    <section id="donate" class="card-container">
      <h2 class="sub-heading-primary  item-border">Donate</h2>
      <p class="">Your contribution helps fund important research and conservation projects. Every donation, big or small, makes a difference in protecting whale populations and preserving their natural habitats.</p>
      <h3 class="sub-heading-secodary ">How Your Donation Helps</h3>
      <p class="">Donations support various initiatives, including:</p>
      <ul class="list">
        <li>Whale tracking and research programmes</li>
        <li>Rescue and rehabilitation of stranded whales</li>
        <li>Public education and outreach programmes</li>
        <li>Advocacy for stronger conservation policies</li>
      </ul>
      <h3 class="sub-heading-secodary ">Donation Form</h3>
      <form class="">
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
.list{
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-inline: 6rem;
}
</style>