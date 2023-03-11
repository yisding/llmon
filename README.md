# LLMON
LLMON (pronounced limón) is a structured data format optimized for large language models

# LLMONconcentrate

Convert the structured input into a format that's more concise, yet still understandable by LLMs

## LLMONslice

LLMONslices are subtrees of a larger data tree that can be fed into a large language model. The basic idea is that each slice should be of small enough size to be consumed in a single LLM prompt (or bite).

## LLMONpeel

LLMONpeels are the outer layer of the structured data, and can be used to autogenerate queries against the data.

## LLMONjuice

LLMONjuice is a plain text description of the JSON data, which is easier for large language models to consume.

## LLMONbrothers

LLMONbrothers are pairs of data and its LLMONjus. The LLMONjus is used for embedding similarity matching and the original LLMON is used for question and answer to LLMs.
