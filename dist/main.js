const tempManager = new TempManager
const renderer = new Renderer

const loadPage = async function () {
    await tempManager.getDataFromDB()
    const t = tempManager.cityData
    await renderer.renderData(t)
}


loadPage()


const handleSearch = async function () {
    const input = $('#zen').val()
    await tempManager.getCityData(input)
    const t = tempManager.cityData
    await renderer.renderData(t)



}

$('body').on('click', '.save', function () {
    const name = $(this).siblings('h2').text()
    tempManager.saveCity(name)
})

$('body').on('click', '.remove', function () {
    location.reload()
    const name = $(this).siblings('h2').text()
    tempManager.removeCity(name)

    
})

