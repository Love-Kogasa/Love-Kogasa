function timeUpDate( date ){
    var now = new Date()
    date.innerHTML = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 • ${now.getHours()}时${now.getMinutes()}分${now.getSeconds()}秒`
}

function index( date, content ){
    var posteles = []
    for( let postindex in posts ){
        let post = posts[ postindex ]
        if( postindex > 6 ) break;
        posteles.push( `<div class="post" onclick="(window.location.href='post.html?path=${encodeURI(post.link)}&index=${encodeURI(postindex)}')">
            <img width="100%" src="${post.icon || "./src/post.jpg"}"/>
            <div class="info">
                <div class="title">${post.title || "None Title"}</div>
                <div class="subtitle">${post.description || ""}</div>
            </div>
        </div>`)
    }
    content.innerHTML = posteles.join( "" )
    hljs.highlightAll()
    timeUpDate( date )
    setInterval( function(){
        timeUpDate( date )
    }, 1000 )
}

function friends( date ){
    try {
    timeUpDate( date )
    setInterval( function(){
        timeUpDate( date )
    }, 1000 )
    } catch(err){
    alert(err)
    }
}

function postServer( date, content ){
    var poster = new Server()
    timeUpDate( date )
    setInterval( function(){
        timeUpDate( date )
    }, 1000 )
    poster.listen( async function( req ){
        if( req.path === poster.defpath ){
            let posteles = []
            for( let postindex in posts ){
                let post = posts[ postindex ]
                posteles.push( `<div class="post" onclick="(window.location.href='post.html?path=${encodeURI(post.link)}&index=${encodeURI(postindex)}')">
                    <img width="100%" src="${post.icon || "./src/post.jpg"}"/>
                    <div class="info">
                        <div class="title">${post.title || "None Title"}</div>
                        <div class="subtitle">${post.description || ""}</div>
                    </div>
                </div>`)
            }
            content.innerHTML = posteles.join( "" )
        } else {
            var request = await fetch( req.path )
            if( !request.ok ){
                content.innerHTML = `<div class="content">
                    <h1>Error 发生了一些错误</h1>
                    <p>找不到这篇文章呢！请检查网络或者有没有本帖文件</p>
                </div>`
            } else {
                let next = posts[req.index + 1],
                  rnext = posts[req.index - 1]
                content.innerHTML = `<div class="post">
                    <img width="100%" src="${(posts[req.index] && posts[req.index].icon) || "./src/post.jpg"}"/>
                    <div class="info">
                        <div class="title">${(posts[req.index] && posts[req.index].title) || "无标题"}</div>
                        <div class="subtitle">${(posts[req.index] && posts[req.index].description) || "无介绍"}</div>
                        ${marked.parse(await request.text())}
                    </div>
                </div><div class="desp">
                    <nav><a href="${(next && next.path) || "#"}">${(next && next.title) || "没有上一篇了"}</a> | <a href="${(rnext && rnext.path) || "#"}">${(rnext && rnext.path) || "没有下一篇了"}</a></nav>
                </div>`
            }
        }
        hljs.highlightAll()
    })
}