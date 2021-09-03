/// ARRAYS ///
// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 

/// FINAL VALUES ///
//var _final_password; 
var _final_pwd_length;
var _final_chk_numeric;
var _final_chk_upper;
var _final_chk_lower;
var _final_chk_special;

/// HTML CONTROLS ///
var _ctrl_pwd_slider = document.querySelector('#pwd-length');
var _disp_pwd_value = document.querySelector('.pwd-length');
var _chkbox_numeric = document.querySelector('#chk-numeric');
var _chkbox_upper = document.querySelector('#chk-uppercase');
var _chkbox_lower = document.querySelector('#chk-lowercase');
var _chkbox_special = document.querySelector('#chk-special');

var generateBtn = document.querySelector("#generate");

/// SETTING INITIAL VALUES ///
function initialValues () {
  //Password Length
  _disp_pwd_value.textContent = _ctrl_pwd_slider.value; 
  _final_pwd_length = _ctrl_pwd_slider.value;
  //Numeric
  _final_chk_numeric = _chkbox_numeric.checked;
  //Uppercase
  _final_chk_upper = _chkbox_upper.checked;
  //Lowercase
  _final_chk_lower = _chkbox_lower.checked;
  //Special Characters
  _final_chk_special = _chkbox_special.checked;
  return;
}

/// EVENT LISTENERS ///
function eventListeners() {
  //Password Length Slider
  _disp_pwd_value.textContent = _ctrl_pwd_slider.value;
  _final_pwd_length = _disp_pwd_value.textContent;
  //Number Checkbox
  _final_chk_numeric = _chkbox_numeric.checked
  //Uppercase Checkbox
  _final_chk_upper = _chkbox_upper.checked
  //Lowercase Checkbox
  _final_chk_lower = _chkbox_lower.checked
  //Special Characters Checkbox
  _final_chk_special = _chkbox_special.checked
  return;
}

/// GENERATING THE PASSWORD
function writePassword() {
  var generatePassword = function () {
    
    var _final_password;
    var combinedArray = [];

    var generatePwdList = function (x) {
      var newList = [];
      for (var i=0;i < _final_pwd_length;i++ ) {
        newList.push(
          (x[Math.floor(Math.random() * x.length)])       
        );
      }
      _final_password = newList.join('');
      return;
    };
    
    // 1 SELECTION
    if (_final_chk_numeric === true &&_final_chk_upper === false && _final_chk_lower === false && _final_chk_special === false) {
      combinedArray = numericCharacters;
      generatePwdList(combinedArray);
    }else if (_final_chk_numeric === false &&_final_chk_upper === true && _final_chk_lower === false && _final_chk_special === false) {
      combinedArray = upperCasedCharacters;
      generatePwdList(combinedArray);
    }else if (_final_chk_numeric === false &&_final_chk_upper === false && _final_chk_lower === true && _final_chk_special === false) {
      combinedArray = lowerCasedCharacters;
      generatePwdList(combinedArray);
    }else if (_final_chk_numeric === false &&_final_chk_upper === false && _final_chk_lower === false && _final_chk_special === true) {
      combinedArray = specialCharacters;
      generatePwdList(combinedArray);
    // 2 SELECTION - PRIMARY: NUMERIC
    }else if (_final_chk_numeric === true &&_final_chk_upper === true && _final_chk_lower === false && _final_chk_special === false) {
      combinedArray = numericCharacters.concat(upperCasedCharacters);
      generatePwdList(combinedArray);
    }else if (_final_chk_numeric === true &&_final_chk_upper === false && _final_chk_lower === true && _final_chk_special === false) {
      combinedArray = numericCharacters.concat(lowerCasedCharacters);
      generatePwdList(combinedArray);
    }else if (_final_chk_numeric === true &&_final_chk_upper === false && _final_chk_lower === false && _final_chk_special === true) {
      combinedArray = numericCharacters.concat(specialCharacters);
      generatePwdList(combinedArray);
    // 2 SELECTION - PRIMARY: UPPERCASE
    }else if (_final_chk_numeric === false &&_final_chk_upper === true && _final_chk_lower === true && _final_chk_special === false) {
      combinedArray = upperCasedCharacters.concat(lowerCasedCharacters);
      generatePwdList(combinedArray);
    }else if (_final_chk_numeric === false &&_final_chk_upper === true && _final_chk_lower === false && _final_chk_special === true) {
      combinedArray = upperCasedCharacters.concat(specialCharacters);
      generatePwdList(combinedArray); 
    // 2 SELECTION - PRIMARY: LOWERCASE
    }else if (_final_chk_numeric === false &&_final_chk_upper === false && _final_chk_lower === true && _final_chk_special === true) {
      combinedArray = lowerCasedCharacters.concat(specialCharacters);
      generatePwdList(combinedArray);
    // 3 SELECTIONS
    }else if (_final_chk_numeric === true &&_final_chk_upper === true && _final_chk_lower === true && _final_chk_special === false) {
      combinedArray = numericCharacters.concat(upperCasedCharacters.concat(lowerCasedCharacters));
      generatePwdList(combinedArray);
    }else if (_final_chk_numeric === true &&_final_chk_upper === true && _final_chk_lower === false && _final_chk_special === true) {
      combinedArray = numericCharacters.concat(upperCasedCharacters.concat(specialCharacters));
      generatePwdList(combinedArray);
    }else if (_final_chk_numeric === true &&_final_chk_upper === false && _final_chk_lower === true && _final_chk_special === true) {
      combinedArray = numericCharacters.concat(lowerCasedCharacters.concat(specialCharacters));
      generatePwdList(combinedArray);
    }else if (_final_chk_numeric === false &&_final_chk_upper === true && _final_chk_lower === true && _final_chk_special === true) {
      combinedArray = upperCasedCharacters.concat(lowerCasedCharacters.concat(specialCharacters));
      generatePwdList(combinedArray);
    // ALL SELECTED
    }else if (_final_chk_numeric === true &&_final_chk_upper === true && _final_chk_lower === true && _final_chk_special === true) {
      combinedArray = numericCharacters.concat(upperCasedCharacters.concat(lowerCasedCharacters.concat(specialCharacters)));
      generatePwdList(combinedArray);
    }else {
      window.alert("Please select at least one password criteria.");
      return "";
    }
    return _final_password;
  };
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

this.initialValues();

_ctrl_pwd_slider.addEventListener('input', eventListeners);
_chkbox_numeric.addEventListener('click', eventListeners);
_chkbox_upper.addEventListener('click', eventListeners);
_chkbox_lower.addEventListener('click', eventListeners);
_chkbox_special.addEventListener('click', eventListeners);
generateBtn.addEventListener("click", writePassword);