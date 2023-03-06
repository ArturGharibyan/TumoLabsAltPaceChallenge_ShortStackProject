
const setApiDiv = document.createElement("div")
let div1 = document.createElement("div")
let infodesk = document.querySelector(".Infodesk")
let imgfood = document.querySelector(".imgfood")
let paragraph = document.querySelector(".paragraph")
let form = document.createElement("form")
let nameInput = document.createElement("input")
let urlInput = document.createElement("input")
let descriptionArea = document.createElement("textarea")
let setApIButton = document.createElement("button")
let divForinpts = document.createElement("div")
let divFortextarea = document.createElement("div")
let divFortButton = document.createElement("div")
let serchBar = document.createElement("div")
let searchInput = document.createElement("input")
let searchButton = document.createElement("button")
let title = document.createElement("h1")
let div_for_input_button = document.createElement("div")
let logoimage = document.createElement("img")



serchBar.className = "serchBar"
searchInput.className = "search-control"
searchInput.id = "search-input"
searchInput.placeholder = "Enter an ingredient"
searchButton.className = "search-btn"
searchButton.id = "search-btn"
searchButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ADB5BDFF" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>`
logoimage.src = "https://static.vecteezy.com/system/resources/thumbnails/000/202/126/small/Steak_on_grill.png"
logoimage.className = "logoimage"



let footer = document.createElement("footer")
let footer_left = document.createElement("div")
let img = document.createElement("img")
let h3 = document.createElement("h3")
let span = document.createElement("span")
let footercompanyname = document.createElement("p")
let footer_center = document.createElement("div")
let div_for_footer_center = document.createElement("div")
let div_for_footer_center1 = document.createElement("div")
let div_for_footer_center2 = document.createElement("div")
let footer_right = document.createElement("div")
let footer_icons = document.createElement("div")


footer.className = "footer-distributed"
footer_left.className = "footer-left"
footer_center.className = "footer-center"
footer_right.className = "footer-right"
footer_icons.className = "footer-icons"
img.className = "footer_logo"
img.src = "https://static.vecteezy.com/system/resources/thumbnails/000/202/126/small/Steak_on_grill.png"
h3.textContent = "MEALS"
span.textContent = "CATEGORIES"
footercompanyname.className = "footer-company-name"
footercompanyname.textContent = "© 2023 Solutions platform for information"


h3.appendChild(span)
footer_left.append(img, h3, footercompanyname)


div_for_footer_center.innerHTML = `<i class="fa fa-map-marker"></i><p><span>309 - 2 Halabyan st.,Bldg. No. A - 1, Sector - 1</span> Yerevan, Armenia - 400710</p>`
div_for_footer_center1.innerHTML = ` <i class="fa fa-phone"></i><p>+37494000001</p>`
div_for_footer_center2.innerHTML = `<i class="fa fa-envelope"></i><p><a href="mailto:support@edunion.com">arturgharibyan041@gmail.com</a></p>`
footer_right.innerHTML = `<p class="footer-company-about"><span>About the company</span>Food category here you will find everything about food that interests you, this is an information platform</p>`


let icons_object_array = [
    {
        url: "/svg/10.png",
        href: "https://www.facebook.com/tumolabs/",
        classname: "fa fa-facebook"
    },
    {
        url: "/svg/11.png",
        href: "https://am.linkedin.com/school/tumo-labs/",
        classname: "fa fa-linkedin"
    },
    {
        url: "/svg/12.png",
        href: "https://www.instagram.com/tumolabs/",
        classname: "fa fa-instagram"
    },
    {
        url: "/svg/13.png",
        href: "https://www.youtube.com/@tumolabs4506",
        classname: "fa fa-youtube"
    }
]

icons_object_array.map(read => {
    let a = document.createElement("a");
    let img = document.createElement("img")
    img.className = "footer_icon_img"
    let i = document.createElement("i")
    i.className = read.classname
    img.src = read.url
    a.href = read.href
    a.append(i)
    i.append(img)
    footer_icons.append(a)
});


footer_right.append(footer_icons)
footer_center.append(div_for_footer_center, div_for_footer_center1, div_for_footer_center2)
footer.append(footer_left, footer_center, footer_right,)



form.id = "form"
form.className = "form"
nameInput.className = "nameInput"
nameInput.id = "nameInput"
nameInput.name = "name"
nameInput.placeholder = "Enter your MealCategory name"
urlInput.className = "urlInput"
urlInput.id = "urlInput"
urlInput.name = "url"
urlInput.placeholder = "Enter your meal url-link"
descriptionArea.className = "textsend"
descriptionArea.id = "description"
descriptionArea.name = "description"
descriptionArea.placeholder = "Enter your description"
setApIButton.textContent = "add meal"
setApIButton.id = "setApIButton"
setApiDiv.className = "setApidiv"
title.className = "title"
title.textContent = "Find your dream Meal"
searchInput.setAttribute("name", "data-search")


div_for_input_button.append(searchInput, searchButton)
serchBar.append(logoimage, title, div_for_input_button)
divForinpts.append(nameInput, urlInput)
divFortextarea.append(descriptionArea)
divFortButton.append(setApIButton)
form.append(divForinpts, divFortextarea, divFortButton)
setApiDiv.append(form)



const datamealtemplate = document.querySelector("[data-meal-template]")
const mealcardscontainer = document.querySelector("[meal-cards-container]")
let card = 0; 
let meals = []





serchBar.addEventListener("keydown", ((e) => {
    if (e.key == "Enter") {
        setTimeout(() => {
            let value = e.target.value
            meals.forEach((meals) => {
                const isVisible = meals.name.includes(value) || meals.thumb.includes(value)
                meals.element.classList.toggle("hide", !isVisible)

            })
        }, 1000)
    }

}))




fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => response.json())
    .then(function (res) {
        meals = res.categories.map(res => {

            card = datamealtemplate.content.cloneNode(true).children[0]
            let divs = document.createElement("divs")
            let buttondiv = document.createElement("div")
            let button = document.createElement("button")
            let imgs = document.createElement("img")
            let h2 = document.createElement("h2")


            h2.className = "h2"
            div1.className = "div1"
            button.textContent = "About"
            divs.className = "productdivs"
            buttondiv.className = "buttondiv"


            h2.textContent = res.strCategory
            imgs.src = res.strCategoryThumb
            buttondiv.append(button)
            divs.append(imgs, h2, buttondiv)
            card.append(divs)
            mealcardscontainer.append(card)


            try {
                button.addEventListener("click", function (e) {
                    infodesk.style.display = "block"
                    imgfood.src = res.strCategoryThumb
                    paragraph.textContent = res.strCategoryDescription
                })
            } catch (e) {

            }

            return { name: res.strCategory, thumb: res.strCategoryThumb, img: res.strCategoryThumb, element: card }
        }, [])

        div1.append(mealcardscontainer)
    })


    

document.body.append(div1, setApiDiv, footer)
div1.before(serchBar)




cancle.addEventListener("click", function () {
    document.querySelector(".Infodesk").style.display = "none"
})



form.addEventListener("submit", (e) => {
    e.preventDefault()
    form.reset()
})




function success() {
    let interval = setInterval(() => {
        if (nameInput.value === "" || urlInput.value === "" || descriptionArea.value === "") {
            setApIButton.disabled = true;
        }
        if (nameInput.value !== "" || urlInput.value !== "" || descriptionArea.value !== "") {
            setApIButton.disabled = false;
        }
        else {
            setApIButton.disabled = true

        }
    }, 1000)
}
success()



setApIButton.addEventListener('click', function (e, array = []) {

    const formData = new FormData(form);
    const payload = new URLSearchParams(formData);

    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: payload,
    })
        .then(res => res.json())
        .then(function (res) {
            array.push(res)
            let div = document.createElement("div")


            for (let i = 0; i < array.length; i++) {

                let h2 = document.createElement("h2")
                let buttondiv = document.createElement("buttondiv")
                let button = document.createElement("button")
                let deleteButton = document.createElement("button")
                let apiImg = document.createElement("img")


                deleteButton.textContent = "x"
                deleteButton.className = "deletebutton"
                button.textContent = "About"
                buttondiv.className = "buttondiv2"
                h2.className = "h2"
                div.className = "productdivs"


                apiImg.src = array[i].form.url
                h2.textContent = array[i].form.name


                buttondiv.append(button)
                div.append(deleteButton, apiImg, h2, buttondiv)



                button.addEventListener("click", function () {
                    infodesk.style.display = "block"
                    imgfood.src = array[i].form.url
                    paragraph.textContent = array[i].form.description
                })


                deleteButton.addEventListener("click", function () {
                    div.style.display = "none"

                })


            }
            div1.append(div)
        })
})


