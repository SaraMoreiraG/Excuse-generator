window.onload = function() {
  let who = ["My dog ", "A crazy musician ", "My dad ", "A homeless "];
  let action = ["ate ", "throw ", "burned ", "kicked "];
  let what = ["my homework ", "my car ", "my laptot ", "my glasses "];
  let where = ["in the river", "on the street", "next to the toilet", "in my house"];
  let whonumber = Math.floor(Math.random() * 4);
  let actionnumber = Math.floor(Math.random() * 4);
  let whatnumber = Math.floor(Math.random() * 4);
  let wherenumber = Math.floor(Math.random() * 4);
  let newexcuse = who[whonumber] + action[actionnumber] + what[whatnumber] + where[wherenumber];
  document.getElementById("excuse").innerText = newexcuse;
};
