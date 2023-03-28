import React from 'react'
import styles from '../styles/About.module.css'
const About = () => {
  return (
    <>
    <div class="about" id="about">
        <div class="row">
          <div class="about-left">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <img src="./assets/images/logo-140x140.jpg" alt="meeting" />
          </div>
          <div class="about-middle">
            <h2>Our History</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              error esse at earum similique omnis quam doloremque harum
              reprehenderit ad rem fuga! Officia, quasi totam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
              exercitationem earum doloribus explicabo. Cum qui perferendis
              deserunt iure, cupiditate expedita corrupti quisquam quos
              voluptatibus placeat!
            </p>
            <a href="" class="bttn">Read More</a>
          </div>
          <div class="about-right">
            <h2>Vision & Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              aspernatur, accusantium fugit velit hic ea earum ipsum at ad
              assumenda. Accusamus animi est dicta suscipit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              totam, id itaque labore quas natus aliquam, iure ullam repellendus
              soluta non facilis facere nemo perspiciatis!
            </p>
            <a href="" class="bttn">Read More</a>
          </div>
        </div>
      </div>
      <div class="about2">
          <div class="row">
              <div class="about2-left">
                  <h2>What can we do for ourself and world</h2>
                  <h1>About Us</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, ipsum nisi? Amet saepe quisquam porro temporibus aut necessitatibus sapiente obcaecati!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia similique distinctio quae!</p>
              </div>
              <div class="about2-right">
                  <div class="row">
                      <div class="card">
                          <box-icon type="logo" name="apple" color="#4CAF50" size="60px"></box-icon>
                          <h2>Save Humanity</h2>
                      </div>
                      <div class="card">
                          <box-icon type="logo" name="andriod" color="#4CAF50" size="60px"></box-icon>
                          <h2>Save 3M Hungry life</h2>
                      </div>
                  </div>
                  <div class="row">
                      <div class="card">
                          <box-icon name="data" color="#4CAF50" size="60px"></box-icon>
                          <h2>Iternal Satisfaction</h2>
                      </div>
                      <div class="card">
                          <box-icon  name="line-chart-down" color="#4CAF50" size="60px"></box-icon>
                          <h2>Save 2M cancer patient</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default About
