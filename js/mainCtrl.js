angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  //The getMessages function will call the getMessages method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)

$scope.getMessages = function(){
  messageService.getMessages().then(function(response){
    $scope.messages = response.data;
    var d = response.data;
    var date = (d.createdAt)
    for (item in d){
    var date = new Date(d[item].createdAt)
    }


      console.log(response.data[0].createdAt)

  })
}




  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.
  $scope.postMessage = function(message){
    messageService.postMessage(message)
  }



  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
    setInterval(function(){
     $scope.getMessages();

   }, 1500)

})
