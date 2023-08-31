
var form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var frstname = document.getElementById('frstname').value;
  var lstname = document.getElementById('lstname').value;
  var dob = document.getElementById('dob').value;
  var num = document.getElementById('num').value;
  var email = document.getElementById('email').value;

  var selectedOption = document.querySelector('input[name="gender"]:checked');
  var selectedValue = selectedOption ? selectedOption.value : "Not specified"; // Default value if no option is selected

  var city = document.getElementById('city').value;
  var country = document.getElementById('country').value;

  var crs = document.getElementById('crs');
  var courseName = crs.options[crs.selectedIndex].textContent;

  disp(frstname, lstname, dob, num, email, selectedValue, city, country, courseName);
});

function disp(frstname, lstname, dob, num, email, selectedValue, city, country, courseName) {
  let box = document.getElementById('display');
  box.innerHTML = `First Name: ${frstname}<br> Last Name: ${lstname}<br>  Date Of Birth: ${dob}<br>  
  Contact: ${num}<br>   E-mail: ${email}<br>   Gender: ${selectedValue}<br>   Cit Country: ${country}<br> 
  Course: ${courseName}`;
}
