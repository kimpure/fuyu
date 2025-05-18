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
    ['/build/element/guiObject.js'] = function(request: net.ServeRequest) 
        return {
            status = 200,
			headers = {
				["Content-Type"] = "application/javascript; charset=utf-8",
			},
			body = fs.readFile("packages/frontend/build/element/guiObject.js"),
        }
    end
}
