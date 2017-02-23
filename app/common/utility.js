import * as CommonConstants from '../constants/commonConstants';
/*Data sort method is used to sort the array items in asending or decending order*/
export const DATASORT = (dataArray, key, order) => {
	let data = dataArray;
	let sortByKey = key;
	let sortOrder = order || CommonConstants.SORT_CLASS;
	let sortedData = (sortOrder === CommonConstants.SORT_CLASS) ? ([...data].sort((a, b) => {
		return a[sortByKey] > b[sortByKey];
	})) : ([...data].sort((a, b) => {
		return a[sortByKey] < b[sortByKey];
	}));
	return sortedData;
};

/*Data sort method is used to sort the array items in time sequence*/
export const DATATIME = (dataArray, key, order) => {
	let data = dataArray;
	let sortByKey = key;
	let sortOrder = order || CommonConstants.SORT_CLASS;
	let sortedData = [...data].sort((a, b) => {
		let timePart1 = a[key].split('-')[0];
		let timePart2 = b[key].split('-')[0];
		let amOrPmOfTime1 = timePart1.toLowerCase().indexOf("a") > 0 ? 'am' : 'pm';
		let amOrPmOfTime2 = timePart2.toLowerCase().indexOf("a") > 0 ? 'am' : 'pm';
		let time1Spliting = timePart1.split(amOrPmOfTime1)[0].split(':');
		let time2Spliting = timePart2.split(amOrPmOfTime2)[0].split(':');
		let time1Hours = time1Spliting[0];
		let time2Hours = time2Spliting[0];
		let time1HasMinutes = time1Spliting[1] || '00';
		let time2HasMinutes = time2Spliting[1] || '00';
		let time1 = time1Hours + ":" + time1HasMinutes + " " + amOrPmOfTime1;
		let time2 = time2Hours + ":" + time2HasMinutes + " " + amOrPmOfTime2;
		return new Date('2017/01/01 ' + time1) - new Date('2017/01/01 ' + time2);
	});
	return sortedData;
};


/*Data sort method is used to sort the array items in time sequence*/
export const DATATIMEEVENTLIST = (dataArray, key, order) => {
	let data = dataArray;
	let sortByKey = key;
	let sortOrder = order || CommonConstants.SORT_CLASS;
	let sortedData = [...data].sort((a, b) => {
		let timePart1 = a[key];
		let timePart2 = b[key];
		let amOrPmOfTime1 = timePart1.toLowerCase().indexOf("a") > 0 ? 'am' : 'pm';
		let amOrPmOfTime2 = timePart2.toLowerCase().indexOf("a") > 0 ? 'am' : 'pm';
		let time1Spliting = timePart1.split(amOrPmOfTime1)[0].split(':');
		let time2Spliting = timePart2.split(amOrPmOfTime2)[0].split(':');
		let time1Hours = time1Spliting[0];
		let time2Hours = time2Spliting[0];
		let time1HasMinutes = time1Spliting[1] || '00';
		let time2HasMinutes = time2Spliting[1] || '00';
		let time1 = time1Hours + ":" + time1HasMinutes + " " + amOrPmOfTime1;
		let time2 = time2Hours + ":" + time2HasMinutes + " " + amOrPmOfTime2;
		return new Date('2017/01/01 ' + time1) - new Date('2017/01/01 ' + time2);
	});
	return sortedData;
};

/*This method is for segregating  the items as per the week days and retuns an object*/ 
export const DATAFILTERADDINGDATA = (dataArray) => {
	let data = dataArray;
	let newObject = {};
	let newArray = [];
	let count;
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	let filterlist = data.map(function(item) {
		let year = new Date().getFullYear();
		let date = new Date(item.date + "," + year);
		let day = days[date.getDay()];
		item.day = day;
		return item;
	});

	count = filterlist.length;
	for(let i = 0; i < count; i++ ) {
		let item = filterlist[i];
		if(!newObject[item.day]) {
			newObject[item.day] = [];
		}
		newObject[item.day].push(item);
	}

	for(let i = 0; i < 7; i++ ) {
		let item = days[i];
		if(!newObject[item]) {
			newObject[item] = [];
		}
	}
	
	days.map((day) => {
		//removed 'index' from the 'map((data, index)' because it is throwing error: 'index' is defined but never used 
		DATATIME(newObject[day], 'time', CommonConstants.SORT_CLASS).map((data) => {
			newArray.push(data);
		});
	});
	
	return newArray;
};

export const todayHeader = () => {
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	let today = new Date();
	return days[today.getDay()] + " " + months[today.getMonth()] + " " + today.getDate();
};

export const AuthUserDetails = () => {
	return localStorage.roleInfo?JSON.parse(localStorage.roleInfo):{};
};

export const SEGREGATEDATA = (list) => {
	let newArray = [];
	for (var key in list) {
		var arr = list[key];
		let keys = Object.keys(arr);
		for (var j = 0; j < keys.length; j++) {
			var obj;
			let dataSize = arr[keys[j]].length;
			if (dataSize > 0) {
				var data = arr[keys[j]];
				for (var i = 0; i < dataSize; i++) {
					obj = data[i];
					obj.type = keys[j];
					newArray.push(obj)
				}
			}
		}
	}
	return newArray;
};

export const DATESORT = (dataArray, key) => {
	let date = dataArray;
	let sortByKey = key;
	let sortedData = date.sort(function (a, b) {
		var dateA = new Date(a[sortByKey] ), dateB = new Date(b[sortByKey])
		return dateA - dateB
	})
	return sortedData;
};