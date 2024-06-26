function deleteEvent() {
    let btn = document.getElementById('deleteBtn')
    let id = btn.getAttribute('data-id')
    
    axios.delete('/events/delete/'+ id)
    .then( (res)=> {
        console.log(res.data)
        alert('Book was deleted')
        window.location.href = '/events'
    })

    .catch( (err)=> {

        console.log(err)
    })

}


//upload avatar 

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader()

        reader.onload = function(e) {
            let image = document.getElementById("imagePlaceholder")
            image.style.display = "block"
            image.src = e.target.result

        }

        reader.readAsDataURL(input.files[0])
    }
}

// render univessty pages 
document.getElementById('exploreButton').addEventListener('click', function() {
    window.location.href = '/imamu';
});

document.getElementById('exploreButton2').addEventListener('click', function() {
    window.location.href = '/ksu';
});
document.getElementById('exploreButton3').addEventListener('click', function() {
    window.location.href = '/pnu';
});

