function newPost( title = false, desp = false, link = false, icon = false ){
    return {title, description: desp, link, icon}
}
const posts = [
   newPost( "Hello", "Test For Post System", "./posts/hello.md" )
]