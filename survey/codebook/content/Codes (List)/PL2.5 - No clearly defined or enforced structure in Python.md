# Theme

[[PL2 - Code Structure|PL2 - Code Structure]]
# Description

Python code is described as enforcing no clear structure and therefore also having no consistent structure (in contrast to Jayvee, [[PL2.4 - Jayvee enforces a structure|PL2.4 - Jayvee enforces a structure]]).

No specific (and known ahead of time) structure makes understanding of data pipelines in Python harder. In addition, because data pipelines can look completely different in Python (depending on chosen development styles or libraries), learning effects from reading multiple pipelines are reduced (see [[HU2.2 - No learning effect between pipelines due to low structure|HU2.2 - No learning effect between pipelines due to low structure]]).

As a result, data pipelines are described as messy. While developers are free to write more structured Python code (for example by using object-oriented programming), less enforcement means it is easy to write bad code and [[HU1.3 - Good programming habits are required to keep Python easy to understand|good programming habits are required to keep Python easy to understand]].

Python code does not create the insight of a sequential data pipeline, even though the code technically runs sequentially from top to bottom. This is different for Jayvee code, see [[PL2.1 - Sequential structure of Jayvee|PL2.1 - Sequential structure of Jayvee]].
# Representative Quotes

> No structure, every pipeline is a new pipeline. 
- *S29*

> There is no real structuring. It is more or less just data access and modification on an object in state. The feeling of a sequential pipeline is not given by the shown Python code. 
- *S37*

> The pipeline in Python has no specific structure to it making it a little difficult to understand. 
- *S44*

> Sometimes it is a bit unstructured to read Python if it is not commented and labeled. Here it was still alright but it can get very messier very fast. 
- *S55*