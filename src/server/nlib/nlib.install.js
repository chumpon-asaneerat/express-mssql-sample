const install = async (pkg) => {
    let r = require;
    let cmd = `npm install ${pkg} --save`;
    console.log('execute:' + cmd);
    r('child_process').execSync(cmd);
    await setImmediate(() => { });
    await isInstalled(pkg);
}

const installDev = async (pkg) => {
    let r = require;
    let cmd = `npm install ${pkg} --save-dev`;
    console.log('execute:' + cmd);
    r('child_process').execSync(cmd);
    await setImmediate(() => { });
    await isInstalled(pkg);
}

const uninstall = async (pkg) => {
    let r = require;
    let cmd = `npm uninstall ${pkg} --save`;
    console.log('execute:' + cmd);
    r('child_process').execSync(cmd);
    await setImmediate(() => { });
    await isUninstalled(pkg);
}

const isInstalled = async (pkg) => {
    let r = require;
    try {
        o = r.resolve(pkg) 
        console.log(`"${pkg}" has been installed.`);
    }
    catch (err) {
        console.log(`"${pkg}" not found.`);
    }
}

const isUninstalled = async (pkg) => {
    let r = require;
    try {
        o = r.resolve(pkg) 
        console.log(`"${pkg}" cannot uninstalled completely.`);
    }
    catch (err) {
        console.log(`"${pkg}" has been uninstalled.`);
    }
}

(async () => {
    // Note: in some case when re-install package permission denined occur somtime.
    // try to close vscode and restart task again.

    //await install('express');
    //await install('mssql');
    //await installDev('gulp');

    //await uninstall('gulp');
    //await uninstall('mssql');
    //await uninstall('express');
})();
