const ARTICLE_CONTAINER = document.getElementById('article-container')

async function fetch_posts() {
    let data = [...await (await fetch('data/blog_posts.json')).json()]
    let template = await fetch('post-template.html').then((body) => body.text())
    let filled_post
    data.forEach(post => {
        filled_post = template.replace('{{post-title}}', post.title)
            .replace('{{post-date}}', post.date)
            .replace('{{post-type}}', post.type)
            .replace('{{post-content}}', post.content)
            .replace('{{post-img}}', post.image_link)
            .replace('{{post-link}}', post.link)
            .replace('{{post-link-img}}', post.link_image)
        let temp = document.createElement('div')
        temp.innerHTML = filled_post
        filled_post = temp.firstChild
        ARTICLE_CONTAINER.append(filled_post)
    })
}

fetch_posts()