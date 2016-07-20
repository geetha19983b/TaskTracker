var TaskApp = angular.module('TaskApp', [])

TaskApp.controller('TaskController', function ($scope, TaskService, $anchorScroll) {



    $scope.init = function (status) {


        getTaskList(status);

        $scope.display = status;
        $scope.show = "All";

        $scope.Tasks = {
            TaskId: '',
            TaskName: '',
            Status: '',
            Users:'',
            Comments: ''
        };
        $scope.TaskstatusValues = ["New", "InProgress", "Completed"];

        $scope.TaskUsers = ["Geetha", "Humridha", "Stephen", "Anitha", "Sivaram", "Subramani", "Devi", "Divya", "Durga"];
        
        $scope.Tasks.Status = $scope.TaskstatusValues[0];

    }




    function getTaskList(status) {
        TaskService.getTaskList(status)
        .success(function (tasks) {

            // $scope.cslcomments = cslcomment;

            $scope.model = tasks;


            //alert(categories);
            console.log($scope.model);

        })

            .error(function (error) {

                $scope.status = 'Unable to load tasks data: ' + error.message;

                console.log($scope.status);

            });
    }
    /* Filter Function for All | Incomplete | Complete */
    $scope.showFn = function (task) {

        if ($scope.show === "All") {
            return true;
        } else if (task.Status === "New" && $scope.show === "New") {
            return true;
        } else if (task.Status === "InProgress" && $scope.show === "InProgress") {
            return true;
        }
        else if (task.Status === "Completed" && $scope.show === "Completed") {
            return true;
        }
        else {
            return false;
        }
    };
    //$scope.Tasks = {
    //    TaskId: 0,
    //    TaskName: '',
    //     Status: '',
    //    //Status:$scope.status[0],
    //    Comments: ''
    //};
    // Reset product details
    $scope.clear = function () {
        $scope.Tasks.TaskId =0;
        $scope.Tasks.TaskName = '';
        $scope.Tasks.Status = '';
        $scope.Tasks.Status = 0;
        $scope.Tasks.Users = 0;
        $scope.Tasks.Comments = '';
    }
    // Edit product details
    $scope.edit = function (data) {
        $scope.Tasks = { TaskId: data.TaskId, TaskName: data.TaskName, Status: data.Status, Comments: data.Comments,Users:data.Users };
    }

    // Cancel product details
    $scope.cancel = function () {
        $scope.clear();
    }
    // Update product details
    $scope.update = function () {
        if ($scope.Tasks.TaskName != "" &&
      $scope.Tasks.Status != "") {
            var editdata = TaskService.updateTasks($scope.Tasks.TaskId, $scope.Tasks);
            editdata.then(function successCallback(response) {
              //  $scope.model = response.data;
                getTaskList("All");
                $scope.clear();
                alert("Task Updated Successfully !!!");
            }, function errorCallback(response) {
                alert("Error : " + response.data.ExceptionMessage);
            });
        }
        else {
            alert('Please Enter All the Values !!');
        }
    };
    $scope.addtask = function () {

        if ($scope.Tasks.TaskName != "" &&
      $scope.Tasks.Status != "") {
            $scope.Tasks.TaskId = 0;
           

            var addData = TaskService.addTasks($scope.Tasks);
            addData.then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.model.push(response.data);
                $scope.clear();
                alert("Task Added Successfully !!!");
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("Error : " + response.data.ExceptionMessage);
            });
        }
        else {
            alert('Please Enter All the Values !!');
        }
    };

    // Delete product details
    $scope.delete = function (index) {
        var deldata = TaskService.DeleteTasks($scope.model[index].TaskId);
        deldata.then(function successCallback(response) {
            $scope.model.splice(index, 1);
            alert("Task Deleted Successfully !!!");
        }, function errorCallback(response) {
            alert("Error : " + response.data.ExceptionMessage);
        });
    };




});