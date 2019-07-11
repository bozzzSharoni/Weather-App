class TempManager {
    constructor() {

        this.cityData = []
    }

    async getDataFromDB() {
        const data = await $.get('/cities', function(res){
            return res
        })
        data.forEach(d=> this.cityData.push(d))
    }

    async getCityData(cityName) {
        const z = await $.get(`/city/${cityName}`)
        const x = {
            name: z.location.name,
            temperature: z.current.temp_c,
            conditions: z.current.condition.text,
            conditionPic: z.current.condition.icon,
            updatedAt: z.current.last_updated
        }

        this.cityData.push(x)
        console.log(this.cityData)
    }

    saveCity(cityName) {
        const city = this.cityData.find(c => c.name === cityName)
        $.post(`/city/`, city, function (data, status) {
            console.log('data:', data)
            console.log('status:', status)
        })
    }

    removeCity(cityName) {
        $.ajax({
            method: 'DELETE',
            url: `http://localhost:3000/city/${cityName}`,
            success: function (data) {
                console.log(data)
            }
        })

    }

}
