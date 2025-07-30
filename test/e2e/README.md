# TDesign E2E 测试

## 概述

本目录包含 TDesign React 组件的端到端（E2E）测试，使用 Cypress 框架进行测试。

## 测试文件结构

```
test/e2e/
├── button.spec.js          # 按钮组件测试
├── input.spec.js           # 输入框组件测试
├── select.spec.js          # 选择器组件测试
├── table.spec.js           # 表格组件测试
├── form.spec.js            # 表单组件测试
├── integration.spec.js     # 综合集成测试
├── cypress.config.js       # Cypress 配置
└── README.md              # 说明文档
```

## 运行测试

### 1. 启动开发服务器

```bash
# 启动 TDesign 开发服务器
npm run dev
```

### 2. 运行 E2E 测试

```bash
# 运行所有 E2E 测试
npm run cypress:e2e

# 运行特定测试文件
npm run cypress:e2e -- --spec "test/e2e/button.spec.js"

# 打开 Cypress GUI
npm run cypress:open
```

### 3. 在 CI/CD 中运行

```bash
# 无头模式运行测试
npm run cypress:run
```

## 测试覆盖范围

### 组件测试

1. **Button 组件** (`button.spec.js`)
   - 基础按钮渲染
   - 点击事件响应
   - 不同主题样式
   - 禁用状态
   - 图标按钮
   - 不同尺寸

2. **Input 组件** (`input.spec.js`)
   - 文本输入
   - 清空功能
   - 回车事件
   - 禁用状态
   - 不同尺寸
   - 状态样式
   - 最大长度限制
   - 密码输入
   - 文本域

3. **Select 组件** (`select.spec.js`)
   - 下拉菜单展开
   - 选项选择
   - 搜索功能
   - 多选功能
   - 清除选择
   - 禁用状态
   - 不同尺寸
   - 分组选项
   - 键盘导航
   - 远程搜索

4. **Table 组件** (`table.spec.js`)
   - 表格渲染
   - 排序功能
   - 分页功能
   - 行选择
   - 展开行
   - 固定列
   - 列宽调整
   - 行拖拽排序
   - 搜索功能
   - 导出功能
   - 列显示控制

5. **Form 组件** (`form.spec.js`)
   - 表单渲染
   - 文本输入验证
   - 表单提交
   - 表单重置
   - 实时验证
   - 自定义验证规则
   - 异步验证
   - 表单布局
   - 表单分组
   - 动态表单字段
   - 表单联动
   - 表单数据绑定
   - 表单状态管理

### 集成测试

**Integration 测试** (`integration.spec.js`)
- 完整的用户注册流程
- 数据表格的完整操作流程
- 文件上传的完整流程
- 日期选择的完整流程
- 分页组件的完整操作
- 对话框的完整交互
- 标签页的切换操作
- 进度条的动态更新
- 通知组件的显示和关闭
- 加载状态的切换

## 测试最佳实践

### 1. 选择器策略

```javascript
// 推荐：使用语义化的选择器
cy.get('.t-button').click();
cy.get('.t-input__inner').type('test');

// 避免：使用不稳定的选择器
cy.get('button').click();
cy.get('input').type('test');
```

### 2. 等待策略

```javascript
// 推荐：等待元素可见
cy.get('.t-dropdown__menu').should('be.visible');

// 推荐：等待异步操作完成
cy.get('.t-loading').should('not.exist');
```

### 3. 断言策略

```javascript
// 推荐：验证元素状态
cy.get('.t-button').should('have.class', 't-button--loading');

// 推荐：验证文本内容
cy.get('.t-input__inner').should('have.value', 'expected text');
```

## 调试技巧

### 1. 查看测试视频

测试运行后，视频文件保存在 `test/e2e/cy-report/videos/` 目录。

### 2. 查看失败截图

测试失败时，截图保存在 `test/e2e/cy-report/screenshots/` 目录。

### 3. 调试模式

```bash
# 打开 Cypress GUI 进行调试
npm run cypress:open
```

## 持续集成

### GitHub Actions 配置示例

```yaml
name: E2E Tests
on: [push, pull_request]
jobs:
  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run dev &
      - run: npm run cypress:run
        env:
          CYPRESS_baseUrl: http://localhost:15000
```

## 注意事项

1. **测试环境**：确保开发服务器在 `http://127.0.0.1:15000` 运行
2. **浏览器兼容性**：测试在 Chrome 浏览器中进行
3. **网络依赖**：某些测试可能需要网络连接
4. **时间敏感**：某些异步操作可能需要调整等待时间

## 贡献指南

1. 新增测试时，请遵循现有的命名规范
2. 测试应该独立且可重复运行
3. 使用描述性的测试名称
4. 添加适当的注释说明测试目的