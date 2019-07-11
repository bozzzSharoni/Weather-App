class Renderer {
    constructor(){
        
    }
    renderData(allCityData) {
       $("#container").empty()

       const source = $("#template").html()
       const template = Handlebars.compile(source)
       const newHTML = template({data: allCityData})
       $('#container').append(newHTML)
       
    }
}