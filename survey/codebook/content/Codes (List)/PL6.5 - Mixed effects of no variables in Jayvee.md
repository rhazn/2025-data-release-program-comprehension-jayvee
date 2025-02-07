# Theme

[[PL6 - Language Elements|PL6 - Language Elements]]
# Description

Because Jayvee is based on the pipes and filters architecture and models data pipelines as a directed acyclical graph of connected blocks, it does not include variables (and therefore no variable assignments).

Generally, this is described as intuitive and a positive influence on understandability. Less variables and less assignments or passing of variables into functions means the code is easier to reason about.

However, one participant also reported preferring variables to know where data is stored, indicating that some users prefer to have more direct control over the implementation (see also [[PL3.1 - Hidden implementation details make understanding difficult|PL3.1 - Hidden implementation details make understanding difficult]]).
# Representative Quotes

> Compared to Jayvee, many variables and reassigning them during the pipeline make the pipeline harder to understand and debug in Python.
- *S4*

> Also the flow in which the data is transformed is more easy to read (no variable names of the data frame etc you have to pass manually).
- *S16*

> I like having variables to know where the data is stored.
- *S26*