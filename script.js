const contentBlock = document.getElementById("content");

const npcs = [
	{
		fname : "John",
		job : "farmer",
		schedule : {},
		
	},
	{
		fname: "Anne",
		job: "farmer",
		schedule : {},
	}

]

const schedules = {
	farmer : {
		day: [
			{
				id : 0,
				//name: "wake up",
				isTime: true,
				time: "7:00",
				//location : "at home"
				activity : "waking up"
			},
			{
				id : 1,
				//name: "working",
				isTime: true,
				time: "10:00",
				//location : "in the office",
				activity : "answering emails",
			}
			{
				id : 2,
				//name: "eating",
				isTime: true;
				time: "17:00",
				//location: "in the kitchen",
				activity : "eating a snack"
			}
		]
	},
}

npcs[0].schedule = schedules.farmer;

console.log(npcs[0]);
contentBlock.innerHTML = `<span>Hallo, ${npcs[0].name}</span>`;