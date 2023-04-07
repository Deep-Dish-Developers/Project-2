<script>
function confirmSubmit() {
  var confirmMsg = confirm("Are you sure you want to submit this form?");
  if (confirmMsg == true) {
    return true;
  } else {
    return false;
  }
}
</script>

<form action="process-form.php" method="POST" onsubmit="return confirmSubmit()">
  <!-- form fields go here -->
  <button type="submit">Submit</button>
</form>
