const cases = {
  growmate: {
    layout: "ux",
    title: "Growmate",
    subtitle: "Mobile UX Design",
    role: "UX Lead",
    overview: "The project was designed with the principle of helping people in their gardening journeys, offering a simple and easy way to access information regarding to flowers, plants, trees, etc.",
    goal: "To create a user-friendly platform that provides simple, accessible, and accurate information about various types of plants, flowers, and trees, empowering and supporting users throughout their gardening journey.",
    sections: [
      {
        heading: "Process",
        content: `To create a meaningful and user-centered solution, we followed the Design Thinking framework—starting with empathizing through user interviews and competitive analysis, then defining key user needs and challenges. From there, we ideated potential features, developed wireframes and prototypes, and continuously refined the design through usability testing and iterations.`,
        image: "./assets/growmate/process.png"
      },
      {
        heading: "Research",
        content: `
          <p>
            Below is an overview of the two key research methodologies we employed—what each entails, what was learned, and how those findings shaped our design.
          </p>
          <br>

        <h4>User Interviews</h4>
          <p>
            To gather rich, qualitative insights on how real people currently manage plant care and what frustrates or delights them we conducted a first round of user interviews these were the key findings:          
          </p>
          <br>
          <section class="insights-section">
            <div class="insights-grid">
              <div class="insight-box">Excess of information scattered through the internet that generates a common confusion in the specific needs of each plant.</div>
              <div class="insight-box">Technological barriers for users less familiar with technology generates frustration.</div>
              <div class="insight-box">Lack of a community to share or to ask questions tends to generate a loss of interest.</div>
              <div class="insight-box">Lack of time to take care of the plants causes damage to them, which causes fear and embarrassment to users.</div>
            </div>

            <div class="insight-summary">
              <strong>Insight:</strong> Users consistently feel overwhelmed by scattered, conflicting plant-care advice and crave bite-sized, contextually timed tips delivered through a clean, uncluttered interface that integrates seamlessly with their daily routines.
            </div>
          </section>

        <h4>Competitive Analysis</h4>
          <p>
            To understand industry standards in plant‑care and adjacent wellness apps, and to uncover opportunities for differentiation. From this competitive analisys these where the key findings.
          </p>
        <section class="apps-section">
          <h4>Applications Analyzed</h4>
          <div class="apps-grid">
            <div class="app-item">
              <img src="./assets/growmate/AA1.png" alt="Planter icon">
              <p>Planter</p>
            </div>
            <div class="app-item">
              <img src="./assets/growmate/AA2.png" alt="Plant Parent icon">
              <p>Plant Parent</p>
            </div>
            <div class="app-item">
              <img src="./assets/growmate/AA3.jpg" alt="Mi Huerta icon">
              <p>Mi Huerta</p>
            </div>
          </div>
        </section>
          <section class="insights-section">
            <div class="insights-grid">
              <div class="insight-box">Each app suffers from accessibility gaps—unlabeled buttons and weak screen reader support hindering inclusive use.</div>
              <div class="insight-box">Competitors lack a coherent brand identity and rely on generic layouts and inconsistent iconography, though Plant Parent offers a more polished, intuitive visual design.</div>
              <div class="insight-box">Community integration remains absent in all competitors.</div>
              <div class="insight-box">While all three competitors boast easy basic navigation, icon‑only menus and dense layouts frustrate users, underscoring an opportunity for an app with intuitive navigation, strong branding and full accessibility.</div>
            </div>

            <div class="insight-summary">
              <strong>Insight:</strong> An opportunity exists to differentiate by combining intuitive, label driven navigation and cohesive branding with full accessibility, adaptive reminders, and seamless in app community support to address gaps in existing plant care
            </div>
          </section>
        `
      },
      {
        heading: "Ideation",
        content: `
        <p>
          We explored a wide range of solutions through brainstorming sessions, sketching, and affinity mapping, focusing on ways to simplify navigation, streamline reminders, and embed community features.
        </p>
        <section class="image-grid">
          <img class="item item1" src="./assets/growmate/sketch1.jpg" alt="" />
          <img class="item item2" src="./assets/growmate/sketch2.jpg" alt="" />
          <img class="item item3" src="./assets/growmate/sketch3.jpg" alt="" />
        </section>
        `
      },
      {
        heading: "Design",
        content: `
            <p>
            Using our research insights, we built clean, straightforward layouts with clear labels and a soothing, nature-inspired color scheme. Early sketches evolved into clickable prototypes. Each design iteration was tested and refined until the experience felt intuitive, focused, and accessible.
            </p>
            <br>
            <h4>Paper Wireframes</h4>
            <p>
            We sketched low‑fidelity wireframes on paper to rapidly explore layout options and content hierarchies. Each sheet focused on a specific user flow—onboarding, home dashboard, plant detail, reminders, and community feed.
            </p>
            <section class="image-grid">
            <img class="item item2" src="./assets/growmate/pw1.jpg" alt="" />
            <img class="item item3" src="./assets/growmate/pw2.jpg" alt="" />
            </section>
            <br>
            <h4>Digital Wireframes</h4>
            <p>
            We sketched low fidelity wireframes on paper to rapidly explore layout options and content hierarchies. Each sheet focused on a specific user flow—onboarding, home dashboard, plant detail, reminders, and community feed.
            </p>
            <section class="image-flex">
            <img src="./assets/growmate/dw1.png" alt="" />
            <img src="./assets/growmate/dw2.png" alt="" />
            <img src="./assets/growmate/dw3.png" alt="" />
            <img src="./assets/growmate/dw4.png" alt="" />
            <img src="./assets/growmate/dw5.png" alt="" />
            </section>
            <br>
            <h4>Prototype and usability test</h4>
            <p>
            In our first iteration, we turned the digital wireframes into a basic clickable Figma prototype and used it to conduct our initial round of usability testing
            </p>
            <br>
            <h4>Usability Insights</h4>
            <p>
            The main issue users faced was navigating the app due to unlabeled icons 5 out of 5 participants struggled with this highlighting the urgent need  to add clear text labels or universally recognizable icons to the navigation bar. Additionally, with 4 out of 5 participants finding the layout unclear and functions hard to locate , it’s important to improve screen organization by adding descriptive headers, grouping related features, and making key actions like posting or setting reminders more prominent and clearly labeled.
            </p>
            <br>
            <img class="gif" src="./assets/growmate/dwproto.gif" alt="">
        `
      },
      {
        heading: "Iterations",
        content: `
            <p>
            After analyzing usability test results, we made several iterations focused on improving navigation clarity, enhancing layout organization, and making key features easier to access.
            </p>
            <br>
            <img class="conclusion-img" src="./assets/growmate/iterations.png" alt="">
        `
      },
      {
        heading: "Conclusion",
        content: `
            <p>
            This project reinforced the value of accessible design, intuitive structure, and iterative testing to support users through a satisfying and empowering experience.
            </p>
            <br>
            <img class="conclusion-img" src="./assets/growmate/conclusion.png" alt="">
        `
      }
    ],
    prototype: "https://www.figma.com/proto/ZgFypCNQF99u9JCGZ7x5O7/Digital-wireframes?node-id=367-1801&p=f&t=aZXWr5p7c1ICY64b-1&scaling=scale-down&content-scaling=fixed&page-id=367%3A1529&starting-point-node-id=367%3A1801"
  },

  docgo: {
    layout: "ux",
    title: "DocGo",
    subtitle: "Web/Mobile UX Design",
    role: "UX Lead",
    overview: "DocGo is a digital check-in and appointment management application designed for a family medical practice.",
    goal: "To design an intuitive, secure, and efficient mobile-friendly check-in experience for a family medical clinic.",
    sections: [
      {
        heading: "Process",
        content: "We followed the Design Thinking process starting with user interviews to understand real frustrations with clinic check-ins. Then, we defined key problems and mapped user needs. After brainstorming ideas, we created wireframes and tested them with users. Their feedback helped us simplify the experience, add key features like dependent check-in, and improve the overall flow.",
        image: "./assets/growmate/process.png"
      },
      {
        heading: "Research",
        content: `
            <p>
                To ensure our solution truly addressed patient and clinic needs, we grounded our design process in user-centered research. We used a mix of qualitative methods to gather insights from real users and stakeholders. Each method provided critical input that directly shaped key aspects of our app.
            </p>
            <br>

            <h4>User Interviews</h4>
            <p>
                To gather rich, qualitative insights on how real people currently manage plant care and what frustrates or delights them we conducted a first round of user interviews these were the key findings:          
            </p>
            <br>
            <section class="insights-section">
                <div class="insights-grid">
                <div class="insight-box">Users often arrive unprepared due to unclear expectations.</div>
                <div class="insight-box">Users need to check in dependents but find it confusing.</div>
                <div class="insight-box">Users value receiving confirmation after finishing the checkin process</div>
                </div>

                <div class="insight-summary">
                <strong>Insight:</strong> Many users feel uncertain and unprepared when arriving at the clinic due to unclear steps, which creates anxiety and delays. Giving users a guided process with clear confirmations increases confidence and reduces stress.
                </div>
            </section>

            <h4>Empathy Map</h4>
            <p>
                We synthesized interview data into empathy maps for three user personas: Amanda (busy working mom), Sarah (caregiver/mother), and Luis (retired patient with low tech proficiency). To better understand users’ thoughts, feelings, and behaviors around medical visits.
            </p>

            <section class="image-flex">
            <img src="./assets/DocGo/empathymap 1.png" alt="" />
            <img src="./assets/DocGo/empathymap 2.png" alt="" />
            <img src="./assets/DocGo/empathymap 3.png" alt="" />
            </section>

            <section class="insights-section">
                <div class="insights-grid">
                <div class="insight-box">Users regardless of age or role desire an easy to navigate interface with clear steps. Overly complex processes or unclear instructions cause frustration and hesitation.</div>
                <div class="insight-box">Users need to handle dependents is essential to their experience.</div>
                <div class="insight-box">Whether it’s confirmation messages, step-by-step check-in flows, or seeing progress, users want to feel reassured that they are doing the right thing.</div>
                <div class="insight-box">While some users are tech-savvy, others may be hesitant or confused by digital interfaces.</div>
                </div>

                <div class="insight-summary">
                <strong>Insight:</strong> Each user type has unique emotional and functional needs busy parents value preparation, caregivers need flexibility, and older adults require simplicity. Tailoring the experience for each profile makes the product more inclusive and usable for everyone.
                </div>
            </section>
        `
      },
      {
        heading: "Design",
        content: `
            <p>
            Following our research phase, we transitioned into design with a clear goal: create an intuitive, inclusive, and efficient check-in experience grounded in real user needs. Every decision we made was guided by insights from user interviews, usability feedback, and behavioral observations.
            </p>
            
            <br>
            <h4>User Flow</h4>
            <p>
            Our user flows mapped out  users type journey whether checking in for themselves, managing dependents, or completing health screenings.
            </p>
            <img src="./assets/DocGo/userflowexample.png" alt="" />
            <br>

            <h4>Prioritization</h4>
            <p>
            Using a MoSCoW method (Must-have, Should-have, Could-have, Won’t have), we prioritized the most valuable features.
            </p>
            
            <section class="insights-section">
                <div class="insights-grid">
                <div class="insight-box">Dependent management</div>
                <div class="insight-box">Health screening and consent</div>
                <div class="insight-box">Appointment selection during check-in</div>
                <div class="insight-box">Confirmation summary and email delivery</div>
                </div>
            </section>

            <br>
            <h4>Site Map</h4>
            <p>
            We built a clear sitemap based on our user needs and flows, keeping navigation simple and familiar. Users valued clarity and expected a straightforward layout. The sitemap influenced the visual hierarchy of the interface and made room for context-rich pages like “About Clinic” and “Services.”
            </p>
            <img  src="./assets/DocGo/sitemap.png" alt="" />
            <br>

            <h4>Paper wireframes</h4>
            <p>
            Paper wireframes were used early. Low-fidelity testing let us gather quick feedback without investing time in detailed visuals. Helped identify redundant steps early on,
            </p>
            <img src="./assets/DocGo/paperwireframedocgo.png" alt="" />
            <br>

            <h4>Digital Wireframes</h4>
            <p>
            After creating our paper wireframes, I created digital wireframes to visualize the structure of the app. These wireframes helped define key screens, such as the Home, Check-In Flow, Appointment Selection, and Account Management.
            </p>
            <section class="image-grid">
            <img class="item item1" src="./assets/DocGo/account.png" alt="" />
            <img class="item item2" src="./assets/DocGo/checkin1.png" alt="" />
            <img class="item item3" src="./assets/DocGo/home.png" alt="" />
            </section>
            <br>

            <h4>Prototype and usability test</h4>
            <p>
            In our first iteration, we turned the digital wireframes into a basic clickable Figma prototype and used it to conduct our initial round of usability testing.
            </p>
            <br>
            <h4>Usability Insights</h4>
            <p>
            To evaluate usability, I conducted a moderated usability test with participants that reflected our key user personas, including parents, caregivers, and older adults. During the test, users completed tasks such as checking in themselves or a dependent, answering screening questions, and reviewing their confirmation. The feedback revealed that users appreciated the step-by-step guidance and clear progress indicators, while some requested more detailed descriptions under service options. Others expected to see previous appointments during the process, and many expressed a strong preference for receiving confirmation details via email. These insights led to design improvements such as clarifying service descriptions, adding email confirmation functionality, and exploring persistent profiles with appointment history.
            </p>
            <br>
            <img class="gif" src="./assets/DocGo/lofi prototype gif.gif" alt="">
        `
      },
      {
        heading: "Iterations",
        content: `
            <p>
            Iterative design allowed us to made several iterations based on user feedback and testing insights. Each iteration helped align the design more closely with real user needs, enhancing both usability and user confidence.
            </p>
            <br>
            <img class="conclusion-img" src="./assets/DocGo/iterations png.png" alt="">
        `
      },
      {
        heading: "Conclusion and Next Steps",
        content: `
            <p>
            Designing DocGo highlighted the value of grounding every design decision in real user needs. By applying the design thinking process from research to testing I learned how even small usability details can greatly impact user trust and satisfaction. It also reinforced the importance of designing for inclusivity, ensuring that busy parents, caregivers, and older adults all feel supported throughout the experience.
            </p>
            <br>
            <img class="gif" src="./assets/DocGo/gif hifi protoype.gif" alt="">
        `
      }
    ],
    prototype: "https://www.figma.com/proto/fFEu7vsBB6WqYaBOpUEy3G/docsapp?node-id=242-4454&p=f&t=YyUTvul70FiKwDbf-1&scaling=scale-down&content-scaling=fixed&page-id=180%3A1620&starting-point-node-id=242%3A4454&show-proto-sidebar=1"
  },

  foodpoint: {
    layout: "ux", // Change to "ux" for unified rendering
    title: "FoodPoint",
    subtitle: "Web Development",
    role: "Rails Web Developer",
    overview: "A friendly UI for a restaurant POS system, designed to streamline operations and enhance the dining experience.",
    goal: "Develop a comprehensive digital solution for restaurants that allows them to record orders, view their status in the kitchen, and generate sales reports, all from a centralized interface.",
    sections: [
      {
        heading: "Summary",
        content: `
        <p>
          Food Point is an application developed as a point-of-sale (POS) system for restaurants. Its goal is to optimize order management and improve workflow between different restaurant roles through a user-friendly interface and functional modules.
        </p>

        <br>

        <div class="gallery js-flickity" data-flickity='{ "wrapAround": true, "imagesLoaded": true }'>
          ${[
            "./assets/foodpoint/home.png",
            "./assets/foodpoint/ingredients.png",
            "./assets/foodpoint/inventory.png",
            "./assets/foodpoint/items.png",
            "./assets/foodpoint/itemsplanner.png",
            "./assets/foodpoint/kitchen.png",
            "./assets/foodpoint/orders.png",
            "./assets/foodpoint/reports.png",
            "./assets/foodpoint/service.png",
            "./assets/foodpoint/tables.png"
          ].map(img => `<img class="gallery-cell" src="${img}" alt="">`).join('')}
        </div>
      `
      },
      {
        heading: "Goal",
        content: `
            <p>
            Develop a comprehensive digital solution for restaurants that allows them to record orders, view their status in the kitchen, and generate sales reports, all from a centralized interface.
            </p>
            <br>
            <img class="center-logo-img" src="./assets/foodpoint/foodpointlogo.svg" alt="">
        `
      },
      {
        heading: "Functionalities",
        content: `
            <img src="./assets/foodpoint/home.png" alt="">

            <br>

            <h4>Services Modules</h4>
            <p>
            It allows you to generate orders based on the products entered, facilitating order taking.
            </p>
            <br>
            <img src="./assets/foodpoint/service.png" alt="">


            <br>

            <h4>Kitchen Module</h4>
            <p>
            Cooks can view active orders and update their status (e.g., "in preparation," "ready to serve").
            </p>
            <br>
            <img src="./assets/foodpoint/kitchen.png" alt="">


            <br>

            <h4>Reports Modules</h4>
            <p>
            It offers statistics and reports on sales, helping you gain control and insight into business performance.
            </p>
            <br>
            <img src="./assets/foodpoint/reports.png" alt="">
      `
      },
      {
        heading: "Technologies",
        content: `
        <div class="apps-grid">
          ${[
            { name: "Rails", icon: "./assets/foodpoint/rails.png" },
            { name: "Postgresql", icon: "./assets/foodpoint/postgre.png" },
            { name: "WSL", icon: "./assets/foodpoint/wsl.png" },
            { name: "Git", icon: "./assets/foodpoint/git.png" },
            { name: "VSCode", icon: "./assets/foodpoint/vscode.png" },
            { name: "Rubocop", icon: "./assets/foodpoint/rubocop.png" }
          ].map(tech => `
            <div class="app-item">
              <img src="${tech.icon}" alt="${tech.name}">
              <p>${tech.name}</p>
            </div>
          `).join('')}
        </div>
      `
      },
      {
        heading: "Methodology",
        content: `
            <p>
            The team adopted an extremely collaborative approach in which all members worked simultaneously, taking turns writing code while the rest of the team contributed ideas and reviews in real time. This allowed for higher code quality, faster issue resolution, and shared learning.
            </p>
            <br>
            <img class="gif" src="./assets/foodpoint/mob-programming.jpg" alt="">
      `
      },
      {
        heading: "Results and takeaways",
        content: `
            <section class="insights-section">
                <div class="insights-grid">
                <div class="insight-box">Successful implementation of SOLID design patterns and principles in Ruby.</div>
                <div class="insight-box">Improve collaboration and communication through Mob Programming.</div>
                <div class="insight-box">Increased code quality thanks to analysis tools such as Rubocop and Rubycritic.</div>
                <div class="insight-box">Development of a functional POS system with multiple modules ready to be integrated into a real environment.</div>
                </div>
            </section>
            <br>
            <img class="gif" src="./assets/foodpoint/foodpointgif.gif" alt="">
        `
      }
    ],
    repository: "https://github.com/BrightCoders-Institute/BCDIC22-RoR-proyecto-final-team3"
  },

  gastrolab: {
    layout: "ux", // Change to "ux" for unified rendering
    title: "GastroLab",
    subtitle: "Mobile Development",
    role: "React Native Mobile Developer",
    overview: "A mobile app that empowers users to create, explore, and share recipes, designed to inspire home cooks and foster a vibrant food-loving community.",
    goal: "To provide an intuitive culinary platform that encourages creativity and connection through cooking.",
    sections: [
      {
        heading: "Summary",
        content: `
        <p>
            GastroLab is an engaging mobile application that empowers users to explore their inner chef and create delicious dishes right from their home kitchen. Designed for cooking lovers and food-sharing enthusiasts, the app connects users through a shared passion for gastronomy.
        </p>
        <br>
        <div class="gallery js-flickity" data-flickity='{ "wrapAround": true, "imagesLoaded": true }'>
          ${[
            "./assets/gastrolab/mainlogin.png",
            "./assets/gastrolab/login1.png",
            "./assets/gastrolab/login2.png",
            "./assets/gastrolab/home.png",
            "./assets/gastrolab/details1.png",
            "./assets/gastrolab/details2.png",
            "./assets/gastrolab/favorites.png",
            "./assets/gastrolab/createrecipe1.png",
            "./assets/gastrolab/createrecipe2.png",
            "./assets/gastrolab/createrecipe3.png"
          ].map(img => `<img class="gallery-cell" src="${img}" alt="">`).join('')}
        </div>
      `
      },
      {
        heading: "Goal",
        content: `
        <p>
          To build a user-friendly mobile app that enables culinary enthusiasts to document, share, and explore recipes while fostering a community of home chefs.
        </p>
        <br>
        <img class="center-logo-img" src="./assets/gastrolab/icon.jpg" alt="">
        `
      },
      {
        heading: "Functionalities",
        content: `
        <br>
        <img class="center-logo-img" src="./assets/gastrolab/home.png" alt="">
        <br>
        <h4>Recipe Creation</h4>
        <p>
          Users can easily create and document their recipes with steps, ingredients, and images.
        </p>
        <br>
        <img class="center-logo-img" src="./assets/gastrolab/createrecipe1.png" alt="">
        <br>
        <h4>Community Sharing</h4>
        <p>
          Share your culinary creations with others and get inspired by recipes from fellow users.
        </p>
        <br>
        <img class="center-logo-img" src="./assets/gastrolab/details1.png" alt="">
        <br>
        <h4>Interactive UI</h4>
        <p>
          Intuitive design with smooth navigation and engaging visuals tailored for food content.
        </p>
        <br>
        <img class="center-logo-img" src="./assets/gastrolab/createrecipe4.png" alt="">
      `
      },
      {
        heading: "Technologies",
        content: `
        <div class="apps-grid">
          ${[
            { name: "React Native", icon: "./assets/gastrolab/reactnative.png" },
            { name: "Node.js", icon: "./assets/gastrolab/nodejsStackedDark.svg" },
            { name: "Firebase", icon: "./assets/gastrolab/firebase2.svg" },
            { name: "Git", icon: "./assets/foodpoint/git.png" },
            { name: "VSCode", icon: "./assets/foodpoint/vscode.png" },
            { name: "Android Studio", icon: "./assets/gastrolab/androidstudio.png" }
          ].map(tech => `
            <div class="app-item">
              <img src="${tech.icon}" alt="${tech.name}">
              <p>${tech.name}</p>
            </div>
          `).join('')}
        </div>
      `
      },
      {
        heading: "Methodology",
        content: `
            <p>
            The team adopted an agile approach, focusing on iterative development and constant feedback. We worked in short sprints with regular stand-ups, retrospectives, and continuous integration to ensure smooth progress and adaptability to change.
            </p>
            <br>
            <img class="gif" src="./assets/gastrolab/agile.png" alt="">
      `
      },
      {
        heading: "Results and takeaways",
        content: `
            <section class="insights-section">
                <div class="insights-grid">
                <div class="insight-box">Delivered a fully functional cross-platform app focused on culinary creativity.</div>
                <div class="insight-box">Strengthened team collaboration and velocity using Agile practices.</div>
                <div class="insight-box">Leveraged Firebase to enable real-time updates and scalable user data handling.</div>
                <div class="insight-box">Achieved a polished, engaging user experience with React Native and thoughtful UI design.</div>
                </div>
            </section>
            <br>
            <img class="conclusion-img center-logo-img" src="./assets/gastrolab/home.png" alt="">
        `
      }
    ],
    repository: "https://github.com/BrightCoders-Institute/proyecto-final-bcmay23-rn-t3-teamb"
  }
};