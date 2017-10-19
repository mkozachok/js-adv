# Погода в місті

Потрібно обновити погоду дял кожного міса використовуючи ajax виклик.
використовувати потрібно сервіс https://openweathermap.org/current

Приклад посилань для отримання інформації про погоду

http://api.openweathermap.org/data/2.5/weather?appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&q=Lviv,ua
http://api.openweathermap.org/data/2.5/weather?appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&q=Kiev,ua
http://api.openweathermap.org/data/2.5/weather?appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&q=Odessa,ua

інформацію про стна небу шукайте тут 
"weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
Іофрмацію про температуру 
"main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},

1. Зробити запит на openweathermap.org за допоомогою апі і відобразити поточну погоду для кожного міста.
2. Додати кнопку "Обновити", яка буде обновляти погоду в місті.
3. Додати setInterval який буде обноялти погоду що 5хв.

Додаткові завдання
4. В елемент з класом "weather-pic" додати відповідний шаблон https://codepen.io/joshbader/pen/EjXgqr?q=weather&limit=all&type=type-pens
в залежності від параметра data["weather"]["main"]

5. Додати форму, щоб можна було додати нвое місто і відобразити його.
