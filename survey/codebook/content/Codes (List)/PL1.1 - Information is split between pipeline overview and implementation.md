# Theme

[[PL1 - Pipeline Overview]]
# Description

The main effect of enforcing a pipeline overview is that information is split between the overview section and the more detailed implementation information found in the block definitions.

This has mostly positive effects on speed ([[PL1.4 - Jayvee pipeline overview improves speed|PL1.4 - Jayvee pipeline overview improves speed]]) and understanding both how data flows through a pipeline and what steps are executed in which order ([[PL1.5 - Jayvee pipeline overview helps to understand the flow of a pipeline|PL1.5 - Jayvee pipeline overview helps to understand the flow of a pipeline]]).

For skimming a pipeline, reading only the overview means users do not need to consider all code to understand the functionality ([[PL1.2 - Without pipeline overview, all code must be considered|PL1.2 - Without pipeline overview, all code must be considered]]). On the other hand, a negative effect of this split is that users must go back and forth between the overview and implementation if they want to understand the pipeline in detail.

Potentially, the very clear overview also influences that Jayvee is described as more straightforward / sequential ([[PL2.1 - Sequential structure of Jayvee|PL2.1 - Sequential structure of Jayvee]]).
# Representative Quotes

> Code structure in Jayvee also allows us to better have an idea of the steps in a pipeline. In Jayvee you are introduced with the steps in the first opening part of the pipeline creation. This way you can navigate easier to the parts you are interested. This kinda framework is better compared to Python where the user is left to their own decisions about structuring the pipeline which might make it more difficult.
- *S31*

> *What makes data pipelines written in Jayvee difficult/easy to understand?*
> Mainly due to the code structure/layout, need to go back & forth to search for the specific function.
> *What makes data pipelines written in Python difficult/easy to understand?*
> The code was in order & much simple to understand.
- *S40*