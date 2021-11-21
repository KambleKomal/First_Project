function Case(){
    var fname=document.getElementById('firstname').value
    var uname=fname.charAt(0).toUpperCase()+fname.slice(1).toLowerCase()
    document.getElementById('firstname').value=uname
}