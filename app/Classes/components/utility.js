/*Data sort method is used to sort the array items in asending or decending order*/
export const DATASORT = (data, sortByKey, SortOrder) => {
	var data = data;
	var sortByKey = sortByKey;
	var sortOrder = sortOrder || 'ASC';
	var sortedData = (SortOrder==='ASC')?([...data].sort((a, b)=> {
		return a[sortByKey]>b[sortByKey];
	})):([...data].sort((a, b)=> {
		return a[sortByKey]<b[sortByKey];
	}));
	return sortedData;
}

/*Data filter method is used to filter the array items*/
export const DATAFILTER = (data, filterValue, filterKey) => {
	var data = data;
	var filterValue = filterValue;
	var filterKey = filterKey;
	var filterlist = data.filter(function(item, index) {
		 return !item[filterKey].toLowerCase().indexOf(filterValue);
	});
	return filterlist;
}

/*This method is for segregating  the items as per the week days and retuns an object*/ 
export const DATAFILTERADDINGDATA = (data) => {
	var data = data;
	var newObject = {};
	var count;
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	var filterlist = data.map(function(item, index) {
	var date = new Date(item.date)
	var day = days[date.getDay()];
	item.day = day;
	return item
	});

	count = filterlist.length;
	for(var index = 0; index < count; index++ ) {
		var item = filterlist[index];
		if(!newObject[item.day]){
			newObject[item.day] = [];
		}
		newObject[item.day].push(item);
	};

	for(var index = 0; index < 7; index++ ) {
		var item = days[index];
		if(!newObject[item]){
			newObject[item] = [];
		}
	};
	
	return newObject;
}