# Theme

[[PL3 - Transparency|PL3 - Transparency]]
# Description

In general, [[PL2.3 - Encapsulation of related code in blocks or functions improves understanding|encapsulation of related code in blocks or functions improves understanding]]. But if scoped code (such as blocks in Jayvee or functions in Python) executes more or less than one operation, it makes understanding a data pipeline more complicated.

Multiple operations are most often executed in functions provided by Pandas, such as `read_csv` that can download a CSV-source and parse it into a data frame at the same time. Increasing the amount of operations executed of course increases density of functionality and relates to [[PL3.5 - Density of functionality effects understanding|PL3.5 - Density of functionality effects understanding]].

Scoped code executing less than one operation seems implausible, but is possible if what the user expects to be one operation is actually multiple steps but decomposed in too much detail, see [[PL3.3 - Interpretation blocks make outcome unclear|PL3.3 - Interpretation blocks make outcome unclear]].

Regarding understanding, a good tradeoff seems to be aligning the functionality with what users typically assume is needed for the specific task in a data pipeline.
# Representative Quotes

> In Jayvee the blocks are structured and sliced very good as each block does exactly one task, while Python methods sometimes do multiple things at once.
- *S0*

> Jayvee is much easier to understand because every step is divided into blocks the block types are very easy to understand. A single operation is performed in one block, which makes it easy to comprehend.
- *S44*