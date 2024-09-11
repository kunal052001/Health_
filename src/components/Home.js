import React, { useEffect, useRef, useState } from 'react';
import './Home.css'; // Ensure this CSS file exists

const Home = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    `${process.env.PUBLIC_URL}/images/doctor.jpg`,
    `${process.env.PUBLIC_URL}/images/welth.jpg`,
    `${process.env.PUBLIC_URL}/images/DIET.jpg`,
    `${process.env.PUBLIC_URL}/images/medicine.jpg`,
    `${process.env.PUBLIC_URL}/images/bmi.jpg`,
    `${process.env.PUBLIC_URL}/images/dance.jpg`,
    `${process.env.PUBLIC_URL}/images/PLAYING.jpg`,
    `${process.env.PUBLIC_URL}/images/DIET.jpg`,
    `${process.env.PUBLIC_URL}/images/JYM.jpg`,
    `${process.env.PUBLIC_URL}/images/aurveds.jpg`,
    `${process.env.PUBLIC_URL}/images/BODY.jpg`,
    `${process.env.PUBLIC_URL}/images/BODYBUILDER.jpg`,
    `${process.env.PUBLIC_URL}/images/vegitables.jpg`,
    `${process.env.PUBLIC_URL}/images/bodybuilder.jpg`,
    `${process.env.PUBLIC_URL}/images/BOXING.jpg`,
    `${process.env.PUBLIC_URL}/images/CYCLE.jpg`,
    `${process.env.PUBLIC_URL}/images/FAT.jpg`,
    `${process.env.PUBLIC_URL}/images/fatrunning.jpg`,
    `${process.env.PUBLIC_URL}/images/FEMALEBODY.jpg`,
    `${process.env.PUBLIC_URL}/images/HOME.jpg`,
    
    
    `${process.env.PUBLIC_URL}/images/PLAYING.jpg`,
    `${process.env.PUBLIC_URL}/images/running.jpg`,
    `${process.env.PUBLIC_URL}/images/SWIMMING.jpg`,
    `${process.env.PUBLIC_URL}/images/weightgain.jpg`,

    `${process.env.PUBLIC_URL}/images/vegitables.jpg`,
    `${process.env.PUBLIC_URL}/images/yoga.jpg`,

    `${process.env.PUBLIC_URL}/images/WALK.jpg`,



  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { clientWidth } = carouselRef.current;
        const newIndex = (currentIndex + 1) % images.length;
        
        carouselRef.current.scrollTo({
          left: clientWidth * newIndex,
          behavior: 'smooth'
        });

        setCurrentIndex(newIndex);
      }
    }, 2000); // Adjust timing to 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]); // Added images.length as a dependency

  const handleDotClick = (index) => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      carouselRef.current.scrollTo({
        left: clientWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  return (
    <div className="home-container">
      {/* Right Side Full-Width, Full-Height Container */}
      <div className="home-main-content">
        <div className="home-main-content-inner">
          <h1>Health is Wealth...</h1>
          <p>
            Our mission is to educate and inspire individuals to lead healthier lives by 
            adopting a balanced diet and a regular fitness routine. We believe that 
            health is not just about avoiding illness but also about achieving a state 
            of complete physical, mental, and social well-being.
          </p>
          
          {/* Carousel Section */}
          <div className="carousel-home-wrapper">
            <div className="carousel-home" ref={carouselRef}>
              {images.map((src, index) => (
                <img key={index} src={src} alt={`Fitness ${index + 1}`} />
              ))}
            </div>

            <div className="carousel-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>

          <h1>Global Healthcare Data Overview (Recent Years)</h1>
          <p>
            Over the past few years, global healthcare systems have faced numerous challenges and transformations due to pandemics, aging populations, and advancements in medical technology. These challenges have had significant impacts on healthcare spending, accessibility, and overall health outcomes worldwide.
          </p>
          <h2>1. Global Healthcare Spending</h2>
          <p>
            According to the World Health Organization (WHO), global healthcare spending has increased steadily over the last decade. In 2021, global health expenditure reached approximately <strong>$8.3 trillion</strong>, accounting for about <strong>10% of the global GDP</strong>. The United States remains the highest spender on healthcare, with expenditures exceeding <strong>$4 trillion</strong> annually, while countries in Europe and Asia have also seen significant growth in their healthcare budgets.
          </p>
          <h2>2. Impact of COVID-19 Pandemic</h2>
          <p>
            The COVID-19 pandemic has drastically altered healthcare dynamics across the world. During 2020-2022, the global health systems were overwhelmed by the pandemic, leading to increased demand for critical care, hospital beds, and medical supplies. In 2022 alone, over <strong>1 billion vaccine doses</strong> were administered worldwide, reflecting an unprecedented public health effort. Despite these efforts, the pandemic has exposed gaps in healthcare infrastructure, especially in low and middle-income countries.
          </p>
          <h2>3. Life Expectancy and Aging Population</h2>
          <p>
            The global average life expectancy has increased to <strong>73.3 years</strong> in 2021, up from 72.8 years in 2019. Countries like Japan, Switzerland, and Singapore have some of the highest life expectancies, often exceeding <strong>84 years</strong>. This aging population is creating a greater demand for geriatric care, long-term care facilities, and non-communicable disease management.
          </p>
          <h2>4. Digital Health and Telemedicine</h2>
          <p>
            The adoption of digital health technologies and telemedicine has surged over the past few years. The global digital health market size was valued at approximately <strong>$150 billion</strong> in 2022 and is expected to grow at a compound annual growth rate (CAGR) of over <strong>16%</strong> from 2023 to 2030. This growth is driven by increasing investments in health IT solutions, artificial intelligence, and mobile health applications.
          </p>
          <h2>5. Healthcare Access and Inequality</h2>
          <p>
            Despite advances in healthcare technology and policy, access to quality healthcare remains uneven across the globe. According to the WHO, around <strong>half of the world's population</strong> lacks access to essential health services. This disparity is particularly pronounced in sub-Saharan Africa and South Asia, where healthcare systems are underfunded and understaffed, exacerbating inequalities in health outcomes.
          </p>
          <h2>6. Future Outlook</h2>
          <p>
            Looking ahead, global healthcare systems will need to focus on building resilient infrastructures, ensuring equitable access to services, and addressing the challenges posed by an aging population and emerging diseases. Efforts to increase public health funding, promote preventive care, and expand digital health initiatives will be crucial in achieving these goals.
          </p>
           <div class="imge2"><img  src={`${process.env.PUBLIC_URL}/images/HEART.jpg`} alt="Fitness" /></div>
          <p>
            "Welcome to our fitness journey! At our core, we believe in making fitness accessible, enjoyable, and 
            sustainable for everyone, no matter where you are on your journey. Whether you’re looking to build strength,
            improve flexibility, or simply lead a healthier lifestyle, we provide a range of at-home workout plans, nutrition tips, 
            and wellness guidance tailored to your unique needs."
          </p>
          <p>
            Join us on this journey to better health. Remember, a healthy lifestyle is a choice, 
            and it's never too late to start. Let's make a change together!
          </p>
        </div>
      </div>

      {/* Left Side Container */}
      <div className="home-left-container">
        {/* Example of multiple divs, you can add more */}
        <div className="home-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/DANCING.jpg`} alt="Fitness" />
          <p>Dancing can be a way to stay fit for people of all ages, shapes and sizes. It has a wide range of physical and mental benefits including: improved condition of your heart and lungs. 
            </p>
        </div>
        <div className="home-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/BOXING.jpg`} alt="Fitness" />
          <p>Boxers must have the ability to perform frequent bouts of high intensity activity during a training session or boxing match. The sport is a form of high intensity interval training
            </p>
        </div>
       
        <div className="home-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/PLAYING.jpg`} alt="Fitness" />
          <p>It is very necessary for all of us to maintain a healthy lifestyle in order to be fit and fearless of diseases.
             We must eat healthy food and do regular physical exercises to stay fit always.</p>
        </div>

       
        <div className="home-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/BODYBUILDER.jpg`} alt="Fitness" />
          <p>It relieves the symptoms of depression, stress, anxiety and other mental disorders.
             We can get something good to our life, if we maintain our health and fitness.
          </p>
        </div>
        <div className="home-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/DIET.jpg`} alt="Fitness" />
          <p>It relieves the symptoms of depression, stress, anxiety and other mental disorders.
             We can get something good to our life, if we maintain our health and fitness.
          </p>
        </div>
        <div className="home-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/FAT.jpg`} alt="Fitness" />
          <p>Excessive dietary fat intake has been linked to increased risk of obesity,
             coronary heart disease and certain types of cancer.</p>
        </div>
        <div className="home-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/jym.jpg`} alt="Fitness" />
          <p>Regular exercise increases the overall happiness in our life which keeps us mentally happy and peaceful too.
             It relieves the symptoms of depression, stress, anxiety and other mental disorders.</p>
        </div>
        <div className="home-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/YOGA.jpg`} alt="Fitness" />
          <p>Yoga has numerous benefits if we look at it closely. You will get relief when you practice it regularly. 
            As it keeps away the ailments from our mind and body.</p>
        </div>
        <div className="home-content-block">
          <img src={`${process.env.PUBLIC_URL}/images/WALK.jpg`} alt="Fitness" />
          <p>It relieves the symptoms of depression, stress, anxiety and other mental disorders.
             We can get something good to our life, if we maintain our health and fitness.
          </p>
        </div>

        <div className="home-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/doctor.jpg`} alt="Fitness" />
          
          <p>There is a famous proverb stating, “Health is Wealth,” which is self-explanatory. Health is an asset to human life, which leads to a stable and calm mind, ultimately leading to a wealthy life</p>
        </div>
        <div className="home-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/cycling.jpg`} alt="Fitness" />
          <p>Cycling can also improve balance. it helps train your body to keep a better posture. If you’re wanting to improve your coordination, cycling can help stabilize your core.</p>
        </div>
        <div className="home-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/running.jpg`} alt="Fitness" />

          <p>Running for at least 10 minutes a day can significantly lower your risk of cardiovascular disease. Runners lower their chances of dying from heart disease by half.</p>
        </div>
        <div className="home-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/diet.jpg`} alt="Fitness" />
          
          <p>Healthy eating helps to maintain or improve overall health. We should consume a balanced diet consisting of essential nutrition: liquids, adequate proteins, essential fatty acids, vitamins, minerals, and calories.</p>
        </div>
        
        <div className="home-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/SWIMMING.jpg`} alt="Fitness" />
          
          <p>Swimming burns calories and can help people manage their weight, tone their muscles, and improve their overall health and fitness. This activity engages several different muscle groups and the cardiovascular system</p>
        </div>
        <div className="home-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/weightgain.jpg`} alt="Fitness" />
          <p> From daily exercise to choosing a sport to practice or play, the body and mind are worked in new and different ways each time you move your body.</p>
        </div>
        <div className="home-content-block">
        <img src={`${process.env.PUBLIC_URL}/images/yoga.jpg`} alt="Fitness" />
          <p>If you’ve done your “downward dog” yoga pose today, you’re probably feeling more relaxed. Regardless of your level of yoga expertise, if you’re practicing regularly, you can feel better from head to toe.</p>
        </div>


      </div>
    </div>
  );
};

export default Home;
