let my_array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
 let search = 100;
        for (var i=0; i<my_array.length; i++) {
            console.log(my_array[i]);
           
          if(my_array[i] === search){
            console.log("number is found");
          }
          else{
            console.log("number not found");
          }
        }