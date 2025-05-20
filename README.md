# Jayvee Program Structure Comprehension
This release contains the data used to evaluate program structure comprehension using [Jayvee](https://github.com/jvalue/jayvee) in a controlled experiment with students.

## External Links
- [Full Codebook](https://rhazn.github.io/2025-data-release-program-comprehension-jayvee/)
- [Hosted Experiment Tool](http://131.188.64.202:8080/)

## Content
- `/data`: Raw (anonymized) source data
- `1_data_preparation`: Data preparation
- `2_data_integrity`: Data integrity checks
- `3_data_analysis`: Quantitative data analysis and hypotheses checks
- `4_qualitative_data_analysis`: Qualitative data analysis, saturation


### Experiment
- See [experiment/README.md](./experiment/README.md)

### Descriptive Survey
- See [survey/README.md](./survey/README.md)

## Setup
- Dependency management using `uv`, to initialize call `uv sync`
- `source .venv/bin/activate`
- Run notebooks with the created Python kernel (3.11.11)
