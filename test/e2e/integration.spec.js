describe('TDesign 组件集成 E2E 测试', () => {
  beforeEach(() => {
    cy.visit('/#/components');
  });

  it('应该支持完整的用户注册流程', () => {
    // 访问注册页面
    cy.visit('/#/components/form');
    
    // 填写用户信息
    cy.get('.t-form__item input[name="username"]').type('testuser');
    cy.get('.t-form__item input[name="email"]').type('test@example.com');
    cy.get('.t-form__item input[name="password"]').type('password123');
    cy.get('.t-form__item input[name="confirmPassword"]').type('password123');
    
    // 选择用户类型
    cy.get('.t-form__item .t-select').click();
    cy.get('.t-select__dropdown .t-option').contains('个人用户').click();
    
    // 同意条款
    cy.get('.t-form__item .t-checkbox').click();
    
    // 提交表单
    cy.get('.t-form__submit').click();
    
    // 验证成功提示
    cy.get('.t-message--success').should('exist');
  });

  it('应该支持数据表格的完整操作流程', () => {
    // 访问表格页面
    cy.visit('/#/components/table');
    
    // 搜索数据
    cy.get('.t-table__search-input').type('test data');
    
    // 选择排序方式
    cy.get('.t-table__header .t-table__cell--sortable').first().click();
    
    // 选择多行数据
    cy.get('.t-table__body .t-checkbox').first().click();
    cy.get('.t-table__body .t-checkbox').eq(1).click();
    
    // 点击批量操作按钮
    cy.get('.t-table__batch-actions .t-button').first().click();
    
    // 验证操作菜单
    cy.get('.t-dropdown__menu').should('be.visible');
    
    // 选择删除操作
    cy.get('.t-dropdown__menu .t-dropdown__item').contains('删除').click();
    
    // 确认删除
    cy.get('.t-dialog__footer .t-button--danger').click();
    
    // 验证删除成功
    cy.get('.t-message--success').should('exist');
  });

  it('应该支持文件上传的完整流程', () => {
    // 访问上传组件页面
    cy.visit('/#/components/upload');
    
    // 选择文件
    cy.get('.t-upload__input').attachFile('test-image.jpg');
    
    // 验证文件列表显示
    cy.get('.t-upload__file-list').should('contain', 'test-image.jpg');
    
    // 等待上传完成
    cy.get('.t-upload__file-item .t-upload__status-success').should('exist');
    
    // 删除已上传文件
    cy.get('.t-upload__file-item .t-upload__delete').click();
    
    // 验证文件已删除
    cy.get('.t-upload__file-list').should('not.contain', 'test-image.jpg');
  });

  it('应该支持日期选择的完整流程', () => {
    // 访问日期选择器页面
    cy.visit('/#/components/date-picker');
    
    // 点击日期输入框
    cy.get('.t-date-picker__input').click();
    
    // 选择年份
    cy.get('.t-date-picker__year-select').click();
    cy.get('.t-date-picker__year-panel .t-option').contains('2024').click();
    
    // 选择月份
    cy.get('.t-date-picker__month-select').click();
    cy.get('.t-date-picker__month-panel .t-option').contains('12').click();
    
    // 选择日期
    cy.get('.t-date-picker__cell').contains('15').click();
    
    // 验证日期已选择
    cy.get('.t-date-picker__input').should('contain', '2024-12-15');
  });

  it('应该支持分页组件的完整操作', () => {
    // 访问分页组件页面
    cy.visit('/#/components/pagination');
    
    // 验证分页器存在
    cy.get('.t-pagination').should('exist');
    
    // 跳转到指定页面
    cy.get('.t-pagination__jump .t-input__inner').type('5{enter}');
    
    // 验证页码变化
    cy.get('.t-pagination__current').should('contain', '5');
    
    // 修改每页显示数量
    cy.get('.t-pagination__select').click();
    cy.get('.t-select__dropdown .t-option').contains('20').click();
    
    // 验证每页数量变化
    cy.get('.t-pagination__total').should('contain', '20');
  });

  it('应该支持对话框的完整交互', () => {
    // 访问对话框组件页面
    cy.visit('/#/components/dialog');
    
    // 点击打开对话框按钮
    cy.get('.t-button').contains('打开对话框').click();
    
    // 验证对话框显示
    cy.get('.t-dialog').should('be.visible');
    
    // 填写对话框内容
    cy.get('.t-dialog__body input').type('test content');
    
    // 点击确认按钮
    cy.get('.t-dialog__footer .t-button--primary').click();
    
    // 验证对话框关闭
    cy.get('.t-dialog').should('not.be.visible');
  });

  it('应该支持标签页的切换操作', () => {
    // 访问标签页组件页面
    cy.visit('/#/components/tabs');
    
    // 验证标签页存在
    cy.get('.t-tabs__nav').should('exist');
    
    // 切换到第二个标签
    cy.get('.t-tabs__nav-item').eq(1).click();
    
    // 验证标签切换
    cy.get('.t-tabs__nav-item--active').should('contain', '标签2');
    
    // 验证内容切换
    cy.get('.t-tabs__content').should('contain', '标签2的内容');
  });

  it('应该支持进度条的动态更新', () => {
    // 访问进度条组件页面
    cy.visit('/#/components/progress');
    
    // 验证进度条存在
    cy.get('.t-progress').should('exist');
    
    // 点击开始按钮
    cy.get('.t-button').contains('开始').click();
    
    // 验证进度条动画
    cy.get('.t-progress__bar').should('have.css', 'width');
    
    // 等待进度完成
    cy.get('.t-progress__text').should('contain', '100%');
  });

  it('应该支持通知组件的显示和关闭', () => {
    // 访问通知组件页面
    cy.visit('/#/components/notification');
    
    // 点击显示通知按钮
    cy.get('.t-button').contains('显示通知').click();
    
    // 验证通知显示
    cy.get('.t-notification').should('be.visible');
    
    // 点击关闭按钮
    cy.get('.t-notification__close').click();
    
    // 验证通知关闭
    cy.get('.t-notification').should('not.be.visible');
  });

  it('应该支持加载状态的切换', () => {
    // 访问加载组件页面
    cy.visit('/#/components/loading');
    
    // 验证加载组件存在
    cy.get('.t-loading').should('exist');
    
    // 点击触发加载按钮
    cy.get('.t-button').contains('开始加载').click();
    
    // 验证加载状态
    cy.get('.t-loading--loading').should('exist');
    
    // 等待加载完成
    cy.get('.t-loading--loading').should('not.exist');
  });
});