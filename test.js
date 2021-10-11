function myFunction() {
    var txt;
    var r = confirm("Amonut");
    if (r == false) {
      txt = "470";
    } else {
      txt = "you will have 4 hundred notes 1 fifty notes 2 ten notes";
    }
    document.getElementById("demo").innerHTML = txt;
  }


