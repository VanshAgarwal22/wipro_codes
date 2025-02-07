
using System;

namespace Program;

class Program
{
    public static void Main()
    {

        //sum of number
        int sum =0, num, lastno = 0;

        Console.WriteLine("enter the number \n");
        num = int.Parse(Console.ReadLine());

        while(num!=0)
        {
            lastno = num % 10;
            num = num / 10;
            sum =sum+ lastno;
        }

        Console.WriteLine(sum);






        //int fact = 1;
        //int num = int.Parse(Console.ReadLine());


        //if (num == 0)
        //{
        //    Console.WriteLine("fact of 0  is 1");
        //}
        //else
        //{
        //    for (int i = num; i >= 1; i--)
        //    {
        //        fact = fact * i;
        //    }
        //    Console.WriteLine(fact);
        //}






    //    Console.WriteLine("enter the size of an array");
    //    int size = int.Parse(Console.ReadLine());

    //    int[] arr  =new int[size];
    //    int temp = 0;
    //    Console.WriteLine("give the inputs to teh array :");

    //    for(int i=0;i<size;i++) arr[i] = int.Parse(Console.ReadLine());

    //    Console.WriteLine("printing the array :");

    //    for(int i=0;i<size;i++)
    //    {
    //        Console.WriteLine(arr[i]);

    //    }
    //    Console.WriteLine("now apply the bubble sort on the above array /n:");

    //    for (int i = 0; i < size; i++)
    //    {
    //        for(int j=i+1;j<size;j++)
    //        {
    //            if(arr[i] > arr[j])
    //            {
    //                temp = arr[i];
    //                arr[i] =arr[j];
    //                arr[j] = temp;

    //            }
    //        }

    //    }

    //    Console.WriteLine("after sort :");

    //    for (int i = 0; i < size; i++)
    //    {
    //        Console.WriteLine(arr[i]);

    //    }


        //Console.WriteLine("enter the number you want to  reverse");
        //int num =int.Parse(Console.ReadLine());
        //int revnum = 0;


        //while(num != 0)
        //{
        //    revnum = revnum * 10;
        //    revnum = revnum + num % 10;
        //    num = num / 10;

        //}
        //Console.WriteLine(revnum);



        //string rev = "";
        //Console.WriteLine("enter the string you wanna reverse");

        //string source_string  =  Console.ReadLine();
        //for(int i=source_string.Length-1;i>=0;i--)
        //{
        //    rev =rev + source_string[i];
        //}

        //Console.WriteLine(rev);





        //Console.WriteLine("we wil  run the code of prime  number");

        //bool isprime = true;
        //int num = Convert.ToInt32(Console.ReadLine());
        //for(int i=2; i<=num; i++)
        //{
        //    for(int j=2; j<=num; j++)
        //    {
        //        if(i!=j && i%j==0)
        //        {
        //            isprime = false;
        //            break;

        //        }

        //    }
        //    if(isprime)
        //    {
        //        Console.WriteLine(i);
        //    }
        //    isprime = true;


        //}
    }
}