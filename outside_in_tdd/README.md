## **Outside-In Test-Driven Development**

#### -   *What is the main purpose of the Outside-In TDD?*

It helps us to align what we’re doing as software developers with what the
product owner wants the software to actually do.

#### -   *What is the key feature of Outside-In TDD?*

Starting testing at the boundaries of the system. We just start building from
the outside and going inwards, tending to only write the code that we’re
actually going to need (YAGNI).

#### -   *Can we do BDD and outside TDD at the same time?*

Yes, we can. Both BDD and TDD are used to validate whether the software that
we’re building is actually meeting product owner requirements or not. But, for
example, if we don’t have any product owner or customer with whom we’re tightly
collaborating with - it would be only TDD.

#### -   *What is the test pyramid about?*

It describes how automated tests should be distributed among different types:

1.  ```UI``` - Upper layer. We should only have ```a few automated tests``` (because of
    difficulty of development and maintenance, as well as their brittleness)
2.  ```Service``` - Middle layer. ```More``` tests that in UI. Service’s tests are robust,
    but quite slow.
3.  ```Unit``` - Bottom layer. ```Most of automated tests.```

#### -   *What is main difference between Outside-In and Bottom-Up?*

Long story short: Behavior Verification or Mockist is usually used in Outside-In
TDD, when State-Based Verification or Triangulation is used in Bottom-Up TDD.
```Bottom-Up is algorithmic in its emphasis.``` ```Outside-In TDD is focusing on roles,
responsibilities and interactions in an end-to-end implementation, as opposed to
algorithms.```

#### -   *Are the Outside-In and Bottom-Up mutually exclusive approaches?*

No, they aren’t. For example, we can also do triangulation instead of
state-based verification working from overall approach of outside-in TDD.

### 1.  **Walking skeleton**

#### -   *What is the walking skeleton about?*

It is an implementation of the thinnest possible slice of real functionality
that we can ultimately build, deploy and test end-to-end. (in addition to
coding, it can also be used for driving the infrastructure of the system)

```Everything should be automatable.```

#### -   *What is the base algorithm for walking skeleton?*

1.  Start from scratch.
2.  Write the simplest possible test to get something up and running.
3.  Check out the boundaries of the system.
4.  Make the test pass.

### **2. Spiking**

#### -   *What is spiking about?*

It is a process of going through the entire application for a very thin slice of
functionality and making sure that we’re going all the way through - just like
we’re driving a spike all the way through the application.

It ensure us that not only does our application appear to behave correctly at
the external service boundary (as Skeleton Walking does), but it also does the
right thing at the internal boundaries.

#### -   *What is the FIRST?*

It is an acronym that describes what properties automated tests should have:

1. ```F - fast``` (tests should run as quickly as possible)
2. ```I - isolated``` (each test should run independently on any other test)
3. ```R - repeatable ```(we can run test over and over again and get the same result every time)
4. ```S - self-validating ```(tests should tell by themselves whether they’ve passed or failed)
5. ```T - timely ```(test should be written at the correct time - before we write the production code)

#### -   *What techniques should we use to achieve Spiking’s goals?*

We can use Four Phase Test pattern and BackDoor Manipulation pattern.

#### -   *What is the Four Phase Test pattern about?*

It is about dividing the test development process into four phase:

1.  ```Fixture setup```- setup the internal boundaries (for example, creating
    database)
2.  ```Executing``` - exercising the system on the test
3.  ```Verifying``` - getting our result verification
4.  ```Fixture teardown``` - tearing down the fixture again (for example, deleting
    database)

#### -   *What is the BackDoor Manipulation pattern about?*

It is about setting up the test fixture or verifying the outcome by going
through a back door - such as direct database access.

### **3. Triangulation**

#### -   *What is the Triangulation?*

It is sort of the classic tdd technique. It is based on the process of sampling
until we have gained confidence in our hypothesis.

The main principle - “*The test gets more specific, the code gets more generic*”
(Robert C.Martin)

For example, when we know distances between two any measurements and the target,
we can figure out the exact position of the target by using basic geometry. It
is analogue to test case and the system under test. When we don’t know what the
code does, we can sample the output of example input (find out measurements) and
form our hypotheses around that (figuring out the target).

#### -   *When to use Triangulation?*

In the algorithmic in nature systems, such as a stack or a scoring system for a
bowling game and so on.

#### -   *Is the Triangulation robust and reliable?*

The more facts we can gather about a system the greater our confidence in that
system will be. But ultimately there are no guarantees.

#### -   *Where can be applied the Triangulation?*

It can be applied both on the unit testing level and on the system level and
even in a spike.

> We can use Devil’s Advocate technique to increase our confidence. It always move
the code forward in a constructive manner.

### **4. Behavior Verification**

#### -   *What is Behavior Verification about?*

It is another tdd technique like a Triangulation. It is based on verifying that
the interaction between units is correct. It is a bit more like math, because it
offers more resembling a formal mathematical proof: ```steps(prove how data flows)```
and ```mocks (prove that side effects occur or don’t occur).```

#### -   *What is the difference between Triangulation and Behavior Verification?*

1.  With behavior verification we have served what happens between the
    components whereas with triangulation we have served what is externally
    visible.
2.  With behavior verification stimulus(input) and response(output) are indirect
    ```(very closely related to the concept of back door manipulation)``` , whereas
    with triangulation are direct.

#### -   *When we should use Behavior Verification?*

When we need to prove that each unit interacts correctly with its dependencies.
It also reduce the number of permeations required to fully cover the
functionality of a system under test reducing the number of test cases we’d have
to write.

#### -   *What is the cyclomatic complexity?*

It is a measurement of software complexity.

#### -   *How to measure the cyclomatic complexity of the given block of code?*

Start with 1 and add 1 every time you find the key words such as if, else, case,
for each, do, while, catch.

> Dependency Injection is required

#### -   *What are characterization tests?*

It is written after the system under test code. It characterizes the current
behavior of the system under test.

#### -   *When we should use characterization tests?*

When we need to isolate each unit independently of each other and at the same
time verify that they interact correctly with each other. It forces us to write
a redundant tests in order to save us from writing a lot of other tests.

> Devil’s advocate technique is good technique for behavior verification
