export default function (argument) {
  let title = "";
  const rootURL = argument.path.split("/");
  if (rootURL[1] === "" || rootURL[1] === "dashboard") {
    return title = "My Creighton";
  }
  if (rootURL[1] === "classes") {
    return title = "Class Schedule";
  }
  if (rootURL[1] === "ClassDetails") {
    return title = "Class Detail";
  }
  if (rootURL[1] === "Profile") {
    return title = "My Profile";
  }
  if (rootURL[1] === "Academic") {
    return title = "My Academic";
  }
}

