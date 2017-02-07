export default function  (argument) {
  
	let title= "";
  if(argument.classDetails){
      return title = argument.classDetails;
  }
	const rootURL = argument.path.split("/");
	  if (rootURL[1] === "" || rootURL[1] === "dashboard") {
      return title = "My Creighton";
    }
    if (rootURL[1] === "classes" ) {
      return title = "ClassDetails";
    }
    if (rootURL[1] === "Profile" ) {
      return title = "My Profile";
    }
    if (rootURL[1] === "Academic" ) {
     	return title = "My Academic";
    }
}

