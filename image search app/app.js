function search() {
    let searchBox = document.getElementById('search-box');
    let image = document.getElementById('image');
    let error = document.getElementById('error');
    
    let arrayOfImages = ['images/burger.webp','images/bird.jpg','images/car.jpg','images/cat.webp','images/cycle.jpg','images/dog.jpg','images/flower.jpeg','images/mountain.avif','images/river.avif','images/tree.jpeg','images/house.jpeg','images/moon.webp','images/sun.webp','images/star.jpg','images/building.jpeg','images/bridge.jpg','images/airplane.jpg','images/road.jpeg','images/train.jpeg','images/ship.jpg','images/sky.avif','images/apple.webp','images/rain.png','images/forest.jpeg','images/cloud.webp','images/desert.avif','images/lake.webp','images/ocean.webp','images/fish.webp','images/elephant.jpg','images/lion.jpg','images/tiger.webp','images/bear.jpg','images/horse.jpg','images/monkey.jpg','images/cow.jpg','images/sheep.avif','images/goat.jpg','images/chicken.jpg','images/banana.jpg','images/mirror.webp','images/book.jpg','images/computer.jpeg','images/laptop.jpg','images/helicopter.jpeg','images/water.jpg','images/table.avif','images/shoes.jpg','images/mobile.jpg','images/pen.jpg'];
    for (let i = 0; i < arrayOfImages.length; i++) {
        let sliced = arrayOfImages[i].slice(7,10);
        if (searchBox.value.trim() == '') {
            error.innerText = 'Please Enter anything in the required field!';
            image.src = '';
        }
        else if (searchBox.value.toLowerCase().slice(0,3) == sliced) {
            error.innerText = '';
            image.src = arrayOfImages[i];
        }
    }
    searchBox.value = '';
}