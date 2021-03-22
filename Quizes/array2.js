/*eslint-disable*/
function secondLargest(arr){
    let firstlargest=arr[0];
    let secondlargest=arr[0];
    //let thirdlargest=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<firstlargest){
            //thirdlargest=secondlargest
            secondlargest=firstlargest
            firstlargest=arr[i];
    }else if(arr[i]<secondlargest){
            \\secondlargest=firstlargest
       secondlargest=arr[i];
        //firstlargest=arr[i];
    }

    
    }
return secondlargest;
}
console.log(secondLargest([1,2,3,4,8,9,7,6,25,88]));
/*class Second_MaxMin
{
        public static void main(String[] args)
        {
                int arr[] = {23, 43,12, 19, 10, 52, 78, 25, 99, 2 };
                int max = arr[0];
                int secondmax = arr[0];
                int min = arr[0];
                int secondmin = arr[0];

                System.out.println("The given array is:" );
                for (int i = 0; i < arr.length; i++)
                {
                        System.out.print(arr[i]+" ");
                }
                System.out.println("\n=============================" );
                for (int i = 0; i < arr.length; i++)
                {
                        if (arr[i] > max)
                        {
                                secondmax = max;
                                max = arr[i];
                        }
                        else if (arr[i] > secondmax)
                        {
                                secondmax = arr[i];
                        }
                }
                for (int i = 0; i < arr.length; i++)
                {
                        if (arr[i] < min)
                        {
                                secondmin = min;
                                min = arr[i];
                        }
                        else if (arr[i] < secondmin)
                        {
                                secondmin = arr[i];
                        }
                }
                System.out.println("\nSecond maximum number is: " + secondmax);
                System.out.println("\nSecond minimum number is: " + secondmin);
        }
}*/
/*for (int i = 0; i < arr.length; i++)
                {
                        if (arr[i] > max)
                        {
                                secondmax = max;
                                max = arr[i];
                        }
                        else if (arr[i] > secondmax)
                        {
                                secondmax = arr[i];
                        }
                }
                for (int i = 0; i < arr.length; i++)
                {
                        if (arr[i] < min)
                        {
                                secondmin = min;
                                min = arr[i];
                        }
                        else if (arr[i] < secondmin)
                        {
                                secondmin = arr[i];
                        }
                }
                System.out.println("\nSecond maximum number is: " + secondmax);
                System.out.println("\nSecond minimum number is: " + secondmin);
        }
}*/