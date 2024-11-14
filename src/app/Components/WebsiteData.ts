const DATA = {
    NAVIGATION:[
         {Name:"Introduction",Icon:"AboutMe.png"},
         {Name:"Experience",Icon:"Experience.png"},
         {Name:"Skills",Icon:"Skills.png"},
         {Name:"Projects",Icon:"Project.png"},
         {Name:"ContactMe",Icon:"Contact.png"},   
    ],
    SECTIONS:[
        {
            ID:1,
            Name:"Introduction",
            backgroundColor:"#2D283E",
            SvgSeperator:"waves",
            CONTENT:{
                Title:"About Me",
                Name:"Kanishk Tanotra",
                AboutMePara:"I'm a Software Engineer who thrives on solving complex problems and bringing ideas to life. Whether it's crafting efficient, user-friendly applications or optimizing systems, I love building solutions from the ground up and continuously learning along the way.",
                PhotoPath:"kanishkPhoto.jpeg",
                TypewriterText:["Hello", "I'm", "Kanishk Tanotra"],
                DownloadIcon:"Download.png",
                DownloadButtonText:"Download CV",
                ContactMeIcon:"ContactMe.png",
                ContactMeText:"Get in touch"
            }
        },
        {
            ID:2,
            Name:"Experience",
            backgroundColor:"#254e58",
            SvgSeperator:"waves2",
            Expanded:"False",
            CONTENT:{
                ExperienceList:[
                    {
                        type:"Eduacation",
                        school:"Arizona State University",
                        schoolLogo:"ASU.png",
                        location:"Tempe, Arizona",
                        country:"USA",
                        degree:"Masters",
                        major:"Data Science, Analytics and Engineering",
                        timeline:"Jan 2024 - May 2025",
                        position:"Student",
                        GPA:"3.86",
                        courses:["Probabilty and Statistics","Data Mining","Software Securrity","Data-Driven Optimization","Advanced Database Management Systems"]
                      },
                    {   
                        type:"Work",
                        logo: "MathWorks.png",
                        companyName: "MathWorks",
                        location: "Natic, Massachusetts",
                        Country:"USA",
                        timeline: "Aug 2022 - Dec 2022",
                        skills: [
                                    {Name:"C++",Icon:"/TechIcons/C++.png"}, 
                                    {Name:"Java",Icon:"/TechIcons/Java.png"}, 
                                    {Name:"MATLAB",Icon:"/TechIcons/Matlab.png"},
                                    {Name:"OpenGL",Icon:"/TechIcons/OpenGL.png"},
                                ],
                        position: "Software Engineer Intern",
                        bullets: [
                             "Enhanced the Mixed-Signal Analyzer app's back-end in C++, improving user experience by 50% and performance by 30%.",
                             "Developed Java APIs and services to seamlessly convert over 100,000 tr0, FineSim, SW, and AC0 files into MATLAB-readable formats.",
                             "Implemented matrix multiplication with OpenMP and C++, achieving 40% faster processing on x86 via loop blocking."],
                      },
                      {
                        type:"Work",
                        logo: "Truveta.png",
                        companyName: "Truveta",
                        location: "Bellevue, Washington",
                        Country:"USA",
                        timeline: "May 2022 - Dec 2022",
                        skills: [
                                    {Name:"C#",Icon:"/TechIcons/CSharp.png"}, 
                                    {Name:"ElasticSearch",Icon:"/TechIcons/ElasticSearch.png"},
                                    {Name:"Azure",Icon:"/TechIcons/Azure.png"},
                                    {Name:"gRPC",Icon:"/TechIcons/gRPC.png"},
                                    {Name:"Python",Icon:"/TechIcons/Python.png"},
                                    {Name:"Git",Icon:"/TechIcons/Git.png"}
                                ],
                        position: "Software Engineer Intern",
                        bullets: [
                            "Developed and deployed scalable C# microservices with gRPC, optimizing Elastic Search queries on Azure and improving search by 10%.", 
                            "Implemented a real-time progress bar service for accurate query progress estimation.", 
                            "Designed interactive dashboards with Plotly and ipywidgets, matplotlib boosting efficiency by 20%.",
                            "Developed an automated analytical query platform and deployed secure Docker containers via Azure pipelines for efficient app deployment."],
                      },
                      {
                        type:"Eduacation",
                        school:"Arizona State University",
                        schoolLogo:"ASU.png",
                        location:"Tempe, Arizona",
                        country:"USA",
                        degree:"Master",
                        major:"Computer Science",
                        timeline:"Aug 2021 - May 2023",
                        position:"Student",
                        GPA:"3.83",
                        courses:["Artificial Intelligence","Distributed Databases Systems","Data Visualization","Semantic Web Mining","Knowledge Representation","Mobile Computing","Spatial Data Science and Engineering","Statistical Machine Learning"]
                      },
                      { 
                        type:"Work",
                        logo: "Pwc.png",
                        companyName: "PwC",
                        location: "Bangalore, India",
                        Country:"India",
                        timeline: "July 2018 - Aug 2021",
                        skills: [
                                    {Name:"React",Icon:"/TechIcons/React.png"},
                                    {Name:"Node.js",Icon:"/TechIcons/Nodejs.png"},
                                    {Name:"Java",Icon:"/TechIcons/Java.png"},
                                    {Name:"JIRA",Icon:"/TechIcons/JIRA.png"},
                                    {Name:"Selenium",Icon:"/TechIcons/Selenium.png"},
                                    {Name:"MySQL",Icon:"/TechIcons/MySQL.png"},
                                    {Name:"JUnit",Icon:"/TechIcons/Junit.png"},
                                    {Name:"Redis",Icon:"/TechIcons/Redis.png"},
                                ],
                        position: "Software Engineer",
                        bullets: ["Developed a React.js frontend portal for PwC clients to track and record services in real-time.", 
                                  "Ensured high-quality application delivery and maintenance through comprehensive testing, achieving 99% uptime and zero critical bugs.",
                                  "Built workflows for approvals and automatic notifications via email and SMS, reducing response times by 25%.",
                                  "Created Java REST APIs for seamless financial data transfer between PwC databases, Redis Cache, and MySQL, improving data management efficiency by 45%."],
                      },
                      {
                        type:"Eduacation",
                        school:"Delhi Technological University",
                        schoolLogo:"DTU.png",
                        location:"New Delhi, Delhi",
                        country:"India",
                        degree:"B.Tech",
                        major:"Electrical Engineering",
                        timeline:"Aug 2015 - May 2019",
                        position:"Student",
                        GPA:"8.00",
                        courses:["Data Structures and Algorithms","Operating Systems","Computer Networks","Micro-controller and Microprocessors"]
                      }
                ],
            }
        },
        {
            ID:3,
            Name:"Skills",
            backgroundColor:"#101936",
            SvgSeperator:"waves3",
            CONTENT:{
                ProgrammingLanguages:[
                    {name:"C++",iconPath:"/TechIcons/C++.png"},
                    {name:"C#",iconPath:"/TechIcons/CSharp.png"},
                    {name:"Python",iconPath:"/TechIcons/Python.png"},
                    {name:"JavaScript",iconPath:"/TechIcons/JavaScript.png"},
                    {name:"Java",iconPath:"/TechIcons/Java.png"},
                   /* {name:"Julia",iconPath:"/TechIcons/Julia.png"},
                    {name:"Scala",iconPath:"/TechIcons/Scala.png"},
                    {name:"HTML 5",iconPath:"/TechIcons/HTML5.png"},
                    {name:"CSS",iconPath:"/TechIcons/CSS3.png"},
                    {name:"R",iconPath:"/TechIcons/R.png"},
                    {name:"PostgresSQL",iconPath:"/TechIcons/PostgresSQL.png"},
                    {name:"Matlab",iconPath:"/TechIcons/Matlab.png"},
                    {name:"Git",iconPath:"/TechIcons/Git.png"},
                    {name:"Bash",iconPath:"/TechIcons/Bash.png"},
                    {name:"MS SQL Server",iconPath:"/TechIcons/MSSQL.png"}, */
                ],
                FrameworksAndLibraries:[
                    {name:"React.js",iconPath:"/TechIcons/React.png"},
                    {name:"Next.js",iconPath:"/TechIcons/Nextjs.png"},
                    {name:"Node.js",iconPath:"/TechIcons/Nodejs.png"},
                    {name:"Tailwind",iconPath:"/TechIcons/TailwindCSS.png"},
                    /*{name:"CSS",iconPath:"/TechIcons/CSS3.png"},
                    {name:"Selenium",iconPath:"/TechIcons/Selenium.png"},
                    {name:"TensorFlow",iconPath:"/TechIcons/TensorFlow.png"},
                    {name:"ScikitLearn",iconPath:"/TechIcons/ScikitLearn.png"},
                    {name:"Redis",iconPath:"/TechIcons/Redis.png"},
                    {name:"PyTorch",iconPath:"/TechIcons/PyTorch.png"},
                    {name:"OpenCV",iconPath:"/TechIcons/OpenCV.png"},
                    {name:"MySQL",iconPath:"/TechIcons/MySQL.png"},
                    {name:"Keras",iconPath:"/TechIcons/Keras.png"},
                    {name:"Flask",iconPath:"/TechIcons/Flask.png"},
                    {name:"D3.js",iconPath:"/TechIcons/D3js.png"},*/
                ],
                Tools:[
                    {name:"Unity",iconPath:"/TechIcons/Unity.png"},
                    {name:"RasberryPi",iconPath:"/TechIcons/RasberryPi.png"},
                    {name:"OpenGL",iconPath:"/TechIcons/OpenGL.png"},
                    {name:"OpenCV",iconPath:"/TechIcons/OpenCV.png"},
                    {name:"Maven",iconPath:"/TechIcons/Maven.png"},
                    {name:"Kubernetes",iconPath:"/TechIcons/Kubernetes.png"},
                    {name:"JUnit",iconPath:"/TechIcons/Junit.png"},
                    {name:"JIRA",iconPath:"/TechIcons/JIRA.png"},
                    {name:"Hadoop",iconPath:"/TechIcons/Hadoop.png"},
                    {name:"gRPC",iconPath:"/TechIcons/gRPC.png"},
                    {name:"ElasticSearch",iconPath:"/TechIcons/ElasticSearch.png"},
                    /*{name:"Docker",iconPath:"/TechIcons/Docker.png"},
                    {name:"AWS",iconPath:"/TechIcons/AWS.png"},
                    {name:"Android",iconPath:"/TechIcons/Andriod.png"},
                    {name:"Photoshop",iconPath:"/TechIcons/AdobePhotoshop.png"},
                    {name:"AWS Amplify",iconPath:"/TechIcons/Amplify.png"},
                    {name:"AWS EC2",iconPath:"/TechIcons/EC2.png"},
                    {name:"AWS S3",iconPath:"/TechIcons/S3.png"},
                    {name:"AWS Lambda",iconPath:"/TechIcons/Lambda.png"},
                    {name:"AWS Redshift",iconPath:"/TechIcons/RedShift.png"},
                    {name:"CloudWatch",iconPath:"/TechIcons/Cloudwatch.png"},*/
                ],
            }
        },
        {
            ID:4,
            Name:"Projects",
            backgroundColor:"#9c0b42",
            SvgSeperator:"waves",
            Expanded:"False",
            CONTENT:[
                // {
                //     title:"Text to Image Converter",
                //     description:"Developed a text-to-image system on the MS-COCO using GANs, Python, and TensorFlow/PyTorch to generate images from text descriptions.",
                //     techStack:[
                //         {name:"TensorFlow",iconPath:"/TechIcons/TensorFlow.png"},
                //         {name:"Python",iconPath:"/TechIcons/Python.png"},
                //         {name:"GAN",iconPath:"/TechIcons/GAN.png"},
                //     ],
                //     gitLink:"https://github.com/username/project",
                //     projectIcon:"/ProjectIcons/TextToImage.png"
                // },
                {
                    title:"Human Activity Recognition",
                    description:"Developed a human activity recognition system for marathon runners using LSTM, CNN, Decision Trees, SVM, and KNN, achieving 99.8% accuracy with LSTMs.",
                    techStack:[
                        {name:"TensorFlow",iconPath:"/TechIcons/TensorFlow.png"},
                        {name:"Python",iconPath:"/TechIcons/Python.png"},
                        {name:"PyTorch",iconPath:"/TechIcons/PyTorch.png"},
                    ],
                    gitLink:"https://github.com/username/project",
                    projectIcon:"/ProjectIcons/HumanActivity.png"
                },
                // {
                //     title:"Monte Carlo Simulations for Statistics",
                //     description:"Conducted Monte Carlo simulations for PI, Central Limit Theorem, poker hand odds, and bit-rate error probability. Also built a Python-based Tkinter simulation for square lattice percolation.",
                //     techStack:[
                //         {name:"Python",iconPath:"/TechIcons/Python.png"},
                //     ],
                //     gitLink:"https://github.com/username/project",
                //     projectIcon:"/ProjectIcons/MonteCarlo.png"
                // },
                {
                    title:"Community Analytics Shiny app",
                    description:"Developed a Shiny App in R to build an interactive dashboard for community analytics in San Diego.",
                    techStack:[
                        {name:"R",iconPath:"/TechIcons/R.png"},
                        {name:"Shiny.io",iconPath:"/TechIcons/Shiny.png"},
                    ],
                    gitLink:"https://ktanotra.shinyapps.io/nhood-change-dashboard-KanishkTanotra/",
                    projectIcon:"/ProjectIcons/ShinyProject.png"
                },
                // {
                //     title:"Covid Symptoms tracking App",
                //     description:"Created a user-friendly Android app in Java for recording COVID-19 symptoms, estimating heart and respiratory rates using camera, accelerometer, and orientation sensors, with an alert system.",
                //     techStack:[
                //         {name:"Java",iconPath:"/TechIcons/Java.png"},
                //         {name:"Andriod",iconPath:"/TechIcons/Andriod.png"},
                //     ],
                //     gitLink:"https://github.com/username/project",
                //     projectIcon:"/ProjectIcons/CovidSymp.jpeg"
                // },
                // {
                //     title:"Solar Forecasting",
                //     description:"Developed an LSTM RNN model with 92% accuracy and an R2 value of 0.98 to predict power output one hour ahead at a specified load.",
                //     techStack:[
                //         {name:"Python",iconPath:"/TechIcons/Python.png"},
                //         {name:"TensorFlow",iconPath:"/TechIcons/TensorFlow.png"},
                //     ],
                //     gitLink:"https://github.com/username/project",
                //     projectIcon:"/ProjectIcons/Solar.png"
                // },
                // {
                //     title:"Social Media Analytics Dashboard",
                //     description:"Engineered and processed social media data using AWS RedShift and MS SQL Server. ●	Developed interactive dashboards in with custom D3.js visualizations. Optimized brand strategies through simulation and social listening insights.",
                //     techStack:[
                //         {name:"AWS RedShift",iconPath:"/TechIcons/RedShift.png"},
                //         {name:"MS SQL Server",iconPath:"/TechIcons/MSSQL.png"},
                //         {name:"D3.js",iconPath:"/TechIcons/D3js.png"},
                //         {name:"Python",iconPath:"/TechIcons/Python.png"},
                //     ],
                //     gitLink:"https://github.com/username/project",
                //     projectIcon:"/ProjectIcons/SocialDashBoard.png"
                // },
                // {
                //     title:"2D Top-Down RPG Game",
                //     description:"Created A 2D Top-Down RPG game in Unity using C#. Contains 10 scenes with functioning UI and multiplayer features.",
                //     techStack:[
                //         {name:"Unity",iconPath:"/TechIcons/Unity.png"},
                //         {name:"C#",iconPath:"/TechIcons/CSharp.png"},
                //         {name:"D3.js",iconPath:"/TechIcons/D3js.png"},
                //         {name:"PhotoShop",iconPath:"/TechIcons/AdobePhotoShop.png"},
                //     ],
                //     gitLink:"https://github.com/username/project",
                //     projectIcon:"/ProjectIcons/TopDownGame.png"
                // },
                // {
                //     title:"Pathfinding Visualizer",
                //     description:"Used JavaScript to visualize methods employed by different path-finding algorithms to determine the optimal path.Implemented BFS, DFS, Uniform Cost Search, Dijkstra’s, Best Fit Search, and A* Search Algorithms.",
                //     techStack:[
                //         {name:"JavaScript",iconPath:"/TechIcons/JavaScript.png"},
                //     ],
                //     gitLink:"https://github.com/username/project",
                //     projectIcon:"/ProjectIcons/PathFinding.png"
                // },
                // {
                //     title:"Stock Trading App",
                //     description:"Developed a stock trading web app with Flask, featuring real-time stock transactions, portfolio management, and purchase/sale history tracking.",
                //     techStack:[
                //         {name:"Python",iconPath:"/TechIcons/Python.png"},
                //         {name:"Flask",iconPath:"/TechIcons/Flask.png"},
                //     ],
                //     gitLink:"https://github.com/username/project",
                //     projectIcon:"/ProjectIcons/Stocks.png"
                // },
                // {
                //     title:"AWS-Based Scalable Data Pipeline",
                //     description:"Developed a stock trading web app with Flask, featuring real-time stock transactions, portfolio management, and purchase/sale history tracking.",
                //     techStack:[
                //         {name:"AWS Amplify",iconPath:"/TechIcons/Amplify.png"},
                //         {name:"AWS EC2",iconPath:"/TechIcons/EC2.png"},
                //         {name:"AWS S3",iconPath:"/TechIcons/S3.png"},
                //         {name:"AWS Lambda",iconPath:"/TechIcons/Lambda.png"},
                //         {name:"AWS Redshift",iconPath:"/TechIcons/RedShift.png"},
                //         {name:"CloudWatch",iconPath:"/TechIcons/Cloudwatch.png"},
                //     ],
                //     gitLink:"https://github.com/username/project",
                //     projectIcon:"/ProjectIcons/AWSPipeline.png"
                // },
                // {
                //     title:"Automated ETL Pipeline Development",
                //     description:"Developed an ETL pipeline using Python, SQL, and Apache Airflow, automating data extraction, transformation, and loading processes, with integrated logging and monitoring to ensure high performance and data integrity.",
                //     techStack:[
                //         {name:"Python",iconPath:"/TechIcons/Python.png"},
                //         {name:"Apache Airflow",iconPath:"/TechIcons/ApacheAirflow.png"},
                //         {name:"My SQL",iconPath:"/TechIcons/MySQL.png"},
                //     ],
                //     gitLink:"https://github.com/username/project",
                //     projectIcon:"/ProjectIcons/ETL.png"
                // },
            ]
        },
        {
            ID:5,
            Name:"ContactMe",
            backgroundColor:"#360629",
            SvgSeperator:"waves3"
        }
    ],
    ANCHORS:{
        LEFTANCHOR:{
            List:[
                {   
                    Name:"LindedIn",
                    Icon:"LinkedIn.png",
                    Link:"LindedIn.com"
                },
                {
                    Name:"GitHub",
                    Icon:"GitHub.png",
                    Link:"GitHub.com"
                },
                {
                    Name:"Twitter",
                    Icon:"Twitter.png",
                    Link:"Twitter.com"
                },
                {   
                    Name:"Instagram",
                    Icon:"Instagram.png",
                    Link:"Instagram.com"
                }
            ],
            Line:{
                Color:"#ffffff"
            }
        },
        RIGHTANCHOR:{
            Text:"ktanotra@asu.edu",
            Link:"mailto:ktanotra@asu.edu",
            Line:{
                Color:"#ffffff"
            }
        }
    }
}

export default DATA;