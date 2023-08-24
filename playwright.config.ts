import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {


  timeout: 60000,
  testMatch :["tests/login.test.ts"],
  use:{
    baseURL: 'https://demoqa.com/',
    viewport: {width:1869, height:919},
    headless: false,
    screenshot: "only-on-failure", 
    video: "retain-on-failure", 
    launchOptions: {
      slowMo: 1000,
      args: ["--start-maximized"]
    }
  },

  retries: 0,
  reporter:[
    ["dot"], ["html", {
      open:"never"
    }]
  ]
}
 export default config;