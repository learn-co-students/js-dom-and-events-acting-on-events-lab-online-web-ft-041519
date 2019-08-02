function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
};

function addNewElementAsLi() {
  const newVal = retrieveEmployeeInformation();
  const newLi = document.createElement('li');
  newLi.innerHTML = newVal;
  document.querySelector('.employee-list').appendChild(newLi);
};

function addNewLiOnClick() {
  let submit = document.querySelector('input[type=submit]')
  submit.addEventListener('click', function(e) {
    addNewElementAsLi();
    input.value = '';
  });
};

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')

  link.addEventListener('click', function(e) {
    while(ul.firstChild) {
      ul.removeChild(ul.firstChild);
    };
  });
};