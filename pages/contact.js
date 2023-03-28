import React from "react";
import styles from '../styles/Contact.module.css'
const contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form>
      <div class="mb-3">
      <label for="name" class="form-label">Enter your name </label>
        <input type="text" class="form-control" id="name" name='name' aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            name='email'
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">
            Phone Number: 
          </label>
          <input
            type="number"
            class="form-control"
            id="phone"
            name='phone'
          />
        </div>
        <div class="mb-3">
        <label for="desc">Your Concern please</label> <br/>
  <textarea class="form-control" placeholder="Write your concern here" id="desc"></textarea>
  
</div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
