## 1.  **Encapsulation**

#### -   *What is the Encapsulation?*

Encapsulation is a balance. It is about writing reusable components where you
can reuse them without fully understanding all implementation details.

#### -   *Why should I use Encapsulation?*

*Because it allows us not to spend a lot of time looking at the source code in
order to understand how it works.*

#### -   *How to write code using Encapsulation?*

Write code in such a way that it’s usable even for stupid programmers. Always
keep in mind that others don’t know all that things that you know.

#### -   *Why care about code that sucks?*

Because code that’s not up to par impacts long-term productivity. Long-term
productivity will suffer because it becomes more and more difficult to add new
features. You will not be able to maintain the code, it will become more and
more difficult to fix bugs and add new features and so on.

#### -   *How to handle the code that sucks?*

You should ask yourself the following questions:
-   How code is problematic?
-   Why it’s problematic?
-   In which ways is it problematic?

>We spend like 10 time as much time reading code that writing code, so:
>* Write actionable code;
>* Write code that is more concrete;


#### -   *What is Object-oriented definition of encapsulation?*
-   ```Information hiding  ```
    More suitable name is *implementation* hiding. Because
    we are not hiding the information. We are hiding the implementation details.
-   ```Protection of invariants```
    Programmatically adding pre-conditioned checks
    and post-condition checks to the class itself.

#### -   *What does the Command Query Separation principle mean?*

Our operation should be either commands or queries, but not both.

#### -   *What are the distinguishing features of the queries?*

-   They don’t mutate observable state.
-   They always return something.
-   They are idempotent, so the queries are safe to invoke

#### -   *What are the distinguishing features of the commands?*

-   They always return void.
-   They have side effects.
-   It’s ok to query from Commands.

```
The composite pattern works very well with commands. The decorator design
pattern can be used both for commands and for queries.
```

#### -   *What does the Postel’s law means?*

We should be very conservative in what we send, but we should be very liberal in
what we accept.

```
Nullable References are evil. Why? Because we can’t state whether or not a
reference should be nullable or not. So all references are always nullable,
which means that we can’t distinguish between the cases where null is valid and
where null is not valid.

```

#### -   What is the Fail Fast principle about?

Postel’s law: we should try to be as tolerant about input as possible.

If we can’t understand the input at all, we should be as explicit about the
problems and also explicit about how can the caller resolve those problems.

#### -   How to replace Null values?

1.  ```Tester/Doer:``` adding extra operation (Tester) that returns a Boolean that
    tells you whether or not it’s legal to inoke the Doer. It isn’t thread safe.
2.  ```TryRead:``` returns a boolean instead of the value that we’re actually
    interested in. It thread safe, but not object-oriented.
3.  ```Maybe:``` creating an extra class for collection with either 0 or 1 elements
    inside of it.

## **II. SOLID**

#### -   What is SOLID code?
-   Supple code
-   Pliable code

#### -   What is the purpose of SOLID?
Make you more productive by making the code more maintainable.

#### -   What kind of problems address SOLID?
-   Rigidity (design is difficult to change)
-   Fragility (design is easy to break)
-   Immobility (design is difficult to reuse)
-   Viscosity (it’s difficult to do the right thing)
-   Needless complexity or overdesign

```
The order of principles is not important at all. There’s a strong synergy effect
between those five principles of SOLID. Each of principle doesn’t have sense in
isolation.
```
```
SOLID is not a goal. We can’t measure the degree of SOLIDness of a code base. We
just can get closer and closer to it.
```
### 1.  **The Single Responsibility Principle**

#### -   What is SRP about?

Class should have only one reason to change. Each class should do one thing and
do it well.

``` 
Instead of being general, code should be specific.
```

#### -   What is the Reused Abstractions Principle is about?

If we have abstractions and those abstractions are not being reused by being
implemented by various different concrete classes, the we have poor
abstractions.

#### -   What is abstractions?

The elimination of the relevant and the amplification of the essential.

```
Interfaces are not designed, interfaces are discovered as the system grows.
```

#### -   What is the Rule of three about?

We should not try to introduce a general purpose solution to something until we
have three cases that fit into the same generalization.
Only discover abstractions when you have enough examples that will give you
confidence that the abstraction that you’re doing to introduce is the correct
abstraction.

### **2. The Open Closed Principle**

#### -   What is OCP about?

A class should be open for extensibility, but closed for modification. Closed
for modification means the we can’t really update or delete the class, we can
only create the class and then we can always read the source code of the class.

``` 
We should favour composition over inheritance
```

#### -   How we can favour composition over inheritance?

By design patterns. ```Strategy pattern``` is one way where we can vary part of the
implementation of a class without changing the class itself.

#### -   How we can evolve a system without fully understanding of what the system is supposed to do?

By using the Strangler pattern.

### **3. The Liskov Substitution Principle**

#### -   What is LSP about?

Subtypes must be substitutable for their base types. Consume any implementation
without changing the correctness of the system. One universal rule - system
should not crash.

#### -   What are indicators of LSP violation?

-   Throwing not supported exception.

-   A lots of Downcasts in code.

-   Extracted interfaces.

-   Attempts to remove features.

``` 
Types should always work on the same level of abstraction.
```

```If we comply with the Reused Abstraction Principle, it probably also indicated that we comply with the Liskov Substitution Principle. ```Why? Because if we have
already implemented a given interface by multiple concrete classes, our system
can work and can work correctly with multiple concrete implementations.

### **4. The Interface Segregation Principle**

#### -   What is ISP about?

Clients should not be forced to depend on methods they do not use. We should
have Role Interfaces over Header Interfaces. Abstractions are not designed, they
are discovered by looking for commonalities in the code.

ISP helps us to resolve LSP violations.

```
Factory method in general is not a good extensibility mechanism.
```

### **5. The Dependency Inversion Principle**

#### -   What is DIP about?

High-level modules should not depend on low-level modules, both should depend on
abstractions. As well as abstractions should not depend upon details, details
should depend upon abstractions.

#### -   What is the main reason of the inheritance problematic?

All the mainstream languages that support inheritance, only allow single
inheritance. So deriving from a class puts a very big restriction on the derived
class.
