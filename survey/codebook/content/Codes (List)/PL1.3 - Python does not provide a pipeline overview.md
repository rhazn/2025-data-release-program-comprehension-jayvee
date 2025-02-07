# Theme

[[PL1 - Pipeline Overview]]
# Description

Python, by default, does not provide a pipeline overview similar to Jayvee. In a Python script, all code must be read from top to bottom before the whole pipeline implementation can be understood (see [[PL1.2 - Without pipeline overview, all code must be considered|PL1.2 - Without pipeline overview, all code must be considered]]).

The effect of a missing pipeline overview is only true for script-style programming in Python and can be mitigated by the use of clearly named functions and classes. However, because Python does not enforce this structure ([[PL2.5 - No clearly defined or enforced structure in Python|PL2.5 - No clearly defined or enforced structure in Python]]), doing so requires experience and good programming habits ([[HU1.3 - Good programming habits are required to keep Python easy to understand|HU1.3 - Good programming habits are required to keep Python easy to understand]]).

Because this programming style is not enforced, it is easy for a Python pipeline to start out as a one-off script that never gets re-implemented to improve understanding once it becomes production code.

# Representative Quotes

> It does not have an 'overview' of what is done in the pipeline like it exists in Jayvee which leads to having a closer look to the functions to understand what is going to happen during the execution of the pipeline. This can get messy, especially with poor formatting/naming (I often have issues with code written by myself a few months later ;)).
- *S30*