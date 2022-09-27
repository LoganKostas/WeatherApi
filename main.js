const apiId = '84b054f2e7d56e19aab994e45e5e0947'
const weatherapi = async () => {
    var citys = document.getElementById('cityId').value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${apiId}&units=imperial`)
    const data = await response.json()
    console.log(data)


    const city = data.name
    const temp = data.main.temp
    const high = data.main.temp_max
    const low = data.main.temp_min
    const humidity = data.main.humidity


    document.querySelector('#city').innerText = 'Location'+ ':'+ ' ' +city;
    document.querySelector('#temp').innerText = 'Temp'+ ':'+ ' ' +temp + '°F';
    document.querySelector('#high').innerText = 'High'+ ':'+ ' ' +high + '°F';
    document.querySelector('#low').innerText = 'Low'+ ':'+ ' ' +low + '°F';
    document.querySelector('#humidity').innerText = 'Humidity'+ ':'+ ' ' +humidity + '%';
}


const weatherf = async () => {
    var citys = document.getElementById('cityId1').value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${citys}&appid=6a8f84fd7cdf33d56d5e9843007682bc&units=imperial`)
    const data = await response.json()
    console.log(data)

    const city1 = data.city.name
    const temp1 = data.list[0].main.temp
    const high1 = data.list[0].main.temp_max
    const low1 = data.list[0].main.temp_min
    const humidity1 = data.list[0].main.humidity
    const city2 = data.city.name
    const temp2 = data.list[1].main.temp
    const high2 = data.list[1].main.temp_max
    const low2 = data.list[1].main.temp_min
    const humidity2 = data.list[1].main.humidity
    const city3 = data.city.name
    const temp3 = data.list[2].main.temp
    const high3 = data.list[2].main.temp_max
    const low3 = data.list[2].main.temp_min
    const humidity3 = data.list[2].main.humidity
    const city4 = data.city.name
    const temp4 = data.list[3].main.temp
    const high4 = data.list[3].main.temp_max
    const low4 = data.list[3].main.temp_min
    const humidity4 = data.list[3].main.humidity
    const city5 = data.city.name
    const temp5 = data.list[4].main.temp
    const high5 = data.list[4].main.temp_max
    const low5 = data.list[4].main.temp_min
    const humidity5 = data.list[4].main.humidity

    document.querySelector('#city1').innerText = 'Location'+ ':'+ ' ' +city1;
    document.querySelector('#temp1').innerText = 'Temp'+ ':'+ ' ' +temp1 + '°F';
    document.querySelector('#high1').innerText = 'High'+ ':'+ ' ' +high1 + '°F';
    document.querySelector('#low1').innerText = 'Low'+ ':'+ ' ' +low1 + '°F';
    document.querySelector('#humidity1').innerText = 'Humidity'+ ':'+ ' ' +humidity1 + '%';
    document.querySelector('#city2').innerText = 'Day 2';
    document.querySelector('#temp2').innerText = 'Temp'+ ':'+ ' ' +temp2 + '°F';
    document.querySelector('#high2').innerText = 'High'+ ':'+ ' ' +high2 + '°F';
    document.querySelector('#low2').innerText = 'Low'+ ':'+ ' ' +low2 + '°F';
    document.querySelector('#humidity2').innerText = 'Humidity'+ ':'+ ' ' +humidity2 + '%';
    document.querySelector('#city3').innerText = 'Day 3';
    document.querySelector('#temp3').innerText = 'Temp'+ ':'+ ' ' +temp3 + '°F';
    document.querySelector('#high3').innerText = 'High'+ ':'+ ' ' +high3 + '°F';
    document.querySelector('#low3').innerText = 'Low'+ ':'+ ' ' +low3 + '°F';
    document.querySelector('#humidity3').innerText = 'Humidity'+ ':'+ ' ' +humidity3 + '%';
    document.querySelector('#city4').innerText = 'Day 4';
    document.querySelector('#temp4').innerText = 'Temp'+ ':'+ ' ' +temp4 + '°F';
    document.querySelector('#high4').innerText = 'High'+ ':'+ ' ' +high4 + '°F';
    document.querySelector('#low4').innerText = 'Low'+ ':'+ ' ' +low4 + '°F';
    document.querySelector('#humidity4').innerText = 'Humidity'+ ':'+ ' ' +humidity4 + '%';
    document.querySelector('#city5').innerText = 'Day 5';
    document.querySelector('#temp5').innerText = 'Temp'+ ':'+ ' ' +temp4 + '°F';
    document.querySelector('#high5').innerText = 'High'+ ':'+ ' ' +high4 + '°F';
    document.querySelector('#low5').innerText = 'Low'+ ':'+ ' ' +low4 + '°F';
    document.querySelector('#humidity5').innerText = 'Humidity'+ ':'+ ' ' +humidity4 + '%';



}
