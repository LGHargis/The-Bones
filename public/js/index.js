// Get references to page elements
var nameInput = $("#user-name");

var password = $("#password");
// The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function (Users) {
    return $.ajax({
      type: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      url: "/api/Users",
      data: JSON.stringify(Users)
    });
  },
  // getUser: function () {
  //   return $.ajax({
  //     url: "api/Users",
  //     type: "GET"
  //   });
  // },
  // deleteUser: function (id) {
  //   return $.ajax({
  //     url: "api/Users/" + id,
  //     type: "DELETE"
  //   });
  // }
};

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function () {
//   API.getExamples().then(function (data) {
//     var $examples = data.map(function (example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var Users = {
    userName: nameInput.val().trim(),
    password: password.val().trim(),
  };

  if (!(Users.userName && Users.password)) {
    alert("You must enter a username and password!");
    return;
  }

  API.saveUser(Users)

  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
  // var handleDeleteBtnClick = function () {
  //   var idToDelete = $(this)
  //     .parent()
  //     .attr("data-id");

  //   API.deleteExample(idToDelete).then(function () {
  //     refreshExamples();
  //   });
  // };
}
// Add event listeners to the submit and delete buttons
$("#user-form").on("click", handleFormSubmit);

// $exampleList.on("click", ".delete", handleDeleteBtnClick);
