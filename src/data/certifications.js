/**
 * Certificate details are taken from the supplied documents.
 * Replace an image only with the original file. Do not crop text inside the image.
 */
export const certifications = [
  {
    id: 'softcadd-internship',
    title: 'Training & Internship',
    issuer: 'Softcadd Technologies, Pune',
    date: 'November 2025 – February 2026',
    credentialId: '',
    verifyUrl: '',
    summary:
      'Two-month internship. The certificate records frontend work on ProSearch and PranYoga using HTML, CSS, JavaScript, and React.js.',
    image: '/images/certifications/softcadd-internship.jpg',
    imageAlt:
      'Softcadd Technologies certificate of training and internship awarded to Ayesha Pathan.',
  },




  {
    id: 'infosys-internship',
    title: 'Internship 6.0 — JobCheck: Detecting Fake Job Posts using NLP',
    issuer: 'Infosys Springboard',
    date: '13 February 2026 – 13 April 2026',
    credentialId: '',
    verifyUrl: 'https://verify.onwingspan.com',
    summary:
      'Certificate of completion for Internship 6.0, Batch 13. Issued 22 July 2026 for the mandatory assignment.',
    image: '/images/certifications/infosys-internship.jpg',
    imageAlt:
      'Infosys Springboard certificate of completion presented to Ayesha Pathan for Internship 6.0 Batch 13, JobCheck: Detecting Fake Job Posts using NLP.',
  },
  {
    id: 'infosys-agile',
    title: 'Software Engineering and Agile Software Development',
    issuer: 'Infosys Springboard',
    date: '10 November 2024',
    credentialId: '',
    verifyUrl: 'https://verify.onwingspan.com',
    summary: 'Course completion certificate.',
    image: '/images/certifications/infosys-agile.jpg',
    imageAlt:
      'Infosys Springboard course completion certificate for Software Engineering and Agile software development, awarded to Pathan Ayesha Rasul.',
  },
  {
    id: 'infosys-software-engineering',
    title: 'Software Engineering',
    issuer: 'Infosys Springboard',
    date: '10 November 2024',
    credentialId: '',
    verifyUrl: 'https://verify.onwingspan.com',
    summary: 'Course completion certificate.',
    image: '/images/certifications/infosys-software-engineering.jpg',
    imageAlt:
      'Infosys Springboard course completion certificate for Software Engineering, awarded to Pathan Ayesha Rasul.',
  },



  {
    id: 'talentbattle-atlassian',
    title: 'HackCelestial 2.0',
    issuer: 'HackCelestial 2.0',
    date: '19-20 September 202',
    credentialId: '',
    verifyUrl: '',
    summary: 'Mahatma Educations Society’s, Pillai College Of Engineering Certificate for Ayesha Pathan participating in National level HackCelestial 2.0 .',
    image: '/images/certifications/hackfusion.png',
    imageAlt:
      'Participation certificate for Ayesha Pathan.',
  },


  {
    id: 'gdsc-sparkignite',
    title: 'Sparkignite Ideathon 2024',
    issuer: "GDSC, MGM's College of Engineering, Nanded",
    date: '22 March 2024',
    credentialId: '',
    verifyUrl: '',
    summary: 'Participation certificate for Ayesha Pathan , SY IT.',
    image: '/images/certifications/gdsc-sparkignite.jpg',
    imageAlt:
      "GDSC MGM's College of Engineering certificate for Ayesha Pathan  participating in Sparkignite Ideathon 2024.",
  },

]

/**
 * Cards shown in the Certifications section. Other records stay in `certifications`.
 */
export const visibleCertificationIds = [
  'gdsc-sparkignite',
  'talentbattle-atlassian',
  'softcadd-internship',
  'infosys-internship',
  'infosys-software-engineering',
  'infosys-agile',
]

export const visibleCertifications = visibleCertificationIds
  .map((id) => certifications.find((item) => item.id === id))
  .filter(Boolean)
