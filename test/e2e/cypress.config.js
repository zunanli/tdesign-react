const { defineConfig } = require('cypress');
const { spawn } = require('child_process');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:15000',
    specPattern: 'test/e2e/**/*.spec.js',
    supportFile: 'test/scripts/cypress/support/index.js',
    fixturesFolder: 'test/scripts/cypress/fixtures',
    videosFolder: 'test/e2e/cy-report/videos',
    screenshotsFolder: 'test/e2e/cy-report/screenshots',
    viewportWidth: 1600,
    viewportHeight: 800,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      // 自动启动开发服务器
      let devServer = null;
      
      on('before:run', async () => {
        console.log('🚀 检查开发服务器状态...');
        
        // 检查服务器是否已运行
        try {
          const response = await fetch('http://127.0.0.1:15000');
          if (response.ok) {
            console.log('✅ 开发服务器已在运行');
            return;
          }
        } catch (error) {
          console.log('🔍 开发服务器未运行，正在启动...');
        }
        
        // 启动开发服务器
        devServer = spawn('npm', ['run', 'dev'], {
          stdio: 'pipe',
          shell: true
        });
        
        // 等待服务器启动
        return new Promise((resolve) => {
          let serverReady = false;
          
          devServer.stdout.on('data', (data) => {
            const output = data.toString();
            console.log(`📦 ${output.trim()}`);
            
            if ((output.includes('Local:') || output.includes('127.0.0.1:15000')) && !serverReady) {
              serverReady = true;
              console.log('✅ 开发服务器已启动');
              resolve();
            }
          });
          
          // 超时处理
          setTimeout(() => {
            if (!serverReady) {
              console.log('⏰ 等待服务器启动超时，继续执行测试...');
              resolve();
            }
          }, 30000);
        });
      });
      
      on('after:run', () => {
        if (devServer) {
          console.log('🛑 关闭开发服务器...');
          devServer.kill();
        }
      });
      
      // 实现节点事件监听器
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'test/e2e/**/*.spec.js',
  },
});