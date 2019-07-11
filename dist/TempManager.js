class TempManager {
    constructor() {

        this.cityData = []
    }

    getDataFromDB() {
        $.get('/cities', function (data, status) {
            this.cityData.push(data)
            console.log(status)
        })


    }

    async getCityData(cityName) {
        await $.get(`/city/:${cityName}`, function (data, status) {
            this.cityData.push({
                cityName: data.name,
                temperature: data.temperature,
                conditions: data.conditions,
                conditionIcon: data.conditionPic,
                lastUpdate: data.updatedAt
            })
        })

    }

    saveCity(cityName) {
        const city = this.cityData.filter(c => c.name === cityName)
        $.post(`/city/`, city, function (data, status) {
            console.log('data:', data)
            console.log('status:', status)
        })
    }

    removeCity(cityName) {
        $.ajax({
            method: 'DELETE',
            url: `http://localhost:3000/city/${cityName}`,
            success: function(data){
                  console.log(data)
            }
        })

    }

}
