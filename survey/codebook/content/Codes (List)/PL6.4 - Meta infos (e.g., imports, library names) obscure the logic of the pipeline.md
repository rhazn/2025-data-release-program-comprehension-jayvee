# Theme

[[PL6 - Language Elements|PL6 - Language Elements]]

# Description

Meta infos refer to any expression of programming construct that is not directly related to the domain of data pipelines. This includes class definitions, function definitions, imports or the use of library names (for example to namespace functions).

Users do not describe block types, pipes or value types as additional meta infos, potentially because they are accepted as domain concepts (see [[HU2.1 - Mental model of an ETL pipeline aligns with Jayvee|HU2.1 - Mental model of an ETL pipeline aligns with Jayvee]]).

These meta infos increase the difficulty of scanning code for relevant pipeline logic, making it harder to correctly understand the code (for example by increasing the chance of overlooking a step).

The more meta infos pipeline code contains, the more it reads as a programming language and less as human-like language (see [[PL5.3 - Code can be read like english text|PL5.3 - Code can be read like english text]]). This can potentially intimidate novices and make it harder to understand the pipeline code.
# Representative Quotes

> Python is also not hard to read, but the constant usage of the import / library names (pandas.abc()...) makes it a little harder to spot the function names and the logic of the pipeline. (...) Some verbosity that is needed in Python (imports, classes, namespaces) are just not (or at least not so much) needed in Jayvee.
- *S16*

> Python, even though easier to understand than most of the other programming languages, still has a lot of the "syntax" and the function definitions which makes it slightly more complicated in comparison to Jayvee in my view.
- *S50*