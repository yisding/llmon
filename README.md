# LLMON
LLMON (pronounced limón) is a set of structured data tools, optimized for large language models.

## LLMONconcentrate

Convert the structured input into a format that's more concise, yet still understandable by LLMs.

LLMONconcentrate can reduce your JSON's token usage by half or more, while retaining all of the existing information in that structured data.

To use, run (replace berries.json with your own file)
```
ts-node concentrate.ts -f berries.json --yaml
```

## LLMONslice

LLMONslices are subtrees of a larger data tree that can be fed into a large language model. The basic idea is that each slice should be of small enough size to be consumed in a single LLM prompt (or bite).

To use, run (replace berries.json with your own file)
```
ts-node slice.ts -f berries.json --levelsDown 2
```

## LLMONaide

LLMONaide is a plain text description of the JSON data, which is easier for large language models to consume.

To use, run (replace berries-concentrated.json with your own file). Since we are sending the data to the LLM here, we want to use the concentrated version.
```
ts-node aide.ts -f berries-concentrated.json
```

## LLMONbrothers

LLMONbrothers are pairs of data and its LLMONaide. The LLMONaide is used for embedding similarity matching and the original LLMON is used for question and answer to LLMs.

To use, run (replace berries-concentrated.json with your own file).
```
ts-node brothers.ts -f berries-concentrated.json
```

## LLMONpeel

LLMONpeel gets the structure of the JSON and then uses LLMs to generate JSONPaths which can than be used to search for the data you're looking for.

To use, run (replace berries-concentrated.json with your own file).
```
ts-node peel.ts -f berries-concentrated.json
```
