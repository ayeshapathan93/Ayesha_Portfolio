export const personalInfo = {
  name: 'Ayesha Pathan',
  shortName: 'AP',
  role: 'Software Developer',
  email: 'ayeshapathan9325@gmail.com',
  phone: '+917821839624',
  phoneDisplay: '+91 78218 39624',
  location: 'Nanded, Maharashtra',
  linkedin: 'https://www.linkedin.com/in/ayesha-pathan-068276213/',
  github: 'https://github.com/ayeshapathan93',
  leetcode: 'https://leetcode.com/u/ayeshapathan_123/',
  profileImage: '/images/profile/ayesha-profile.png',
  resumePath: '/resume.pdf',
  resumeFileName: 'Ayesha_Pathan_Resume.pdf',
  availability: 'Open to opportunities',
  heroLabel: "Hello, I'm Ayesha Pathan",
  heroTitle: 'Building Digital Experiences That Matter.',
  heroText:
    "I'm an Information Technology graduate and software developer passionate about building modern web applications, intelligent solutions, and meaningful digital products.",
  roles: ['Software Developer', 'Frontend Developer', 'Backend Developer', 'Problem Solver'],
  aboutTitle: 'A Little About Me',
  aboutText:
    "I'm a software developer with an academic background in Information Technology. I enjoy transforming ideas into functional digital products, building responsive interfaces, developing backend systems, and exploring intelligent applications. I'm continuously learning new technologies and improving my problem-solving and development skills.",
  interests: [
    'Responsive interfaces',
    'Backend systems',
    'Intelligent applications',
    'Problem solving',
  ],
  academics: [
    { value: '7.77', label: 'B.Tech CGPA', detail: "MGM's College of Engineering" },
    { value: '80.80%', label: 'Diploma', detail: 'Information Technology' },
    { value: '92.80%', label: 'SSC', detail: 'Jagruti Vidyalaya, Latur' },
  ],
}

/**
 * Leave a value as an empty string until the real profile or email is ready.
 * Empty values render as non-clickable icons.
 */
export const socialLinks = {
  email: personalInfo.email,
  github: personalInfo.github,
  linkedin: personalInfo.linkedin,
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const education = [
  {
    id: 'btech',
    degree: 'B.Tech — Information Technology',
    school: "MGM's College of Engineering, Nanded",
    period: '2023–2026',
    result: 'CGPA 7.77',
  },
  {
    id: 'diploma',
    degree: 'Diploma — Information Technology',
    school: 'Puranmal Lahoti Government Polytechnic, Latur',
    period: '2020–2023',
    result: '80.80%',
  },
  {
    id: 'ssc',
    degree: 'SSC',
    school: 'Jagruti Vidyalaya, Latur',
    period: '',
    result: '92.80%',
  },
]
