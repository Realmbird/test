const Dropdown = (element) => {
    const dropdown_div = document.createElement('div')
    dropdown_div.classList.add('dropdown')

    const dropdown_content = document.createElement('div')
    dropdown_content.classList.add('dropdown-content')
    dropdown_div.append(dropdown_content)
    dropdown_content.classList.toggle("hidden")

    element.append(dropdown_div)
    dropdown_div.addEventListener("click", () => {
        dropdown_content.classList.toggle("hidden")
    })
}


export default Dropdown