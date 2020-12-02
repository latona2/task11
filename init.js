
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.FirstName;
	document.getElementById('surnameOutput').innerText = initPerson.SurName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
};


//кнопка генерации
document.getElementById('generate').onclick = () => {
const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.FirstName;
	document.getElementById('surnameOutput').innerText = initPerson.SurName;
	document.getElementById('genderOutput').innerText = initPerson.gender;
	document.getElementById('birthYearOutput').innerText = initPerson.year;
	document.getElementById('work').innerText = initPerson.workMale;
};




//кнопка очистки
document.getElementById('clear').onclick = () => {
    delete personGenerator.person;
    document.getElementById('firstNameOutput').innerText = '__________';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
	document.getElementById('work').innerText = '';
};

