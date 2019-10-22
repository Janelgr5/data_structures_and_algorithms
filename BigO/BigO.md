Big O time: the metric we use to describe the efficiency of algorithms.
When determining BigO, count the number of simple operations the computer has to perform!

Time Complexity:
	1. There's no fixed list of possible runtimes.
	2. You can also have multiple variables in your runtime.
	3. Big O, Big Theta, Big Omega
		a. O (big O): an upper bound on the time.
			i. The algorithms is at least as fast as this
		b. Big Omega: the lower bound on the time.
			i. The algorithm won't be faster than those runtimes.
		c. Big Theta: both the upper and lower bound on the time.
			i. Gives a tight. Bound on the runtime.
	4. Best Case, Worst Case, Expected Case
		a. We rarely ever discuss best case time complexity
		b. For many-probably most-algorithms, the worst case and the expected case are the same. Sometimes they're different, though, and we need to describe both of the runtimes.

Space Complexity:
	1. The amount of memory (or space) required by an algorithm.
	2. Parallel concept to time complexity.

Drop the Constants:
	1. It is very possible for O(N) code to run faster than 0(1) code for specific inputs.
	2. Big O just describes the rate of increase.
	3. we drop the constants in runtime.
		a. An algorithm that one might have described as 0(2N) is actually O(N).

Drop the Non-Dominant Terms
	1. You should drop the non-dominant terms.
	2. O(N2 + N) becomes O(N2).
	3. O(N + log N) becomes O(N).
	4. 0(5*2N + 1000N100 ) becomes 0(2N ).
	5. We might still have a sum in a runtime. For example, the expression 0(B2 + A) cannot be reduced (without some special knowledge of A and B).

Multi-Part Algorithms: Add vs. Multiply
	1. Suppose you have an algorithm that has two steps. When do you multiply the runtimes and when do you add them?
	2. If your algorithm is in the form "do this, then, when you're all done, do that" then you add the runtimes.
	3. If your algorithm is in the form "do this for each time you do that" then you multiply the runtimes.

Amortized Time
	1. How do you describe the runtime of insertion?
	2. It allows us to describe that, yes, this worst case happens every once in a while. But once it happens, it won't happen again for so long that the cost is "amortized.'
	3. Instead of giving values for worst-case performance it provides an average performance
	4. The reason for considering amortized cost is that we will be interested in data structures that occasionally can incur a large cost as they perform some kind of rebalancing or improvement of their internal state, but where such operations cannot occur too frequently.
		a. In this case, amortized analysis can give a much tighter bound on the true cost of using the data structure than a standard worst-case-per-operation bound.
	5. The aggregate method:
		a. Amortized time looks at an algorithm from the viewpoint of total running time rather than individual operations.
			i. We don’t care how long one insert takes, but rather the average time of all the calls to insert.
		b. The amortized cost of an insert equals the sum of all insert costs divided by the number of inserts. It’s the arithmetic mean cost.
		c. good when we’re trying to understand a series of operations, in particular a large number of them.
			i. can hide performance issues.
		d. It’s important to know whether a big O cost is the amortized, or the maximum cost. 
			i. Hash maps are often victims here, with insertion labelled simply as O(1), rather than an amortized O(1) with a proper limit of O(N).
	6. The accounting method:
		a. Treated as a form of credits and debits.
		b. Each time you perform an operation you put a credit into the machine.
			i. The machine uses up these credits while performing the operation.
			ii. The amortized cost is the amount of credit needed for each operation such that the balance never falls below zero.
			iii. makes it easier to reason about individual amortized operations and sequences of different operations, like insert and remove.
	7. The potential method:
		a. The amortized cost of an operation is the amount it increases this potential.
		b. The amortized cost equals the actual cost plus the difference in potential.
	8. X insertions take 0(2X) time. The amortized time for each insertion is 0(1).
	9. Resources:
		a. https://mortoray.com/2014/08/11/what-is-amortized-time/
		b. https://www.cs.cmu.edu/~avrim/451f11/lectures/lect0922.pdf

Log N Runtimes
	1. When you see a problem where the number of elements in the problem space gets halved each time, that will likely be a 0(log N) runtime.

Recursive Runtimes
When you have a recursive function that makes multiple calls, the runtime will often (but not always) look like O(branches^depth), where branches is the number of times each
