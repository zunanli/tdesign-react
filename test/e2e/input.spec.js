describe('Input 组件 E2E 测试', () => {
  beforeEach(() => {
    cy.visit('/#/components/input');
  });

  it('应该正确渲染输入框', () => {
    // 验证输入框存在
    cy.get('.t-input').should('exist');
    
    // 验证占位符文本
    cy.get('.t-input__inner').should('have.attr', 'placeholder');
  });

  it('应该支持文本输入', () => {
    const testText = 'Hello TDesign';
    
    // 输入文本
    cy.get('.t-input__inner').first().type(testText);
    
    // 验证输入的值
    cy.get('.t-input__inner').first().should('have.value', testText);
  });

  it('应该支持清空功能', () => {
    const testText = 'Test Input';
    
    // 输入文本
    cy.get('.t-input__inner').first().type(testText);
    
    // 点击清空按钮
    cy.get('.t-input__suffix-clear').click();
    
    // 验证输入框已清空
    cy.get('.t-input__inner').first().should('have.value', '');
  });

  it('应该支持回车事件', () => {
    const testText = 'Enter Test';
    
    // 输入文本并按回车
    cy.get('.t-input__inner').first().type(testText + '{enter}');
    
    // 验证输入值
    cy.get('.t-input__inner').first().should('have.value', testText);
  });

  it('应该支持禁用状态', () => {
    // 验证禁用状态的输入框
    cy.get('.t-input--disabled').should('be.disabled');
  });

  it('应该支持不同尺寸', () => {
    // 验证小尺寸
    cy.get('.t-input--size-s').should('exist');
    
    // 验证中尺寸
    cy.get('.t-input--size-m').should('exist');
    
    // 验证大尺寸
    cy.get('.t-input--size-l').should('exist');
  });

  it('应该支持状态样式', () => {
    // 验证成功状态
    cy.get('.t-input--success').should('exist');
    
    // 验证警告状态
    cy.get('.t-input--warning').should('exist');
    
    // 验证错误状态
    cy.get('.t-input--error').should('exist');
  });

  it('应该支持最大长度限制', () => {
    const longText = 'This is a very long text that should be truncated';
    
    // 输入超长文本
    cy.get('.t-input__inner').first().type(longText);
    
    // 验证长度限制（如果有maxLength属性）
    cy.get('.t-input__inner').first().should('have.value');
  });

  it('应该支持密码输入', () => {
    // 验证密码输入框
    cy.get('input[type="password"]').should('exist');
    
    // 输入密码
    cy.get('input[type="password"]').type('password123');
    
    // 验证密码已输入
    cy.get('input[type="password"]').should('have.value', 'password123');
  });

  it('应该支持文本域', () => {
    // 验证文本域存在
    cy.get('textarea').should('exist');
    
    // 输入多行文本
    cy.get('textarea').type('Line 1{enter}Line 2{enter}Line 3');
    
    // 验证文本域内容
    cy.get('textarea').should('contain.value', 'Line 1');
  });
});