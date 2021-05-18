document.querySelector('#range').addEventListener('input', (el) => {
    el = el.target.value;
    document.querySelector('.rangeValue').innerHTML = el;
    document.querySelector('img').style.height = `${el}%`;
})

document.querySelector('#radius').addEventListener('input', (el) => {
    el = el.target.value;
    document.querySelector('img').style.borderRadius = `${el}%`;
})

