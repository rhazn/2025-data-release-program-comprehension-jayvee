# Theme

[[HU2 - Applicable Experience|HU2 - Applicable Experience]]
# Description

By providing blocks and pipes as first-level programming constructs and following the pipes and filters architectural approach, Jayvee aligns with the mental model of an ETL pipeline as a graph of processing steps that data flows through. This mental model is also used in many visual programming tools for data pipelines as it is how users commonly visualize a data pipeline.

With the close match between language elements and domain concepts, previous experience in data engineering or working with other data pipeline tools can also be used to understand a data pipeline from source code. As a result, previous knowledge from working with data by subject-matter experts without software engineering experience is also applicable to understanding data pipelines written in Jayvee (see also [[PL6.2 - Domain-specific language elements like blocks make Jayvee easy to understand|PL6.2 - Domain-specific language elements like blocks make Jayvee easy to understand]]).

This close match with the mental model of ETL pipelines must be carefully maintained however. If it is disrupted, understandability is reduced again. In this case, including elements on a lower abstraction level than readers think of has confused participants (see [[PL3.3 - Interpretation blocks make outcome unclear|PL3.3 - Interpretation blocks make outcome unclear]]).
# Representative Quotes

> Names of the blocks are familiar with the concepts that are usually used in the data pipelines. 
- *S17*

> Very human like thinking of how to program an ETL pipeline. 
- *S31*

> Jayvee code steps are directly mapped to the data engineering pipeline lifecycle. 
- *S35*

> Since we have a syntax that very well shows the actual flow of the pipeline (via the block -> block -> ... syntax), it also easily understandable what blocks are executed in which order. (...) Jayvee is specialized to represent pipelines, which shows. The syntax is adapted to very well represent a sequential flow, which is easily readable, just by looking at it. 
- *S37*

> Jayvee looks much more focused on building and working with pipelines than Python as Python is a multi purpose language. 
- *S53*