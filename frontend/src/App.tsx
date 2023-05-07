import { useEffect, useState } from "react";
import Service from "./services";

function App() {
  const [articles, setArticles] = useState<IArticle[] | []>([]); 
  useEffect(() => {
    const loadArticles = async () => {
      const res = await Service.getArticles();
      setArticles(res);
    }
    loadArticles();
  }, []);

  return (
    <div className='app-container'>
      <ul>
        {articles.map((article, index) => 
          <li key={index}>{article.title}</li>
        )
        }
      </ul>
    </div>
  )
}

export default App
