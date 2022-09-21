/*
    Made by https://github.com/MP3Martin
    Can be used anywhere with optional credit
*/

window.jsRUNpy = {
    $utils: {
        tabWholeString: function(string) {
            tab = "    "
            mystring = string.replaceAll("\n", "\n" + tab)
            mystring = tab + mystring
            return mystring
        },

        setElementsAttribute: function(elements, attr) {
            try {
                for (el of elements) {
                    // console.log(el)
                    el.setAttribute(attr[0], attr[1])
                }
            } catch (e) {
                if (e.name == "TypeError") {
                    elements.setAttribute(attr[0], attr[1])
                }
            }
        },

        removeElements: function(elements) {
            try {
                for (el of elements) {
                    // console.log(el)
                    el.remove()
                }
            } catch (e) {
                if (e.name == "TypeError") {
                    elements.remove()
                }
            }
        },

        createDeferredPromise: function () {
            // Function made by https://stackoverflow.com/users/5776910/rico-kahler @ https://stackoverflow.com/a/47112177/10518428
            let resolve
            let reject
          
            const promise = new Promise((thisResolve, thisReject) => {
              resolve = thisResolve
              reject = thisReject
            })
          
            return Object.assign(promise, {resolve, reject})
        },

        delete_var: function(variable) {
            eval("delete " + variable)
        }

    },

    $runners: {
        warning: "PLEASE DO NOT TOUCH THIS"
    },

    $config: {
        br_config: {pythonpath: ["/lib/"], indexedDB: false}
    }
}

window.jsRUNpy.run = async function(code) {
    runconsole_scripts = __BRYTHON__.parser._run_scripts

    function check_all_old_brython() {
        jsRUNpy.$utils.setElementsAttribute(document.querySelectorAll("script[type='text/python']"), ["type", "text/python/old"])
    };

    function add_new_script(text) {
        newScript = document.createElement("script");
        newScript.setAttribute("type", "text/python")
        newScript.textContent = text
        document.body.appendChild(newScript);
    };

    function remove_all_new_brython_scripts() {
        jsRUNpy.$utils.removeElements(document.querySelectorAll("script[type='text/python']"))
    };

    function uncheck_all_old_brython() {
        jsRUNpy.$utils.setElementsAttribute(document.querySelectorAll("script[type='text/python/old']"), ["type","text/python"])
    };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    async function run_exec(code) {
        brython(jsRUNpy.$config.br_config);

        uniqueID = Date.now().toString()

        check_all_old_brython();

        // window.jsRUNpy.$runners["p" + uniqueID] = uniqueID
        window.jsRUNpy.$runners["p" + uniqueID] = jsRUNpy.$utils.createDeferredPromise()

        modifiedCode = jsRUNpy.$utils.tabWholeString(code)
        modifiedCode =
        `
        import sys
        from browser import window

        thisRunner = window.jsRUNpy["$runners"].p${uniqueID}

        def main():
        ${modifiedCode}
        try:
            L${uniqueID}L = main()
        except Exception as e:
            window.jsRUNpy["$utils"].delete_var("window.jsRUNpy['$runners']['p' + ${uniqueID}]")
            thisRunner.reject(f"{type(e).__name__}: {e}")
        else:
            window.jsRUNpy["$utils"].delete_var("window.jsRUNpy['$runners']['p' + ${uniqueID}]")
            thisRunner.resolve(L${uniqueID}L)`

        add_new_script(modifiedCode);

        if (!(__BRYTHON__.isWebWorker || __BRYTHON__.isNode)) {
            await sleep(0.001)
            await runconsole_scripts(jsRUNpy.$config.br_config);
            await sleep(0.001)
        };
        
        remove_all_new_brython_scripts();
        uncheck_all_old_brython();

        // return window.jsRUNpy.$runners["p" + uniqueID]
        return window.jsRUNpy.$runners["p" + uniqueID]
    };

    return await run_exec(code);
}