/*
 * All of the code in this file was written by Michael C. Rodrigues.
 * At the time of writing this code, he is in his 2nd year at 
 * Northeastern University and is currently pursuing a Dual Major in
 * Computer and Information Science.
 *
 * It is free for public use, and may be distributed WITHOUT any WARRANTY.
 * 
 * If you choose to use this program, I am in no way liable for any incorrect
 *    results or data collected.
 *
 * If you wish to use/test this file, run: java MFactor for the syntax.
 *
 * As you can tell from the code below, the main method runs dataCheck to ensure
 * correctness of the results.  You may disable this dataCheck to allow for
 * higher efficiency, however it is not recommended for quality assurance 
 * reasons.
 */

import java.io.*;
import java.util.ArrayList;

// Public class which represents a number factoring application
public class MFactor {

    // Main Method - Parses Execution Line for int input and initializes methods
    public static void main(String[] args) {
        try {
            int value = Integer.parseInt(args[0]); // Parse for int input

            // Factor the given number and return an ArrayList of factors
            ArrayList<Integer> factors = MFactor.findFactors(value);

            // Check the list of factors for correctness. If incorrect, throw an
            MFactor.dataCheck(value, factors);   // exception to notify the user

            MFactor.printFactors(value, factors);// Print the factors out
        }
        catch(Exception e) { // Catch exception - Data Check or Syntax Errors
            if (e.equals( //Data Check Error
                new RuntimeException("Data Check Failed with arg: " + args[0])))
                             
                System.out.println("Internal Error Occurred!" + e);
            else { // Syntax Error
                System.out.println("Syntax Error: ");
                System.out.println("   Please initialize as follows:");
                System.out.println("   java MFactor X");
                System.out.println("   where X is an Integer");
            }
        }
    }

    // Find the factors of the given value and return them in an ArrayList
    public static ArrayList<Integer> findFactors(int arg) {
        ArrayList<Integer> factors = new ArrayList<Integer>();
        while(arg != 1) {
            int factor = MFactor.findFactor(arg);
            arg = arg/factor;
            factors.add(factor);
        }
        return factors;
    }

    // Find the smallest factor of the given number and produce it
    private static int findFactor(int arg) {
        int i = 2; // Start at 2 because every number is divisible by 1
        while(i <= arg) {
            if ((arg % i) == 0)
                return i;
            else i++;
        }
        return -1; // This line should never be reached
    }

    // Check that the product of the factors equals the given value
    private static boolean dataCheck(int arg, ArrayList<Integer> factors) {
        int acc = 1;
        ArrayList<Integer> tmp = new ArrayList<Integer>(factors);
        while(!tmp.isEmpty()) {
            acc = acc * tmp.remove(0);
        }
        if (acc == arg) // Test Passes
            return true;
        else // Test Fails - notify user of failure. Prevent printing of factors
            throw new RuntimeException("Data Check Failed with arg: "+ arg);
    }

    // Print all of the given factors for the user to see
    private static void printFactors(int arg, ArrayList<Integer> factors) {
        System.out.println("Factors of " + arg + " are: ");
        System.out.print("[ ");
        for(Integer i: factors) {
            System.out.print(i + " ");
        }
        System.out.print("]");
        System.out.println();
    }
}
