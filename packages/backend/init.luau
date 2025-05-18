local net = require('@lune/net')
local api = require('@self/api')
local pages = require('@self/pages')

net.serve(8080, function(request)
    if pages[request.path] then
        return pages[request.path](request)
    end
    
    if api[request.path] then
        return api[request.path](request)
    end

    return {
        status = 404,
    }
end)
