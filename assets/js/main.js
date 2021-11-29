var y = document.getElementById("privacy-up")
var x = document.getElementById("privacy-down")
var z = document.getElementById("privacy-drop-down")
y.style.display = 'none'
z.style.visibility = 'hidden'


privacyArrowDown = () => {
    if (x.style.display != 'none') {
        x.style.display = 'none'
        y.style.display = 'inline-block'
        z.style.visibility = 'visible'
    }
    else {
        x.style.display = 'inline-block'
    }
}

privacyArrowup = () => {

    if (y.style.display != 'none') {
        y.style.display = 'none'
        z.style.visibility = 'hidden'
        x.style.display = 'inline-block'
    }
    else {
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

documents = () => {
    documentsbtn.className = 'act-btn active'
    articlesbtn.className = 'act-btn'
    allbtn.className = 'act-btn'
    postssbtn.className = 'act-btn'

    documentsnothing.style.display = 'block'
    articlesnothing.style.display = 'none'
    postsnothing.style.display = 'none'
    allpost.style.display = 'none'
}

articles = () => {
    documentsbtn.className = 'act-btn'
    articlesbtn.className = 'act-btn active'
    allbtn.className = 'act-btn'
    postssbtn.className = 'act-btn'

    articlesnothing.style.display = 'block'
    documentsnothing.style.display = 'none'
    postsnothing.style.display = 'none'
    allpost.style.display = 'none'
}
allactivity = () => {
    documentsbtn.className = 'act-btn'
    articlesbtn.className = 'act-btn'
    allbtn.className = 'act-btn active'
    postssbtn.className = 'act-btn'

    articlesnothing.style.display = 'none'
    documentsnothing.style.display = 'none'
    postsnothing.style.display = 'none'
    allpost.style.display = 'block'

}
post = () => {
    documentsbtn.className = 'act-btn'
    articlesbtn.className = 'act-btn'
    allbtn.className = 'act-btn'
    postssbtn.className = 'act-btn active'


    articlesnothing.style.display = 'none'
    documentsnothing.style.display = 'none'
    postsnothing.style.display = 'block'
    allpost.style.display = 'none'
}
var see = document.getElementById('more')
var dotbtn = document.getElementById('dots')
see.style.display = 'none'

seeMore = () => {
    see.style.display = 'block'
    dotbtn.style.display = 'none'
}

var smallField = document.getElementById('small-field')
smallField.style.display = 'none'


var searchField = false
searchModal = () => {

    if (searchField === false) {
        searchField = true
    }
    else {
        searchField = false
    }
    if (searchField === true) {
        smallField.style.display = 'block'
    } else {
        smallField.style.display = 'none'
    }
}

var moreMenu = document.getElementById('more-menu')
moreMenu.style.display = 'none'
var dropdown = false
dropmenu = () => {

    if (dropdown === false) {
        dropdown = true
    }
    else {
        dropdown = false
    }
    if (dropdown === true) {
        moreMenu.style.display = 'flex'
    } else {
        moreMenu.style.display = 'none'
    }
}

var postModal = document.getElementById('modal-post')
postModal.style.display = 'none'

postModalFunc = () => {
    postModal.style.display = 'block'
}
modalClose=()=>{
    postModal.style.display = 'none'
}

var dropNav = document.getElementById('profile-nav')
dropNav.style.display = 'none'
var NavProfileDetails = false
profileNav = ()=>{
    if (NavProfileDetails === false) {
        NavProfileDetails = true
    }
    else {
        NavProfileDetails = false
    }
    if (NavProfileDetails === true) {
        dropNav.style.display = 'block'
    } else {
        dropNav.style.display = 'none'
    }

}
var smallDropNav = document.getElementById('profile-small-nav')
smallDropNav.style.display = 'none'
var NavSmallProfileDetails = false
profileSmallNav = ()=>{
    if (NavSmallProfileDetails === false) {
        NavSmallProfileDetails = true
    }
    else {
        NavSmallProfileDetails = false
    }
    if (NavSmallProfileDetails === true) {
        smallDropNav.style.display = 'block'
    } else {
        smallDropNav.style.display = 'none'
    }

}