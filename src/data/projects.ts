export type Project = {
  title: string
  subtitle: string
  date: string
  description: string
  thumbnail: string
  tech: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'Beach Bank',
    subtitle: 'Full-Stack Banking Application',
    date: 'May 2025',
    description:
      'Built a multi-bank web app with JWT auth, real-time transactions, balance updates, and transfers using Plaid/Dwolla, deployed via GitHub Actions to Netlify.',
    thumbnail: 'linear-gradient(135deg, #1c1f26 0%, #0d3b66 50%, #14213d 100%)',
    tech: [
      'Next.js 14',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Appwrite',
      'Plaid',
      'Dwolla',
      'JWT',
      'PostgreSQL',
      'Netlify',
      'GitHub Actions',
    ],
    featured: true,
  },
  {
    title: 'DevSecOps Project',
    subtitle: 'Netflix Clone Deployment on AWS',
    date: 'Feb 2025',
    description:
      'Designed Jenkins pipeline with Docker build/scan, blocking 15+ vulnerabilities. Automated deployments with Helm + ArgoCD on Kubernetes, integrated Prometheus and Grafana.',
    thumbnail: 'linear-gradient(135deg, #E50914 0%, #B20710 100%)',
    tech: ['Jenkins', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'Prometheus', 'Grafana'],
    featured: true,
  },
  {
    title: 'Rate-My-Professor AI',
    subtitle: 'AI-Powered Web Application',
    date: 'Oct 2024',
    description:
      'Developed an AI-powered professor-rating web app with real-time assistance. Handled 100+ requests/min, reducing load times by 25% and increasing user satisfaction by 30%.',
    thumbnail: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tech: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Gemini API'],
    featured: true,
  },
  {
    title: 'Chat with PDF',
    subtitle: 'Generative AI RAG Application',
    date: 'April 2025',
    description:
      'Built a two-app RAG system in Python/LangChain using Claude via Bedrock and Titan Embeddings. Enabled queries on PDFs up to 500 pages in 3 seconds with 50+ concurrent users.',
    thumbnail: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)',
    tech: ['Python', 'LangChain', 'AWS Bedrock', 'Claude', 'Docker', 'EC2', 'S3'],
    featured: true,
  },
  {
    title: 'MERN Stack App',
    subtitle: 'Full-stack CRUD dashboard',
    date: 'Jan 2025',
    description:
      'Developed a full-stack location-sharing web app using the MERN stack (MongoDB, Express.js, React, Node.js). Built a RESTful API with optimized CRUD operations (15% faster response times), integrated Google Maps API for interactive location mapping, and implemented WebSocket-based real-time notifications for enhanced user engagement.',
    thumbnail: "url('/mern.png')",
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript', 'Tailwind', 'JWT'],
    featured: false,
  },
  {
    title: 'The Pokemon Game',
    subtitle: 'Turn-based battle with PokéAPI data',
    date: 'Aug 2025',
    description:
      'Built a real-life inspired Pokémon game in Python using object-oriented design and custom data structures. Includes an in-game shop, turn-based battle mechanics, and a hospital for Pokémon healing, demonstrating modular class design for game entities, items, and player management.',
    thumbnail: "url('/pokemon.jpg')",
    tech: ['React', 'TypeScript', 'Tailwind', 'PokéAPI', 'Vite'],
    featured: false,
  },
]

