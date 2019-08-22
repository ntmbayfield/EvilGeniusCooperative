

document.addEventListener('DOMContentLoaded', () => {
+  login();
+})
+
+function login() {
+  getInfo();
+
+  document.addEventListener('submit', (event) => {
+    event.preventDefault();
+
+    let userObj = {};
+    let name = document.getElementById('inputEG_name');
+    let password = document.getElementById('inputPassword');
+    let isRemembered = event.target[2].checked;
+    userObj.name = name.value;
+    userObj.password = password.value;
+    userObj.isRemembered = isRemembered;
+
+    // store user data into localStorage
+    localStorage.setItem('USERS_SAVED', JSON.stringify(userObj));
+
+    // redirects the page to puzzle.html
+    document.location = 'profile.html';
+  })
+
+}
+
+function getInfo() {
+  let user = JSON.parse(localStorage.getItem('USERS_SAVED')) || false;
+  if (user.isRemembered) {
+    let nameSaved = document.getElementById('inputEG_name');
+    let passwordSaved = document.getElementById('inputPassword');
+    let isRememberedSaved = document.getElementById('remember');
+    nameSaved.value = user.name;
+    passwordSaved.value = user.password;
+    isRememberedSaved.setAttribute('checked', user.isRemembered);
+  }
+}
