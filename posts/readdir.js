function newPost( title = false, desp = false, link = false, icon = false ){
    return {title, description: desp, link, icon}
}
const posts = [
   newPost( "Hello", "Test For Post System", "./posts/hello.md" ),
   newPost( "一些实用のRegeX", "一些实用的正则表达式，可以微改复制到自己的代码里", "./posts/regex.md", "https://postimage.me/images/2024/10/25/Screenshot_2024-10-25-22-11-25-482_com.tao.jseditor-edit.jpg" ),
   newPost( "⑨式计算器", "将任何整数(或整数算式)转换为由⑨组成的算式", "./apps/bakaMath/README.md", "./apps/bakaMath/bg.jpg" ),
   newPost( "LapisNet没人来啊！！！！！！", "自己建的Minecraft团队招不到人啊啊啊啊*n", "./posts/zbdr.md", "https://ip.klpbbs.com/attach.php?id=/forum/202501/15/094021y1gly0hddaalf868.png"),
   newPost( "吐槽生活", "瞎吐槽下生活", "./posts/tclife.md" )
]
