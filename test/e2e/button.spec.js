describe('Button 组件 E2E 测试', () => {
  beforeEach(() => {
    cy.visit('/#/components/button');
  });

  it('应该正确渲染基础按钮', () => {
    // 验证按钮存在
    cy.get('.t-button').should('exist');
    
    // 验证按钮文本
    cy.get('.t-button').first().should('contain.text', '填充按钮');
  });

  it('应该响应点击事件', () => {
    // 点击按钮
    cy.get('.t-button').first().click();
    
    // 验证按钮状态变化（如果有loading状态）
    cy.get('.t-button').first().should('not.have.class', 't-button--loading');
  });

  it('应该支持不同主题的按钮', () => {
    // 验证默认主题
    cy.get('.t-button--default').should('exist');
    
    // 验证描边按钮
    cy.get('.t-button--outline').should('exist');
    
    // 验证虚框按钮
    cy.get('.t-button--dashed').should('exist');
    
    // 验证文字按钮
    cy.get('.t-button--text').should('exist');
  });

  it('应该支持禁用状态', () => {
    // 如果有禁用按钮，验证禁用状态
    cy.get('.t-button--disabled').should('be.disabled');
  });

  it('应该支持图标按钮', () => {
    // 验证图标按钮存在
    cy.get('.t-button .t-icon').should('exist');
  });

  it('应该支持不同尺寸', () => {
    // 验证小尺寸按钮
    cy.get('.t-button--size-s').should('exist');
    
    // 验证中尺寸按钮
    cy.get('.t-button--size-m').should('exist');
    
    // 验证大尺寸按钮
    cy.get('.t-button--size-l').should('exist');
  });
});