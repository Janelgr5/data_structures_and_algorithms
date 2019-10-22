# Definition
1. Big O time: the metric we use to describe the efficiency of algorithms.
2. Time Complexity: How the runtime of an algorithm grows as the inputs grow.
3. Space Complexity: How much additional memory do we need to allocate in order to run the code in our algorithm.
4. When determining BigO, count the number of simple operations the computer has to perform!
5. An algorithm is O(f(n)) if the number of simple operations the computer has to do  is eventually less than a constant times f(n), as n increases
   - f(n) could be linear (f(n) = n)
   - f(n) could be quadratic (f(n) = n^2)
   - f(n) could be constant (f(n) = 1)

# Time Complexity:
1. There's no fixed list of possible runtimes.
2. You can also have multiple variables in your runtime.
3. Big O, Big Theta, Big Omega
  - O (big O): an upper bound on the time.
    - The algorithms is at least as fast as this
  - Big Omega: the lower bound on the time.
    - The algorithm won't be faster than those runtimes.
  - Big Theta: both the upper and lower bound on the time.
    - Gives a tight. Bound on the runtime.
4. Best Case, Worst Case, Expected Case
  - We rarely ever discuss best case time complexity
  - For many-probably most-algorithms, the worst case and the expected case are the same. Sometimes they're different, though, and we need to describe both of the runtimes.

# Space Complexity:
1. The amount of memory (or space) required by an algorithm, not including space taken up by the inputs (auxiliary space complexity).
2. Parallel concept to time complexity.

# The Rules of Big O

## Drop the Constants (Contants don't matter)
1. It is very possible for O(N) code to run faster than 0(1) code for specific inputs.
2. Big O just describes the rate of increase.
3. we drop the constants in runtime. Examples:
   - O(2n) => O(n)
   - O(500) => O(1)
   - O(13n^2) => O(n^2)

## Drop the Non-Dominant Terms (Smaller terms don't matter)
1. You should drop the non-dominant terms.
  - O(n + 10) => O(n)
  - O(100n + 50) => O(n)
  - O(n^2 + 5n + 8) => O(n^2)
2. We might still have a sum in a runtime. For example, the expression 0(B^2 + A) cannot be reduced (without some special knowledge of A and B).

## Multi-Part Algorithms: Add vs. Multiply
1. Suppose you have an algorithm that has two steps. When do you multiply the runtimes and when do you add them?
2. If your algorithm is in the form "do this, then, when you're all done, do that" then you add the runtimes.
3. If your algorithm is in the form "do this for each time you do that" then you multiply the runtimes.

## Amortized Time
1. How do you describe the runtime of insertion?
2. It allows us to describe that, yes, this worst case happens every once in a while. But once it happens, it won't happen again for so long that the cost is "amortized.'
3. Instead of giving values for worst-case performance it provides an average performance
4. The reason for considering amortized cost is that we will be interested in data structures that occasionally can incur a large cost as they perform some kind of rebalancing or improvement of their internal state, but where such operations cannot occur too frequently.
  - In this case, amortized analysis can give a much tighter bound on the true cost of using the data structure than a standard worst-case-per-operation bound.
5. The aggregate method:
  - Amortized time looks at an algorithm from the viewpoint of total running time rather than individual operations.
    - We don’t care how long one insert takes, but rather the average time of all the calls to insert.
  - The amortized cost of an insert equals the sum of all insert costs divided by the number of inserts. It’s the arithmetic mean cost.
  - good when we’re trying to understand a series of operations, in particular a large number of them.
    - can hide performance issues.
  - It’s important to know whether a big O cost is the amortized, or the maximum cost. 
    - Hash maps are often victims here, with insertion labelled simply as O(1), rather than an amortized O(1) with a proper limit of O(N).
6. The accounting method:
  - Treated as a form of credits and debits.
  - Each time you perform an operation you put a credit into the machine.
    - The machine uses up these credits while performing the operation.
    - The amortized cost is the amount of credit needed for each operation such that the balance never falls below zero.
    - makes it easier to reason about individual amortized operations and sequences of different operations, like insert and remove.
7. The potential method:
  - The amortized cost of an operation is the amount it increases this potential.
  - The amortized cost equals the actual cost plus the difference in potential.
8. X insertions take 0(2X) time. The amortized time for each insertion is 0(1).
9. Resources:
  - https://mortoray.com/2014/08/11/what-is-amortized-time/
  - https://www.cs.cmu.edu/~avrim/451f11/lectures/lect0922.pdf

## Log N Runtimes
1. the inverse of exponentiation
2. The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.
3. When you see a problem where the number of elements in the problem space gets halved each time, that will likely be a O(log n) runtime.
   1. log_2(8) = 3 ==> 2^3 = 8
   2. log_2(value) = exponent ==> 2^exponent = value
4. When might we see logarithmic complexity (space/time):
   1. sorting algos
   2. searching algos
   3. recursion

## Recursive Runtimes
1. When you have a recursive function that makes multiple calls, the runtime will often (but not always) look like O(branches^depth), where branches is the number of times each

# Big O Tips
## Time Complexity
1. Arithmetic operations are constant time - O(1)
2. Variable assignment is constant time - O(1)
3. Accessing elements in an array (by index) or object (by key) is contant time - O(1)
4. In a loop, the time complexity is the length of the loop times the complexity of whatever happens inside of the loop - O(n), O(n^2), O(log n)
## Space Complexity
1. Most primitives (booleans, numbers, undefined & null) are constant space - O(1)
2. Strings require O(n) space (where n is the length of the string)
3. Reference types are generally O(n), where n is the length of an array or the number of keys in an object.

# Big O and the Object Data Type
## Use when you...
1. don't need order
2. need fast access, insertion, and removal
## The Big O of Objects
1. insertion - O(1)
2. removal - O(1)
3. searching - O(n)
4. accessing - O(1)
  ### The Big O of Object Methods
  1. Object.keys - O(n)
  2. Object.values - O(n)
  3. Object.entries - O(n)
  4. Object.hasOwnProperty - O(1)

# Big O and the Array Data Type
## Use when you..
1. need order
2. need fast access, insertion, and removal (sort of...?)
## The Big O of Arrays
1. insertion - it depends...
   1. where are we trying to insert?
      1. at the end? O(1)
      2. at the beginning? O(n)
2. removal - it depends...
   1. same as insertion
3. searching - O(n)
4. accessing - O(1)
  ### The Big O of Array Methods
  1. Array.push - O(1)
  2. Array.pop - O(1)
  3. Array.shift - O(n)
  4. Array.unshift - O(n)
  5. Array.concat - O(n) (debatable if it's O(m + n))
  6. Array.slice - O(n)
  7. Array.splice - O(n)
  8. Array.sort - O(n * log n)
  9. Array.forEach/map/filter/reduce/etc. - O(n)
