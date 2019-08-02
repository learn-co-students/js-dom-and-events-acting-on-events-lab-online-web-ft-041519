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
  let employeeName = retrieveEmployeeInformation()
  let li = document.createElement("li")
  li.innerHTML = employeeName
  let ul = document.getElementsByClassName("employee-list")
  ul[0].appendChild(li)
}

function addNewLiOnClick(){
  addNewElementAsLi()
  document.querySelector('form').reset()
}

function clearEmployeeListOnLinkClick(){
  let a = document.querySelector('a')
  let ul = document.getElementsByClassName("employee-list")
  // let childArr = document.querySelectorAll('li')
  // for (let i = 0; i < childArr.length; i++){
  //   parent[0].removeChild(childArr[i])
  // }
  a.addEventListener("click", function() {
    while( ul[0].firstChild ){
      ul[0].removeChild( ul[0].firstChild );
    }
  })
}

