import * as fs from "fs";

export function versionUp(numberIndex: number, increment: number, path?: string) {
    fs.readFile(path || "./package.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const packageJson = JSON.parse(data);
        const version = packageJson.version;
        const versionArray = version.split(".");
        versionArray[numberIndex] = (parseInt(versionArray[numberIndex]) + increment).toString();
        packageJson.version = versionArray.join(".");

        fs.writeFile(path || "./package.json", JSON.stringify(packageJson, null, 4), (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });
}
