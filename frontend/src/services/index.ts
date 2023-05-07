import request from "../api/request";
const Service = {
  getArticles: async (): Promise<IArticle[]> => {
    const res = await request("GET", "/articles", "");
    const articles: IArticle[] = res.data as IArticle[];
    return articles;
  }
}

export default Service;