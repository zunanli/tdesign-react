describe('Form 组件 E2E 测试', () => {
  beforeEach(() => {
    cy.visit('/#/components/form');
  });

  it('应该正确渲染表单', () => {
    // 验证表单存在
    cy.get('.t-form').should('exist');
    
    // 验证表单字段存在
    cy.get('.t-form__item').should('exist');
  });

  it('应该支持文本输入验证', () => {
    // 找到必填字段
    cy.get('.t-form__item--required input').first().click();
    
    // 不输入内容，触发验证
    cy.get('.t-form__item--required input').first().blur();
    
    // 验证错误信息显示
    cy.get('.t-form__controls-content .t-input--error').should('exist');
    cy.get('.t-form__status').should('contain', '请输入');
  });

  it('应该支持表单提交', () => {
    // 填写表单字段
    cy.get('.t-form__item input').first().type('test user');
    cy.get('.t-form__item input').eq(1).type('test@example.com');
    cy.get('.t-form__item textarea').first().type('test message');
    
    // 点击提交按钮
    cy.get('.t-form__submit').click();
    
    // 验证提交成功（如果有成功提示）
    cy.get('.t-message--success').should('exist');
  });

  it('应该支持表单重置', () => {
    // 填写表单字段
    cy.get('.t-form__item input').first().type('test user');
    cy.get('.t-form__item input').eq(1).type('test@example.com');
    
    // 点击重置按钮
    cy.get('.t-form__reset').click();
    
    // 验证表单已重置
    cy.get('.t-form__item input').first().should('have.value', '');
    cy.get('.t-form__item input').eq(1).should('have.value', '');
  });

  it('应该支持实时验证', () => {
    // 输入无效邮箱
    cy.get('.t-form__item input[type="email"]').type('invalid-email');
    
    // 验证实时错误提示
    cy.get('.t-form__status').should('contain', '邮箱格式不正确');
    
    // 输入有效邮箱
    cy.get('.t-form__item input[type="email"]').clear().type('valid@example.com');
    
    // 验证错误消失
    cy.get('.t-form__status').should('not.contain', '邮箱格式不正确');
  });

  it('应该支持自定义验证规则', () => {
    // 输入不符合自定义规则的内容
    cy.get('.t-form__item input').first().type('123');
    
    // 验证自定义错误信息
    cy.get('.t-form__status').should('contain', '自定义验证失败');
  });

  it('应该支持异步验证', () => {
    // 输入需要异步验证的字段
    cy.get('.t-form__item input[data-async-validate]').type('test');
    
    // 验证加载状态
    cy.get('.t-loading').should('exist');
    
    // 等待验证完成
    cy.get('.t-form__status').should('not.contain', '验证中');
  });

  it('应该支持表单布局', () => {
    // 验证水平布局
    cy.get('.t-form--horizontal').should('exist');
    
    // 验证垂直布局
    cy.get('.t-form--vertical').should('exist');
    
    // 验证内联布局
    cy.get('.t-form--inline').should('exist');
  });

  it('应该支持表单分组', () => {
    // 验证表单分组存在
    cy.get('.t-form__section').should('exist');
    
    // 验证分组标题
    cy.get('.t-form__section-title').should('exist');
  });

  it('应该支持动态表单字段', () => {
    // 点击添加字段按钮
    cy.get('.t-form__add-field').click();
    
    // 验证新字段已添加
    cy.get('.t-form__item').should('have.length.gt', 1);
    
    // 点击删除字段按钮
    cy.get('.t-form__remove-field').first().click();
    
    // 验证字段已删除
    cy.get('.t-form__item').should('have.length', 1);
  });

  it('应该支持表单联动', () => {
    // 选择省份
    cy.get('.t-form__item select').first().select('北京');
    
    // 验证城市选项联动更新
    cy.get('.t-form__item select').eq(1).should('contain', '北京');
  });

  it('应该支持表单数据绑定', () => {
    // 修改表单数据
    cy.get('.t-form__item input').first().type('new value');
    
    // 验证数据绑定更新
    cy.get('.t-form__data-display').should('contain', 'new value');
  });

  it('应该支持表单状态管理', () => {
    // 点击禁用表单按钮
    cy.get('.t-form__disable-btn').click();
    
    // 验证表单已禁用
    cy.get('.t-form--disabled').should('exist');
    cy.get('.t-form__item input').should('be.disabled');
    
    // 点击启用表单按钮
    cy.get('.t-form__enable-btn').click();
    
    // 验证表单已启用
    cy.get('.t-form__item input').should('not.be.disabled');
  });
});