const personGenerator = {

    surnameJson: [  
        "Иванов",
        "Смирнов",
        "Кузнецов",
        "Васильев",
        "Петров",
        "Михайлов",
        "Новиков",
        "Федоров",
        "Кравцов",
        "Николаев",
        "Семёнов",
        "Славин",
        "Степанов",
        "Павлов"
    ],

    firstNameMaleJson: [
        "Александр",
        "Максим"
    ],

  
	firstNameFemaleJson: [
        "Александра",
        "Надежда",
        "Катерина",
        "Арина"
    ],
    male: [
        'Мужчина',
        'Женщина'
    ],
 
 
 
 
     year: [
        '1998',
        '1983'
    ],
 
	 workMaleJson: [
        'строитель',
        'пилот'
    ],
 
 	 workFemaleJson: [
        'балерина',
        'стюардесса'
    ],
 
 
 

    randomListElement: function(list) {
        return list[Math.floor(Math.random() * list.length)];

    },



	getPerson: function () {
        this.person = {};
        this.person.gender = this.randomListElement(this.male);
		this.person.year = this.randomListElement(this.year);
        this.person.FirstName = this.person.gender == 'Мужчина' ? this.randomListElement(this.firstNameMaleJson) : this.randomListElement(this.firstNameFemaleJson);
		this.person.workMale = this.person.gender == 'Мужчина' ? this.randomListElement(this.workMaleJson) : this.randomListElement(this.workFemaleJson);
        this.person.SurName = this.person.gender == 'Мужчина' ? this.randomListElement(this.surnameJson) : this.randomListElement(this.surnameJson)  + "а";
		 console.log( this.person )
        return this.person;
    }
};