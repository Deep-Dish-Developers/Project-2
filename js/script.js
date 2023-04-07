function confirmSubmit() {
  var confirmMsg = confirm("Are you sure you want to submit this form?");
  if (confirmMsg == true) {
    return true;
  } else {
    return false;
  }
}
