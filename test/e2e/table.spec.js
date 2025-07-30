describe('Table 组件 E2E 测试', () => {
  beforeEach(() => {
    cy.visit('/#/components/table');
  });

  it('应该正确渲染表格', () => {
    // 验证表格存在
    cy.get('.t-table').should('exist');
    
    // 验证表头存在
    cy.get('.t-table__header').should('exist');
    
    // 验证表格内容存在
    cy.get('.t-table__body').should('exist');
  });

  it('应该支持排序功能', () => {
    // 点击排序列头
    cy.get('.t-table__header .t-table__cell--sortable').first().click();
    
    // 验证排序图标变化
    cy.get('.t-table__sort-icon').should('exist');
    
    // 再次点击切换排序方向
    cy.get('.t-table__header .t-table__cell--sortable').first().click();
  });

  it('应该支持分页功能', () => {
    // 验证分页器存在
    cy.get('.t-pagination').should('exist');
    
    // 点击下一页
    cy.get('.t-pagination__next').click();
    
    // 验证页码变化
    cy.get('.t-pagination__current').should('not.contain', '1');
    
    // 点击上一页
    cy.get('.t-pagination__prev').click();
    
    // 验证回到第一页
    cy.get('.t-pagination__current').should('contain', '1');
  });

  it('应该支持行选择', () => {
    // 点击全选复选框
    cy.get('.t-table__header .t-checkbox').click();
    
    // 验证全选状态
    cy.get('.t-table__body .t-checkbox--checked').should('have.length.gt', 0);
    
    // 取消全选
    cy.get('.t-table__header .t-checkbox').click();
    
    // 验证取消选择
    cy.get('.t-table__body .t-checkbox--checked').should('have.length', 0);
  });

  it('应该支持单行选择', () => {
    // 点击第一行的复选框
    cy.get('.t-table__body .t-checkbox').first().click();
    
    // 验证选中状态
    cy.get('.t-table__body .t-checkbox--checked').should('have.length', 1);
  });

  it('应该支持展开行', () => {
    // 点击展开按钮
    cy.get('.t-table__expand-icon').first().click();
    
    // 验证展开内容
    cy.get('.t-table__expanded-row').should('be.visible');
    
    // 再次点击收起
    cy.get('.t-table__expand-icon').first().click();
    
    // 验证收起状态
    cy.get('.t-table__expanded-row').should('not.be.visible');
  });

  it('应该支持固定列', () => {
    // 验证固定列存在
    cy.get('.t-table__cell--fixed-left').should('exist');
    
    // 滚动表格
    cy.get('.t-table__body').scrollTo('right');
    
    // 验证固定列仍然可见
    cy.get('.t-table__cell--fixed-left').should('be.visible');
  });

  it('应该支持列宽调整', () => {
    // 找到可调整宽度的列
    cy.get('.t-table__cell--resizable').first().then($cell => {
      const initialWidth = $cell.width();
      
      // 拖拽调整列宽
      cy.get('.t-table__resize-handle').first()
        .trigger('mousedown')
        .trigger('mousemove', { clientX: initialWidth + 50 })
        .trigger('mouseup');
      
      // 验证列宽变化
      cy.get('.t-table__cell--resizable').first().should('not.have.css', 'width', initialWidth + 'px');
    });
  });

  it('应该支持行拖拽排序', () => {
    // 找到可拖拽的行
    cy.get('.t-table__row--draggable').first().then($row => {
      const firstRowText = $row.text();
      
      // 拖拽第一行到第二行位置
      cy.get('.t-table__row--draggable').first()
        .trigger('mousedown')
        .trigger('mousemove', { clientY: 100 })
        .trigger('mouseup');
      
      // 验证行顺序变化
      cy.get('.t-table__row').first().should('not.contain', firstRowText);
    });
  });

  it('应该支持搜索功能', () => {
    // 找到搜索输入框
    cy.get('.t-table__search-input').type('test');
    
    // 验证搜索结果
    cy.get('.t-table__body .t-table__row').should('contain', 'test');
  });

  it('应该支持导出功能', () => {
    // 点击导出按钮
    cy.get('.t-table__export-btn').click();
    
    // 验证导出选项菜单
    cy.get('.t-dropdown__menu').should('be.visible');
    
    // 选择导出格式
    cy.get('.t-dropdown__menu .t-dropdown__item').contains('Excel').click();
  });

  it('应该支持列显示控制', () => {
    // 点击列设置按钮
    cy.get('.t-table__column-setting').click();
    
    // 验证列设置面板
    cy.get('.t-table__column-setting-panel').should('be.visible');
    
    // 切换列显示状态
    cy.get('.t-table__column-setting-panel .t-checkbox').first().click();
    
    // 验证列隐藏
    cy.get('.t-table__header .t-table__cell').should('not.contain', '隐藏的列');
  });
});