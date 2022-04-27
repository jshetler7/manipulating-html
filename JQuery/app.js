// Objective 1
let btn1 = $("<button/>").text('Click me').attr({ id: "btn1", class: "btn btn-dark"});
$('#obj1').append(btn1);

$('#btn1').click(function() {
    Swal.fire(
        'You did it!',
        'Good job!');
})


//Objective 2,3, and 4
const input = $('#txt2');
const button = $('#btn2');

button.click(function(evt) {
    evt.preventDefault();
    const inputVal = input.val();
    Swal.fire(inputVal);
    const p = $(`
        <div class='m-2 rounded-3 row bg-white justify-content-center';">
            <p class='text-center'>Click to change text colour, hover mouse to change background color</p>
        </div>
    `).mouseenter(function() {
        p.removeClass("bg-white"),
        p.css({backgroundColor: giveRandomColor()});
    }).mouseleave(function() {
        p.addClass("bg-white")
    }).click(function() {
        p.css({color: giveRandomColor()});
    })

    $('#objective1').append(p);
});


function giveRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    const interpolated = `rgb(${r}, ${g}, ${b})`;
    return interpolated;
}

// Objective 5
const div5 = $('#obj5');
const d = $(`
        <div class='m-2 rounded-3 row bg-white justify-content-center';">
           <button class="m-2 btn btn-dark">Add a span</button>
        </div>
`).click(function() {

    const span = $(`<span class="bg-white">Jared Shetler </span>`);
    d.append(span);
    
})
div5.append(d);

// Objective 6
const list = $('#list');
const btn6 = $('#obj6');
const friends = ['Kaleb', 'Austin', 'Brandon', 'Isaac', 'Connor', 'Kate','Gabby', 'Peyton', 'Katelyn', 'Jackson'];
btn6.click(function() {
    for(var i = 0; i < friends.length; i++) {
        const listItem = $(`<li class="bg-white shadow-sm">${friends[i]}</li>`);
    list.append(listItem);
    }

})



