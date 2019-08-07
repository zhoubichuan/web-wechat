# javascript dom 基本操作

## 1.获取节点

### 1.document

#### 1.getElementById

* 语法：document.getElementById(元素 ID)

- 功能：通过元素 ID 获取节点

#### 2.getElementsByName

* 语法：document.getElementsByName(元素 name 属性)

- 功能：通过元素的 name 属性获取节点

#### 3.getElementByTagName

* 语法：document.getElementsByTagName(元素标签)

- 功能：通过元素标签获取节点

### 2.节点指针

#### 1.firstChild

* 语法：父节点 firstChild
* 功能：获取元素的首个子节点

#### 2.lastChild

* 语法：父节点 lastChild
* 功能：获取元素的最后一个子节点

#### 3.childNodes

* 语法：父节点 childNodes

- 功能：获取元素的子节点列表

#### 4.previousSibling

* 语法：兄弟节点 previousSibling

- 功能：获取已知节点的前一个节点

#### 5.nextSibling

* 语法：兄弟节点 nextSibling
* 功能：获取已知节点的后一个节点

#### 6.parentNode

* 语法：子节点 parentNode
* 功能：获取已知节点的父节点

## 2.节点操作

### 1.创建节点

#### 1.createElement

* 语法：document.createElement(元素标签)
* 功能：创建元素节点

#### 2.createAttribute

* 语法：document.createAttribute(元素属性)

- 功能：创建属性节点

#### 3.createTextNode

* 语法：document.createTextNode(文本内容)

- 功能：创建文本节点

### 2.插入节点

#### 1.appendChild

* 语法：appendChild(所添加的新节点)

- 功能：向节点的子节点列表的末尾添加新的子节点

#### 2.insertBefore

* 语法：insertBefore(所要添加的新节点，已知子节点)

- 功能：在已知的子节点之前插入一个新的子节点

### 3.替换节点

#### 1.replaceChild

* 语法：replaceChild(要插入的新元素，将被替换的老元素)

- 功能：将某个子节点替换另一个。

### 4.复制节点

#### 1.cloneNode

* 语法：需要被复制的节点.cloneNode(true/false)
* 功能：创建指点节点的副本

- 参数：true 复制当前节点及其所有子节点；false 仅复制当前节点

### 5.删除节点

#### 1.removeChild

* 语法：removeChild(要删除的节点)
* 功能：删除指定的节点

## 3.属性操作

### 1.获取属性

#### 1.getAttribute

* 语法：元素节点.getAttribute(元素属性名)
* 功能：获取元素节点中指定属性的属性值

### 2.设置属性

#### 1.setAttribute

* 语法：元素节点.setAttribute(属性名,属性值)

- 功能：创建或改变元素节点的 属性。

### 3.删除属性

#### 1.removeAttribute

* 语法：元素节点.removeAttribute(属性名)
* 功能：删除元素中的指定属性

## 4.文本操作

### 1.insertData(offset,String)

* 从 offset 指定的位置插入 string

### 2.appendData(String)

* 将 string 插入到文本节点的末尾处

### 3.deleteData(offset,count)

* 从 offset 起删除 count 个字符

### 4.replaceData(off,count,string)

* 从 off 将 count 个字符用 string 替代

### 5.splitData(offset)

* 从 offset 起将文本节点分成两个节点

### 6.substring(offset,count)

* 返回由 offset 起的 count 个节点
