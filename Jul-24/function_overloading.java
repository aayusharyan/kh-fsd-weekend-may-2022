// Online Java Compiler - https://www.programiz.com/java-programming/online-compiler/
// Use this editor to write, compile and run your Java code online

class HelloWorld {
    public static void main(String[] args) {
        fn(10);
        fn("ABCD");
    }
    
    public static void fn(String str) {
        System.out.println("Print from function 1\n");
    }
    
    public static void fn(int str) {
        System.out.println("Print from function 2\n");
    }
}