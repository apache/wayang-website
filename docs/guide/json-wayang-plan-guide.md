# Documentation of Supported Operators in JSON-REST API

This is not a full coverage of supported operators and plan parameters in the API. These are only the ones that we were able to verify ourselves working through testing, and that we allow in the agentic systems.

For a Wayang plan in JSON to be executable, it must at least contain two main properties in its outer object: “context” and “operators”.

## Overall Wayang Plan structure

```json
{
  "context": { ... },
  "operators": [ ... ]
}
```

## Context Property

The “context” property is an object with at least two fields: “platforms” and “configurations”. Platform is a list of strings with platforms available for the plan, like “Java” or “Spark”. At least one platform must be provided. Configurations contain optional settings provided to Wayang. The field is required, but it is possible to provide an empty object to it for the plan to work. In that case, we believe that Wayang uses the default configuration settings. An example of “context” below:

```json
{
  "context": {
    "platforms": ["java", "spark"],
    "configuration": {}
  }
}
```

## Operator Property

The “operator” property consists of a list of objects. Each object is an operator specification, and the list contains the available operators to be used in a plan. An operator has a set of required fields that it must contain to work. Some fields are common across all operators, where others are unique for the specific operator.

Table 1 describes the required fields for most operators. Some operators require additional properties inside the “data” object, but these are listed in the operator schema in Table 2

### Operator Properties in Apache Wayang Plans (Table 1)

| Property | Value | Required in all operators | Description |
|--------|------|---------------------------|-------------|
| id | `Int` | Yes | The unique ID for an operator in a plan. |
| cat | `String` | Yes | The operator's category or group, for example *input* or *unary*. |
| input | `List[Int]` | Yes | Unique IDs of operators that send data to this operator. An operator is a source if the list is empty, for example input operators. |
| output | `List[Int]` | Yes | Unique IDs of operators that receive data from this operator. An operator is a sink if the list is empty, for example output operators. |
| operatorName | `String` | Yes | Name of the operator. |
| data | `Object` | No | An object containing additional operator-specific properties. The *count* and *distinct* operators do not require the data property. |

## Operator Schema

The following Table 2 is a schema of all tested operators. Every operator requires the properties listed in Table 1. Data properties are operator-specific properties required. The schema is not a full coverage of the JSON-REST API. Additional operator and parameters are supported as well. These are the operators that we allow in the agentic systems.

### Supported Apache Wayang Operators and their Required Data Properties (Table 2)

| Category | Operator | Description | Required data properties | Example |
|--------|---------|-------------|--------------------------|---------|
| Input | jdbcRemoteInput | Reads data from a database using a JDBC connection. | uri, username, password, table, columnNames | jdbc_input |
| Input | textFileInput | Reads data from a text file line by line. | filename | textfile_input |
| Unary | map | Applies a function to each element and returns the transformed element. | udf | map |
| Unary | flatMap | Applies a function that may return zero, one, or multiple elements. | udf | flatmap |
| Unary | filter | Keeps only elements that satisfy a condition. | udf | filter |
| Unary | distinct | Removes duplicate elements. | -- | distinct |
| Unary | sort | Sorts elements according to a key. | keyUdf | sort |
| Unary | sample | Randomly selects a subset of elements. | sampleSize | sample |
| Unary | reduce | Aggregates all elements into a single result. | udf | reduce |
| Unary | reduceBy | Aggregates elements with the same key. | keyUdf, udf | reduceby |
| Unary | groupBy | Groups elements by key. | keyUdf | groupby |
| Unary | count | Counts the number of elements. | -- | count |
| Binary | join | Combines two datasets using an inner join. | thisKeyUdf, thatKeyUdf | join |
| Output | textFileOutput | Writes output data to a text file. | filename | textfile_output |

## Operator Examples

### jdbcRemoteInput
```json
{
  "id": 1,
  "cat": "input",
  "input": [],
  "output": [2],
  "operatorName": "jdbcRemoteInput",
  "data": {
    "uri": "jdbc:postgresql://localhost:5432/master_thesis_db",
    "username": "master_thesis",
    "password": "master",
    "table": "person",
    "columnNames": ["id", "name", "age", "address"]
  }
}
```

### textFileInput
```json
{
  "id": 1,
  "cat": "input",
  "input": [],
  "output": [2],
  "operatorName": "textFileInput",
  "data": {
    "filename": "file:///Users/alexander/Downloads/textfile_input.txt"
  }
}
```

### map
```json
{
  "id": 3,
  "cat": "unary",
  "input": [2],
  "output": [],
  "operatorName": "map",
  "data": {
    "udf": "(w: String) => w.length"
  }
}
```

### flatMap
```json
{
  "id": 2,
  "cat": "unary",
  "input": [1],
  "output": [3],
  "operatorName": "flatMap",
  "data": {
    "udf": "(s: String) => s.split(\" \").toList"
  }
}
```

### filter
```json
{
  "id": 3,
  "cat": "unary",
  "input": [2],
  "output": [4],
  "operatorName": "filter",
  "data": {
    "udf": "(w: String) => w.length > 4"
  }
}
```

### distinct
```json
{
  "id": 2,
  "cat": "unary",
  "input": [1],
  "output": [],
  "operatorName": "distinct"
}
```

### sort
```json
{
  "id": 2,
  "cat": "unary",
  "input": [1],
  "output": [],
  "operatorName": "sort",
  "data": {
    "keyUdf": "(w: String) => w"
  }
}
```

### sample
```json
{
  "id": 2,
  "cat": "unary",
  "input": [1],
  "output": [3],
  "operatorName": "sample",
  "data": {
    "sampleSize": 3
  }
}
```

### reduce
```json
{
  "id": 2,
  "cat": "unary",
  "input": [1],
  "output": [3],
  "operatorName": "reduce",
  "data": {
    "udf": "(a: Int, b: Int) => a + b"
  }
}
```

### reduceBy
```json
{
  "id": 4,
  "cat": "unary",
  "input": [3],
  "output": [5],
  "operatorName": "reduceBy",
  "data": {
    "keyUdf": "(pair: (String, Int)) => pair._1",
    "udf": "(a: (String, Int), b: (String, Int)) => (a._1, a._2 + b._2)"
  }
}
```

### groupBy
```json
{
  "id": 2,
  "cat": "unary",
  "input": [1],
  "output": [3],
  "operatorName": "groupBy",
  "data": {
    "keyUdf": "(w: String) => w.substring(0,1)"
  }
}
```

### count
```json
{
  "id": 2,
  "cat": "unary",
  "input": [1],
  "output": [],
  "operatorName": "count"
}
```

### join
```json
{
  "id": 3,
  "cat": "binary",
  "input": [1, 2],
  "output": [4],
  "operatorName": "join",
  "data": {
    "thisKeyUdf": "(t: (String, Int)) => t._1",
    "thatKeyUdf": "(t: (String, String)) => t._1"
  }
}
```

### textFileOutput
```json
{
  "id": 4,
  "cat": "output",
  "input": [3],
  "output": [],
  "operatorName": "textFileOutput",
  "data": {
    "filename": "file:///Users/alexander/Downloads/testoutput1.txt"
  }
}
```