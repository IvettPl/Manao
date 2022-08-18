
let form = document.querySelector('.js-form');
let formInputs = document.querySelectorAll('.js-input');
let popup = document.querySelector('.popup');

form.onsubmit = function (e) { 
    e.preventDefault();
    let emptyInputs = Array.from(formInputs).filter(input => input.value === ''); 


    formInputs.forEach(function (input) { 

        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
            popup.classList.add('show'); 
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('Заполните поля');
        return false;
    }  
    
            
    const result = [...form].reduce((acc, item) => (
        acc.push({
        name: item.name,
        value: item.value
        }), acc), []); 

    console.log(result)
    
}
