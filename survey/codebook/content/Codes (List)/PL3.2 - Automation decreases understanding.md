# Theme

[[PL3 - Transparency|PL3 - Transparency]]

# Description

With increased automation, understanding what happens in a data pipeline decreases, especially if the result is different depending on the underlying data that is not visible in the source code.

This for example happens when loading data into a Data Frame using Pandas / Python. Pandas' approach is to automatically infer the structure of the data frame as well as the data types of columns from the data. This can make it hard to understand what will happen and how the resulting data frame will be structured.

It also means that, should the data change in the future, the data pipeline will behave differently without any code change (e.g., if a column contains numbers and some strings and the rows with string values are removed, the column will automatically switch from a string type to a number type).

This is also related to the execution of multiple operations in one function call (see [[PL3.4 - Scoped code (blocks, functions) should execute one operation, not multiple|PL3.4 - Scoped code (blocks, functions) should execute one operation, not multiple]]).

With less automation it is more clear what happens in each line of code as it is explicitly defined. The tradeoff here is that [[PL3.5 - Density of functionality effects understanding|density of functionality effects understanding]] and explicitly describing operations, if too low level and unexpected to the reader, is confusing (see [[PL3.3 - Interpretation blocks make outcome unclear|PL3.3 - Interpretation blocks make outcome unclear]]).
# Representative Quotes

> Difficult: The methods sometimes do many things at once (example: load to a sqlite file and automatically choose data types).
- *S0*

> Functions like pd.read_csv are hard to understand, as they can read a DF from so many sources (in Jayvee you have one datasource specified).
- *S26*