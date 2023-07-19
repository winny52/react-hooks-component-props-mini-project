function Article ({date = "January 1, 1970", minutes, preview, title}){
    function readtime(){

        if(minutes<30){
          let readingTime = minutes;
          let emoji = "☕️";
          let time_string = readingTime + " min read";
          let num_emojis = Math.ceil(readingTime / 5);
          return emoji.repeat(num_emojis) + " " + time_string
        }
        else if(minutes>30){
            let readingTime = minutes;
            let emoji = "🍱";
            let time_string = readingTime + " min read";
            let num_emojis = Math.ceil(readingTime / 10);
            return emoji.repeat(num_emojis) + " " + time_string
        }

    }
    return(
       <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <small>{readtime()}</small>
        <p>{preview}</p>
       </article> 
    )
}

export default Article;
