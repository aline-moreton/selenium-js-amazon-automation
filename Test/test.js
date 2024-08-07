import {Builder, By, Key} from 'selenium-webdriver';
import { should, expect } from 'chai';
should();
expect();

async function cadastrarUmaNovaConta() {

    let driver = await new Builder().forBrowser('chrome').build();

    // Dado que estou na pagina de login da Amazon
    await driver.get('https://www.amazon.es/-/pt/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.es%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=esflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');

    // Quando insiro meu email
    let loginInput = await driver.findElement(By.id('ap_email'));
    let loginButton = await driver.findElement(By.id('continue'));

    await loginInput.sendKeys('aline.cvs@hotmail.com');
    await loginButton.click();
    

    // E insiro minha senha
    let passwordInput = await driver.findElement(By.id('ap_password'));

    await passwordInput.sendKeys('Yn.x2?yFd$"_DDF');

    // E clico no botao Inicial Sessão
    let signInButton = await driver.findElement(By.id('signInSubmit'));
    await signInButton.click();

    // Então devo ser redirecionado para a página inicial da Amazon
    let urlTest = await driver.getCurrentUrl();

    expect(urlTest).to.equal('https://www.amazon.es/?ref_=nav_ya_signin');

    // E devo ver meu nome de usuário no canto superior direito
    let profileNameDiv = await driver.findElement(By.id('nav-link-accountList-nav-line-1'));
    let profileName = await profileNameDiv.getText();

    expect(profileName).to.equal('Olá Aline');

    // Fecha o chrome
    await driver.quit();
} 

cadastrarUmaNovaConta();