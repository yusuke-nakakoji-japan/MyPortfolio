export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: '音源解析データを用いた機械学習システム',
    description: '音源の特徴を解析し、メタデータの補填やプレイリストの自動生成を実現するシステムの開発。Pythonと機械学習ライブラリを使用して高精度なモデルを構築。',
    githubUrl: '#',
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'SQL', 'GCP'],
  },
  {
    id: 'project-2',
    title: '生成AI活用研究プロジェクト',
    description: '社内での生成AI技術の実践的な活用を推進するための研究プロジェクト。最新のAI技術のキャッチアップとビジネスへの適用可能性の検証を実施。',
    githubUrl: '#',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'AWS'],
  },
  {
    id: 'project-3',
    title: 'データ分析基盤構築',
    description: 'ETL/ELTプロセスを用いたデータ基盤の構築と、BIツールとの連携による分析環境の整備。データマートの設計と実装を担当。',
    githubUrl: '#',
    technologies: ['Python', 'SQL', 'Airflow', 'Tableau', 'GCP'],
  },
  {
    id: 'project-4',
    title: 'クラウドインフラ構築',
    description: 'GCP/AWSを活用したスケーラブルなインフラ基盤の構築。セキュリティとコスト効率を考慮した設計と実装を実施。',
    githubUrl: '#',
    technologies: ['GCP', 'AWS', 'Terraform', 'Docker', 'Kubernetes'],
  },
]; 