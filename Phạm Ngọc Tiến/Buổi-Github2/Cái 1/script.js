
document.getElementById('btn').addEventListener('click', function(event){
    const container = document.getElementById('container')
    const button = document.getElementById('btn')
    const color = ['red', 'green', 'blue', 'pink', 'purple', 'black', 'white']
    const random = Math.floor(Math.random() * color.length);
    setInterval(function(event) {
        container.style.backgroundColor = (random, color[random]);;
        button.style.backgroundColor = (random, color[random]);
        button.style.color = (random, color[random]);
},1000);

});