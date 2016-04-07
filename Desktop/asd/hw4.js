var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=bf073841-c734-49bf-a97f-3757a6013812";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      console.log(data);
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}

function viewdetails(){
    items = items + "<li class='list-group-item'>" + key + ":" + spot[key] + "</li>";
}
