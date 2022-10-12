Kotlin cheatsheet
Quick guide for Kotlin syntax and what it means

Kotlin is an expressive programming language with a strong type system featuring type inference. It has Lambdas, Coroutines, Properties and many other featires that allow us to write less code with fewer bugs.
Advantages of Kotlin

    Smart and concise- Kotlin code is smart and concise. We can write lesser code and hence lesser bugs. It avoids boiler plate code (code that we need to write in other languages like java, but does not really affect how our app works). For e.g.: we do not have to initialize setters, getter and toString methods in Koltin. Below class declaration does it automatically.

Class ExampleClass(var foo:Int=0)

    Null pointer exceptions- Kotlin distinguishes between nullable and non- nullable data types.
    Designed for readability. Kotlin is easy to read
    Statically typed object oriented, modern programming language and has extensions for classes
    Open sourced
    Supports lambdas and higher-order functions
    Official language- Kotlin is the officially supported language for Android development and included with intelliji and Android studio. It is developed for developers.

    Tip: You can see how your kotlin commands work in Kotlin REPL. You can open REPL from the IDE. Tools -> Kotlin ->Kotlin REPL. Once you typed the command to test, click cmd/ctrl +enter to execute

    Tip: It might be a good idea to also go over Kotlin docs for each topic we talk about.
    
1. Variables

There are 2 types of variables- changeable and non-changeable. varaibles of type val are non changeable and of type var are changeable.

    Checkout CheatSheet.kt in the git project for example

a. val — value whose value cannot be changed, like final: now i cannot say foo=2, else it will give me “val cannot be reassigned” error

        val foo=5 
        foo=2 //will get error

b. var - variable whose value can be changed: Now I can re-assign foo to any integer, but if I change the type to string, long, etc I will get "error: type mismatch: inferred type is String but Int was expected".Type of val and var is determined the first time compiler compiles the object.

        var foo1=10
        foo1=3

c. Cannot initialize string variable to a variable of int type: Will get "error: type mismatch: inferred type is String but Int was expected". We can do this by casting.

        val b:Int="1" (will throw error) // will get exception java.lang.NumberFormatException
        val c:Int="c".toInt() // will assign 1 to d
        val d:Int="1".toInt()

d. Supports underscores, so we can specify long constants in a format that makes sense for us

        val oneMillion=1_000_000
        val socialSecurityNumber=999_99_9999L
        val hexBytes=0xFF_EC_DE_5E
        val bytes=0b11010010_01101001_10010100_100010010

e. Nullability: Kotlin does null safety

        // variable cannot be null -"error: null can not be a value of a non-null type Int"
        var marbles:Int =null. (will throw error)// use ? to indicate a variable can be null
        var marbles:Int ?=null// list values can be null, but list cannot be null
        var nonNullListWithNullableitems: List<String?> = listOf(null,null)// list can be null, but values in the list cannot be null
        var nullableListWithNonNullitems: List<String>? =null// list can be null and values in the list can be null
        var nullableListWithNullableitems: List<String?>? =null 
        nullableListWithNullableitems =listOf(null,null)

        // to get size of list use - will return 2 in this case
        nonNullListWithNullableitems?.size

Bad practice to use bang (!!): To keep nullability for a variable, we can force our way past a not null type in Kotlin using “not null” exception !!. It will still throw exception when its null

        var foo = Foo()
        foo!!.hello()
        foo=nullclass Foo{
        fun hello(){
              println("Hello World!")
            }
        }
        
2. Operators +-/* (plus,minus,division,times,etc)

Operators are basic functions we can do to a number. Kotlin stores number variables as primitives so you can call methods on them. For eg: I can call add,sub,div and times on my variable foo.
       
       //Checkout OperatorsActivit.kt in the git project for example
       var foo=1
       var foo1=1
       var foo2=true1.+-/*
       foo=foo.add(10)    //now foo=11
       foo=foo.div(1)     //now foo=10
       foo=foo.div(2)     //now foo=5
       foo=foo.times(10)  //now foo=502.== ,!=, < ,> ,<=, >=,etc just like in other languages  
       foo==foo1 //returns true
       foo==foo2 //returns false
       foo!=foo2 //returns true
       foo<foo1  //false
       foo<=foo1 //true
3. Conditions

       //Checkout CheatSheet.kt in the git project for example
       class Foo{
             fun hello(){
                 println("Hello World!")
             }
       }

a. safe call operator ?.
We can do null testing with the safe call operator(?.). This saves us a lot of if-else conditions.Access the method of a variable only if the variable is not null. Below example says if foo object is not null then access hello()

        var foo = Foo()
        foo?.hello()  <-equivalent to-> if(foo!=null){foo.hello()}

b. Elvis operator ?:
When you have a nullable reference, b, you can say "if b is not null, use it, otherwise use some non-null value":

        val l: Int = if (b != null) b.length else -1

Instead of writing the complete if expression, you can also express this with the Elvis operator ?::

       val l = b?.length ?: -1
       val l1 = b?.length ?:throw IllegalArgumentException(“name expected”)

If the expression to the left of ?: is not null, the Elvis operator returns it, otherwise it returns the expression to the right. Note that the expression on the right-hand side is evaluated only if the left-hand side is null.

Since throw and return are expressions in Kotlin, they can also be used on the right-hand side of the Elvis operator.  

4. Loops

1. When expression:when defines a conditional expression with multiple branches. It is similar to the switch statement in java. Its simple form looks like this. When automatically breaks unlike switch statements in java

       when (x) {     
            1  -> print("x == 1")     
            2..5 -> print("x == 2")     
            else -> {print("x is neither 1 nor 2")} 
       }

We can return a when statement directly, but make sure there is an else to cover cases when non of the conditions are met as shown below.

       fun getfood(day:String){
       return when(day){
          "monday" ->flakes
          "tuesday" ->"pebbles"
          else ->"fast"
       }
}

2. For expression: we often want to do something with elements in the arrays or lists. this often happens with a for loop.

       val list = listOf("One", "Two", "Three")//to navigate list by indices
       for (i in list.indices) {
       println(list[i] +" ")
       }//to navigate list by element
       for (i in list) {
           println(i)
      
       }val arr=arrayOf(1,"salmon","shark")
       
       //to navigate array by indices
       for((index,element) in arr.withIndex()){
          println("Index= $index and element= $element \n")
       }for(i in 1..5){
          println(i)  // prints 12345
       }for(i in 5 down 1){
          println(i)  // prints 54321
       }for(i in 3..6 step 2){
          println(i)  // prints 35
       }

Along with just going over the elements of the array. We can also loop the array along with the index

       val mix=arrayOf(1,"salmon","shark")
        for((index,elelment) in myList.withindex ){
         println("index is $index and element is $element)
       } 
       
5. Arrays and Lists

Lists: A list is an ordered collection of items.

arrayListOf() and mutableListOf() creates mutable lists similar to ArrayList() in java

        val myMutableList = mutableListOf("one" , "two" , "three")
        myMutableList.add("four") // it's ok
        var mutableList : MutableList<String> = arrayListOf() //Declaration

It does not matter that myMutableList is a val variable. It only means we cannot assign a different reference later. However because myMutableList is mutable list we can make changes to the list.
e.g: We cannot assign a new list to myMutableList, but we can make changes to the list

listOf() creates immutable list, similar to Arrays.asList in Java. If we try to change the list we get an error Unresolved reference. Here we get the error when we try to add to myList.add()

        val myList = listOf("one" , "two" , "three")
        myList.add()

Arrays: Array where type is inferred from array elements. Basic array declaration is shown below and different types are arrays follows.

        val school=arrayOf("tuna","salmon","shark")

Typed arrays: Array where we are saying it is an int array

        val numbers= intArrayOf(1,2,3)

Mixed Arrays: Arrays can have mixed types. We can cast it into a specific type and print it

        val mix=arrayOf(1,"salmon","shark") 
        println(Arrays.toString(mix))

Nested Arrays: array inside another array

        val nestedArrays_declaration1 = arrayOf("tuna","salmon","shark", *mix)val nestedArrays_declaration2 = arrayOf("tuna","salmon","shark", arrayOf(1,"salmon","shark"))println(Arrays.toString(nestedArrays_declaration1))
        println(Arrays.toString(nestedArrays_declaration2))

Create an array of size 5, where each element is its index *2

        val array=Array(5) {it *2}
        println(array.asList()). //output: [0,2,4,6,8]

6. Functions
Ranges ..

Ranges can be used to see if an element in between a certain range. Below is the java code and ranges in kotlin can simplify this.

        var foo = 50
        if(foo<100) println("less than 100")

This can be made simple in Kotlin using ranges.Both will print "less than 100".

        if(foo in 0..100) println("less than 100")

        Print $ or ${ }

You can use print a statement in either ways shown below

        var word="Keep going! your awesome!!"
        println("Hello World!") //output: Hello World!
                      or
        println("ToPrint: $word") //output: ToPrint: Keep going! your awesome!!//Printing an array
        println(Arrays.toString(arrayName))       
