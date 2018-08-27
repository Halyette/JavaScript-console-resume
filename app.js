


let resume = {
    Name: 'halyette lesane', 
    Career: 'Web Developer Student',
    Description: 'I love learning new things.'
  
};

let allCaps = resume.Name.toUpperCase()

console.log(resume);

let section = 'My Interest:';

console.log(section);

let interestTwo =['*Wig Making', '*Cooking', '*Swimming'];

for(var i = 0; i < interestTwo.length; i++) {
    console.log(interestTwo[i]);
}

let sectionOne = 'My Previous Experience:';

console.log(sectionOne);


function displayPosition(companyName, jobTitle, description) {
    
   
    
console.log('* I worked for' + companyName + 'as a' + jobTitle + description);

};

displayPosition(
	' BB&T ',
	' Secondary Marketing Mortgage Specialist ',
	' auditing mortgage files. '
);

displayPosition(
	' TD Bank ',
	' Retail Credit Service Customer Specialist ',
	" receiving incoming calls regarding customer's accounts. "
);

displayPosition(
	' Charter Communications ',
	' Retention Advisor ',
	' receiving incoming calls from customers regarding their service. '
);

let sectionTwo = 'My Skills:';

console.log(sectionTwo);

function displaySkill(skill, amazeBall) {
	if (amazeBall === true) {
		console.log('* ' + 'BAM: ' + skill);
	} else {
		console.log('* ' + skill);
	}
}

displaySkill('HTML', false);
displaySkill('CSS', false);
displaySkill('Bootstrap', true);
displaySkill('JavaScript.', true);
displaySkill('UI Design', true);

