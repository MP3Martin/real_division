runconsole_scripts = __BRYTHON__.parser._run_scripts
function check_all_old_brython()
{
    $("script[type='text/python']").attr("type","text/python/old")

};

function add_new_script(text)
{
    $(function () {
        $('<script>')
          .attr('type', 'text/python')
          .text(text)
          .appendTo('body');
      });
};

function remove_all_new_brython_scripts()
{
    $("script[type='text/python']").remove()
};

function uncheck_all_old_brython()
{
    $("script[type='text/python/old']").attr("type","text/python")
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function run_exec(code, options)
{
    check_all_old_brython();
    add_new_script(code);
    // __BRYTHON__.parse_options(options);
    if (!(__BRYTHON__.isWebWorker || __BRYTHON__.isNode)) {
        // _run_scripts()
        await sleep(0.001)
        runconsole_scripts({});
        await sleep(0.001)
    };
    
    remove_all_new_brython_scripts();
    uncheck_all_old_brython();
};