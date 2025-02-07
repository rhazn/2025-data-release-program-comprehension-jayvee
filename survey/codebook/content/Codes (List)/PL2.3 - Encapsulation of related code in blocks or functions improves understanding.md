# Theme

[[PL2 - Code Structure|PL2 - Code Structure]]

# Description

Combining related code into one location improves understanding of the data pipeline, especially also because it means related code is co-located.

By encapsulating related code into a separate structure, a [[PL1 - Pipeline Overview|PL1 - Pipeline Overview]] can be scanned by users that want to understand the pipeline structure on a high level only. [[PL1.2 - Without pipeline overview, all code must be considered|PL1.2 - Without pipeline overview, all code must be considered]].

For this encapsulation to make sense, functionality must be well sliced. [[PL3.4 - Scoped code (blocks, functions) should execute one operation, not multiple|PL3.4 - Scoped code (blocks, functions) should execute one operation, not multiple]].

# Representative Quotes

> Jayvee is much easier to understand because every step is divided into blocks the block types are very easy to understand. A single operation is performed in one block, which makes it easy to comprehend.
- *S44*

> *What makes data pipelines written in Python difficult/easy to understand?* The code was not clearly written. Using a proper functional approach would have been better so I could understand what a particular function is doing.
- *S46*