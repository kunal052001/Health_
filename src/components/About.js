// src/components/About.js
import React from 'react';
import './About.css'; // Make sure to create this CSS file

const About = () => {
  return (
    <div className="about-container">
      {/* Left Side Container */}
      <div className="about-left-container">
        {/* Example of multiple divs, you can add more */}
        <div className="about-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/doctor.jpg`} alt="Fitness" />
          
          <p>There is a famous proverb stating, “Health is Wealth,” which is self-explanatory. Health is an asset to human life, which leads to a stable and calm mind, ultimately leading to a wealthy life</p>
        </div>
        <div className="about-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/cycling.jpg`} alt="Fitness" />
          <p>Cycling can also improve balance. it helps train your body to keep a better posture. If you’re wanting to improve your coordination, cycling can help stabilize your core.</p>
        </div>
        <div className="about-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/running.jpg`} alt="Fitness" />

          <p>Running for at least 10 minutes a day can significantly lower your risk of cardiovascular disease. Runners lower their chances of dying from heart disease by half.</p>
        </div>
        <div className="about-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/diet.jpg`} alt="Fitness" />
          
          <p>Healthy eating helps to maintain or improve overall health. We should consume a balanced diet consisting of essential nutrition: liquids, adequate proteins, essential fatty acids, vitamins, minerals, and calories.</p>
        </div>
        
        <div className="about-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/SWIMMING.jpg`} alt="Fitness" />
          
          <p>Swimming burns calories and can help people manage their weight, tone their muscles, and improve their overall health and fitness. This activity engages several different muscle groups and the cardiovascular system</p>
        </div>
        <div className="about-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/weightgain.jpg`} alt="Fitness" />
          <p> From daily exercise to choosing a sport to practice or play, the body and mind are worked in new and different ways each time you move your body.</p>
        </div>
        <div className="about-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/yoga.jpg`} alt="Fitness" />
          <p>If you’ve done your “downward dog” yoga pose today, you’re probably feeling more relaxed. Regardless of your level of yoga expertise, if you’re practicing regularly, you can feel better from head to toe.</p>
        </div>
        
        <div className="about-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/jym.jpg`} alt="Fitness" />
          <p>Regular exercise increases the overall happiness in our life which keeps us mentally happy and peaceful too.
             It relieves the symptoms of depression, stress, anxiety and other mental disorders.</p>
        </div>
        <div className="about-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/YOGA.jpg`} alt="Fitness" />
          <p>Yoga has numerous benefits if we look at it closely. You will get relief when you practice it regularly. 
            As it keeps away the ailments from our mind and body.</p>
        </div>
        <div className="about-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/PLAYING.jpg`} alt="Fitness" />
          <p>It is very necessary for all of us to maintain a healthy lifestyle in order to be fit and fearless of diseases.
             We must eat healthy food and do regular physical exercises to stay fit always.</p>
        </div>

        <div className="about-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/DANCING.jpg`} alt="Fitness" />
          <p>Dancing can be a way to stay fit for people of all ages, shapes and sizes. It has a wide range of physical and mental benefits including: improved condition of your heart and lungs. 
            </p>
        </div>
        <div className="about-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/BOXING.jpg`} alt="Fitness" />
          <p>Boxers must have the ability to perform frequent bouts of high intensity activity during a training session or boxing match. The sport is a form of high intensity interval training
            </p>
        </div>
        <div className="about-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/BODYBUILDER.jpg`} alt="Fitness" />
          <p>It relieves the symptoms of depression, stress, anxiety and other mental disorders.
             We can get something good to our life, if we maintain our health and fitness.
          </p>
        </div>
        <div className="about-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/DIET.jpg`} alt="Fitness" />
          <p>It relieves the symptoms of depression, stress, anxiety and other mental disorders.
             We can get something good to our life, if we maintain our health and fitness.
          </p>
        </div>
        <div className="about-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/FAT.jpg`} alt="Fitness" />
          <p>Excessive dietary fat intake has been linked to increased risk of obesity,
             coronary heart disease and certain types of cancer.</p>
        </div>
        <div className="about-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/WALK.jpg`} alt="Fitness" />
          <p>It relieves the symptoms of depression, stress, anxiety and other mental disorders.
             We can get something good to our life, if we maintain our health and fitness.
          </p>
        </div>

        

        {/* Add more content blocks as needed */}
      </div>

      {/* Right Side Full-Width, Full-Height Container */}
      <div className="about-main-content">
        <div className="about-main-content-inner">
          <h1>About Us</h1>
          <p>
            Our mission is to educate and inspire individuals to lead healthier lives by 
            adopting a balanced diet and a regular fitness routine. We believe that 
            health is not just about avoiding illness but also about achieving a state 
            of complete physical, mental, and social well-being.
          </p>
          
          <h2>Our Philosophy</h2>
          <p>
            <strong>Key Principles:</strong>
            <ul>
              <li><strong>Holistic Health:</strong> We focus on overall well-being, including nutrition, exercise, and mental health.</li>
              <li><strong>Evidence-Based Information:</strong> Our guidance is grounded in scientific research and expert opinions.</li>
              <li><strong>Personalization:</strong> Recognizing that each individual is unique, we provide tailored advice for every person.</li>
              <li><strong>Community Support:</strong> We encourage building a community that supports each other in achieving health goals.</li>
            </ul>
          </p>
          <img src={`${process.env.PUBLIC_URL}/images/welth.jpg`} alt="Fitness" />

          <p>
            Join us on this journey to better health. Remember, a healthy lifestyle is a choice, 
            and it's never too late to start. Let's make a change together!
          </p>
         
          <div className="bmi-info">
            <h2>About Body Mass Index (BMI)</h2>
            <p><strong>Key points:</strong></p>
            <ul>
              <li>BMI is a measure of weight relative to height.</li>
              <li>BMI is a quick, low-cost, and reliable screening measure for underweight, overweight, or obesity.</li>
              <li>BMI is a valuable population health measure used worldwide.</li>
              <li>For individuals, BMI should be considered with other factors, such as blood pressure, cholesterol levels, and physical examination.</li>
            </ul>
            <img src={`${process.env.PUBLIC_URL}/images/bmi.jpg`} alt="Fitness" />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default About;
