# Theme

[[Themes (List)/PL4 - Amount of Options|PL4 - Amount of Options]]
# Description

In addition to more general functionality, general-purpose languages can often be extended with external libraries such as Pandas for Python.

External libraries create challenges to understanding for developers for multiple reasons. Of course, to understand a data pipeline a user has to be familiar with every library used in it which is especially hard for novice developers.

The need to learn additional libraries from multiple sources increases the learning curve to developing data pipelines for new developers. This is especially true if many different libraries exist to solve the same problem (see [[PL4.4 - Different functions to achieve the same goal decrease understanding|PL4.4 - Different functions to achieve the same goal decrease understanding]]) and learning effects from previous pipelines are limited (see [[HU2.2 - No learning effect between pipelines due to low structure|HU2.2 - No learning effect between pipelines due to low structure]]).

In addition, because the libraries are written by different developers than the main language (or other libraries), they can have different approaches to solving problems, use other names for the same concepts or have uncommon ways of providing documentation.

As libraries evolve, users must spend additional time to keep up with changes and different versions or risk being unfamiliar with new features.

Using libraries also comes with additional meta-code that is not directly related to the data pipeline itself, such as import statements which reduces understandability  (see [[PL6.4 - Meta infos (e.g., imports, library names) obscure the logic of the pipeline|PL6.4 - Meta infos (e.g., imports, library names) obscure the logic of the pipeline]]).
# Representative Quotes

> In Jayvee everything (all blocks) are from the same source, while in Python there are many libraries with different method styles and documentation. 
- *S0*

> For Python, you need to be familiar with the used libraries and read each step till the end to understand what is the structure of the pipeline. 
- *S15*

> Found learning curve is higher in Python to build data engineering pipeline as some one have to rely on external frameworks like Pandas, and they evolve in time and developer need to keep it up. 
- *S35*

> Additionally you have to know the Pandas framework to really understand what is happening. Adding a new column is not a named function like "add_column()" but simply "df['new_column'] = ...", which does not trivially make it clear what is happening (could also be an assignment). 
- *S37*

> In Python, there are many varieties and different options, libraries etc, it is harder for non-experienced to grasp the essence. 
- *S49*