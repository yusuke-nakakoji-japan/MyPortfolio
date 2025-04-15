export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'recipe-cliper',
    title: 'Recipe Cliper',
    description: `YouTubeの料理動画からレシピを自動的に抽出し、Notionデータベースに整理して保存するツール。
A2A（Agent to Agent）プロトコルを採用し、複数のエージェントが連携して作業を行います。`,
    githubUrl: 'https://github.com/yusuke-nakakoji-japan/recipe-cliper',
    technologies: ['Python', 'Docker', 'Docker Compose', 'Flask', 'JavaScript', 'HTML', 'CSS', 'REST API', 'A2A'],
    videoUrl: 'https://www.canva.com/design/DAGkuQl_Hbw/GM-3zaYuTm_-ZeZLGX7ZkA/watch?embed',
  },
  {
    id: 'project-1',
    title: '準備中',
    description: 'プロジェクト準備中です',
    githubUrl: '#',
    technologies: [''],
  },
  {
    id: 'project-2',
    title: '準備中',
    description: 'プロジェクト準備中です',
    githubUrl: '#',
    technologies: [''],
  }
]; 