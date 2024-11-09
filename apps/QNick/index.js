import qtail from "./qtail.js"
import {colors, syms} from "./color.js"
var {generate} = qtail

function main( cele, sele ){
  var htmlarr = [], symsarr = []
  for( let color of colors ){
    htmlarr.push( `<a class="aColor" onclick="appendName('${color[0]}')">${color[1]}</a>` )
  }
  cele.innerHTML = htmlarr.join( " | " )
  for( let sym of syms ){
    symsarr.push( `<a class="aColor" onclick="appendName('${sym[0]}', 'name2')">${sym[1]}</a>` )
  }
  sele.innerHTML = symsarr.join( " | " )
  var n1 = document.getElementById( "name" )
  var n2 = document.getElementById( "name2" )
  var nick = document.getElementById( "nick" )
  n2.oninput = n1.oninput = function(){
    nick.innerHTML = generate( n1.value, n2.value )
    var length = 0
    for( let word of nick.innerHTML ){
      length += Number.isNaN( parseInt( word, 36 ) ) ? 3 : 1
    }
    if( length >= 60 ){
      document.getElementById( "log" ).innerHTML = "名称长度" + length + "不得大于60"
    }
  }
}


try {
  document.body.onload = main(
    document.getElementById( "colors" ),
    document.getElementById( "syms" )
  )
} catch( err ){
  document.getElementById( "log" ).innerHTML = err
}