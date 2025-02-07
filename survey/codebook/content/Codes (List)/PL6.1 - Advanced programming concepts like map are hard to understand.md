# Theme

[[PL6 - Language Elements|PL6 - Language Elements]]
# Description

Some of the experiment tasks in Python used language elements that participants considered hard to understand, even though they are commonly used in data pipelines written in Python / Pandas.

An example from task 2 is the addition of a boolean column:

```Python
data['publiclyFunded'] = data['traeger_art'].map(
    lambda input: input == 'öffentlich'
)
```

These advanced programming concepts are not immediately clear and force readers to either consult documentation or rely on comments if they have not previously encountered them.

Interestingly, users considered the blocks and pipe / `blocktype` concept in Jayvee to be intuitive, even though it is also an unusual programming concept (see also [[PL2.2 - Blocks structure improves understanding|PL2.2 - Blocks structure improves understanding]]). This is potentially linked to the more direct mapping from the mental model of an ETL pipeline to blocks and pipes than to lambdas and `map` ([[HU2.1 - Mental model of an ETL pipeline aligns with Jayvee|HU2.1 - Mental model of an ETL pipeline aligns with Jayvee]]).
# Representative Quotes

> Some functions like lambda, list comprehension and implicit operations are not intuitive and require documentation and comments to understand. 
- *S12*

> Also, things like "map" and sqlite parameter like echo are not as crystal clear as the Jayvee oftype concept. 
- *S15*

> Lambdas are not really understandable to the layman. 
- *S26*