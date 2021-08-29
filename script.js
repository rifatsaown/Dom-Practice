const blogTitle = document.getElementsByTagName("h3");
for (const h3 of blogTitle) {
    console.log(h3.innerText);
}
const blogDescription = document.getElementsByTagName("p");
for (const p of blogDescription) {
    console.log(p.innerText)
}

//add html
const li = document.createElement("li");
li.innerText = "Home-4";
const ul = document.getElementById("navbar");
ul.appendChild(li);

const article = document.createElement("article");
article.classList.add("article-1");
article.innerHTML = `<h3> Blog -5 </h3>
<p>commodi perferendis corporis, expedita hic eveniet saepe, accusantium
quia laborum nisi modi dolorum porro, molestiae earum dicta autem. Fugit, quas qui laboriosam omnis
minima rem unde nostrum. Accusamus!</p>`

const addArticle = document.getElementById("blocks");
addArticle.appendChild(article);

// ad style4
const blog2 = document.getElementsByClassName("article-1");
for (const blog of blog2) {
    blog.style.textAlign = "center";
    blog.style.border = "1px solid black";
    blog.style.margin = "1em"
    blog.style.padding = "10px"
}