define({ "api": [
  {
    "type": "post",
    "url": "/api/addapp",
    "title": "添加新的app",
    "name": "add_app",
    "group": "App",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>App的名字</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"name\": \"name3\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "App",
            "description": "<p>返回新增app信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"id\": \"3\",\n    \"user_id\": \"1\",\n    \"name\": \"name3\",\n    \"deleted_at\": null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/AppController.php",
    "groupTitle": "App"
  },
  {
    "type": "delete",
    "url": "/api/{app_id}/deleteapp",
    "title": "软删除指定app",
    "name": "delete_app",
    "group": "App",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "app_id",
            "description": "<p>App的id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"app_id\": \"3\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "App",
            "description": "<p>返回空</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   []",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/AppController.php",
    "groupTitle": "App"
  },
  {
    "type": "put",
    "url": "/api/{app_id}/readapp",
    "title": "恢复指定的app",
    "name": "readd_app",
    "group": "App",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "app_id",
            "description": "<p>App的id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"app_id\": \"3\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "App",
            "description": "<p>返回恢复的app信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"id\": \"3\",\n    \"user_id\": \"1\",\n    \"name\": \"name3\",\n    \"deleted_at\": null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/AppController.php",
    "groupTitle": "App"
  },
  {
    "type": "get",
    "url": "/api/applist",
    "title": "获取app列表",
    "name": "show_app",
    "group": "App",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "nullable": [
          {
            "group": "nullable",
            "type": "string",
            "allowedValues": [
              "\"false\"",
              "\"true\""
            ],
            "optional": false,
            "field": "want_deleted",
            "description": "<p>是否获取被软删除的app</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"want_deleted\" = \"false\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "App",
            "description": "<p>返回所有的app信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   [{\n    \"id\": \"1\",\n    \"user_id\": \"1\",\n    \"name\": \"name1\",\n    \"deleted_at\": null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }，\n   {\n    \"id\": \"2\",\n    \"user_id\": \"1\",\n    \"name\": \"name2\",\n    \"deleted_at\": null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/AppController.php",
    "groupTitle": "App"
  },
  {
    "type": "post",
    "url": "/api/{app_id}/data",
    "title": "添加app数据",
    "name": "add_data",
    "group": "Data",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>数据的关键词</p>"
          },
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "value",
            "description": "<p>数据的值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"key\": \"key3\",\n  \"value\": \"value3\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Data",
            "description": "<p>返回新增数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"id\": \"3\",\n    \"app_id\": \"1\",\n    \"key\": \"key3\"\n    \"value\": \"value3\",\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/DataController.php",
    "groupTitle": "Data"
  },
  {
    "type": "put",
    "url": "/api/{app_id}/data",
    "title": "修改app数据",
    "name": "change_data",
    "group": "Data",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "nullable": [
          {
            "group": "nullable",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>数据的关键词</p>"
          },
          {
            "group": "nullable",
            "type": "string",
            "optional": false,
            "field": "value",
            "description": "<p>数据的值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"key\": \"key3_change\",\n  \"value\": \"value3_change\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Data",
            "description": "<p>返回修改后的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"id\": \"3\",\n    \"app_id\": \"1\",\n    \"key\": \"key3_change\"\n    \"value\": \"value3_change\",\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/DataController.php",
    "groupTitle": "Data"
  },
  {
    "type": "put",
    "url": "/api/{app_id}/data",
    "title": "删除app数据",
    "name": "delete_data",
    "group": "Data",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "data_id",
            "description": "<p>数据的id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"data_id\": \"3\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Data",
            "description": "<p>返回空</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   []",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/DataController.php",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/api/{app_id}/data",
    "title": "获得app数据",
    "name": "show_data",
    "group": "Data",
    "version": "v1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "[example]",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Data",
            "description": "<p>返回修改后的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   [{\n    \"id\": \"1\",\n    \"app_id\": \"1\",\n    \"key\": \"key1\"\n    \"value\": \"value1\",\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   },\n   {\n    \"id\": \"2\",\n    \"app_id\": \"1\",\n    \"key\": \"key2\"\n    \"value\": \"value2\",\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/DataController.php",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/api/download",
    "title": "下载安装包",
    "name": "download",
    "group": "Download",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "version_id",
            "description": "<p>想要下载的版本id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"version_id\" = \"1\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "App",
            "description": "<p>返回所有的app信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    the file you want",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/DownloadController.php",
    "groupTitle": "Download"
  },
  {
    "type": "post",
    "url": "/api/{app_id}/feedback",
    "title": "添加反馈",
    "name": "add_feedback",
    "group": "Feedback",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "nullable": [
          {
            "group": "nullable",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>首屏的图片</p>"
          }
        ],
        "must": [
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>首屏的文字内容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"content\": \"this is content\",\n  \"file\": my_first_screen_image,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Feedback",
            "description": "<p>返回新增首屏信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"id\": \"3\",\n    \"app_id\": \"1\",\n    \"user_id\": \"1\",\n    \"title\": \"title3\"\n    \"content\": \"this is content\",\n    \"feedback_id\": null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/FeedbackController.php",
    "groupTitle": "Feedback"
  },
  {
    "type": "delete",
    "url": "/api/{app_id}/feedback",
    "title": "删除反馈以及回复该反馈的反馈",
    "name": "delete_feedback",
    "group": "Feedback",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "feedback_id",
            "description": "<p>要删除的反馈id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"feedback_id\": \"1\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Feedback",
            "description": "<p>返回空</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   []",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/FeedbackController.php",
    "groupTitle": "Feedback"
  },
  {
    "type": "get",
    "url": "/api/{user_id}/feedback",
    "title": "查看用户反馈列表",
    "name": "user_feedback",
    "group": "Feedback",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>要查看反馈的用户的id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"user_id\": \"1\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Feedback",
            "description": "<p>返回指定用户的所有反馈信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   [{\n    \"id\": \"1\",\n    \"app_id\": \"1\",\n    \"user_id\": \"1\",\n    \"title\": \"title1\",\n    \"content\": \"this is content\",\n    \"feedback_id\": null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   },\n   {\n    \"id\": \"2\",\n    \"app_id\": \"1\",\n    \"user_id\": \"1\",\n    \"title\": \"title2\",\n    \"content\": \"this is content\",\n    \"feedback_id\": \"1\",\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/FeedbackController.php",
    "groupTitle": "Feedback"
  },
  {
    "type": "get",
    "url": "/api/{app_id}/feedback",
    "title": "查看app反馈列表",
    "name": "view_feedback",
    "group": "Feedback",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "app_id",
            "description": "<p>要查看反馈的app的id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"app_id\": \"1\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Feedback",
            "description": "<p>返回指定app的所有反馈信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   [{\n    \"id\": \"1\",\n    \"app_id\": \"1\",\n    \"user_id\": \"1\",\n    \"title\": \"title1\",\n    \"content\": \"this is content\",\n    \"feedback_id\": null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   },\n   {\n    \"id\": \"2\",\n    \"app_id\": \"1\",\n    \"user_id\": \"1\",\n    \"title\": \"title2\",\n    \"content\": \"this is content\",\n    \"feedback_id\": \"1\",\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/FeedbackController.php",
    "groupTitle": "Feedback"
  },
  {
    "type": "put",
    "url": "/api/{app_id}/first_screen",
    "title": "激活指定首屏",
    "name": "active_first_screen",
    "group": "FirstScreen",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "first_screen_id",
            "description": "<p>要激活的首屏id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"first_screen_id\": \"3\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "FirstScreen",
            "description": "<p>返回被激活的首屏信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"id\": \"3\",\n    \"app_id\": \"1\",\n    \"content\": \"this is content\",\n    \"image_url\": \"image_store_path/random_name3.xxx\",\n    \"actived\": \"true\",\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/FirstScreenController.php",
    "groupTitle": "FirstScreen"
  },
  {
    "type": "post",
    "url": "/api/{app_id}/first_screen",
    "title": "为指定app新增首屏",
    "name": "add_first_screen",
    "group": "FirstScreen",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "nullable": [
          {
            "group": "nullable",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>首屏的图片</p>"
          }
        ],
        "must": [
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>首屏的文字内容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"content\": \"this is content\",\n  \"file\": my_first_screen_image,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "FirstScreen",
            "description": "<p>返回新增首屏信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"id\": \"3\",\n    \"app_id\": \"1\",\n    \"content\": \"this is content\",\n    \"image_url\": \"image_store_path/random_name3.xxx\",\n    \"actived\": \"true\",\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/FirstScreenController.php",
    "groupTitle": "FirstScreen"
  },
  {
    "type": "delete",
    "url": "/api/{app_id}/first_screen",
    "title": "删除指定首屏",
    "name": "delete_first_screen",
    "group": "FirstScreen",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "first_screen_id",
            "description": "<p>要删除的首屏id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"first_screen_id\": \"3\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "FirstScreen",
            "description": "<p>返回空</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   []",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/FirstScreenController.php",
    "groupTitle": "FirstScreen"
  },
  {
    "type": "get",
    "url": "/api/{app_id}/first_screen",
    "title": "获取首屏列表",
    "name": "get_first_screen",
    "group": "FirstScreen",
    "version": "v1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "[example]",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "FirstScreen",
            "description": "<p>返回首屏列表信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   [{\n    \"id\": \"1\",\n    \"app_id\": \"1\",\n    \"content\": \"first first screen\",\n    \"image_url\": \"image_store_path/random_name.xxx\",\n    \"actived\": \"false\",\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   },\n   {\n    \"id\": \"2\",\n    \"app_id\": \"1\",\n    \"content\": \"second first screen\",\n    \"image_url\": \"image_store_path/random_name2.xxx\",\n    \"actived\": \"false\",\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/FirstScreenController.php",
    "groupTitle": "FirstScreen"
  },
  {
    "type": "post",
    "url": "/api/{system_id}/image",
    "title": "覆盖指定系统logo",
    "name": "change_logo",
    "group": "Image",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>新的logo图片文件</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"file\" = my_new_logo,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Image",
            "description": "<p>新logo保存的路径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n     image_store_path/random_name.xxx\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/ImageController.php",
    "groupTitle": "Image"
  },
  {
    "type": "any",
    "url": "/api/image/{image_name}",
    "title": "获取指定图片",
    "name": "get_image",
    "group": "Image",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "img_name",
            "description": "<p>要获取的图片名字</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"img_name\" = \"randomname_jpeg\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "file",
            "optional": false,
            "field": "Image",
            "description": "<p>要显示的图片</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n     \"file\": the_image_you_want,\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/ImageController.php",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/api/{app_id}/system",
    "title": "为指定 app 添加新系统",
    "name": "add_system",
    "group": "System",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "system",
            "description": "<p>系统名称</p>"
          },
          {
            "group": "must",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>对应的logo图片</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"system\" = \"Android\"，\n  \"file\" = new image,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "System",
            "description": "<p>返回新系统信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"id\": \"1\",\n    \"app_id\": \"1\",\n    \"identifacation\": \"cn.xxx.xxx.cn.example\",\n    \"logo_url\": \"example_jpeg\",\n    \"deleted_at\": null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/SystemController.php",
    "groupTitle": "System"
  },
  {
    "type": "delete",
    "url": "/api/{app_id}/system",
    "title": "删除指定系统",
    "name": "delete_system",
    "group": "System",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "system_id",
            "description": "<p>要删除的系统id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"system_id\" = \"3\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "System",
            "description": "<p>返回空</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   []",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/SystemController.php",
    "groupTitle": "System"
  },
  {
    "type": "put",
    "url": "/api/{app_id}/system",
    "title": "恢复指定系统",
    "name": "restore_system",
    "group": "System",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "system_id",
            "description": "<p>要恢复的系统id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"system_id\" = \"3\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "System",
            "description": "<p>返回恢复的系统信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n    \"id\": \"1\",\n    \"app_id\": \"1\",\n    \"identifacation\": \"cn.xxx.xxx.cn.example\",\n    \"logo_url\": \"example_jpeg\",\n    \"deleted_at\": null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/SystemController.php",
    "groupTitle": "System"
  },
  {
    "type": "get",
    "url": "/api/{app_id}/system",
    "title": "获得指定 app 的系统列表",
    "name": "system_list",
    "group": "System",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "nullable": [
          {
            "group": "nullable",
            "type": "string",
            "allowedValues": [
              "\"false\"",
              "\"true\""
            ],
            "optional": false,
            "field": "want_deleted",
            "description": "<p>是否获取被软删除的系统</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"want_deleted\" = \"false\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "System",
            "description": "<p>返回系统信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  [{\n    \"id\": \"1\",\n    \"app_id\": \"1\",\n    \"identifacation\": \"cn.xxx.xxx.cn.example\",\n    \"logo_url\": \"example_jpeg\",\n    \"deleted_at\": null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   },\n   {\n    \"id\": \"2\",\n    \"add_id\": \"1\",\n    \"identifacation\": \"cn.xxx.xxx.cn.example2\",\n    \"logo_url\": \"example_jpeg\",\n    \"deleted_at\": null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/SystemController.php",
    "groupTitle": "System"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "注册新用户",
    "name": "add_new_user",
    "group": "User",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"username\" = \"example\",\n  \"password\" = \"example\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "User",
            "description": "<p>返回用户信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"id\": \"1\",\n    \"username\": \"example\",\n    \"admin\": \"false\",\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "用户登录",
    "name": "user_login",
    "group": "User",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"username\" = \"example\",\n  \"password\" = \"example\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "User",
            "description": "<p>返回登录状态和token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"status\": \"true\",\n    \"username\": \"example\",\n    \"apiToken\": \"random string\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/{system_id}/version",
    "title": "添加新版本",
    "name": "add_version",
    "group": "Version",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>上传的app安装文件</p>"
          },
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "version",
            "description": "<p>自定义的版本号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"file\": my_new_app,\n  \"version\": \"v1.0.5\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Version",
            "description": "<p>返回新增版本信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"system_id\": \"1\",\n    \"id\": \"1\",\n    \"build\": \"9\",\n    \"file_url\": \"app/example.zip\",\n    \"version\": \"v1.0.1\",\n    \"deleted_at\"： null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/VersionController.php",
    "groupTitle": "Version"
  },
  {
    "type": "delete",
    "url": "/api/{system_id}/version",
    "title": "删除指定版本",
    "name": "delete_version",
    "group": "Version",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "version_id",
            "description": "<p>要删除的版本id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"version_id\": \"1\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Version",
            "description": "<p>返回空</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  []",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/VersionController.php",
    "groupTitle": "Version"
  },
  {
    "type": "put",
    "url": "/api/{system_id}/version",
    "title": "恢复指定版本",
    "name": "restore_version",
    "group": "Version",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "integer",
            "optional": false,
            "field": "version_id",
            "description": "<p>版本id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"version_id\": \"1\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Version",
            "description": "<p>返回恢复的版本信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"system_id\": \"1\",\n    \"id\": \"1\",\n    \"build\": \"9\",\n    \"file_url\": \"app/example.zip\",\n    \"version\": \"v1.0.1\",\n    \"deleted_at\"： null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/VersionController.php",
    "groupTitle": "Version"
  },
  {
    "type": "get",
    "url": "/api/{system_id}/version",
    "title": "获取版本列表",
    "name": "version_list",
    "group": "Version",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "nullable": [
          {
            "group": "nullable",
            "type": "string",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": false,
            "field": "want_deleted",
            "description": "<p>是否获取被软删除的版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"want_deleted\" = \"false\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Version",
            "description": "<p>返回版本信息列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  [{\n    \"system_id\": \"1\",\n    \"id\": \"1\",\n    \"build\": \"9\",\n    \"file_url\": \"app/example.zip\",\n    \"version\": \"v1.0.1\",\n    \"deleted_at\"： null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   },\n   {\n    \"system_id\": \"1\",\n    \"id\": \"2\",\n    \"build\": \"3\",\n    \"file_url\": \"app/example2.zip\",\n    \"version\": \"v2.0.1\",\n    \"deleted_at\"： null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/VersionController.php",
    "groupTitle": "Version"
  },
  {
    "type": "get",
    "url": "/api/version",
    "title": "根据名字获取版本列表",
    "name": "version_list_by_name",
    "group": "Version",
    "version": "v1.0.0",
    "parameter": {
      "fields": {
        "must": [
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "app_name",
            "description": "<p>app的名字</p>"
          },
          {
            "group": "must",
            "type": "string",
            "optional": false,
            "field": "system_name",
            "description": "<p>system的名字</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "[example]",
          "content": "{\n  \"app_name\" = \"example_app\",\n  \"system_name\" = \"example_system\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "logo_url",
            "description": "<p>返回logo的名字</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "version",
            "description": "<p>返回最新版本的信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\"logo_url\": \"example_jpeg\",\n   \"version\":\n   {\n    \"system_id\": \"1\",\n    \"id\": \"1\",\n    \"build\": \"9\",\n    \"file_url\": \"app/example.zip\",\n    \"version\": \"v1.0.1\",\n    \"deleted_at\"： null,\n    \"updated_at\": \"2017-08-21 16:00\",\n    \"created_at\": \"2017-08-21 16:00\",\n   }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/VersionController.php",
    "groupTitle": "Version"
  }
] });
