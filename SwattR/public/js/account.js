

$( function() {


// Retreiving data from mysql database and appending it to a card
    $.get('/api/openBugs').then(function(data){
        // console.log(data);
        for(let i = 0; i < data.length; i++){
           let info = data[i]
           console.log(data);
        let dataCard = $(`<div class="col-4"><div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-bug"></i> ${info.title}</h5>
          <p class="card-text"><strong>Description</strong>:${info.description}</p>
          <p class="card-text"><strong>Due Date:</strong>${info.dueDate}</p>
          <p class="card-text"><strong>Pays:</strong>$${info.pay}</p>
          <a href="${info.link}" class="btn btn-primary">See Code</a>
          <button type="button" class="btn btn-danger deleteBug" id = "${info.id}" >Delete</button>
        </div>
      </div></div>`);
            $('.tablecontainer .row').append(dataCard);
        }
    })

    $('#bug').on('click', function(){
        $('#bugModal').modal();

    })



// takes inputs from the modal and post it to the mysql data base

    $('#postBug').on('click', function(event){
        event.preventDefault();

        console.log('this function is running');

        const newBug = {
            postDate: '11/6/18',
            user: 'bob',
            dueDate: 'tomorrow',
            title: $('#bug-title').val(),
            description: $('#bug-description').val(),
            link: $('#codeLink').val(),
            pay: $('#pay').val()
           };
           
           for(let key in newBug){
            if(newBug[key] === ''){
              alert('Please fill out all fields');
              return;
            }
          }


    const render = function () {
        $('#cardAccountRow').empty();

    }


//
    $.post('/api/openBugs', newBug, function(data){
        console.log("this is working 6"); 

        console.log(data);
        //after data is successfully posted, run get request to retrieve new row

    
    $.get('/api/openBugs', newBug, function(data){
      
        for(i = 0; i < data.length; i++){
           // console.log(data[i]);
        let dataCard = $(`<div class="col-4"><div class="card" style="width: 18rem;">
        <div class="card-body"><p class = "card-title" id = "title"><i class="fas fa-bug"></i> ${data[i].title}</p><p class = "card-text" id = "description"><strong>Description:</strong>${data[i].description}</p><p class="card-text"><strong>Due Date:</strong>${data[i].dueDate}</p><p class = "card-text" id = "pay" ><strong>Pays:</strong>$${data[i].pay}</p><a href="${data[i].link}" class="btn btn-primary" id = "link" >See code</a><button type="button" class="btn btn-danger deleteBug" id = "${data[i].id}" >Delete</button></div></div>
        </div></div>`);
            $('#cardAccountRow').append(dataCard);
        }
    
    });
        console.log('trying to create id');
        // let finishedCard = renderAccountCard()
        // $('#cardAccountRow').append(finishedCard);
        $("#bugModal").modal("hide")
    
    })


    const renderAccountCard = function(newBug){
        console.log(newBug)
        console.log('rendering card');
        let id = $('#id').val();
        let dueDate = '11/27/18';
        let title = $('#bug-title').val();
        let description = $('#bug-description').val();
        let link = $('#codeLink').val();
        let pay = $('#pay').val();
        let card = $(`<div class="col-4"><div class="card" style="width: 18rem;">
        <div class="card-body"><p class = "card-title" id = "title"><i class="fas fa-bug"></i> ${title}</p><p class = "card-text" id = "description">Description${description}</p><p class = "card-text" id = "Due-date" >Due ${dueDate}</p><p class = "card-text" id = "pay" ><strong>Pays:</strong>$${data[i].pay}</p><a href="${link}" class="btn btn-primary" id = "link" >See code</a><button type="button" class="btn btn-danger deleteBug" id =${id}>Delete</div></div>
        </div></div>`);
      return card;


    }

});




// delete bug account page 

    $('#cardAccountRow').on('click', '.deleteBug', function(event){
        event.preventDefault()
    
        let id = $(this).attr('id');
        console.log(id);
            $.ajax({ url: `/api/openBugs/${id}`, method: 'DELETE'})
                .then(function(data){
                    if (data.success) {
                  //  render();
                    location.reload()
                }   else {
                    alert('you cannot delete shit');
                }
            })
    
    })







});