import Article from "./Article"

function ArticleList({posts}){
    const singleArt = posts?.map((item) => {
        return <Article key={item.id} title={item.title} date={item.date} preview={item.preview} minutes={item.minutes}/>;
    });
    return(
    <main>
        {singleArt}
    </main>
    );
     
}
export default ArticleList;
