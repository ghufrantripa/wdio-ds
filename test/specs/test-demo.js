//test/saucedemo.test.js
describe('SauceDemo Test', () => {
    it('should successfully login', async () => {
        await browser.url('https://www.saucedemo.com');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('.submit-button').click();

        // Validate user berada di dashboard
        const title = await browser.getTitle();
        expect(title).toBe('Swag Labs');
    });

    it('should add item to cart and validate', async () => {
        await browser.url('https://www.saucedemo.com');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('.submit-button').click();

        // Tambah item ke cart
        await $('.inventory_item:first-child .btn_inventory').click();
        await $('.shopping_cart_link').click();

        // Validate item ada di cart
        const cartItems = await $$('.cart_item');
        expect(cartItems.length).toBeGreaterThan(0);
    });
});


// describe('Test Saucedemo', () => {
//     it('Test 1 - Login Success', async () => {
//         await browser.url('https://www.saucedemo.com')
        
//         const usernameTextbox = await browser.$('#user-name');
//         const passwordTextbox = await browser.$('password');
//         const loginButton = await browser.$('//input[@type="submit"  ');

//         await usernameTextbox.addValue("standard_user")
//         await passwordTextbox.addValue("secret_sauce")
//         await loginButton.click()

//     });

//     it('Test 2 - Login Login with wrong password', async () => {
//         await browser.url('https://www.saucedemo.com')
        
//         const usernameTextbox = await browser.$('#user-name');
//         const passwordTextbox = await browser.$('password');
//         const loginButton = await browser.$('//input[@type="submit"  ');

//         await usernameTextbox.addValue("standard_user")
//         await passwordTextbox.addValue("wrong_password")
//         await loginButton.click()

//         const errorMessage = await browser.$('//*[id="login_button_container"]/div/form/div[3]/h3')
//         await expect(errorMessage).toContain("Epic sadface: Username and password do not match any user in this service")

//     });
// });