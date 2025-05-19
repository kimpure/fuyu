local element = {}

local guiObjectElement = {}

export type GuiObjectElement = typeof(setmetatable({} :: {
    active: boolean,
    anchordPoint: {
        x: number,
        y: number,
    },
    backgroundColor: {
        r: number,
        g: number,
        b: number,
    },
    backgroundTransparency: number,
    borderColor: {
        r: number,
        g: number,
        b: number,
    },
    borderMode: string,
    borderSize: number,
    clipsDescendants: boolean,
    position: {
        x: {
            offset: number,
            scale: number,
        },
        y: {
            offset: number,
            scale: number,
        },
    },
    rotation: number,
    size: {
        x: {
            offset: number,
            scale: number,
        },
        y: {
            offset: number,
            scale: number,
        },
    },
    sizeConstraint: string,
    visible: boolean,
    zIndex: number,
}, guiObjectElement))

function guiObjectElement.create(guiObject: GuiObject): GuiObjectElement
    local self = {}

    self.active = guiObject.Active
    self.anchordPoint = { 
        x = guiObject.AnchorPoint.X,
        y = guiObject.AnchorPoint.Y,
    }
    self.backgroundColor = {
        r = guiObject.BackgroundColor3.R,
        g = guiObject.BackgroundColor3.G,
        b = guiObject.BackgroundColor3.B,
    }
    self.backgroundTransparency = guiObject.BackgroundTransparency
    self.borderColor = {
        r = guiObject.BorderColor3.R,
        g = guiObject.BorderColor3.G,
        b = guiObject.BorderColor3.B,
    }
    self.borderMode = guiObject.BorderMode.Name
    self.borderSize = guiObject.BorderSizePixel
    self.clipsDescendants = guiObject.ClipsDescendants
    self.position = {
        x = {
            offset = guiObject.Position.X.Offset,
            scale = guiObject.Position.X.Scale,
        },
        y = {
            offset = guiObject.Position.Y.Offset,
            scale = guiObject.Position.Y.Scale,
        },
    }
    self.rotation = self.rotation
    self.size = {
        x = {
            offset = guiObject.Size.X.Offset,
            scale = guiObject.Size.X.Scale,
        },
        y = {
            offset = guiObject.Size.Y.Offset,
            scale = guiObject.Size.Y.Scale,
        }
    }
    self.sizeConstraint = guiObject.SizeConstraint.Name
    self.visible = guiObject.Visible
    self.zIndex = guiObject.ZIndex

    return setmetatable(self, guiObjectElement)
end

local uiCornerElement = {}

export type UiCornerElement = {
    cornerRadius: {
        offset: number,
        scale: number,
    },
}

function uiCornerElement.create(uiCorner: UICorner): UiCornerElement
    local self = {
        cornerRadius = {
            offset = uiCorner.CornerRadius.Offset,
            scale = uiCorner.CornerRadius.Scale
        },
    }

    return self
end

element.guiObjectElement = guiObjectElement
element.uiCornerElement = uiCornerElement

return element
