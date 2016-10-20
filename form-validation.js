/* javascript */
function validateUsername()
{
  var userEntered = document.getElementById("user").value;
  var space =userEntered.indexOf(" ");
  var passEntered = document.getElementById("pass").value;
    if  (userEntered.length >= 6)
    {
      document.getElementById("usernameGroup").classList.add("has-success");
      document.getElementById("usernameGroup").classList.remove("has-error");
    }

    else
    {
      //Show message that there is an error with the username...
      document.getElementById("usernameError").innerHTML="Username must have 6 or more characters.";
      document.getElementById("usernameError").classList.remove("hidden-message");
      document.getElementById("usernameError").classList.add("shown-message");
      //Turn the username items red
      document.getElementById("usernameGroup").classList.add("has-error");
      document.getElementById("usernameGroup").classList.remove("has-success");
    }
    if(space > -1)
    {
      document.getElementById("usernameError").innerHTML=" No spaces.";
      document.getElementById("usernameError").classList.remove("hidden-message");
      document.getElementById("usernameError").classList.add("shown-message");
      document.getElementById("usernameGroup").classList.add("has-error");
      document.getElementById("usernameGroup").classList.remove("has-success");
    }
    else
    {
      document.getElementById("usernameGroup").classList.add("has-success");
      document.getElementById("usernameGroup").classList.remove("has-error");
    }
}
function validatePassword()
{
  var passEntered = document.getElementById("pass").value;
  var userEntered = document.getElementById("user").value;
  var space =userEntered.indexOf(" ");
    if(passEntered != "password")
    {
      document.getElementById("passwordGroup").classList.add("has-success");
      document.getElementById("passwordGroup").classList.remove("has-error");
    }
    else
    {
      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML="Bad password.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("passwordGroup").classList.remove("has-success");
    }
    if (passEntered != userEntered)
    {
      document.getElementById("passwordGroup").classList.add("has-success");
      document.getElementById("passwordGroup").classList.remove("has-error");
    }
    else
    {
      document.getElementById("passwordError").innerHTML=" Password cannot be the same as the username.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("passwordGroup").classList.remove("has-success");
    }
    if (passEntered.length >= 6 && passEntered.length <= 20)
    {
      document.getElementById("passwordGroup").classList.add("has-success");
      document.getElementById("passwordGroup").classList.remove("has-error");
    }
    else
    {
      document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the username items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("passwordGroup").classList.remove("has-success");

    }
    if (passEntered.toLowerCase() != "password")
    {
      document.getElementById("passwordGroup").classList.add("has-success");
      document.getElementById("passwordGroup").classList.remove("has-error");
    }
    else
    {
      document.getElementById("passwordError").innerHTML=" Password can not be any form of the word password.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("passwordGroup").classList.remove("has-success");
    }
}
function enter()
{
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  window.alert("username " + userEntered);
  window.alert("password " + passEntered);
}
