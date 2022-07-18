(this.webpackJsonpliuhh02=this.webpackJsonpliuhh02||[]).push([[0],{41:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var i=n(16),a=n(4),c=n(1),s=n(0),r=Object(c.createContext)(),o=function(e){var t=e.children,n=Object(c.useState)("light"),i=Object(a.a)(n,2),o=i[0],l=i[1];Object(c.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="https://liuhh02.github.io/",h="Haohui",d="Haohui Liu",u="Machine Learning & Web Development Enthusiast",m="I\u2019m a Computer Science undergraduate at Carnegie Mellon University deeply interested in Machine Learning and Web Development. In my free-time, I enjoy participating in hackathons, graphic designing and gyming. Check out my experience and personal projects I have made below!",p="https://liuhh02.github.io/resume/",j={linkedin:"https://www.linkedin.com/in/liu-haohui/",github:"https://github.com/liuhh02",devpost:"https://devpost.com/liuhh02",medium:"https://medium.com/@liuhh02",scholar:"https://scholar.google.com/citations?user=GwwLvzsAAAAJ&hl=en"},b=[{name:"Carnegie Mellon University",stack:"BS in Computer Science, Concentration in Machine Learning",description:["Classes: Principles of Imperative Computation (15122), Principles of Functional Programming (15150), Calculus in 3D (21259), Matrices & Linear Transformations (21241), Introduction to Mathematical Finance (21270), Great Ideas in Theoretical Computer Science (15251)","Clubs & Activities: Quant Club (Executive Committee), Blockchain Group, Business Technology Group, Gym"]},{name:"Publications",description:["Y. Nai, H. Liu, et al. Validation of deep learning-based nonspecific estimates for amyloid burden quantification with longitudinal data. Physica Medica (2022).","H. Liu, et al. Improved amyloid burden quantification with nonspecific estimates using deep learning. Eur J Nucl Med Mol Imaging (2021).","H. Liu, et al. IDDF2021-ABS-0140 Gut microbiota significantly correlate with body constitution in traditional chinese medicine. Gut (2021).",'H. Liu, et al, "Deep Learning-Based Estimation of Non-Specific Uptake in Amyloid- PET Images from Structural MRI for Improved Quantification of Amyloid Load in Alzheimer\'s Disease," 2020 IEEE 33rd International Symposium on Computer-Based Medical Systems, Rochester, MN, USA (2020).','H. Liu, "A Location Independent Machine Learning Approach for Early Fake News Detection," 2019 IEEE Big Data, Los Angeles, CA, USA (2019).']}],f=[{name:"Machine Learning Intern @ PayPal",stack:"May 2022 - August 2022",description:["Trained state of the art NLP Transformer models (Longformer, BERT) on imbalanced and longform documents for complaints identification (internship currently in progress)","More details will be updated after my internship ends!"]},{name:"Data Science Intern @ Amili",stack:"April 2021 - July 2021",description:["Worked for a bioinformatics start-up to extract insights from human gut microbiome data","Performed statistical analysis, data visualization, dimensionality reduction (t-SNE, PCA, etc.) in R & Python to extract useful insights from multi-dimensional rRNA data containing over 1 million features","Published research abstract as 1st author in Gut, a leading international peer-reviewed journal (Impact Factor: 23.1)"]},{name:"Deep Learning Intern @ National University of Singapore",stack:"June 2019 - November 2020",description:["Proposed the use of and developed conditional GANs & 3D Convolutional ResNets in Python on 3D MRI scans with PyTorch, Keras, Tensorflow","Improved early detection of Alzheimer\u2019s Disease by 67%","Published paper as 1st author in European Journal of Nuclear Medicine & Molecular Imaging (Impact Factor: 9.2; 9 citations)","Published paper as 1st author in IEEE Computer Based Medical Systems 2020 (3 citations)","Published paper as 2nd author in Physica Medica"]},{name:"Machine Learning Intern @ DSTA Singapore",stack:"October 2018 - January 2019",description:["Trained 1D CNNs, bidirectional LSTMs & stacked ensembles using Keras and scikit-learn to detect fake news using NLP","Improved generalizability and increased accuracy of classification from baseline of 44.3% to 84.9%","Won 4th award in category (Robotics and Intelligent Machines) at International Science and Engineering Fair (ISEF)","Published paper as 1st author in 2019 IEEE Big Data Conference (Acceptance Rate: 18.7%; 6 citations)"]}],g=[{name:"GymGuru - HackCMU2021 Best Use of Data Hack",description:"Built during the height of the COVID pandemic to tackle the problem of long queues stretching up to 30 minutes to enter the CMU gym.",stack:["Python","Pandas","Plotly","Scikit-Learn","Streamlit"],sourceCode:"https://devpost.com/software/gymguru",livePreview:"https://share.streamlit.io/liuhh02/gymguru/main/app.py"},{name:"CodeDecoder - Superposition V Winner",description:"CodeDecoder is a multilingual deep learning powered educational tool to translate code into natural language, to provide real time feedback to ease learners into coding and develop good coding practices from day one.",stack:["Python","JavaScript","TypeScript","NLP Transformers","PyTorch","FastAPI","VS Code","Streamlit"],sourceCode:"https://devpost.com/software/codedecoder",livePreview:"https://youtu.be/Pqjh258HOzg"},{name:"FinWhiz - FinTech nations Hackathon Winner and Best Use of SQL",description:"Built to empower users to make their own informed investment decisions. Includes information about fundmanetal analysis, a personalized portfolio optimizer based on the user's own risk tolerance and target returns, and a candlestick pattern screener.",stack:["Python","SQL","SQLAlchemy","CockroachDB","Google Cloud","NLTK","Plotly","Beautiful Soup","Streamlit"],sourceCode:"https://devpost.com/software/finwhiz-7ab3ug",livePreview:"https://youtu.be/DIJlu7W1okw"},{name:"ResuMatch - Tech Takes on Unemployment Hackathon Winner",description:"Designed to simplify the job application process by using Machine Learning to obtain information beyond keywords in a candidate's resume to provide more targeted job recommendations.",stack:["Python","JavaScript","NLP","MongoDB","Flask","React","Keras"],sourceCode:"https://devpost.com/software/resumatch-co6bua",livePreview:"https://vimeo.com/419602888"},{name:"Beautifly - HackViolet Most Impactful Data-Driven Hack",description:"A women-focused self-care mobile app, built with accessibility, convenience, and security in mind.",stack:["Python","JavaScript","Node.js","Express","Google Cloud","Firebase"],sourceCode:"https://devpost.com/software/beautifly",livePreview:"https://youtu.be/4G0hXDXc190"},{name:"CrowdTally - WinHacks 2021 Winner",description:"State-of-the-art, real-time human detection with Computer Vision for high precision crowd counting",stack:["Python","Computer Vision","OpenCV","PyTorch","Firebase","Streamlit"],sourceCode:"https://devpost.com/software/crowdtally",livePreview:"https://youtu.be/zLakCpDD_WY"}],k=["Python","C++","C","Java","JavaScript","TypeScript","R","SQL","SML","Bash","Natural Language Processing (NLP)","Computer Vision (CV)","Time Series","Interpretable Machine Learning","PyTorch","TensorFlow","Fastai","Keras","HuggingFace","Pandas","Numpy","OpenCV","XGBoost","Scikit-learn","Matplotlib","Seaborn","GGPlot","React","Nodejs","Flask","HTML","CSS","Streamlit","Firebase","Google Cloud","Heroku","PythonAnywhere","Linux","Mandarin Chinese (Bilingual)","German (Intermediate)"],x=["Quantathon 2022 First Runners Up (Sponsored by Goldman Sachs)","UChicago Trading Competition 2022 (Selected from over 20 teams to represent CMU)","Dean's List with High Honors Fall 2021","Superposition V Hackathon Champion","Best Fintech Hack & Best Use of SQL at cmd-f (Issued by University of British Columbia)","FinTech Nations 2020 Hackathon Winner","Most Impactful Data-Driven Hack at HackViolet (Issued by Virigina Tech)","Top 6 at Hack for Humanity 2021 (Issued by Santa Clara University)","Champion for Tech Takes on Unemployment Hackathon 2020","Champion for Today I Learned AI Competition 2020","Best COVID-19 Hack & Best use of MongoDB at hths.hacks() 2020","Top in High School Cohort for Philosophy","1st in Country for German as Third Language","International Science and Engineering Fair (ISEF) 2019 Fourth Place Award in Category","Recognition of Excellence in Research Award (Issued by Singapore University of Technology and Design)"],v=[{name:"Stanford University Algorithms Specialization",link:"https://www.coursera.org/account/accomplishments/specialization/certificate/Y5WETHZN9RZS"},{name:"Stanford University Divide and Conquer, Sorting and Searching, and Randomized Algorithms",link:"https://www.coursera.org/account/accomplishments/certificate/FZSNDPRP38RL"},{name:"Stanford University Graph Search, Shortest Paths, and Data Structures",link:"https://www.coursera.org/account/accomplishments/certificate/UXLS4WPWTX23"},{name:"Stanford University Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming",link:"https://www.coursera.org/account/accomplishments/certificate/JDDDLKCLYNK8"},{name:"Stanford University Shortest Paths Revisited, NP-Complete Problems and What To Do About Them",link:"https://www.coursera.org/account/accomplishments/certificate/CEJG3PX2AD3A"},{name:"MIT 24.09x: Minds and Machines",link:"https://courses.edx.org/certificates/3e9c7b4461174b258469fc45c2a11c5c"},{name:"University of Michigan Internet History, Technology, and Security",link:"https://www.coursera.org/account/accomplishments/certificate/EMU3AFC8PNA4"},{name:"DeepLearning.AI Neural Networks and Deep Learning",link:"https://www.coursera.org/account/accomplishments/verify/QTTUTVN5RXZD"},{name:"DeepLearning.AI Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",link:"https://www.coursera.org/account/accomplishments/verify/Z8ZF67JAC8DM"},{name:"DeepLearning.AI Structuring Machine Learning Projects",link:"https://www.coursera.org/account/accomplishments/verify/67RFNY5G47L5"},{name:"Stanford University Game Theory",link:"https://www.coursera.org/account/accomplishments/certificate/5B66STD78BZP"},{name:"Stanford University Game Theory II: Advanced Applications",link:"https://www.coursera.org/account/accomplishments/certificate/G6CPWU45A5Q4"},{name:"Harvard University CS50",link:"https://cs50.harvard.edu/certificates/c7327931-5c43-4507-af49-40b79fe40504"},{name:"Stanford University Understanding Einstein: The Special Theory of Relativity",link:"https://www.coursera.org/account/accomplishments/verify/AG3UFYBRDG88"},{name:"The Hebrew University of Jerusalem Synapses, Neurons and Brains",link:"https://www.coursera.org/account/accomplishments/verify/FEGKVA578TXZ"},{name:"Stanford University Introduction to Mathematical Thinking",link:"https://www.coursera.org/account/accomplishments/certificate/BRKVGP3TUKKX"}],O="haohuil@andrew.cmu.edu",y={linkedin:"https://www.linkedin.com/in/liu-haohui/",github:"https://github.com/liuhh02",devpost:"https://devpost.com/liuhh02",medium:"https://medium.com/@liuhh02",scholar:"https://scholar.google.com/citations?user=GwwLvzsAAAAJ&hl=en"},N=n(29),w=n.n(N),S=n(28),C=n.n(S),_=n(31),P=n.n(_),I=n(30),L=n.n(I),T=(n(41),function(){var e=Object(c.useContext)(r),t=Object(a.a)(e,1)[0],n=t.themeName,i=t.toggleTheme,o=Object(c.useState)(!1),l=Object(a.a)(o,2),h=l[0],d=l[1],u=function(){return d(!h)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[b.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#education",onClick:u,className:"link link--nav",children:"Education"})}):null,f.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#experience",onClick:u,className:"link link--nav",children:"Experience"})}):null,g.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,k.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,x.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#awards",onClick:u,className:"link link--nav",children:"Awards"})}):null,v.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#certificates",onClick:u,className:"link link--nav",children:"Certificates"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(C.a,{}):Object(s.jsx)(w.a,{})}),Object(s.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(s.jsx)(L.a,{}):Object(s.jsx)(P.a,{})})]})}),A=(n(45),function(){var e=l,t=h;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(T,{})]})}),D=n(11),M=n.n(D),E=n(19),H=n.n(E),U=n(20),B=n.n(U),F=n(21),G=n.n(F),R=n(22),J=n.n(R),z=(n(46),function(){var e=d,t=u,n=m,i=p,a=j;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[i&&Object(s.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(s.jsxs)(s.Fragment,{children:[a.github&&Object(s.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(M.a,{})}),a.linkedin&&Object(s.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(H.a,{})}),a.devpost&&Object(s.jsx)("a",{href:a.devpost,"aria-label":"devpost",className:"link link--icon",children:Object(s.jsx)(B.a,{})}),a.medium&&Object(s.jsx)("a",{href:a.medium,"aria-label":"medium",className:"link link--icon",children:Object(s.jsx)(G.a,{})}),a.scholar&&Object(s.jsx)("a",{href:a.scholar,"aria-label":"scholar",className:"link link--icon",children:Object(s.jsx)(J.a,{})})]})]})]})}),V=n(5),W=n.n(V),K=(n(49),function(e){var t=e.experience;return Object(s.jsxs)("div",{className:"experience",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"experience__stack",children:t.stack}),t.description&&Object(s.jsx)("ul",{className:"experience__description",children:t.description.map((function(e){return Object(s.jsx)("li",{className:"experience__description-item",children:e},W()())}))})]})}),Q=(n(50),function(){return f.length?Object(s.jsxs)("section",{id:"experience",className:"section experience",children:[Object(s.jsx)("h2",{className:"section__title",children:"Experience"}),Object(s.jsx)("div",{className:"experiences__grid",children:f.map((function(e){return Object(s.jsx)(K,{experience:e},W()())}))})]}):null}),X=n(32),Z=n.n(X),Y=(n(51),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},W()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,target:"_blank",rel:"noopener noreferrer","aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(M.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,target:"_blank",rel:"noopener noreferrer","aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(Z.a,{})})]})}),q=(n(52),function(){return g.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:g.map((function(e){return Object(s.jsx)(Y,{project:e},W()())}))})]}):null}),$=(n(53),function(e){var t=e.education;return Object(s.jsxs)("div",{className:"education",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"education__stack",children:t.stack}),t.description&&Object(s.jsx)("ul",{className:"education__description",children:t.description.map((function(e){return Object(s.jsx)("li",{className:"education__description-item",children:e},W()())}))})]})}),ee=(n(54),function(){return b.length?Object(s.jsxs)("section",{id:"education",className:"section education",children:[Object(s.jsx)("h2",{className:"section__title",children:"Education & Research"}),Object(s.jsx)("div",{className:"education__grid",children:b.map((function(e){return Object(s.jsx)($,{education:e},W()())}))})]}):null}),te=(n(55),function(){return k.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:k.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},W()())}))})]}):null}),ne=n(33),ie=n.n(ne),ae=(n(56),function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(ie.a,{fontSize:"large"})})}):null}),ce=(n(57),function(){return x.length?Object(s.jsxs)("section",{className:"section awards",id:"awards",children:[Object(s.jsx)("h2",{className:"section__title",children:"Awards & Honors"}),Object(s.jsx)("ul",{className:"awards__list",children:x.map((function(e){return Object(s.jsx)("li",{className:"awards__list-item btn btn--plain",children:e},W()())}))})]}):null}),se=(n(58),function(){return v.length?Object(s.jsxs)("section",{className:"section certificates",id:"certificates",children:[Object(s.jsx)("h2",{className:"section__title",children:"Certificates"}),Object(s.jsx)("ul",{className:"certificates__list",children:v.map((function(e){return Object(s.jsx)("li",{className:"certificates__list-item btn btn--plain",children:Object(s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.name})},W()())}))})]}):null}),re=(n(59),function(){if(!O)return null;var e=O,t=y;return Object(s.jsx)("section",{className:"section contact center",id:"contact",children:Object(s.jsxs)("div",{className:"contact center",children:[e&&Object(s.jsx)("a",{href:"mailto:".concat(e),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})}),t&&Object(s.jsxs)(s.Fragment,{children:[t.github&&Object(s.jsx)("a",{href:t.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(M.a,{})}),t.linkedin&&Object(s.jsx)("a",{href:t.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(H.a,{})}),t.devpost&&Object(s.jsx)("a",{href:t.devpost,"aria-label":"devpost",className:"link link--icon",children:Object(s.jsx)(B.a,{})}),t.medium&&Object(s.jsx)("a",{href:t.medium,"aria-label":"medium",className:"link link--icon",children:Object(s.jsx)(G.a,{})}),t.scholar&&Object(s.jsx)("a",{href:t.scholar,"aria-label":"scholar",className:"link link--icon",children:Object(s.jsx)(J.a,{})})]})]})})}),oe=(n(60),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/liuhh02",className:"link footer__link",children:"Created By Haohui Liu"})})}),le=(n(61),function(){var e=Object(c.useContext)(r),t=Object(a.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(A,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(z,{}),Object(s.jsxs)("div",{className:"grid-container",children:[Object(s.jsxs)("div",{className:"center-screen",children:[Object(s.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=liuhh02&show_icons=true&locale=en&theme=vue&hide=prs,issues",alt:"liuhh02"})," "]}),Object(s.jsxs)("div",{className:"center-screen",children:[Object(s.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/top-langs?username=liuhh02&show_icons=true&locale=en&langs_count=6&layout=compact&theme=vue&hide=cython,html,scss,css",alt:"liuhh02"})," "]})]}),Object(s.jsx)(ee,{}),Object(s.jsx)(Q,{}),Object(s.jsx)(q,{}),Object(s.jsx)(te,{}),Object(s.jsx)(ce,{}),Object(s.jsx)(se,{}),Object(s.jsx)(re,{})]}),Object(s.jsx)(ae,{}),Object(s.jsx)(oe,{})]})});n(62);Object(i.render)(Object(s.jsx)(o,{children:Object(s.jsx)(le,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.25ca5fee.chunk.js.map