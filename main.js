var app = Vue.createApp({
    data(){
        return{
          temparature:'',
           tt: '',
           search:'',
           icon:''
        }
    },
    methods:{
        nhietdo(){
            bandau = 'http://api.openweathermap.org/data/2.5/weather?q='
            search = this.search
            unit = '&?units=metric'
            apikey = '&APPID=870e54600c430593f806d9c98a0c2169'
            url = bandau + search + unit + apikey

            fetch(url)
            .then(Response => {
                return (Response.json())
            })
            .then(data => {
                this.temparature = (parseInt(data.main.temp) /  10) + '°C' 
                this.tt = data.weather[0].main;
                this.icon = 'http://openweathermap.org/img/wn/' +  data.weather[0].icon + '@2x.png'

            })
        }
    }
})
var mountedApp = app.mount('#app')
