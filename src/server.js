// 用于在前端虚拟一个服务器
// 喜欢的话也可以拿去用
class Server {
   constructor( defaultPath = "index.md" ){
      this.defpath = encodeURI( defaultPath )
   }
   listen( callback ){
      var req = this.getParams()
      callback( req, async function( file = req.path ){
         return await (await fetch( file )).text()
      } )
   }
   getParams( url = window.location.href ){
      var retobject = {}
      try {
        for( let param of url.split( "?" )[1].split( "&" ) ){
           let [key, value] = param.split( "=" )
           retobject[ key ] = decodeURI( value )
        }
      } catch( err ){
        window.location.href += `?path=${this.defpath}`
        retobject = this.getParams()
      }
      return retobject
   }
}
