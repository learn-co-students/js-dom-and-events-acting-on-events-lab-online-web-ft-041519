function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  let username = document.querySelector('input').value
  return username
}

function addNewElementAsLi(){
  let li = document.createElement("LI")
  li.innerHTML = retrieveEmployeeInformation()
  document.getElementsByClassName("employee-list").appendChild(li);
}

function addNewLiOnClick(){
  return addNewElementAsLi()
}

function clearEmployeeListOnLinkClick(){
  
}

