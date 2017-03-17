(function(){
    var Geo = function(){
     
    //Inner function to transform crags in markers
     this.convertToMarkers = function(data){
            //Initialize array of marker objects
            var cmks=[];
  
            for(var i=0;i<data.length;i++)
            {
                var latitude = parseFloat(data[i].location[0]).toFixed(3);
                var longitude = parseFloat(data[i].location[1]).toFixed(3);
                var title = data[i].name;
            
                //set the latitude,longitude,title
                var markerObj = {
                                    id: i,
                                    coords: {
                                        latitude: latitude,
                                        longitude: longitude
                                    },
                                    title: title
                };

                cmks.push(markerObj);
            }
            // returns an array of marker objects (lat,long,title,id)
            return cmks;
     };
};

angular.module('cragfinder').service('Geo',Geo);

}());


