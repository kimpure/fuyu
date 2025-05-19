local net = require('@lune/net')
local api = require('@self/api')
local pages = require('@self/pages')

net.serve(8080, function(request)
    local pagePath = ''
    for k, _ in pages do
        if string.len(string.match(request.path, k) or '') > string.len(pagePath) then
            pagePath = string.match(request.path, k)
        end
    end
    
    if pagePath ~= '' then
        return pages[pagePath](request)
    end
    
    if api[request.path] then
        return api[request.path](request)
    end

    return {
        status = 404,
    }
end)
