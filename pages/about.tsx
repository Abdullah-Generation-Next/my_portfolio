import Head from 'next/head';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'PHP', 'Express.js'] },
    { category: 'Database', items: ['MySQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'REST APIs'] },
  ];

  const experience = [
    {
      title: 'Web Development Intern',
      company: 'Codsoft',
      period: 'July 2024 - August 2024',
      description: 'Worked on a Blogging Platform using PHP and a Task Management Tool using MERN.',
    },
    {
      title: 'Artificial Intelligence Intern',
      company: 'IBM SkillsBuild',
      period: ' June 2024 - July 2024',
      description: 'Completed IBM SkillBuild AI Internship, gaining hands-on experience in artificial intelligence and machine learning',
    },
    {
      title: 'Artificial Intelligence Intern',
      company: 'Codsoft',
      period: 'June 2024 - July 2024.',
      description: 'Completed Codsoft AI Internship, working on AI projects and gaining practical experience in machine learning concepts.',
    },
    {
      title: 'ReactJS Internship',
      company: 'Infolabz IT Services Pvt Ltd.',
      period: 'June 2024 - July 2024',
      description: 'Developed a Recipe Finder, Weather App Web Application using ReactJS and APIs.',
    },
    {
      title: 'ReactJS Developer Intern',
      company: 'Generation Next',
      period: 'January 2025 - present',
      description: 'Currently working on an innovative Job Board project for Generation Next.',
    },

  ];

  const education = [
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Veer Narmad South Gujarat University,Surat',
      year: '2021',
      // year: '2025 - Present',
      cgpa: '7.85/10',
    },
  ];

  return (
    <>
      <Head>
        <title>About Me | Abdullah Fazal Portfolio</title>
        <meta name="description" content="Learn more about Piyush Chauhan, a ReactJS developer with experience in modern web technologies." />
      </Head>
      <main className="flex flex-col min-h-screen pt-20">
        <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl">Aspiring ReactJS developer with hands-on experience in building scalable web applications.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold mb-6">My Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I am a dedicated ReactJS developer with experience in frontend and backend technologies. My journey includes internships at IBM SkillBuild, Codsoft, Infolabz and Generation Next, where I built applications using ReactJS, MERN stack, and AI-driven solutions.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Recently, I developed an Expense Tracker using ReactJS and Firebase for real-time expense management. I thrive on building scalable web applications that provide seamless user experiences.
                </p>
                <p className="text-lg text-gray-700">
                  Beyond coding, I enjoy sketching, traveling, and participating in technical workshops to stay updated with the latest industry trends.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Education & Experience</h2>
                {experience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-bold mb-2">{exp.title} at {exp.company}</h3>
                    <p className="text-gray-600 italic mb-2">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
                {education.map((edu, index) => (
                  <div key={index} className="mt-6">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 italic mb-2">{edu.institution} ({edu.year})</p>
                    <p className="text-gray-700">CGPA: {edu.cgpa}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
