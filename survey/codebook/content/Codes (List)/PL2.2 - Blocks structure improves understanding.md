# Theme

[[PL2 - Code Structure|PL2 - Code Structure]]
# Description

Code being structured into blocks is highlighted by participants for improving understanding, especially for novice programmers. There seem to be multiple reasons for this to be the case.

First, structuring code into blocks forces related code to be co-located and sliced in a way that it creates a cohesive unit that does exactly one thing (see also [[PL2.3 - Encapsulation of related code in blocks or functions improves understanding|PL2.3 - Encapsulation of related code in blocks or functions improves understanding]], [[PL3.4 - Scoped code (blocks, functions) should execute one operation, not multiple|PL3.4 - Scoped code (blocks, functions) should execute one operation, not multiple]]). Jayvee enforces this structure consistently ([[PL2.4 - Jayvee enforces a structure|PL2.4 - Jayvee enforces a structure]]) while novice programmers can write Python code that is hard to understand ([[HU1.3 - Good programming habits are required to keep Python easy to understand|HU1.3 - Good programming habits are required to keep Python easy to understand]]).

Second, bundling related code into blocks that require a name (for referencing) means that those names can improve understanding if chosen well. [[HU3.3 - Good names for steps is important to understanding|HU3.3 - Good names for steps is important to understanding]] and [[HU3.1 - Jayvee names describe functionality well|HU3.1 - Jayvee names describe functionality well]]. 

Lastly, the [[HU2.1 - Mental model of an ETL pipeline aligns with Jayvee|mental model of an ETL pipeline aligns with Jayvee]]. As a domain-specific language, Jayvee's code structure can align with the visual of a data pipeline as a series of connected processing steps that users have in mind. See [[PL6.2 - Domain-specific language elements like blocks make Jayvee easy to understand|PL6.2 - Domain-specific language elements like blocks make Jayvee easy to understand]].

# Representative Quotes

> Especially the beginning of the pipeline, where we define the whole structure once, makes it very easy to follow the pipeline through the process. Also I personally think that the structure into blocks and pipes makes it easier to understand too. 
- *S55*

> *What are the differences between Jayvee and Python that influence how easy / hard it is to understand data pipelines?* The concept of blocks: You can manually create this in Python, but hardly anybody will do this.
- *S26*

> Block types make it quite easy to understand what is going on inside of a block for a person that might have little to no experience with programming in general, and it also helps the developer when using this language. 
- *S34*

> The best part in Jayvee is block type coding, it is similar to LEGO and you can easily remember, read and write your code. 
- *S8*

> Jayvee has clear and direct "blocks" and "interpreters" as compared to Python.
- *S48*

> I think the structure of Jayvee that allow us the the see relation level of the building blocks make it easier the follow, but Python provides more flexible solution options for a experienced user.
- *S17*

> Very clear, because of blockTypes, which give a hint what is done in this block. 
- *S41*

> Jayvee is much easier to learn and understand as compared to Python as the operation are implemented in blocks, so even a naive person can easily learn and implement Jayvee on their own. 
- *S44*