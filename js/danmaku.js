class Danmaku {
  danmaku = (function(){
    var div = document.createElement( "div" )
    div.className = "danmaku"
    return div
  })()
  constructor( message, icon, y, type ) {
    this.message = message
    this.icon = icon
    this.danmaku.style.top = y + "vh"
    this.setX( -2 - message.length )
    if( icon ) {
      var iconEle = new Image()
      iconEle.className = "icon"
      iconEle.src = icon
      this.danmaku.appendChild( iconEle )
    }
    if( type == "html" ) {
      var text = document.createTextNode("")
      text.innerHTML = message
      this.danmaku.appendChild( type )
    } else {
      this.danmaku.appendChild( document.createTextNode( message ))
    }
    document.body.appendChild( this.danmaku )
  }
  remove() {
    this.danmaku.remove()
  }
  move( speed, ok ) {
    var inv = setInterval(() => {
      this.setX( this.x + speed )
      if( this.x >= 100 ){
        clearInterval( inv )
        ok()
      }
    }, 50)
  }
  setX( x ) {
    this.x = x
    this.danmaku.style.left = x + "vh"
    return this
  }
  static play( option ) {
    var danmaku = new Danmaku( option.msg || option, option.icon, option.y || Math.random() * 37, option.type || "text" )
    danmaku.move( option.speed || 1, danmaku.remove )
  }
  static async rawplay( option, raws ) {
    if( !raws ) option = raws
    for( let danmaku of raws ) {
      Danmaku.play(danmaku)
      await sleep( typeof option.wait == "function" ? option.wait() : (typeof option.wait === "number" ? option.wait : 500 ))
    }
    function sleep( ms ) {
      return new Promise(( res ) => {
        setTimeout(res, ms)
      })
    }
  }
}