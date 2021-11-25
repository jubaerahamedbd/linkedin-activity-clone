var y = document.getElementById("privacy-up")
var x = document.getElementById("privacy-down")
var z = document.getElementById("privacy-drop-down")
y.style.display = 'none'
z.style.visibility = 'hidden'


privacyArrowDown = () => {
    if(x.style.display != 'none'){
        x.style.display = 'none'
        y.style.display = 'inline-block'
        z.style.visibility = 'visible'
    }
    else{
        x.style.display = 'inline-block' 
    } 
}

privacyArrowup = () => {
   
    if(y.style.display != 'none'){
        y.style.display = 'none'
        z.style.visibility = 'hidden'
        x.style.display = 'inline-block'
    }
    else{
        y.style.display = 'inline-block' 
    }
    
}

var articlesnothing = document.getElementById("articles-nothing")
var documentsnothing = document.getElementById("documents-nothing")
var postsnothing = document.getElementById("posts-nothing")
var allpost = document.getElementById("all-post")




var documentsbtn = document.getElementById('documents')
var articlesbtn = document.getElementById('articles')
var postssbtn = document.getElementById('posts')
var allbtn = document.getElementById('all-activity')

documentsnothing.style.display = 'none'
postsnothing.style.display = 'none'
articlesnothing.style.display = 'none'

documents = () =>{
    documentsbtn.className ='act-btn active'
    articlesbtn.className ='act-btn'
    allbtn.className = 'act-btn'
    postssbtn.className = 'act-btn'

    documentsnothing.style.display = 'block'
    articlesnothing.style.display = 'none'
    postsnothing.style.display = 'none'
    allpost.style.display = 'none'
}

articles = () =>{
    documentsbtn.className ='act-btn'
    articlesbtn.className ='act-btn active'
    allbtn.className = 'act-btn'
    postssbtn.className = 'act-btn'

    articlesnothing.style.display= 'block'
    documentsnothing.style.display = 'none'
    postsnothing.style.display = 'none'
    allpost.style.display = 'none'
}
allactivity = ()=>{
    documentsbtn.className ='act-btn'
    articlesbtn.className ='act-btn'
    allbtn.className = 'act-btn active'
    postssbtn.className = 'act-btn'

    articlesnothing.style.display= 'none'
    documentsnothing.style.display = 'none'
    postsnothing.style.display = 'none'
    allpost.style.display = 'block'

}
post= ()=>{
    documentsbtn.className ='act-btn'
    articlesbtn.className ='act-btn'
    allbtn.className = 'act-btn'
    postssbtn.className = 'act-btn active'


    articlesnothing.style.display= 'none'
    documentsnothing.style.display = 'none'
    postsnothing.style.display = 'block'
    allpost.style.display = 'none'
}
 var see = document.getElementById('more')
 var dotbtn = document.getElementById('dots')
 see.style.display ='none'

 seeMore=()=>{
    see.style.display ='block'
    dotbtn.style.display = 'none'
 }