import Head from 'next/head';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const allProjects = [
    {
      id: 3,
      title: 'Expense Tracker',
      description: 'A real-time expense tracking application using Firebase and ReactJS.',
      image: '/images/projects/expense-tracker.jpg',
      tags: ['ReactJS', 'Firebase', 'TailwindCSS'],
      link: '/projects/expense-tracker',
      category: 'Web App',
      category1: 'Full Stack'
    },
    {
      id: 1,
      title: 'Blogging Platform',
      description: 'A platform for creating, editing, and managing blogs, built with PHP and JavaScript.',
      image: '/images/projects/blogging.jpg',
      tags: ['PHP', 'JavaScript', 'MySQL'],
      link: 'https://github.com/PiyushChauhan3/Blogger-platform-using-php-',
      category: 'Full Stack',
      category1: 'Web App'
    },
    {
      id: 4,
      title: 'Recipe Finder',
      description: 'A web application to find recipes based on ingredients and preferences.',
      image: '/images/projects/recipe.jpg',
      tags: ['ReactJS', 'API', 'CSS'],
      link: 'https://github.com/PiyushChauhan3/recipe-finder',
      category: 'Web App'
    },
    {
      id: 2,
      title: 'Task Management Tool',
      description: 'A React-based task management system with real-time task updates.',
      image: '/images/projects/task-manager.jpg',
      tags: ['ReactJS', 'TailwindCSS', 'MERN'],
      link: 'https://github.com/PiyushChauhan3/Task-management-tool-usin-MERN',
      category: 'Web App'
    },
    
    {
      id: 5,
      title: 'Amazon Clone',
      description: 'A frontend clone of Amazon with responsive design.',
      image: '/images/projects/amazon-clone.jpg',
      tags: ['HTML', 'CSS'],
      link: 'https://github.com/PiyushChauhan3/AmazonClone',
      category: 'Frontend'
    },
    {
      id: 6,
      title: 'Transportation Management System',
      description: 'A web system for managing transportation logistics.',
      image: '/images/projects/transport.jpg',
      tags: ['PHP', 'JavaScript', 'MySQL'],
      link: 'https://github.com/PiyushChauhan3/Transporataion-Management-System-php.git',
      category: 'Full Stack'
    },
    {
      id: 7,
      title: 'Weather App',
      description: 'A weather app that displays the current weather and forecast for a given location.',
      image: '/images/projects/weather.jpg',
      tags: ['ReactJS', 'API', 'CSS'],
      link: 'https://github.com/PiyushChauhan3/Weather-App-using-ReactJS',
      category: 'Web App'
    }
  ];

  const categories = ['All', 'Web App', 'Full Stack', 'Frontend'];

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = allProjects.filter(project => {
    const categoryMatch = activeCategory === 'All' || project?.category === activeCategory || project?.category1 === activeCategory;
    const searchMatch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Projects | Abdullah Fazal Portfolio</title>
        <meta name="description" content="Explore my portfolio of web development projects, including full-stack applications, web apps, and more." />
      </Head>
      <main className="flex-grow pt-20">
        <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-xl">Explore my latest work and creative solutions.</p>
          </div>
        </section>
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto flex items-center justify-between px-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, category1) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
              {/* {categories.map((category, category1) => (
                <button
                  key={category || category1}
                  onClick={() => setActiveCategory(category || category1)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                    activeCategory === category || activeCategory === category1
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category || category1}
                </button>
              ))} */}
            </div>
            <div className="relative w-full md:w-64 mt-6">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-6">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-700 mb-4">No projects found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
