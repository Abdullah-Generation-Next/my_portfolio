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
      title: 'Flutter Intern',
      company: ' Solution Squares Company',
      period: 'December 2022 - April 2023',
      description: ' Worked on real-world Flutter projects, improving app performance by 20% with better state management and UI optimization.',
    },
    {
      title: 'Flutter Developer',
      company: 'Generation Next',
      period: 'June 2023 - present',
      description: 'Currently working on an innovative Job Board project for Generation Next.',
    },

  ];

  const education = [
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Veer Narmad South Gujarat University,Surat',
      year: '2021',
      // year: '2025 - Present',
      cgpa: '7.37/10',
    },
  ];

  return (
    <>
      <Head>
        <title>About Me | Abdullah Fazal Portfolio</title>
        <meta name="description" content="Learn more about Abdullah Fazal, a Flutter developer with experience in modern technologies." />
      </Head>
      <main className="flex flex-col min-h-screen pt-20">
        <section className="py-20 bg-emerald-600 text-gray-100">
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
                  I am a passionate Flutter developer with a strong foundation in building cross-platform mobile applications. My journey includes hands-on experience through real-world projects where I focused on delivering responsive, scalable, and user-centric apps using Flutter and Dart.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Over time, I’ve worked on several impactful projects like Vakalat, Manjha, Express Courier, and the Surat District Bar Association App each one refining my skills in UI/UX, API integration, Firebase services, and state management using GetX and Provider.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  One of my favorite things about Flutter is how it empowers me to bring creative ideas to life with a single codebase. I enjoy crafting pixel-perfect designs and optimizing performance to ensure a smooth experience on both Android and iOS platforms.
                </p>
                <p className="text-lg text-gray-700">
                  When I’m not coding, you’ll find me sketching, traveling, or attending tech meetups and workshops to keep up with the latest trends in mobile development.
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
