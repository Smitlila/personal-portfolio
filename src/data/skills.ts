export type SkillItem = {
  name: string
  img?: string
  icon?: string
}

export type SkillCard = {
  title: string
  items: SkillItem[]
}

export const skillCards: SkillCard[] = [
  {
    title: 'Front-end web development',
    items: [
      { name: 'JavaScript', img: 'javascript.png' },
      { name: 'TypeScript', img: 'typescript.png' },
      { name: 'React', img: 'react.png' },
      { name: 'Next.js', img: 'next.png' },
      { name: 'CSS', img: 'css.png' },
    ],
  },
  {
    title: 'Back-end & cloud',
    items: [
      { name: 'Python', img: 'python.png' },
      { name: 'Java', img: 'java.png' },
      { name: 'Node.js', img: 'node.png' },
      { name: 'Docker', img: 'docker.png' },
      { name: 'Kubernetes', img: 'Kubernetes.png' },
      { name: 'AWS', img: 'aws.png' },
      { name: 'Azure', img: 'azure.png' },
      { name: 'Linux', img: 'linux.png' },
    ],
  },
  {
    title: 'AI / RAG',
    items: [
      { name: 'LangChain', img: 'langchain.png' },
      { name: 'AWS Bedrock', img: 'aws-bedrock.png' },
      { name: 'Claude', img: 'claude.svg' },
      { name: 'OpenAI', img: 'openai.png' },
      { name: 'TensorFlow', img: 'tensorflow.png' },
      { name: 'PyTorch', img: 'pytorch.png' },
    ],
  },
  {
    title: 'Data & Analytics',
    items: [
      { name: 'PostgreSQL', img: 'postgresql.png' },
      { name: 'MongoDB', img: 'mongodb.png' },
      { name: 'MySQL', img: 'mysql-database.png' },
      { name: 'Tableau', img: 'tableau.png' },
      { name: 'Power BI', img: 'powerbi.png' },
      { name: 'Grafana', img: 'grafana.png' },
    ],
  },
  {
    title: 'Systems & tools',
    items: [
      { name: 'C', img: 'c.png' },
      { name: 'C++', img: 'c++.png' },
      { name: 'C#', img: 'cs.png' },
      { name: 'Go', img: 'go.png' },
      { name: 'JWT', img: 'jwt.webp' },
      { name: 'Git', img: 'git.png' },
      { name: 'GitHub', img: 'github.png' },
    ],
  },
]

