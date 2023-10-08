# 1. cra初始化项目

- 创建脚手架 create-react-app demo (demo文件名)

# 2. 自定义(覆盖)webpack配置 craco

## 2.1 安装

    - npm i -D @craco/craco

## 2.2 配置文件

      demo
      ├── node_modules
    + ├── craco.config.js
      └── package.json

## 2.3 package.json

    "scripts": {
    -  "start": "react-scripts start"
    +  "start": "craco start"
    -  "build": "react-scripts build"
    +  "build": "craco build"
    -  "test": "react-scripts test"
    +  "test": "craco test"
    }

# 3. tailwindcss

- 查看文档配置 [https://www.tailwindcss.cn/docs/guides/create-react-app]

# 4. jsconfig.json 配置路径别名的映射

# 5. UI库的配置

- Ant Design [https://ant-design.antgroup.com/docs/react/use-with-create-react-app-cn]

# 6. 请求库的配置

# 7. 配置代码规范

- editorconfig + prettier +

## 7.1 配置editorconfig

- 下载 EditorConfig for VS Code

- 创建 .editorconfig 配置文件

- 写入
  Editor configuration, see http://editorconfig.org
  表示是最顶层的 EditorConfig 配置文件
  root = true
  [*] # 表示所有文件适用
  charset = utf-8 # 设置文件字符集为 utf-8
  indent_style = space # 缩进风格（tab | space）
  indent_size = 2 # 缩进大小
  end_of_line = lf # 控制换行类型(lf | cr | crlf)
  trim_trailing_whitespace = true # 去除行首的任意空白字符
  insert_final_newline = true # 始终在文件末尾插入一个新行
  [*.md] # 表示仅 md 文件适用以下规则
  max_line_length = off
  trim_trailing_whitespace = false

## 7.2 配置prettier

- 下载 cnpm i prettier -D && prettier插件

- 创建 .prettierrc 配置文件

- 写入
  {
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "semi": false
  }
