# LLMON

LLMON (pronounced limón) is a set of structured data tools, optimized for large language models.

## LLMONconcentrate

Convert the structured input into a format that's more concise, yet still understandable by LLMs.

LLMONconcentrate can reduce your JSON's token usage by half or more, while retaining all of the existing information in that structured data.

To use, run (replace berries.json with your own file)

```
npx ts-node concentrate.ts -f berries.json --yaml
```

![Tokens for original JSON](docs/origtokens.png)
![Tokens for concentrated YAML](docs/yamltokens.png)

## LLMONslice

LLMONslices are subtrees of a larger data tree that can be fed into a large language model. The basic idea is that each slice should be of small enough size to be consumed in a single LLM prompt (or bite).

To use, run (replace berries.json with your own file)

```
npx ts-node slice.ts -f berries.json --levelsDown 2
```

Example output:
```
SLICE 0:
{"berries":{"name":"Strawberry","scientific_name":"Fragaria × ananassa","color":"Red","edible":true,"origin":{"continent":"North America","region":"Eastern United States"},"discovery":{"year":1750,"discoverer":"Unknown"},"taste":"Sweet and slightly tart","uses":["Jams","Pies","Smoothies"]}}
SLICE 1:
{"berries":{"name":"Blueberry","scientific_name":"Vaccinium corymbosum","color":"Blue","edible":true,"origin":{"continent":"North America","region":"Eastern United States"},"discovery":{"year":1750,"discoverer":"Unknown"},"taste":"Sweet and tangy","uses":["Pancakes","Muffins","Smoothies"]}}
...
```

## LLMONaide

LLMONaide is a plain text description of the JSON data, which is easier for large language models to consume.

To use, run (replace berries-concentrated.json with your own file). Since we are sending the data to the LLM here, we want to use the concentrated version.

```
OPENAI_API_KEY="YOUR_KEY_HERE" npx ts-node aide.ts -f berries-concentrated.json
```

Example output:
```
Berries are a popular fruit that come in many different varieties. Strawberries, for example, have the scientific name Fragaria × ananassa and are native to the Eastern United States. They are red in color and have a sweet and slightly tart taste. Strawberries are often used in jams, pies, and smoothies. Blueberries, on the other hand, have the scientific name Vaccinium corymbosum and are native to the Eastern United States. They are blue in color and have a sweet and tangy taste. Blueberries are often used in pancakes, muffins, and smoothies. Blackberries, with the scientific name Rubus fruticosus, are native to Europe and Western Asia and are black in color. They have a sweet and slightly tart taste and are often used in jams, pies, and cakes. Raspberries, with the scientific name Rubus idaeus, are native to Europe and Eastern Europe and are red in color. They have a sweet and slightly tart taste and are often used in jams, pies, and cakes. Gooseberries, with the scientific name Ribes uva-crispa, are native to Europe and Western Asia and are green in color. They have a tart and slightly sweet taste and are often used in jams, pies, and sauces. Cranberries, with the scientific name Vaccinium oxycoccos, are native to the Eastern United States and are red in color. They have a tart and slightly sweet taste and are often used in sauces, juices, and jellies. Boysenberries, with the scientific name Rubus ursinus × idaeus, are native to California and are red in color. They have a sweet and tart taste and are often used in jams, pies, and cakes. Elderberries, with the scientific name Sambucus nigra, are native to Europe and Western Asia and are purple in color. They have a tart and slightly sweet taste and are often used in jams, syrups, and wine. Mulberries, with the scientific name Morus, are native to China and are black in color. They have a sweet and slightly tart taste and are often used in jams, pies, and wine. Acai berries, with the scientific name Euterpe oleracea, are native to the Amazon Rainforest and are purple in color. They have a tangy and slightly sweet taste and are often used in smoothie bowls, juices, and energy bars. Bilberries, with the scientific name Vaccinium myrtillus, are native to Northern Europe and are blue in color. They have a sweet and tangy taste and are often used in jams, pies, and wine. Cloudberries, with the scientific name Rubus chamaemorus, are native to Northern Europe and are orange in color. They have a tangy and slightly sweet taste and are often used in jams, pies, and liqueurs. Finally, currants, with the scientific name Ribes, are native to Northern Europe and are red in color. They have a tart and slightly sweet taste and are often used in jams, jellies, and syrups.
```

## LLMONbrothers

LLMONbrothers are pairs of data and its LLMONaide. The LLMONaide is used for embedding similarity matching and the original LLMON is used for question and answer to LLMs.

To use, run (replace berries-concentrated.json with your own file).

```
OPENAI_API_KEY="YOUR_KEY_HERE" npx ts-node brothers.ts -f berries-concentrated.json
```

Example output:
```
BROTHERS 0:
{"berries":{"name":"Strawberry","scientific_name":"Fragaria × ananassa","color":"Red","edible":true,"origin":{"continent":"North America","region":"Eastern United States"},"discovery":{"year":1750,"discoverer":"Unknown"},"taste":"Sweet and slightly tart","uses":["Jams","Pies","Smoothies"]}}
The strawberry (Fragaria × ananassa) is a North American berry that is red in color and is edible. It was discovered in the Eastern United States in 1750 by an unknown discoverer. The strawberry has a sweet and slightly tart taste, and is used in jams, pies, and smoothies.
BROTHERS 1:
{"berries":{"name":"Blueberry","scientific_name":"Vaccinium corymbosum","color":"Blue","edible":true,"origin":{"continent":"North America","region":"Eastern United States"},"discovery":{"year":1750,"discoverer":"Unknown"},"taste":"Sweet and tangy","uses":["Pancakes","Muffins","Smoothies"]}}

The blueberry, scientifically known as Vaccinium corymbosum, is a North American berry that is native to the Eastern United States. It was discovered in 1750 by an unknown person and is a popular berry due to its sweet and tangy taste. Blueberries are edible and can be used in a variety of ways, such as pancakes, muffins, and smoothies. They are a blue color and are a popular ingredient in many recipes.
...
```

## LLMONpeel

LLMONpeel gets the structure of the JSON and then uses LLMs to generate JSONPaths which can than be used to search for the data you're looking for.

To use, run (replace berries-concentrated.json with your own file).

```
npx ts-node peel.ts -f berries-concentrated.json
```
