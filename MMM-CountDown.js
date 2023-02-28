Module.register("MMM-CountDown",{
	// Default module config.
	defaults: {
		date: "",	
		eventName: "New Year",
		imageName: '../modules/MMM-CountDown/images/LakeSuperior.jpg',
		height:300,
		width:400,
		customInterval: 1000,
		showDate: true,
		showYears: true,
		showMonths: true,
		showDays: true,
		showHours: true,
		showMinutes: true,
		showSeconds: true,
		yearsLabel: 'Years',
		monthsLabel: 'Months',
		daysLabel: 'Days',
		hoursLabel: 'Hours',
		minutesLabel: 'Minutes',
		secondsLabel: 'Seconds',
	},

	// Define required scripts.
	getScripts: function () {
		return ["moment.js"];
	},
	
	getStyles: function () {
		return ["MMM-CountDown.css"];
	},
	
	start: function () {
		Log.info("Starting module: " + this.name);
		
		if (this.config.date == '')
		{
			var nextYearDate = new Date(new Date().getFullYear(), 0, 1);
			nextYearDate.setFullYear(nextYearDate.getFullYear()+1);
			this.config.date = String(nextYearDate);
		}
		
		var self = this;
		setInterval(function() {
			self.updateDom(); // no speed defined, so it updates instantly.
		}, this.config.customInterval); 

	},

	// Override dom generator.
	getDom: function () {
		// Create DOM
		
		let payload = this.getCountDownData();

		let wrapper = document.createElement("div");
		wrapper.className = "countDownWrapper";
		var styleString = '';
		if (this.config.width != 0){ styleString += 'width:' + this.config.width + 'px; '; }
		if (this.config.height != 0){ styleString += 'height:' + this.config.height + 'px; '; }
		if (styleString != ''){	wrapper.style = styleString; }
		if (this.config.imageName !== "" ){	wrapper.style.backgroundImage = "url(" + this.config.imageName + ")"; }
		
		let tbl = document.createElement("table");
		tbl.className = "countDown";
		
		if (this.config.eventName != ''){
			let headerRow = document.createElement("tr");
	    let th = document.createElement("th");
	    th.colSpan=7;
	    th.className = "eventName align-left dimmed medium";
	    th.innerHTML = this.config.eventName;
	    if (this.config.showDate){ 
	    	let cfgDate = new Date(this.config.date);
	    	th.innerHTML += ": " + cfgDate.toLocaleDateString();
	    }
	    headerRow.appendChild(th);
			tbl.appendChild(headerRow);
		}
		
		let valClass = "normal medium light cdValue ";
		let row = document.createElement("tr");
		if (showYears)		row.appendChild(this.generateRowCell(valClass + "yearsValue", payload.years));
		if (showMonths)		row.appendChild(this.generateRowCell(valClass + "monthsValue", payload.months));
		if (showDays)			row.appendChild(this.generateRowCell(valClass + "daysValue", payload.days));
		if (showHours) 		row.appendChild(this.generateRowCell(valClass + "hoursValue", payload.hours));
		if (showMinutes)	row.appendChild(this.generateRowCell(valClass + "minutesValue", payload.minutes));
		if (showSeconds)	row.appendChild(this.generateRowCell(valClass + "secondsValue", payload.seconds));
		tbl.appendChild(row);

		let lblClass = " xsmall thin cdLabel ";		
		row = document.createElement("tr");
		if (showYears)		row.appendChild(this.generateRowCell(lblClass + "yearLabel", this.config.yearsLabel));
		if (showMonths)		row.appendChild(this.generateRowCell(lblClass + "monthsLabel", this.config.monthsLabel));
		if (showDays)			row.appendChild(this.generateRowCell(lblClass + "daysLabel", this.config.daysLabel));
		if (showHours) 		row.appendChild(this.generateRowCell(lblClass + "hoursLabel", this.config.hoursLabel));
		if (showMinutes)	row.appendChild(this.generateRowCell(lblClass + "minutesLabel", this.config.minutesLabel));
		if (showSeconds)	row.appendChild(this.generateRowCell(lblClass + "secondsLabel", this.config.secondsLabel));
		tbl.appendChild(row);

		let tblwrapper = document.createElement("div");
		tblwrapper.className = "insideWrapper";
		tblwrapper.appendChild(tbl);
		wrapper.appendChild(tblwrapper);
   
   	return wrapper;
	},
	
	generateRowCell: function(className, value){
		let td = document.createElement("td");
		td.className = className;
		td.innerHTML = String(value).padStart(2, '0');
		return td;
	},
	
	getCountDownData: function () {
		currentTime = moment();
		targetTime = moment(this.config.date);
		const timeBetween = moment.duration(targetTime.diff(currentTime));
	
		// Set differences	
		return {
			years: 	 timeBetween.years(),
			months:  timeBetween.months(),
			days: 	 timeBetween.days(),
			hours: 	 timeBetween.hours(),
			minutes: timeBetween.minutes(),
			seconds: timeBetween.seconds(),
		};
	}
		
});
