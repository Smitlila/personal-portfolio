export type Experience = {
  title: string
  company: string
  location: string
  period: string
  thumbnail: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    title: 'Software Engineer Intern',
    company: 'Amazon Web Services',
    location: 'Seattle, WA',
    period: 'May 2025 – Aug 2025',
    thumbnail: 'linear-gradient(135deg, #FF9933 0%, #FF6B00 100%)',
    highlights: [
      'Built an AI-driven automation system using Claude 3.7 Sonnet and AWS Bedrock that reduced manual incident investigation time by 70%, handling hundreds of encryption-related cases with 97%+ diagnostic accuracy.',
      'Designed and deployed a Lambda-based intelligent filtering service integrated with real-time log querying and EC2 metadata retrieval, reducing false triggers by 40% and ensuring fault-tolerant execution.',
      'Implemented automated evaluation frameworks (LLM-as-a-Judge) and CI/CD pipelines using AWS Batch and S3, creating repeatable, auditable AI diagnostics that improved accuracy by 35%.',
      'Transformed complex troubleshooting runbooks into structured, LLM-friendly workflows with defined queries and thresholds, enabling consistent automated Root Cause Analysis across critical infrastructure services.',
      'Delivered a complete production-ready system integrating data engineering, MLOps, and software automation, paving the way for scalable AI diagnostics across multiple AWS infrastructure services.',
    ],
  },
  {
    title: 'Instructional Student Assistant',
    company: 'California State University, Long Beach',
    location: 'Long Beach, CA',
    period: 'Feb 2024 – Dec 2025',
    thumbnail: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    highlights: [
      'Led curriculum development, boosting engagement by 15% through interactive Python workshops.',
      'Provided one-on-one mentorship to students, improving their problem-solving and debugging skills.',
      'Trained new tutors on effective teaching methods and participation strategies, improving student outcomes.',
    ],
  },
  {
    title: 'Software Engineer Fellow',
    company: 'Headstarter AI',
    location: 'New York, NY',
    period: 'May 2024 – Aug 2024',
    thumbnail: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    highlights: [
      'Built dynamic, responsive front-end applications using React and TypeScript, enhancing performance and scalability.',
      'Developed a customer analytics tool with Python and React, reducing data processing time by 30%.',
      'Collaborated with industry experts to create AI solutions and contributed to open-source projects.',
      'Gained hands-on experience with AI tools and platforms, including Python and ML frameworks, delivering advanced AI features in applications.',
    ],
  },
]

