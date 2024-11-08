function simpleKey( ele, kele ){
  if( kele.innerHTML === "C" ){
    ele.innerHTML = ""
  } else if( kele.innerHTML === "=" ){
    ele.innerHTML = (eval( ele.innerHTML
      .replace( /×/g, "*" )
      .replace( /÷/g, "/" ) ) || 0)
  } else {
    ele.innerHTML += kele.innerHTML
  }
  
  var nine = document.getElementById( "nine" )
  nine.innerHTML = intEncodeTo9((eval( ele.innerHTML
      .replace( /×/g, "*" )
      .replace( /÷/g, "/" ) ) || 0), true)
}

async function copy( txt ){
  await navigator.clipboard.writeText( txt )
  window.alert( "Baka, 复制成功 ! " )
}