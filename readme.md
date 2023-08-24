##### Important Commands
npx playwright test
    Runs the end-to-end tests.

npx playwright test --ui
    Starts the interactive UI mode.

npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome. Chnage the browser according to the requirements.

npx playwright test filepath/filename
    Runs the tests in a specific file.

npx playwright test --debug
    Runs the tests in debug mode.

npx playwright codegen
    Auto generate tests with Codegen.

### To Generate Allure report run the following commands:
    npx playwright test --reporter=allure-playwright ----- run the testcases 
    allure generate ./allure-results/ --clean        ----- generate the allure report
    allure open ./allure-report                      ----- open the allure report on local-server

### Tutorial
    https://playwright.dev/docs/intro


### Report Generation: Need to add following code in playwright.config.ts file
     reporter: [["dot"], ["json", {
    outputFile: "jsonReports/report.json"
  }], ["html", {
    open: "always",
  }]]


### Add screesnhot and video , need to following code in playwright.config.ts file
    use:{
    screenshot: "only-on-failure",
    video: "on"
  }

### Run the test cases on browser not headless nor  plawright-interactive mode then add following settings in your playwright.config.ts file
    use:{
    headless:false
  }


### Docker
    For building image from Docker run below command, where path to Dockerfile must be provided after -f tag and name of the image must be provided after -t tag.
        docker build . -f Dockerfile -t playwrite-ts
    
    Once the image is generated we can run the image to spawn container and run scrips using below command. In Below Command "playContainer" is name of the container created using "playtest" image.
        docker run --name playContainer playwrite-ts

