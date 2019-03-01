var objeto;

$(document).ready(function(){
    objeto = new Objeto();
});

var Objeto = function(){
    var that = this;
    this.API_KEY = '0055da9ada92f19b7815b5e205c84477';

    this.readNome = function(cidade){
        $.get("http://api.openweathermap.org/data/2.5/weather?q="
        + cidade + "&appid=" + that.API_KEY);
    }
    this.render = function(res) {
        //Adicionar o nome da cidade
        $("[data-name-cidade]").html(res.name);
        //Adicionar o termo geral do tempo
        $("[data-main-cidade]").html(res.weather[0]['main']);
        //Adicionar a descrição do tempo
        $("[data-description-cidade]").html(res.weather[0]['description'])        ;
        //Adicionar a temperatura minima
        $("[data-temp-min-cidade]").html(Math.round(res.main.temp_min - 273.15) + 'º');
        //Adicionar a temperatura maxima
        $("[data-temp-max-cidade]").html(Math.round(res.main.temp_max - 273.15) + 'º');
        //Adicionar a humidade
        $("[data-humidity-cidade]").html(res.main.humidity + '%');
        //Adicionar a velocidade do vento
        $("[data-wind-cidade]").html(res.wind.speed + ' m/s');
        //Adicionar a precipitação
        $("[data-pressure-cidade]").html(res.main.pressure + 'hpa');
        //Adicionar a temperatura
        $("[data-temp-cidade]").html(Math.round(res.main.temp - 273.15) + 'º');
        //Colocar o icon do tempo certo
        switch (res.weather[0]['icon']) {
            case '02d':
            $("[data-img-weather]").attr('src',
            'img/icons/partly-cloudy-day.png');
            break;
            case '01n':
            $("[data-img-weather]").attr('src',
            'img/icons/clear-night.png');
            break;
            case '03n':
            $("[data-img-weather]").attr('src',
            'img/icons/cloudy.png');
            break;
            case '03d':
            $("[data-img-weather]").attr('src',
            'img/icons/cloudy.png');
            break;
            case '04n':
            $("[data-img-weather]").attr('src',
            'img/icons/cloudy.png');
            break;
            case '04d':
            $("[data-img-weather]").attr('src',
            'img/icons/cloudy.png');
            break;
            case '04n':
            $("[data-img-weather]").attr('src',
            'img/icons/cloudy.png');
            break;
            case '04d':
            $("[data-img-weather]").attr('src',
            'img/icons/cloudy.png');
            break;
            case '09n':
            $("[data-img-weather]").attr('src',
            'img/icons/rain.png');
            break;
            case '09d':
            $("[data-img-weather]").attr('src',
            'img/icons/rain.png');
            break;
            case '10n':
            $("[data-img-weather]").attr('src',
            'img/icons/rain.png');
            break;
            case '10d':
            $("[data-img-weather]").attr('src',
            'img/icons/rain.png');
            break;
            case '11n':
            $("[data-img-weather]").attr('src',
            'img/icons/thunderstorm.png');
            break;
            case '11d':
            $("[data-img-weather]").attr('src',
            'img/icons/thunderstorm.png');
            break;
            case '13n':
            $("[data-img-weather]").attr('src',
            'img/icons/snow.png');
            break;
            case '13d':
            $("[data-img-weather]").attr('src',
            'img/icons/snow.png');
            break;
            case '50n':
            $("[data-img-weather]").attr('src',
            'img/icons/fog.png');
            break;
            case '50d':
            $("[data-img-weather]").attr('src',
            'img/icons/fog.png');
            break;
            default:
            break;
        }
    };
    this.setup = function(){
        $("[data-input-cidade]").on('keypress', function(e){
            if (e.which == 13){
                var cidade = $("[data-input-cidade]").val();
                console.log(cidade);
            }
        });
        $("[data-btn-cidade]").on("click",function(){
            var cidade = $("[data-input-cidade]").val();
            console.log(cidade);
        });
    }
    this.start = function(){
        that.setup();
    }
    that.start();
}