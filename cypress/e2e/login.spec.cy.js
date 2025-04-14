import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe(' User Orange HRM Test', () => {


  it('login-Sucsess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })

  it('login-Fail', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})