function newPost( title = false, desp = false, link = false, icon = false ){
    return {title, description: desp, link, icon}
}
const posts = [
   newPost( "Hello", "Test For Post System", "./posts/hello.md" ),
   newPost( "一些实用のRegeX", "一些实用的正则表达式，可以微改复制到自己的代码里", "./posts/regex.md", "https://postimage.me/images/2024/10/25/Screenshot_2024-10-25-22-11-25-482_com.tao.jseditor-edit.jpg" )
]