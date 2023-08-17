const accountBalance = 10000
const ussd = prompt('Enter USSD code')
if (ussd == '*904#') {
    const menu = prompt(
        `
        Welcome to Zenith Bank
        1. Transfer
        2. Airtime
        3. Data
        4. Check balance
        `
    )

    // If chosen option == 1(Transfer)
    if (menu == '1') {
        const bankSelection = prompt(`
        Please select
            1. Zenith Bank
            2. Other banks
        `)
        if (bankSelection == '1') {
            prompt(`Enter account number
            
            `)
            prompt(`Enter amount`)
            const transferPIN = prompt(`Enter PIN`)
            if (transferPIN.length !== 4) {
                alert('Incorrect PIN')
            } else

                alert(`Transaction successfull`)
        }
        // If transfer is to other banks
        else if (bankSelection == '2') {
            const accountNumber = prompt(`Enter account number`)
            if (accountNumber !== '' && accountNumber.length !== 10) {
                alert('Invalid account number')
            } else {
                prompt(`
                1. Access Bank
                2. GT Bank
                3. Keystone Bank
                4. Sterling Bank
                `)
                const transferPIN = prompt(`
                Enter PIN
                `)
                if (transferPIN.length !== 4) {
                    alert('Incorrect PIN')
                }
                else {
                    alert('Transaction successfull')
                }
            }

        }
    }

    // If user chose Airtime
    else if (menu == '2') {
        const airtime = prompt(`
        Enter amount
        1. 100
        2. 200
        3.500
        4.1000
        `)
        if (airtime == '1' || airtime == '2' || airtime == '3' || airtime == '4') {
            const transferPIN = prompt(`
            Enter PIN
            `)
            if (transferPIN.length !== 4) {
                alert('Incorrect PIN')
            }
            else {
                alert('Transaction successfull')
            }

        }
    }
    // If user choose Data
    else if (menu == '3') {
        const dataPrompt = prompt(`
        Choose data plans
        1. 100MB
        2.200MB
        3. 1GB
        4. 2GB
`)
        // Confirm transaction before proceeding
        let confirmDataPurchase = prompt(`
        Are you sure of this transaction?
        1. Yes
        2. No
`);
        if (confirmDataPurchase == '1') {
            const transferPIN = prompt(`
    Enter PIN
    `)
            if (transferPIN.length !== 4) {
                alert('Incorrect PIN')
            }
            else {
                alert('Transaction successfull')
            }
        } else {
            alert('Transaction cancelled')
        }
    }

    //If user wants to check account balance
else if(menu == '4'){
    const checkAccountBalance = alert(
        `
        Your account balance is ${accountBalance}
        `
    )
}
}
