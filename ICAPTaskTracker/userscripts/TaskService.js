TaskApp.service('TaskService', ['$http', function ($http) {
    var strUrl = "";


    this.getTaskList = function (status) {
       
        // alert('in service' + status);
        if (rootDir != "/") {
            strUrl = rootDir + '/api/Tasks?status=' + status;
        }
        else {
            strUrl = '/api/Tasks?status=' + status;
        }

        var response = $http.get(strUrl);
        //var response = $http({
        //    method: "get",
        //    url: strUrl,
        //   // data: JSON.stringify(statusobj),
        //    dataType: "json"
        //});
        return response;

    }


    // Add Tasks
    this.addTasks = function (tasks) {
      // alert('in service add');
        if (rootDir != "/") {
            strUrl = rootDir + '/api/Tasks';
        }
        else {
            strUrl = '/api/Tasks';
        }
        var response = $http({
            method: "post",
            url: strUrl,
            data: JSON.stringify(tasks),
            dataType: "json"
        });
        return response;
    }
    // Update taks
    this.updateTasks = function (id,tasks) {
        //alert('in updated service');
        if (rootDir != "/") {
            strUrl = rootDir + 'api/Tasks/' + id ;
        }
        else {
            strUrl = '/api/Tasks/' + id;
        }

        var response = $http({
            method: "PUT",
            url: strUrl,
            data: tasks,
            dataType: "json"
        });
        return response;
    }

    //Delete tasks
    this.DeleteTasks = function (taskId) {
        // alert('in delete service');
        if (rootDir != "/") {
            strUrl = rootDir + 'api/Tasks/' + taskId;
        }
        else {
            strUrl = '/api/Tasks/' + taskId;
        }
        var response = $http({
            method: "delete",
            url: strUrl,
            params: {
                taskId: taskId
            }
        });
        return response;
    }


}]);