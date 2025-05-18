local net = require('@lune/net')
local roblox = require('@lune/roblox')
local serde = require('@lune/serde')
local element = require('@self/element')

return {
    ['/api/rbxm/gui-object'] = function(request: net.ServeRequest)
        return {
            status = 200,
			headers = {
				["Content-Type"] = "multipart/form-data",
			},
			body = serde.encode('json', element.guiObjectElement.create(roblox.deserializeModel(request.body)[1] :: any)),
        }
    end,
}
