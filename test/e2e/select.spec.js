describe('Select 组件 E2E 测试', () => {
  beforeEach(() => {
    cy.visit('/#/components/select');
  });

  it('应该正确渲染选择器', () => {
    // 验证选择器存在
    cy.get('.t-select').should('exist');
    
    // 验证占位符文本
    cy.get('.t-select__placeholder').should('exist');
  });

  it('应该支持点击展开下拉菜单', () => {
    // 点击选择器
    cy.get('.t-select').first().click();
    
    // 验证下拉菜单展开
    cy.get('.t-select__dropdown').should('be.visible');
  });

  it('应该支持选项选择', () => {
    // 点击选择器
    cy.get('.t-select').first().click();
    
    // 选择第一个选项
    cy.get('.t-select__dropdown .t-option').first().click();
    
    // 验证选中状态
    cy.get('.t-select__value').should('not.contain', '请选择');
  });

  it('应该支持搜索功能', () => {
    // 点击选择器
    cy.get('.t-select').first().click();
    
    // 输入搜索关键词
    cy.get('.t-select__input').type('test');
    
    // 验证搜索结果
    cy.get('.t-select__dropdown').should('contain', 'test');
  });

  it('应该支持多选功能', () => {
    // 找到多选选择器
    cy.get('.t-select--multiple').first().click();
    
    // 选择多个选项
    cy.get('.t-select__dropdown .t-option').first().click();
    cy.get('.t-select__dropdown .t-option').eq(1).click();
    
    // 验证多选标签
    cy.get('.t-tag').should('have.length.at.least', 2);
  });

  it('应该支持清除选择', () => {
    // 先选择一个选项
    cy.get('.t-select').first().click();
    cy.get('.t-select__dropdown .t-option').first().click();
    
    // 点击清除按钮
    cy.get('.t-select__suffix-clear').click();
    
    // 验证已清除
    cy.get('.t-select__value').should('contain', '请选择');
  });

  it('应该支持禁用状态', () => {
    // 验证禁用状态的选择器
    cy.get('.t-select--disabled').should('be.disabled');
  });

  it('应该支持不同尺寸', () => {
    // 验证小尺寸
    cy.get('.t-select--size-s').should('exist');
    
    // 验证中尺寸
    cy.get('.t-select--size-m').should('exist');
    
    // 验证大尺寸
    cy.get('.t-select--size-l').should('exist');
  });

  it('应该支持分组选项', () => {
    // 点击选择器
    cy.get('.t-select').first().click();
    
    // 验证分组标题
    cy.get('.t-select__dropdown .t-option-group__label').should('exist');
  });

  it('应该支持键盘导航', () => {
    // 点击选择器
    cy.get('.t-select').first().click();
    
    // 使用键盘导航
    cy.get('.t-select__input').type('{downarrow}');
    
    // 验证焦点移动
    cy.get('.t-select__dropdown .t-option--hover').should('exist');
  });

  it('应该支持远程搜索', () => {
    // 找到远程搜索选择器
    cy.get('.t-select--filterable').first().click();
    
    // 输入搜索关键词
    cy.get('.t-select__input').type('remote');
    
    // 验证加载状态
    cy.get('.t-loading').should('exist');
  });
});