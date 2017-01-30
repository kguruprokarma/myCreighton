export default function  (argument) {
	let title= "";
	const rootURL = argument.split("/")
	if (rootURL[1] === "" || rootURL[1] === "dashboard") {
      return title = "My Creighton";
    }
    if (rootURL[1] === "classes" ) {
      return title = "Classes";
    }
    if (rootURL[1] === "ToDo" ) {
      return title = "To-Do List";
    }
    if (rootURL[1] === "ToDoItemDescription" ) {
      return title = rootURL[2];
    }
    if (rootURL[1] === "schoolSemester" ) {
      return title = "School & Semester";
    }
    if (rootURL[1] === "Events" ) {
      return title = "Events List";
    }
    if (rootURL[1] === "Profile" ) {
      return title = "My Profile";
    }
    if (rootURL[1] === "Academic" ) {
     	return title = "My Academic";
    }
}