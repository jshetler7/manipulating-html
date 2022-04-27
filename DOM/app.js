// Setting up the page to be nice and pretty like Jeff Goldblum in a donkey mask

// Objective 1
const btnDiv = document.getElementById('obj1');
const btn = document.createElement('button');
btn.textContent = "Click me";
btnDiv.appendChild(btn);

btn.addEventListener('click', function() {
    Swal.fire(
        'You did it!',
        'Good job!');
});

// Objective 2
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(evt) {
    evt.preventDefault();
    let textBox = document.getElementById('textField').value;
    Swal.fire(textBox);
})

// Objective 3
const div = document.getElementById('obj3');
div.addEventListener('mouseenter', function(evt) {
    evt.target.style.backgroundColor = 'gray';
});
div.addEventListener('mouseleave', function(evt) {
    evt.target.style.backgroundColor = 'blue';
});

// Objective 4
const para = document.createElement('p');
para.className = 'm-5';
para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate rem quas molestiae cum necessitatibus suscipit possimus harum placeat mollitia eos explicabo pariatur id sit animi velit, dolorem inventore saepe libero?";
document.body.appendChild(para);
para.addEventListener('click', function(evt) {
    const paraColor = giveRandomColor();
    evt.target.style.color = paraColor;
})

// Objective 5
const div5 = document.createElement('div');
const btn5 = document.createElement('button');
btn5.textContent = 'Add a span';
btn5.className = 'm-2';
document.body.appendChild(btn5);
document.body.appendChild(div5);

btn5.addEventListener('click', function() {
    const span = document.createElement('span');
    span.textContent = 'Jared Shetler \n ';
    div5.appendChild(span);
    // Didn't say it had to look pretty sorry not sorry
})

// Objective 6
const list = document.getElementById('list');
const friends = ['Kaleb', 'Austin', 'Brandon', 'Isaac', 'Connor', 'Kate','Gabby', 'Peyton', 'Katelyn', 'Jackson'];
const btn6 = document.getElementById('obj6');
btn6.addEventListener('click', function() {
    for(var friend of friends) {
        item = document.createElement('li');
        item.textContent = friend
        list.appendChild(item);
    }
})





function giveRandomColor () {
    const RED = Math.floor(Math.random() * 256);
    const GREEN = Math.floor(Math.random() * 256);
    const BLUE = Math.floor(Math.random() * 256);

    const rgbString = `rgb(${RED}, ${GREEN}, ${BLUE})`
    return rgbString;
}