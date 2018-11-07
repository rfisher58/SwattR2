$( function() {


// Retreiving data from mysql database and appending it to a card
    $.get('/api/openBugs').then(function(data){
        // console.log(data);
        for(i = 0; i < data.length; i++){
            let info = data[i]
            console.log(data);
        let dataCard = $(`<div class="col-4"><div class="card" style="width: 18rem;">
        <div class="card-body"><p class = "card-title" id = "title"><i class="fas fa-bug"></i> ${info.title}</p>
        <p class="card-text"><strong>Description</strong>:${info.description}</p>
        <p class="card-text"><strong>Due Date:</strong>${info.dueDate}</p>
        <p class="card-text" style="color:green;"><strong>Pays:</strong>$${info.pay}</p>
        <p class = "card-text" id = "postDate" >Posted ${info.createdAt}</p>
        <a href="${info.link}" class="btn btn-primary" id = "link" >See code</a>
        </div></div>
        </div></div>`);
            $('.tablecontainer .row').append(dataCard);
        }
    })
    

    // takes inputs from the modal and post it to the mysql data base
    
        $('#postBug').on('click', function(event){
            event.preventDefault();
    
            console.log('this function is running');
    
            const newBug = {
                dueDate: $('#Due-date').val(),
                title: $('#bug-title').val(),
                description: $('#bug-description').val(),
                link: $('#codeLink').val(),
                pay: $('#pay').val(),
                language: $('#language').val()
               };
               
               for(let key in newBug){
                if(newBug[key] === ''){
                  alert('Please fill out all fields');
                  return;
                }
              }
            
        // takes data from database to appends it to card to be rendered
    
              $.post('/api/openBugs', newBug, function(data){
                    console.log("this is working"); 
    
                    console.log(newBug);
                   let finishedCard = renderCard();
                   $('#cardRow').append(finishedCard);
                }
                
              )
    
    
              const renderCard = function(newBug){
                  console.log('rendering card');
                  let dueDate = $('#Due-date').val();
                  let title = $('#bug-title').val();
                  let description = $('#bug-description').val();
                  let link = $('#codeLink').val();
                  let pay = $('#pay').val();
                  let card = $(`<div class="col-4"><div class="card" style="width: 18rem;">
                  <div class="card-body"><div class="card-body"><p class = "card-title" id = "title"><i class="fas fa-bug"></i> ${data[i].title}</p><p class = "card-text" id = "description"><strong>Description:</strong>${data[i].description}</p><p class="card-text"><strong>Due Date:</strong>${data[i].dueDate}</p><p class = "card-text" id = "pay" style="color:green;" ><strong>Pays:</strong>$${data[i].pay}</p><a href="${data[i].link}" class="btn btn-primary" id = "link" >See code</a><button type="button" class="btn btn-danger deleteBug" id = "${data[i].id}">Delete</button></div></div>
                  </div></div>`);
                return card;
    
            }

        
    
    })

})