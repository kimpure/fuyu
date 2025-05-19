local net = require('@lune/net')
local fs = require('@lune/fs')

return {
    ['/'] = function(request: net.ServeRequest)
        return {
            status = 200,
			headers = {
				["Content-Type"] = "text/html; charset=utf-8",
			},
			body = fs.readFile("packages/frontend/index.html"),
        }
    end,
    ['/build'] = function(request: net.ServeRequest)
        local contentType = 'text/html'

        if string.match(request.path, '.js') then
            contentType = 'application/javascript'
        end

        if string.match(request.path, '.css') then
            contentType = 'application/css'
        end

        return {
            status = 200,
			headers = {
				["Content-Type"] = `{contentType}; charset=utf-8`,
			},
			body = fs.readFile("packages/frontend/" .. request.path),
        }
    end
} :: { [string]: (request: net.ServeRequest) -> net.ServeResponse }
