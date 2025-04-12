import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'プロジェクト1',
      description: 'プロジェクト1の詳細な説明がここに入ります。実装した機能や技術的な特徴について説明します。',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/project1',
    },
    {
      id: 2,
      title: 'プロジェクト2',
      description: 'プロジェクト2の詳細な説明がここに入ります。実装した機能や技術的な特徴について説明します。',
      technologies: ['Next.js', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/project2',
    },
    {
      id: 3,
      title: 'プロジェクト3',
      description: 'プロジェクト3の詳細な説明がここに入ります。実装した機能や技術的な特徴について説明します。',
      technologies: ['React Native', 'Firebase', 'Redux'],
      githubUrl: 'https://github.com/yourusername/project3',
    },
  ];

  return (
    <div className="space-y-12 py-12">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">プロジェクト一覧</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          これまでに開発したプロジェクトの一覧です。各プロジェクトの詳細はGitHubリポジトリでご確認いただけます。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">使用技術</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
              >
                <span>GitHubで見る</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 