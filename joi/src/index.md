
# 基础类型

* input
* checkbox
* radio
* single select
* mult select
* upload
* textarea

* array
* object

``` json
[
  {
    "key": "name",
    "label": "姓名",
    "type": "string"
  }, {
    "key": "key",
    "label": "唯一标识",
    "type": "string"
  }, {
    "key": "school",
    "label": "学校",
    "type": "array",
    "modle": [
      {
        "key": "schoolName",
        "label": "学校名",
        "type": "string"
      }
    ]
  }, {
    "key": "baseInfo",
    "label": "基本信息",
    "type": "object",
    "modle": [
      {
        "key": "age",
        "label": "年龄",
        "type": "number"
      }
    ]
  }
]

{
  "name": "xiaoming",
  "key": "name",
  "school": [
    {
      "schoolName": "xxx daxue"
    }
  ],
  "baseInfo": {
    "age": 18,
  }
}

```