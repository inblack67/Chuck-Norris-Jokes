document.querySelector('#get-jokes').addEventListener('click',getJokes);

function getJokes(e)
{
const xhr = new XMLHttpRequest();

const number = document.querySelector('#input').value;

xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

xhr.onload = function(){
if(this.status===200)
{
let response = JSON.parse(this.responseText);

if(response.type==='success')
{
  let output = '';
  response.value.forEach(function(joke){
    output+=
    `
    <li>${joke.joke}</li>
    `
  });

  document.querySelector('.jokes').innerHTML = output;
}

else
{
  output+='Error Unknown';
}

}
}


xhr.send();

e.preventDefault();
}