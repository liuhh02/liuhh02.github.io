const header = {
  homepage: 'https://github.com/liuhh02',
  title: 'Haohui',
}

const about = {
  name: 'Haohui Liu',
  role: 'Machine Learning Engineer & Web Developer',
  description:
    'I’m a Computer Science undergraduate at Carnegie Mellon University deeply interested in Machine Learning and Web Development. In my free-time, I enjoy participating in hackathons, designing and gyming. Check out my experience and personal projects I have made below!',
  resume: 'https://docs.google.com/viewerng/viewer?url=https://github.com/liuhh02/resume/raw/main/Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/liu-haohui/',
    github: 'https://github.com/liuhh02',
    devpost: 'https://devpost.com/liuhh02',
    medium: 'https://medium.com/@liuhh02',
    scholar: 'https://scholar.google.com/citations?user=GwwLvzsAAAAJ&hl=en'
  },
}

const education = [
  {
    name: 'Carnegie Mellon University',
    stack: 'BS in Computer Science, Concentration in Machine Learning',
    description:
      ['Classes: Principles of Imperative Computation (15122), Principles of Functional Programming (15150), Calculus in 3D (21259), Matrices & Linear Transformations (21241), Introduction to Mathematical Finance (21270), Great Ideas in Theoretical Computer Science (15251)',
      'Clubs & Activities: Quant Club (Executive Committee), Blockchain Group, Business Technology Group, Gym'],
  },
  {
    name: 'Publications',
    description:
      ['Y. Nai, H. Liu, et al. Validation of deep learning-based nonspecific estimates for amyloid burden quantification with longitudinal data. Physica Medica (2022).',
      'H. Liu, et al. Improved amyloid burden quantification with nonspecific estimates using deep learning. Eur J Nucl Med Mol Imaging (2021).',
      'H. Liu, et al. IDDF2021-ABS-0140 Gut microbiota significantly correlate with body constitution in traditional chinese medicine. Gut (2021).',
      'H. Liu, et al, "Deep Learning-Based Estimation of Non-Specific Uptake in Amyloid- PET Images from Structural MRI for Improved Quantification of Amyloid Load in Alzheimer\'s Disease," 2020 IEEE 33rd International Symposium on Computer-Based Medical Systems, Rochester, MN, USA (2020).',
      'H. Liu, "A Location Independent Machine Learning Approach for Early Fake News Detection," 2019 IEEE Big Data, Los Angeles, CA, USA (2019).'],
  },
]

const experience = [
  {
    name: 'Machine Learning Intern @ PayPal',
    stack: 'May 2022 - August 2022',
    description:
      ['Trained state of the art NLP Transformer models (Longformer, BERT) on imbalanced and longform documents for complaints identification (internship currently in progress)',
      'More details will be updated after my internship ends!'],
  },
  {
    name: 'Data Science Intern @ Amili',
    stack: 'April 2021 - July 2021',
    description:
      ['Worked for a bioinformatics start-up to extract insights from human gut microbiome data',
      'Performed statistical analysis, data visualization, dimensionality reduction (t-SNE, PCA, etc.) in R & Python to extract useful insights from multi-dimensional rRNA data containing over 1 million features',
      'Published research abstract as 1st author in Gut, a leading international peer-reviewed journal (Impact Factor: 23.1)'],
  },
  {
    name: 'Deep Learning Intern @ National University of Singapore',
    stack: 'June 2019 - November 2020',
    description:
      ['Proposed the use of and developed conditional GANs & 3D Convolutional ResNets in Python on 3D MRI scans with PyTorch, Keras, Tensorflow',
      'Improved early detection of Alzheimer’s Disease by 67%',
      'Published paper as 1st author in European Journal of Nuclear Medicine & Molecular Imaging (Impact Factor: 9.2; 9 citations)',
      'Published paper as 1st author in IEEE Computer Based Medical Systems 2020 (3 citations)',
      'Published paper as 2nd author in Physica Medica'],
  },
  {
    name: 'Machine Learning Intern @ DSTA Singapore',
    stack: 'October 2018 - January 2019',
    description:
      ['Trained 1D CNNs, bidirectional LSTMs & stacked ensembles using Keras and scikit-learn to detect fake news using NLP',
      'Improved generalizability and increased accuracy of classification from baseline of 44.3% to 84.9%',
      'Won 4th award in category (Robotics and Intelligent Machines) at International Science and Engineering Fair (ISEF)',
      'Published paper as 1st author in 2019 IEEE Big Data Conference (Acceptance Rate: 18.7%; 6 citations)'],
  },
]

const projects = [
  {
    name: 'GymGuru - HackCMU2021 Best Use of Data Hack',
    description:
      'Built during the height of the COVID pandemic to tackle the problem of long queues stretching up to 30 minutes to enter the CMU gym.',
    stack: ['Python', 'Pandas', 'Plotly', 'Scikit-Learn', 'Streamlit'],
    sourceCode: 'https://devpost.com/software/gymguru',
    livePreview: 'https://share.streamlit.io/liuhh02/gymguru/main/app.py',
  },
  {
    name: 'CodeDecoder - Superposition V Winner',
    description:
      'CodeDecoder is a multilingual deep learning powered educational tool to translate code into natural language, to provide real time feedback to ease learners into coding and develop good coding practices from day one.',
    stack: ['Python', 'JavaScript', 'TypeScript', 'NLP Transformers', 'PyTorch', 'FastAPI', 'VS Code', 'Streamlit'],
    sourceCode: 'https://devpost.com/software/codedecoder',
    livePreview: 'https://youtu.be/Pqjh258HOzg',
  },
  {
    name: 'FinWhiz - FinTech nations Hackathon Winner and Best Use of SQL',
    description:
      'Built to empower users to make their own informed investment decisions. Includes information about fundmanetal analysis, a personalized portfolio optimizer based on the user\'s own risk tolerance and target returns, and a candlestick pattern screener.',
    stack: ['Python', 'SQL', 'SQLAlchemy','CockroachDB', 'Google Cloud', 'NLTK', 'Plotly', 'Beautiful Soup', 'Streamlit'],
    sourceCode: 'https://devpost.com/software/finwhiz-7ab3ug',
    livePreview: 'https://youtu.be/DIJlu7W1okw',
  },
  {
    name: 'ResuMatch - Tech Takes on Unemployment Hackathon Winner',
    description:
      'Designed to simplify the job application process by using Machine Learning to obtain information beyond keywords in a candidate\'s resume to provide more targeted job recommendations.',
    stack: ['Python', 'JavaScript', 'NLP', 'MongoDB', 'Flask', 'React', 'Keras'],
    sourceCode: 'https://devpost.com/software/resumatch-co6bua',
    livePreview: 'https://vimeo.com/419602888',
  },
  {
    name: 'Beautifly - HackViolet Most Impactful Data-Driven Hack',
    description:
      'A women-focused self-care mobile app, built with accessibility, convenience, and security in mind.',
    stack: ['Python', 'JavaScript', 'Node.js', 'Express', 'Google Cloud', 'Firebase'],
    sourceCode: 'https://devpost.com/software/beautifly',
    livePreview: 'https://youtu.be/4G0hXDXc190',
  },
  {
    name: 'CrowdTally - WinHacks 2021 Winner',
    description:
      'State-of-the-art, real-time human detection with Computer Vision for high precision crowd counting',
    stack: ['Python', 'Computer Vision', 'OpenCV', 'PyTorch', 'Firebase', 'Streamlit'],
    sourceCode: 'https://devpost.com/software/crowdtally',
    livePreview: 'https://youtu.be/zLakCpDD_WY',
  },
]

const skills = [
  'Python',
  'C++',
  'C',
  'Java',
  'JavaScript',
  'TypeScript',
  'R',
  'SQL',
  'SML',
  'Bash',
  'Natural Language Processing (NLP)',
  'Computer Vision (CV)',
  'Time Series',
  'Interpretable Machine Learning',
  'PyTorch',
  'TensorFlow',
  'Fastai',
  'Keras',
  'HuggingFace',
  'Pandas',
  'Numpy',
  'OpenCV',
  'XGBoost',
  'Scikit-learn',
  'Matplotlib',
  'Seaborn',
  'GGPlot',
  'React',
  'Nodejs',
  'Flask',
  'HTML',
  'CSS',
  'Streamlit',
  'Firebase',
  'Google Cloud',
  'Heroku',
  'PythonAnywhere',
  'Linux',
  'Mandarin Chinese (Bilingual)', 
  'German (Intermediate)',
]

const awards = [
  'Quantathon 2022 First Runners Up (Sponsored by Goldman Sachs)',
  'UChicago Trading Competition 2022 (Selected from over 20 teams to represent CMU)',
  'Dean\'s List with High Honors Fall 2021',
  'Lee Kuan Yew Award for Mathematics and Science 2021 (1 of 12 awarded nationwide)',
  'Shopee Code League 2021 7th Place in Open Category (Top team from Singapore; awarded $800)',
  'Superposition V Hackathon Champion',
  'Best Fintech Hack & Best Use of SQL at cmd-f (Issued by University of British Columbia)',
  'FinTech Nations 2020 Hackathon Winner',
  'Most Impactful Data-Driven Hack at HackViolet (Issued by Virigina Tech)',
  'Top 6 at Hack for Humanity 2021 (Issued by Santa Clara University)',
  '3rd Place for Essay Competition on Mathematics and AI 2020 (Issued by Singapore Mathematical Society)',
  'Champion for Tech Takes on Unemployment Hackathon 2020',
  'Champion for Today I Learned AI Competition 2020',
  'Best COVID-19 Hack & Best use of MongoDB at hths.hacks() 2020',
  'DSTA Junior College Scholarship 2019 - 2020',
  'Top in High School Cohort for Philosophy',
  '1st in Country for German as Third Language',
  'International Science and Engineering Fair (ISEF) 2019 Fourth Place Award in Category',
  'Recognition of Excellence in Research Award (Issued by Singapore University of Technology and Design)',
]

const certificates = [
  {name: 'Stanford University Algorithms Specialization', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/Y5WETHZN9RZS'},
  {name: 'Stanford University Divide and Conquer, Sorting and Searching, and Randomized Algorithms', link: 'https://www.coursera.org/account/accomplishments/certificate/FZSNDPRP38RL'},
  {name: 'Stanford University Graph Search, Shortest Paths, and Data Structures', link: 'https://www.coursera.org/account/accomplishments/certificate/UXLS4WPWTX23'},
  {name: 'Stanford University Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming', link: 'https://www.coursera.org/account/accomplishments/certificate/JDDDLKCLYNK8'},
  {name: 'Stanford University Shortest Paths Revisited, NP-Complete Problems and What To Do About Them', link: 'https://www.coursera.org/account/accomplishments/certificate/CEJG3PX2AD3A'},
  {name: 'MIT 24.09x: Minds and Machines', link: 'https://courses.edx.org/certificates/3e9c7b4461174b258469fc45c2a11c5c'},
  {name: 'University of Michigan Internet History, Technology, and Security', link: 'https://www.coursera.org/account/accomplishments/certificate/EMU3AFC8PNA4'},
  {name: 'DeepLearning.AI Neural Networks and Deep Learning', link: 'https://www.coursera.org/account/accomplishments/verify/QTTUTVN5RXZD'},
  {name: 'DeepLearning.AI Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization', link: 'https://www.coursera.org/account/accomplishments/verify/Z8ZF67JAC8DM'},
  {name: 'DeepLearning.AI Structuring Machine Learning Projects', link: 'https://www.coursera.org/account/accomplishments/verify/67RFNY5G47L5'},
  {name: 'Stanford University Game Theory', link: 'https://www.coursera.org/account/accomplishments/certificate/5B66STD78BZP'},
  {name: 'Stanford University Game Theory II: Advanced Applications', link: 'https://www.coursera.org/account/accomplishments/certificate/G6CPWU45A5Q4'},
  {name: 'Harvard University CS50', link: 'https://cs50.harvard.edu/certificates/c7327931-5c43-4507-af49-40b79fe40504'},
  {name: 'Stanford University Understanding Einstein: The Special Theory of Relativity', link: 'https://www.coursera.org/account/accomplishments/verify/AG3UFYBRDG88'},
  {name: 'The Hebrew University of Jerusalem Synapses, Neurons and Brains', link: 'https://www.coursera.org/account/accomplishments/verify/FEGKVA578TXZ'},
  {name: 'Stanford University Introduction to Mathematical Thinking', link: 'https://www.coursera.org/account/accomplishments/certificate/BRKVGP3TUKKX'},
]

const contact = {
  email: 'haohuil@andrew.cmu.edu',
}

export { header, about, experience, projects, education, skills, awards, certificates, contact }
