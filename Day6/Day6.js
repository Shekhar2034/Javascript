var array = [1,2,4,5,8,3,7,5,2,4];
var target = 10

function FindTargetValues(array, target)
{
    for(var i = 0; i < array.length -1; i++){
        for( var j = i + 1; j < array.length; j++){
            // console.log(array[i],array[j])
            if(array[i] + array[j] ==target)
            console.log(array[i], array[j])
        }
    }
}

FindTargetValues(array, target);