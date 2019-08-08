function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const input = document.querySelector('input');
  return input.value;
}

function addNewElementAsLi() {
  const store = retrieveEmployeeInformation();
  let lis = document.createElement('li');
  const employees = document.querySelector('.employee-list');

  return employees.appendChild(lis).innerHTML = store;
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  const input = document.querySelector('input');
  
  return submit.addEventListener('click', function(event) {
    addNewElementAsLi();
    return input.value = '';
  });

  }

function clearEmployeeListOnLinkClick() {
  let employees = document.querySelector('.employee-list');
  let link = document.querySelector('a')
  return link.addEventListener('click', function(event) {
    employees.innerHTML = "";
  });
}
