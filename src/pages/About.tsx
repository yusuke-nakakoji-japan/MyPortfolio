import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">自己紹介</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">職務要約</h2>
        <p className="text-gray-700 mb-4">
          新卒からインフラ構築・運用保守業務に従事後、データサイエンス分野に転身。
          機械学習を用いた分析システムの構築や、データサイエンスを活用したサービス改善に携わり、
          現在はAI技術のビジネス導入支援や人材育成業務に従事しています。
        </p>
        <p className="text-gray-700">
          どのような業務でも自分事として捉え、主体的に行動することを心掛けています。
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">得意分野・スキル</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">ハードスキル</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Python/SQLによるデータ分析・機械学習</li>
              <li>BIツールの構築とデータマート設計</li>
              <li>データ基盤構築</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">ソフトスキル</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>生成AIに関する最新情報のキャッチアップ</li>
              <li>ドキュメント作成能力(PowerPoint等)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">保有資格</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">AI関連</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Generative AI TEST（2024年6月）</li>
              <li>G検定（2024年5月）</li>
              <li>生成AIパスポート試験（2023年11月）</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">クラウド・インフラ</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Professional Cloud Architect（2020年11月）</li>
              <li>情報セキュリティマネジメント（2017年11月）</li>
              <li>LPIC-1（2017年9月）</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">技術スキル</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">カテゴリ</th>
                <th className="px-4 py-2 text-left">種別</th>
                <th className="px-4 py-2 text-left">経験年数</th>
                <th className="px-4 py-2 text-left">スキルレベル・備考</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 font-semibold">OS</td>
                <td className="px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li>Windows Server</li>
                    <li>Linux</li>
                  </ul>
                </td>
                <td className="px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li>1年</li>
                    <li>7年</li>
                  </ul>
                </td>
                <td className="px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li>設計書からの構築が可能</li>
                    <li>CUI操作が可能</li>
                  </ul>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 font-semibold">言語</td>
                <td className="px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li>Python</li>
                    <li>Java</li>
                    <li>SQL</li>
                  </ul>
                </td>
                <td className="px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li>6年</li>
                    <li>1年</li>
                    <li>6年</li>
                  </ul>
                </td>
                <td className="px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li>機械学習モデルの構築、小規模なシステムの開発が可能</li>
                    <li>基礎的な文法を理解している</li>
                    <li>データマートの作成や集計ができる</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">その他</td>
                <td className="px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li>vSphere</li>
                    <li>GCP</li>
                    <li>AWS</li>
                  </ul>
                </td>
                <td className="px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li>1年</li>
                    <li>3年</li>
                    <li>3年</li>
                  </ul>
                </td>
                <td className="px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li>仮想化基盤の構築ができる</li>
                    <li>簡単なインフラが構築できる</li>
                    <li>簡単なインフラが構築できる</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">自己PR</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">自走して業務を遂行する能力</h3>
            <p className="text-gray-700">
              業務を"自分事"として捉え、必要なタスクを自律的に分解・遂行することで、
              期限内に品質を保った形でプロジェクトを完遂してきました。
              積極的なコミュニケーションを通じて、他部署との効果的な連携を実現し、
              新たな環境にも迅速に適応できる能力を有しています。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">AI技術のキャッチアップと実践</h3>
            <p className="text-gray-700">
              生成AI技術の急速な進化に対応し、ビジネスへの活用を主導。
              社内での情報共有や研究チームの立ち上げを通じて、
              AI技術の実践的な活用を推進してきました。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">機械学習プロジェクトの実績</h3>
            <p className="text-gray-700">
              音源解析データを用いた機械学習モデルの開発や、
              プレイリスト自動生成システムの構築など、
              実践的なプロジェクトを成功させてきました。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 